---
name: update-predictions-quiz
description: Use this when the user asks to update the F1 predictions quiz app for a new race (e.g. "update for the Monaco GP", "apply the Spanish GP results", "/update-predictions-quiz"). Walks through researching real 2026 race results, applying them to standings/scores/per-question data, and confirming with the user as you go.
---

# Updating the F1 Predictions Quiz for a New Race

This is a 2026 fantasy F1 league. After every race weekend the app is updated to reflect real-world 2026 F1 results. This skill is the playbook for that update.

## Operating principles

1. **Talk through changes before making them.** The user wants a narrative — research first, summarise findings, confirm tiebreaks / ambiguous calls, then edit.
2. **Use the real 2026 calendar order.** The order in [src/types/races.ts](../../../src/types/races.ts) is: Australia → China → Japan → Bahrain → Saudi Arabia → Miami → Canada → Monaco → Barcelona-Catalunya → Austria → Great Britain → Belgium → Hungary → Netherlands → Italy → Spain (Madrid) → Azerbaijan → Singapore → United States → Mexico City → São Paulo → Las Vegas → Qatar → Abu Dhabi.
3. **Sprint weekends** (8/7/6/5/4/3/2/1 points): China, Miami, Canada, Great Britain, Netherlands, Singapore. Sprint counts toward the drivers and constructors championships, but is tracked separately for `sprintStandings`.
4. **Cancelled races** still count as "the race has happened" for purposes of advancing `currentRace`. They contribute 0 pts and have a 0-lap impact. **Any player pick tied to a cancelled race scores 0 points** — there's no remaining opportunity for that pick to score, so it should be marked resolved-as-cancelled (not left as blank/pending). See per-question guidance:
   - **Q10**: set the slot's `pos` to `'X'` (matching the Q18 cancellation marker convention) and `pts` to `0`. The slot is locked in at 0.
   - **Q8**: the race's SC/VSC/red-flag counts stay at 0 (no race happened). Set the corresponding `text{N}` field to `'X'` to indicate the slot is resolved-as-cancelled rather than awaiting a future race.
   - **Q18**: same `'X'` marker if applicable — but moot for Bahrain/Saudi since nobody picked those for Q18.
   - The player's overall confirmed score should reflect 0 contribution from the cancelled pick (i.e. `c(0)` not `c()`).
5. **Look at the most recent race commit** (`git log --oneline` → e.g. `git show <hash>`) to see the exact change shape — this skill matches that pattern but the commit is the source of truth.

## Step 0 — Mindset: recompute, don't trust

Before you do anything else, internalise this:

**Do not assume that committed values from prior races are correct.** Past updates may have introduced bugs that survived because nobody recomputed from first principles. Every question that aggregates state across the season (Q5, Q6, Q7, Q9, Q11, Q14, Q19, Q20) must be **recomputed from scratch** against all races run so far — NOT updated as a delta on top of existing values.

Concrete examples of bugs caught by this rule during past validation:
- Q14 `mercedesStat1` was `'2'` when Russell had only 1 main-race P2/P3 finish — off by 1, baked in from an earlier race.
- Q6 kundan provisional was off by 3 — drift from a prior race update.

**If a recomputed value disagrees with the existing value, the existing value was wrong. Overwrite it and flag the discrepancy in your response.** Don't try to "preserve" stale values out of conservatism.

## Step 1 — Research the race

Required information, in order:

1. **Race classification (main race)**: position, driver, team, points scored, and **laps completed** for all classified runners; plus the lap count for each DNF.
2. **Sprint classification** (if a sprint weekend): same fields. DSQs and DNS too.
3. **Qualifying knockouts**: who got eliminated in Q1 (only Q1 matters for Q7). 🚨 **You MUST produce a complete numbered list of every Q1-eliminated driver, drawn verbatim from the official F1.com qualifying classification (the "Q1" elimination block, positions ~16–22 depending on the field).** Format as: `Q1 knockouts (Miami 2026): 1. <driver> (<team>) qualified P<N>, 2. <driver> ...`. There are typically 5–7 Q1 knockouts per session (depending on grid size and DSQs). Do not paraphrase or summarise — list every one. This is the most error-prone research point in the workflow because a Q1 list with one driver omitted will silently miss a `podiumDrivers` addition in Q7. After listing, **cross-check each name against the existing Q7 `podiumDrivers` array** to identify NEW additions vs already-present.
4. **Driver of the Day**.
5. **Weather / tyres**: did anyone use wet or intermediate tyres in the main race? (For Q18 — pure SCs and red flags do NOT count, only wet/inters.)
6. **Race incident counts (for Q8)** — only if at least one player picked this race in Q8: how many **safety cars (SC)**, **virtual safety cars (VSC)**, and **red flags** were deployed during the race. You (the AI) are responsible for finding these counts during research; the user does not provide them. Skip the research if no player picked the race in Q8.
7. **Sprint in-race pit-stop count (for Q13)** — ON EVERY SPRINT WEEKEND, research the number of pit stops made by drivers DURING the sprint race itself (not pre-race tyre changes). This is REQUIRED whether or not any player picked the race for Q13, because every sprint contributes to the season-end "most pit stops" bonus calculation. Sources: F1.com sprint report (look for mentions of drivers pitting during the sprint due to SC, damage, data gathering, or strategic stops). Sprints typically have 0–3 stops; SC-affected sprints can have many more.
8. **Updated drivers' and constructors' championship standings** (sanity-check totals).

Sources that work well:
- `formula1.com/en/results/2026/races/<id>/<slug>/race-result` (and `/sprint-results`, `/qualifying`)
- `formula1.com` race reports for incident detail
- Wikipedia for cancellations / unusual events

Use WebSearch first to find the canonical pages, then WebFetch for the structured data.

## Step 2 — Confirm ambiguities with the user

Before editing anything, ask via `AskUserQuestion` for any of these that are ambiguous:

- **Cancelled races** that intersect player picks (Q10 racepts, Q8 races, etc.).

### Tiebreak rule (CODIFIED — do not ask the user about this)

**Scope of this rule:** F1 countback applies ONLY to standings/championship rankings (Q1, Q3, Q5, Q11, Q19 — anywhere where the stat is a cumulative points total or a season-long count and you need to establish a ranking order in `data.ts`). **It does NOT apply to Q14 team-mate battle stats**, which compare two discrete scalar values (best finish, DNF count, P11 count, etc.) — for Q14 ties, see the Q14 section: `<team>Winner = null` and no badge is awarded.

For any tie on points (drivers championship, constructors championship, F1.5 standings, sprint standings, or any other ranking), apply **F1 countback** by finishing position:

1. **Most wins (P1)** — driver with more wins ranks higher.
2. If tied on wins, **most P2 finishes** — driver with more 2nd-place finishes ranks higher.
3. If tied on P2s, **most P3 finishes** — and so on through P4, P5, ..., until one driver is ahead.
4. For sprint standings: sprint positions count. For drivers championship: main race AND sprint positions count (both contribute to championship pts). For F1.5: same as drivers championship.
5. **If still perfectly tied through every finishing position both drivers have**, fall back to the most recent better result (i.e. who finished higher in the most recent race). If still tied after that, alphabetical by surname.

**Applying the rule in `data.ts`:** the standings arrays sort by `count` desc, then `priority` asc. After applying countback, set the lower `priority` number (1 = highest rank) on the driver who comes out ahead. Drivers tied on `count` AND `priority` will use array order as the final tiebreak.

**You will need per-driver finishing positions for ALL races so far** to apply this properly. Build a position table during research and use it for any tied drivers/teams.

## Step 3 — Files to edit

### A. [src/assets/data/config.ts](../../../src/assets/data/config.ts)
Single line: `export const currentRace: Race = Races.<slug>;` — bump to the just-finished race. Drives the "Correct as of" badge.

### B. [src/assets/data/data.ts](../../../src/assets/data/data.ts)

Five arrays — all of shape `{ driver/team, count, priority }`:

1. **`driversChampionshiop`** (sic — typo preserved). Add `sprintPts + racePts` to each driver's `count`. Tie-broken by `priority` (1 = highest). For ties, adjust priorities so the standings table sorts in the order you want. 

2. **`constructorsStandings`**. Sum of both drivers' new pts added to each team's `count`.

3. **`f15standings`** (F1.5 championship). Mirrors `driversChampionshiop` exactly, EXCEPT any driver whose team has won at least one **main race** (sprint wins don't count) gets zeroed out: `count: 0, priority: 999999`. Both drivers of a winning team get zeroed, regardless of which of them took the win.
   - Currently only Mercedes has main-race wins in 2026 → Russell and Antonelli are zeroed. When a new team wins a race UPDATE THIS ENTRY.
   - **If a new team wins a main race for the first time this weekend**, you must zero out BOTH of that team's drivers in `f15standings`. Their entries move to the bottom of the visual standings and they drop out of contention for Q19.
   - Sprint-only winners (e.g. McLaren winning a sprint without winning the main) stay in F1.5. Only main race wins matter.

4. **`lapCount`**: total laps completed all season.
   - Finishers on the **lead lap**: add full race distance (e.g. Miami = 57).
   - Finishers **1 lap down**: add (race distance − 1), e.g. 56.
   - Finishers **2 laps down**: add (race distance − 2), etc.
   - **DNFs**: add the exact lap count from the result (e.g. Hadjar DNF "4 laps" → +4).
   - **DNS**: add 0.
   - Sprint laps are NOT included in this counter — main race only.

5. **`sprintStandings`** (only on sprint weekends). Add sprint pts (8/7/6/5/4/3/2/1 for P1–P8). DSQs/DNS get 0.

### C. [src/assets/data/scores.ts](../../../src/assets/data/scores.ts)

Single source of truth for all 20 questions' player scores. Update only the questions that are affected by this race — see the per-question guide below.

#### Data model

```ts
export interface QuestionScore {
  provisional: number;       // current "in-flight" score — could still change
  confirmed: number | null;  // locked-in score; null = nothing has been confirmed yet
}

export type QuestionPlayerScores = Record<PlayerKey, QuestionScore>;
```

- **`provisional`** = points the player has *tentatively* gained or lost but that could still flip (e.g. a podium prediction that hasn't happened *yet*).
- **`confirmed`** = points locked in for whichever parts of the question have been resolved. **`confirmed` is cumulative across the season** — it can keep growing (or shrinking) as more parts of the same question are resolved. A single race can add both positive and negative contributions to `confirmed` for the same question.
  - Example: in Q6, race 1 might add +5 (a picked driver finally podiumed) and simultaneously add −3 (a podium driver the player didn't pick — locked-in miss). Both updates collapse into the single `confirmed` integer.
  - Example: in Q17, every time a True/False statement resolves, +5 or −3 is layered onto `confirmed`. After 5 resolutions, `confirmed` reflects the sum of all 5.
  - **A previously-positive `confirmed` can go negative later** if subsequent updates carry more negative weight. That's expected.
- `confirmed: null` is rendered differently in the UI (the cell shows as "not yet decided" / negative-styled in some templates) than `confirmed: 0`. **Use `null` when nothing has resolved yet, `0` when something has resolved net-zero.** Once any part of the question has been resolved (even if at zero), switch from `null` to `0`.
- Total score for a player on a question = `provisional + (confirmed ?? 0)`. Both fields are signed integers and they sum.

#### Shorthand helpers (defined at the top of `scores.ts`)

| Call | Returns | When to use |
|---|---|---|
| `s(prov, conf)` | `{ provisional: prov, confirmed: conf }` | The general form. First arg is provisional, second is confirmed. |
| `s(prov)` | `{ provisional: prov, confirmed: null }` | Provisional-only — confirmed defaults to `null`. Use when the question is still in flight. |
| `s()` | `{ provisional: 0, confirmed: null }` | Empty / zero state for a player with no movement yet. |
| `c(conf)` | `{ provisional: 0, confirmed: conf }` | Confirmed-only — provisional is 0. Use for questions that resolve race-by-race (Q4, Q8, Q9, Q10, Q15, Q16). |
| `z()` | All 7 players set to `s()` | "Reset" helper for a whole question. Used for Q13, Q16, Q18 etc. that haven't activated yet. |

**Argument order on `s` is provisional FIRST, confirmed SECOND.** `s(-9, 30)` means provisional=−9, confirmed=+30. Don't transpose them.

#### Summation rules (Q6 / Q7 in particular)

For questions where both positive and negative outcomes can be confirmed at the same time (a driver picked who *did* podium = +5 confirmed; a podium driver the player *didn't* pick = −3 confirmed), **they sum into a single `confirmed` value**. The data model has only one signed integer per field.

Worked example (Q7, koli post-Miami):
- 3 correct picks (in the Q1-elim list) × +5 = **+15**
- 7 missed (Q1-elim drivers not picked) × −3 = **−21**
- → `confirmed = 15 + (−21) = −6`
- 5 wrong picks (not yet Q1-knocked) × −3 = **−15** provisional
- → final entry: `koli: s(-15, -6)`

The confirmed component can be net negative — that's expected and renders fine in the UI.

#### Mental model for editing

1. Identify which questions are affected by this race (see Step 4 per-question reference).
2. For each affected question, **recompute every player's score from scratch** by re-tallying their picks against the current state of the world. Don't apply deltas — drift compounds.
3. Print a table to the user (`Player | correct | missed | wrong | confirmed | provisional`) so they can spot-check before you write.
4. Write the `s(prov, conf)` / `c(conf)` entries.

### D. Per-question components

The per-question components hold race-specific state that scores.ts can't express:

- **Q6**: `podiumDrivers` array — add any new podium finishers from this race.
- **Q7**: `podiumDrivers` array (misnomer — these are Q1-eliminated drivers) — add any new Q1 knockouts.
- **Q9**: each player's `dnfs` / `doubleDnfs` arrays — add the race if their picked team had DNF(s). **MANDATORY cross-check every race** — see Q9 detail. Don't skip just because no DNFs jumped out.
- **Q10**: each player has 5 `race{N}pos` / `race{N}pts` fields. The 5 slots are **fixed-bound to drivers in this order: race1=Albon, race2=Hulkenberg, race3=Perez, race4=Hadjar, race5=Lawson** — see Q10 detail for the full mapping and verification checklist. If a player's `race{N}` matches the race that just happened, fill `pos`/`pts` with the **slot-driver's** main-race result (NOT the race winner's, NOT the player's overall pick).
- **Q12**: `sprintRaces` array. Set the row for this race's sprint+main winners. Only applicable on sprint weekends.
- **Q14**: `results` object — stats for each team-mate battle. Recompute each team's stat1, stat2, and `*Winner` based on the new race (see Q14 detail below).
- **Q15**: `points1` / `points2` / `points3` per player — only relevant for the Australian GP weekend (already done).
- **Q16**: same shape — Abu Dhabi only.
- **Q17**: `statements[].confirmed` — flip to `true` if the statement is provably decided.
- **Q18**: `interRaces` / `wetRaces` arrays + each player's `raceText{N}` fields. Only set if the main race had wet or intermediate tyres in play. `'X'` is the standard marker.

## Step 4 — Per-question reference

### Q1 — World Champion
**Pick:** one driver. **Scoring:** based on the picked driver's current position in the drivers championship.
- P1 = 10, P2 = 5, P3 = 1, P4+ = 0.
- Only `provisional`. Confirmed at year-end or when no more points are available in the season for a driver to change positions.

### Q2 — Constructors 6th
**Pick:** one team. **Scoring:** based on team's position in the constructors standings.
- Exact P6 = 10, 1 away = 5 (P5 and P7), 2 away = 1 (P4 and P8), further = 0.
- Only `provisional`. Confirmed at year-end or when no more points are available in the season for a team to change positions.

⚠️ **Recompute every player's Q2 score every race** — not just when their team's pts change, but when ANY team's position in the standings changes (including via tie resolution). If two teams swap rank due to one overtaking the other in pts, the relative distance to P6 changes for both pickers. Concrete failure case during Miami update: Williams overtook Audi (both had 2 pts pre-Miami, Audi ranked higher; post-Miami Williams=5, Audi=2 → Williams now ranks higher). Anna and koli (Williams pickers) moved from P9 → P8, gaining 1 pt each. Omar (Audi picker) moved from P8 → P9, losing 1 pt.

### Q3 — Drivers 4th
**Pick:** one driver. **Scoring:** based on driver's position in drivers championship.
- Exact P4 = 10, 1 away (P3 or P5) = 5, 2 away (P2 or P6) = 1, further = 0.
- Only `provisional`. Confirmed at year-end or when no more points are available in the season for a driver to change positions.

⚠️ Same rule as Q2 — **recompute every player's Q3 score every race**, including when standings positions shift due to tie resolution (e.g. one driver overtaking another by sprint win in a tiebreak).

### Q4 — Most DOTD awards (Fan Favourite)
**Pick:** one driver. **Scoring:** 3 pts per DOTD award their driver wins.
- Also update the `races` array on the player's answer object to record which races their driver won DOTD in (used for the icon display).
- Confirmed-only (`c()`). It accumulates as the season progresses.

### Q5 — Most laps raced
**Pick:** one driver. **Scoring:** based on driver's position in `lapCount` array (which sorts by count desc, tiebreak by array order).
- F1 points scale: P1 = 25, P2 = 18, P3 = 15, P4 = 12, P5 = 10, P6 = 8, P7 = 6, P8 = 4, P9 = 2, P10 = 1, P11+ = 0.
- Only `provisional`. Confirmed at season end.

### Q6 — Every Podium driver
**Pick:** a set of drivers who will get on the podium at least once during the season.

**Scoring (strict — always recompute from scratch each race):**

For each player, classify every driver in the full grid:
| Picked? | In `podiumDrivers`? | Effect |
|---|---|---|
| ✓ | ✓ | **+5 confirmed** |
| ✓ | ✗ | **−3 provisional** (could still podium) |
| ✗ | ✓ | **−3 confirmed** (you missed it) |
| ✗ | ✗ | no impact |

Then:
- `confirmed` = 5 × (correct picks) − 3 × (podium drivers the player did NOT pick)
- `provisional` = −3 × (player's picks that are NOT yet podium drivers)

**Always recompute from scratch** for every player, every race. Don't apply deltas — drift accumulates fast across multiple races.

Verify with a quick table in the response before writing values, so the user can spot-check.

### Q7 — Every Q1 elimination
**Pick:** a set of drivers who will be eliminated in Q1 at least once.

🚨 **MANDATORY RESEARCH CHECKLIST FOR Q7 — DO THIS EVERY RACE:**

Q7 is the single most-error-prone question because it depends on getting the full Q1 knockout list correct. Past agent failures: missed adding Lindblad to the list because the agent assumed only one "new" driver was knocked out when in fact two were.

**Procedure:**

1. Open the F1.com **qualifying** page (NOT race results, NOT sprint qualifying) for the just-finished GP: `formula1.com/en/results/2026/races/<id>/<slug>/qualifying`. Sprint qualifying does NOT count — only main race qualifying.
2. Identify the Q1 block (the bottom 5–7 positions in qualifying classification — drivers who didn't advance to Q2).
3. **Write out the full numbered list verbatim** in your narration: `Q1 knockouts at <race>: 1. <driver> (<team>) P<N>, 2. <driver> ...`. Include EVERY driver in Q1 — typically 5, sometimes more if grid has DSQs or special cases.
4. Read the current Q7 component's `podiumDrivers` array.
5. For each driver in step 3, mark them as either **already present** in the array or **new**.
6. ALL **new** drivers must be appended to `podiumDrivers` — not just one, not just the most prominent, ALL of them.
7. Then proceed with scoring.

**Common Q7 research traps:**
- Assuming "only 1 new driver" without verifying — there can be 0, 1, 2, or more new entries depending on which drivers had previously been knocked out.
- Reading the sprint qualifying page instead of the main qualifying page (sprint quali is a different session and does NOT count for Q7).
- A driver classified P16+ for the race may actually have set their fastest time in Q2 (and been knocked out there); Q1 = positions filled by the LAST timed lap of Q1 specifically. Use the official Q1 block list, not just grid positions.

**🚨 DSQ-from-qualifying rule (codified):** A driver who set a valid Q1 time AND advanced to Q2 (or higher) but was subsequently disqualified post-session for a technical infringement IS NOT counted as Q1-eliminated. Only drivers eliminated **during the Q1 session itself** count. The "as-the-flag-fell" Q1 elimination list is the authoritative source, NOT the post-DSQ grid order.

Concrete example: at Miami 2026, Isack Hadjar set his fastest in Q2 and qualified P9 on track, then was DSQ'd post-session for a floor infringement (started from pit lane). He is NOT a Q1 elimination — he progressed past Q1. Do not add him to Q7's `podiumDrivers`.

(The opposite case — a driver penalised DURING Q1 such that their best Q1 time is deleted and they fall into the Q1 elimination zone — does count, because they were eliminated in Q1.)

**Scoring (strict — always recompute from scratch each race):** identical shape to Q6 but applied to the Q7 component's `podiumDrivers` array (misnomer — it actually holds the drivers who've been Q1-eliminated this season).

| Picked? | In Q7 `podiumDrivers`? | Effect |
|---|---|---|
| ✓ | ✓ | **+5 confirmed** |
| ✓ | ✗ | **−3 provisional** |
| ✗ | ✓ | **−3 confirmed** |
| ✗ | ✗ | no impact |

- `confirmed` = 5 × (correct picks) − 3 × (Q1-knocked drivers the player did NOT pick)
- `provisional` = −3 × (picks not yet Q1-knocked)

**Duplicate picks count once.** Some players accidentally listed the same driver twice (e.g. omar has Stroll twice in Q7) — dedupe before counting.

**Always recompute from scratch.** Print a table per player (correct / missed / wrong → confirmed / provisional) in the response before writing, so the user can verify.

### Q8 — Most chaotic race weekends
**Pick:** each player picks 2 race weekends. **Scoring:** based on the SC/VSC/red-flag tallies for each picked race.

Per-player fields in the Q8 component:
- `race1` / `race2` — the two race picks.
- `red1` / `sc1` / `vsc1` — counts for race1 of red flags, safety cars, and virtual safety cars during the main race.
- `red2` / `sc2` / `vsc2` — same for race2.
- `text1` / `text2` — display label (e.g. `"+15"` shows a confirmed contribution).

**The AI populates these counts during research.** When updating for a new race:

1. Check if any player has the just-finished race in their Q8 `race1` or `race2`. If not, **skip Q8 entirely** — no need to research incident counts.
2. If at least one player picked the race: use WebSearch / WebFetch to count, for the **main race only** (not sprint):
   - Number of **red flags** raised
   - Number of **full safety cars (SC)** deployed
   - Number of **virtual safety cars (VSC)** deployed
3. **Only write into the slot that matches the player's pick.** If the race is the player's `race1`, update `red1` / `sc1` / `vsc1` only. If it's their `race2`, update `red2` / `sc2` / `vsc2` only. Never touch the other slot — that race may not have happened yet.
4. Players who did NOT pick this race in either slot: leave Q8 untouched.
5. Update each affected player's confirmed score in `scores.ts` accordingly. Confirmed-only (`c()`).

Sources: race reports on formula1.com, motorsport.com, or the-race.com usually list every SC/VSC/red flag explicitly.

### Q9 — Team with least DNFs
**Pick:** one team. **Scoring:** −5 per single DNF, −15 per double DNF (both cars of the team out in the same race).

🚨 **MANDATORY CROSS-CHECK — do this every race, even if no obvious "Q9 trigger" jumped out at you.** This question was missed entirely during the Miami validation because the agent didn't realise an Alpine DNF (Gasly) impacted michael's pick. Run this checklist:

**Step 1: Build a list of every DNF in the main race.** From your research, list `driver → team` for every DNF. Example Miami: Hulkenberg→Audi, Lawson→Racing Bulls, Gasly→Alpine, Hadjar→Red Bull.

**Step 2: For each of the 7 players, look up their Q9 team pick** (read [question-9.component.ts](../../../src/app/question-9/question-9.component.ts) `answers` array).

**Step 3: Cross-reference each pick against the DNF list.** Build a table:

| Player | Team picked | Did picked team have DNFs this race? | Single or double? |
|---|---|---|---|
| kundan | Ferrari | (yes/no) | … |
| anna | Mercedes | … | … |
| … | … | … | … |

**Step 4: For each player whose picked team had a DNF, update both the component AND scores.ts:**

- **Exactly one driver of the picked team DNFs** → push the race onto `dnfs` ONLY. Do **not** also add it to `doubleDnfs`.
- **Both drivers of the picked team DNF in the same race** → push the race onto `doubleDnfs` ONLY. Do **not** also add it to `dnfs`. The double DNF replaces (does not stack with) the single DNF entry.
- **Neither driver DNFs** → leave both arrays untouched.

Then recompute the player's confirmed score in `scores.ts`:
- `confirmed = (−5 × dnfs.length) + (−15 × doubleDnfs.length)`

Confirmed-only (`c()`). Once `dnfs` or `doubleDnfs` has any entry, switch the `c()` from `c(0)`-equivalent to the computed negative number.

**Do NOT skip Q9 just because the race "didn't feel chaotic" or because no DNFs jumped out at you in the headline summary.** The race report usually lists DNFs in a separate section; always check it explicitly.

### Q10 — Driver race point picks

🚨 **READ THIS MAPPING BEFORE TOUCHING Q10 — IT IS THE #1 MISTAKE SOURCE.**

Q10 has 5 `race{N}` slots per player. Each slot is **bound to a specific driver** (the same driver for every player). The slot index → driver mapping is:

| Slot | Driver |
|------|--------|
| **race1** | **Albon** |
| **race2** | **Hulkenberg** |
| **race3** | **Perez** |
| **race4** | **Hadjar** |
| **race5** | **Lawson** |

This means: `anna.race5 = Races.miami` does NOT mean "anna's 5th pick is Miami". It means **"anna picked Miami as the race where Lawson will score points"**. The score she gets for that slot is **Lawson's Miami main-race result**, NOT Albon's, NOT the player's 5th-favourite-driver's, NOT Miami's headline result.

**The Miami validation run caught an agent that wrote `'10th' / 1pt` for `anna.race5pos/pts` when Miami happened. That was Albon's Miami result, not Lawson's. The correct value was `'DNF' / 0pts` because Lawson DNF'd at Miami.** Don't make this mistake.

**Pick:** for each of 5 drivers (Albon, Hulkenberg, Perez, Hadjar, Lawson, in that exact order), a race the player thinks they'll score points in.

**Scoring rule:** sum of F1 **main-race** points earned across all 5 picks (sprint points do NOT count, only main-race finishing position points). Confirmed-only `c()`.

**Workflow when a race happens:**

For each of the 7 players, work through their 5 slots in order. For slot N, the driver is fixed (per the table above). Check: does the player's `race{N}` field equal the race that just happened?

- **No** → skip this slot, leave it untouched.
- **Yes** → fill in `race{N}pos` and `race{N}pts` with **slot-driver's MAIN RACE result** (not sprint, not headline race winner — the specific driver bound to that slot, finishing position in the main race):
  - Use the main-race finishing position string (e.g. `'9th'`, `'10th'`, `'DNF'`, `'DNS'`).
  - Use F1 main-race points (25/18/15/12/10/8/6/4/2/1 for P1–P10, 0 otherwise, 0 for DNF/DNS).

**Verification checklist before writing each value (do this for every slot you update):**

1. State out loud (in your narration): "Player X's race{N} is bound to driver Y. The race they picked is Z. Y's main-race result in Z was P / Q pts."
2. Cross-check: did that driver actually race in Z? Did they finish? What position?
3. Only then write the value.

After updating component fields, recompute each affected player's total Q10 score and update `scores.ts`:
- `c(sum of race1pts + race2pts + race3pts + race4pts + race5pts)` for each player.

⚠️ **Common error patterns to avoid:**
- Confusing slot index with driver index reversed (slot 5 ≠ Albon).
- Using the race winner's points instead of the slot-driver's points.
- Using sprint points instead of main-race points.
- Forgetting to update `scores.ts` after updating the component fields (the two MUST agree).

### Q11 — Sprint World Champion
**Pick:** one driver. **Scoring:** based on driver's position in `sprintStandings`.
- F1 points scale (25/18/15/12/10/8/6/4/2/1).
- Only `provisional` until either (a) all 6 sprints of the season are complete, or (b) the leader is mathematically uncatchable — i.e. their lead exceeds `8 × (remaining sprints)`. At that point flip the leader's pickers to `confirmed` at 25 pts and lock in the rest of the field by their final sprint-standings positions.

### Q12 — Sprint/main race same winner count
**Pick:** a number (0–6, since there are 6 sprint rounds). **Scoring:** points based on closeness to the actual `sameWinnerCount`.
- 10 pts for exact match, 5 pts for ±1, 1 pt for ±2.
- After each sprint, update the `sprintRaces` row in the Q12 component.
- Provisional now; could become confirmed at season end.

### Q13 — Most pit-stops in a sprint race
**Pick:** each player picks one sprint race. Each answer has a `pitCount` field.

**Scoring:** `5 pts per pit stop` (provisional, applies per pit stop in the player's picked sprint) + `+10 bonus` for the race that ends up with the most pit stops across the 6 sprints (resolved at season end).

🚨 **MANDATORY EVERY SPRINT WEEKEND — DO NOT LEAVE Q13 AT `z()` ONCE A SPRINT HAS HAPPENED.** Past commits (China update, Miami update) left Q13 at `z()` even though sprints with pit stops occurred, which compounded into a missing scoring state. Don't perpetuate this — activate Q13 the moment the first sprint of the season runs.

**Workflow on every sprint weekend:**

1. **Research the sprint's in-race pit-stop count** (separate from the main race; sprint stops are usually visible in F1.com sprint reports — look for mentions of drivers pitting due to SC, damage, data gathering, or strategic compound swaps). Count drivers who made an in-race stop (not pre-race tyre choices). A dry sprint with no SC typically has 0–2 stops; a sprint with an SC can have many more (entire field pitting under SC counts each one).
2. **For each of the 7 players, check their `race` pick.** If it matches the just-finished sprint, update their `pitCount` field to the researched count.
3. **Recompute scores.ts Q13** for every player:
   - If their picked sprint has happened: `provisional = 5 × pitCount`.
   - If their picked sprint hasn't happened: `provisional = 0` (s()).
   - `confirmed` stays `null` until season-end (the +10 bonus is resolved then).
4. **Even if NO player picked this sprint**, you should still record the pit-stop count somewhere (e.g. in the response narration) so that the season-end "+10 most pit stops" bonus can be calculated against all 6 sprints. (The component doesn't currently store per-race counts for un-picked races, so just keep it in your narration / commit message.)

**Common Q13 traps:**
- Skipping the question because it "looks dormant" (z()) — that's a stale state, not an indicator that the question hasn't activated.
- Counting pre-race tyre changes (e.g. drivers starting on intermediates and swapping early) as in-race pit stops. These ARE pit stops if they happen after lights out; just don't conflate with the formation-lap or pre-race grid choices.
- Forgetting to set `pitCount` on multiple players who picked the same sprint — every player who picked that sprint gets the same `pitCount`.

### Q14 — Team mate battles
Each team has a specific question. The `results` object holds two stats and a `winner` flag per team. The +5 badge is awarded to the driver(s) in `*Winner` slots.

**🏁 Sprint-counting rule:**
- Questions about **championship points** (the "points" stat in the drivers' standings) → **include sprint** (sprint points are part of the championship total by definition). Red Bull and Williams fall here.
- Questions about **sprint specifically** → sprint only. Audi falls here.
- All other questions (race wins, podium finishes, DNFs, race-finish positions, laps completed, P11 finishes, qualifying H2H) → **main race only, sprint does NOT count**.

| Team | Question | stat1 | stat2 | What counts |
|------|----------|-------|-------|---|
| Mercedes | Most 2nd and 3rd place finishes | Russell's 2nd/3rd count | Antonelli's 2nd/3rd count | Main race only |
| Ferrari | Most DNFs | Hamilton's DNF count | Leclerc's DNF count | Main race only |
| Red Bull | Will Verstappen score ≥ 2× Hadjar's points | Verstappen **championship pts** | Hadjar **championship pts** + percentage of Verstappen | **Championship (includes sprint)** |
| McLaren | Who will win more races | Norris main-race wins | Piastri main-race wins | Main race only |
| Haas | Who finishes in points in most main races | Bearman in-points count | Ocon in-points count | Main race only |
| Racing Bulls | Who completes most racing laps | Lawson main-race laps | Lindblad main-race laps | Main race only |
| Aston Martin | Who finishes 11th more times | Alonso P11 count | Stroll P11 count | Main race only |
| Williams | Which driver scores more points | Sainz **championship pts** | Albon **championship pts** | **Championship (includes sprint)** |
| Cadillac | Who wins the qualifying H2H | Perez quali wins | Bottas quali wins | Main-race qualifying only |
| Alpine | Who has the highest race finish | Gasly best main-race finish | Colapinto best main-race finish | Main race only |
| Audi | Who scores more sprint points | Hulkenberg sprint pts | Bortoleto sprint pts | **Sprint only** |

**Heuristic:** if the question asks about "points" in a championship sense, use the drivers-championship total (which is what's in `driversChampionshiop`'s `count` field — that already includes sprint). If the question asks about anything else (wins, finishes, DNFs, laps, qualifying), it's main race only.

🚨 **Q14 TIEBREAK RULE — DIFFERENT FROM THE GLOBAL TIEBREAK RULE.** The codified F1 countback tiebreak in Step 2 applies ONLY to standings rankings (Q1/Q3/Q5/Q11/Q19) — i.e. where the stat itself is a cumulative point total. For Q14, the stats are **discrete scalar values** (best finish position, in-points count, DNF count, lap count, P11 count, quali wins, sprint pts). When stat1 == stat2 for a team, `<team>Winner` MUST be `null` — DO NOT apply F1 countback or any secondary tiebreak. Both drivers display equally, no +5 badge for anyone.

Concrete examples:
- Alpine: Gasly's best finish P6, Colapinto's best finish P6 → `alpineWinner: null` (even though Gasly has more total scoring finishes overall — that's not part of the question).
- Mercedes: both Russell and Antonelli have 1 P2/P3 finish each → `mercedesWinner: null`.
- Audi: both Hulkenberg and Bortoleto have 0 sprint pts → `audiWinner: null`.

The question is exactly what the title says — "Who has the most X" — and if they're tied on X, nobody wins, regardless of who would win a hypothetical secondary comparison.

⚠️ **AUDIT EXISTING VALUES — don't trust the pre-race state.** Past updates may have introduced bugs that survived because nobody recomputed from first principles. During the Miami validation, the agent caught that `mercedesStat1` was `'2'` pre-Miami when it should have been `'1'` (Russell only had one main-race P2/P3 finish across Aus/China/Japan, not two). The error had been baked in from a prior race update.

**Procedure: for every team, recompute stat1 and stat2 strictly from the rule in the table below, against actual race results across the whole season so far. Compare to the existing values. If they don't match, the existing value was wrong — overwrite it.** Note any pre-existing bugs in your response so the user can decide whether to also amend earlier commits.

After each race:
- Recompute every team's stat1/stat2 **from scratch using all races run so far, including the new race**.
- Set `<team>Winner` to the leading driver. **If stat1 == stat2 (discrete tie), set `<team>Winner: null`.** Do not apply F1 countback to Q14 stats.
- Each `+5` badge contributes to that player's Q14 provisional score (5 pts per team they got right). The scores.ts entry is the SUM of +5 badges currently awarded across all teams for each player.

⚠️ **CRITICAL: every time ANY `<team>Winner` flips (changes driver OR goes to/from null), recompute every player's Q14 total in `scores.ts` from scratch.** Do not assume a player's Q14 total is unchanged just because their picks haven't changed — the winners can change underneath them. Concrete failure case during the Miami update: Racing Bulls winner flipped Lawson→Lindblad and Cadillac winner flipped Perez→null; players who had Lawson/Perez lost badges and players who had Lindblad gained one, but the Q14 totals weren't recomputed and stayed at pre-Miami values.

**Q14 recompute procedure (do this every race):**
1. For each player, walk through all 11 teams.
2. For each team, check: does the player's pick equal the current `<team>Winner`? If yes → +5.
3. Sum across all 11 teams → that's the player's Q14 provisional score.
4. Verify the total matches what's in `scores.ts` and update if not.

### Q15 — Australian GP podium
Confirmed at Aus weekend (already done). No further changes unless results are amended.

### Q16 — Abu Dhabi GP podium
Activates at final round only.

### Q17 — True or False (5 statements)
**Pick:** True/False for 5 statements per player. **Scoring:** 5 pts per correct pick on a *confirmed* statement; provisional contribution while still unresolved.

**Statement state model:**
- `statement` — the prose claim.
- `answer: boolean` — what the truth currently looks like *right now* in the real world.
- `confirmed: boolean` — whether the `answer` is locked in (true) or could still flip (false).

**Every race weekend, the AI must research and re-check the real-world status of EVERY statement, not just react to obvious triggers.** This is part of the research step. For each of the 5 statements:

1. **Determine the current real-world `answer` (true/false).** What does the world look like right now?
2. **Determine whether that `answer` is `confirmed`.** A statement is confirmed when it can no longer flip:
   - If the answer is currently TRUE and the event has happened, it's confirmed true (e.g. Alonso publicly announces retirement → confirmed: true).
   - If the answer is currently FALSE because the event hasn't happened yet AND the deadline has passed (e.g. "by end of season" and the season is over), it's confirmed false.
   - If the answer is currently FALSE and the event could still happen (e.g. Horner hasn't joined another team *yet*, but the season is ongoing), it stays `confirmed: false` — the answer is "false now" but the statement is unresolved.
   - Some statements only resolve at season end (e.g. "Audi scores more than Cadillac in 2026", "Drivers Championship decided at final race") — keep `confirmed: false` until the final race.
3. **Update `statements[i].answer` and `statements[i].confirmed` in [question-17.component.ts](../../../src/app/question-17/question-17.component.ts) to reflect current reality.**

**Then recompute every player's Q17 score from scratch (no deltas):**

For each player, classify each of their 5 picks against the current statement state:
| Pick vs `answer` | `confirmed`? | Contribution |
|---|---|---|
| matches | true | **+5 confirmed** |
| does not match | true | **−3 confirmed** (locked-in wrong) |
| matches | false | **+3 provisional** (currently correct, could flip) |
| does not match | false | **−3 provisional** (currently wrong, could flip) |

Then:
- `confirmed` = (5 × correct confirmed picks) + (−3 × wrong confirmed picks). Use `null` if no statement is confirmed yet.
- `provisional` = (3 × correct unconfirmed picks) + (−3 × wrong unconfirmed picks).

⚠️ The exact provisional weighting may differ in the user's existing values — if numbers don't match, print your tally and ask before overwriting.

**Order of operations each weekend:** research statements → update answer/confirmed in the component → recompute all 7 players' scores → write to `scores.ts`.

### Q18 — Wet races
**Pick:** 3 races where the player thinks wet/inter tyres will appear in the main race. **Scoring:** 5 pts per correct pick when confirmed (only main race, not sprint).

**Trigger condition (AI must research this):** if **any driver** put on intermediate or wet tyres for **even a single lap** of the main race, the race counts. It does not need to be the whole field, it does not need to be for any minimum number of laps — one driver, one lap on inters or wets is enough.

**Workflow each weekend:**
1. As part of research, check the tyre-strategy report for the just-finished main race (formula1.com strategy report, pirelli.com, the-race.com). Look for any mention of "intermediates", "inters", "wets", or "wet tyres" being fitted.
2. If yes:
   - Add the race to `wetRaces` (if anyone used wets) and/or `interRaces` (if anyone used inters) arrays in the Q18 component.
   - For every player whose Q18 pick includes this race, set the matching `raceText{N}` field to `'X'`.
   - Recompute each affected player's score: `confirmed` += 5 per newly-flipped pick.
3. If no driver used inters/wets in the main race, leave Q18 alone.

**Things that do NOT trigger this question:** SCs, VSCs, red flags, rain that fell but didn't lead to a tyre change, drying conditions where everyone stays on slicks. Only an actual tyre swap to wet or intermediate compound counts.

### Q19 — F1.5 Champion
**Pick:** one driver who is NOT from a team that has won a main race this season. **Scoring:** based on position in `f15standings`.
- F1 points scale (25/18/15/12/10/8/6/4/2/1).
- Only `provisional`.
- If a player's pick is on a team that just won its first main race this weekend, the pick is effectively eliminated — they drop to 0 pts because their driver moves to `count: 0, priority: 999999`.

### Q20 — Grand Slam gamble
**Pick:** each player bets yes/no on whether any driver will achieve a **Grand Slam** in any race during the season. Big penalty for picking yes if it never happens (e.g. `-40`); big reward if it does.

**Definition of a Grand Slam (this league's interpretation — match exactly):**
A single driver must achieve ALL of the following in the same race weekend:
1. **First (fastest) in every qualifying session** — Q1, Q2, AND Q3 (i.e. topped all three knock-out segments, not just pole).
2. **First in the race** (race winner).
3. **Fastest lap** of the race.

(If a sprint weekend, the sprint sessions are NOT part of the grand-slam criteria — main-race qualifying and main race only.)

**Workflow each weekend (AI is responsible):**
1. During research, check the **qualifying classification by session** for the just-finished GP. Identify who topped Q1, who topped Q2, who topped Q3. Most F1.com qualifying reports break this down.
2. If the SAME driver topped Q1, Q2, AND Q3, AND won the race, AND set the fastest lap → **Grand Slam achieved**.
3. If a Grand Slam happens, update each player's Q20 score:
   - Players who bet YES → flip their score from the current negative provisional to the agreed positive confirmed value (ask the user for the payout if not obvious from existing data).
   - Players who bet NO → their negative locked-in penalty is now confirmed wrong; recompute accordingly.
4. If NO Grand Slam this weekend, leave Q20 untouched. The current negative provisional values stand until either (a) a grand slam happens later or (b) the season ends without one (at which point the YES bettors' penalty becomes `confirmed`).

**Note:** Grand Slams are extremely rare (only ~24 in F1 history). Most seasons will end without one. Don't false-positive on near-misses (e.g. pole + win + fastest lap but a driver other than the winner topped Q1).

## Step 5 — Dispatch verification subagents (one per question, ALL 20 questions)

🚨 **FIRST: confirm the Agent / Task tool is available.** Before doing anything else in Step 5, attempt a `ToolSearch` for `Agent` or `Task` (whichever your harness exposes). If neither is available, **STOP. Do not proceed with self-verification as a substitute** — past validation runs have shown that when an agent self-verifies (re-reads its own research and re-confirms it), it almost always rubber-stamps its own mistakes. Surface this to the user explicitly:

> "Step 5 of the skill requires dispatching independent verification subagents but the Agent/Task tool is not available in this environment. I have completed Steps 1–4 and 6 (typecheck), but the independent verification step cannot run. Please review the diff manually before committing, or re-invoke me in an environment with subagent dispatch."

Self-verification is NOT an acceptable fallback. It WILL miss the same errors the main agent made. (Concrete example: during a validation run, an agent that self-verified Q7 confidently re-confirmed its own wrong claim that only Bortoleto had been newly Q1-eliminated at Miami — when in fact both Lindblad and Bortoleto were knocked out. A fresh subagent reading the same F1.com source independently would have caught it.)

---

After you have written all the edits AND the Agent tool is confirmed available, you **must** verify the work by dispatching an independent subagent **for every one of the 20 questions in the quiz** — not just the questions you think you touched.

🚨 **Why "all 20" and not "only the ones I edited":**
- A question you didn't think to touch may have been silently affected by a standings change (Q2/Q3 ranks shift when teams/drivers swap positions; Q14 totals shift when `*Winner` values flip).
- A question you skipped may have actually needed an update you missed entirely (during the Miami validation, Q9 was skipped because the agent didn't realise Alpine had a DNF — a per-question subagent would have caught it).
- The cost of verifying an unchanged question is low (the subagent confirms "no change needed, all values match" in seconds). The cost of missing one is a wrong score in production.

Dispatch one subagent **per question, all 20, in parallel**. Yes, even Q13/Q16 which currently sit at `z()` — the subagent will just confirm they're still empty. Yes, even Q15 which is "done" — confirm it hasn't drifted.

**Use the Agent tool with `subagent_type: "general-purpose"`** (or `Explore` if the agent only needs to read). Send all 20 subagent calls in **a single message** so they run concurrently.

**Each subagent's prompt should be self-contained** (the subagent has none of the conversation context). Include:

1. **The question number and what it scores** (one-paragraph summary from this skill's Step 4 entry).
2. **The race that just happened** plus the specific real-world facts that matter for this question (finishing positions, Q1 knockouts, DOTD, SC/VSC counts, qualifying H2H winners, tyre usage — whatever is relevant).
3. **The current state of the relevant files** they should read:
   - [src/assets/data/scores.ts](../../../src/assets/data/scores.ts) (always)
   - The question's component file (`src/app/question-{N}/question-{N}.component.ts`)
   - For Q1/Q2/Q3/Q5/Q11/Q19: also `src/assets/data/data.ts`
4. **The expected scoring rule** — quote it directly from this skill so the subagent doesn't have to interpret.
5. **A clear ask**: "Recompute each player's score from scratch using the rule above and the facts I gave you. Report any discrepancies vs the committed values. Format: `player_name: expected_value vs committed_value — explanation` per discrepancy. If everything matches, say so explicitly."
6. **Constrain the response** to under ~250 words and forbid writing/editing anything.

Example subagent prompt (Q6, post-Miami):

> Verify Q6 (Every Podium driver) for the F1 predictions quiz in this repo.
>
> **Question:** Each player picks a set of drivers they think will be on a podium at least once this season. Per pick: +5 confirmed if in `podiumDrivers`, −3 provisional if not. Also: −3 confirmed for every podium driver the player did NOT pick.
>
> **State of the world after Miami 2026:** The podium drivers so far are Russell, Antonelli, Leclerc, Hamilton, Piastri, Norris.
>
> **Files to read:** `src/app/question-6/question-6.component.ts` for picks, `src/assets/data/scores.ts` Q6 entry for committed values.
>
> **Rule:**
> - `confirmed = 5 × (picks in podiumDrivers) + (−3 × podium drivers NOT picked)`
> - `provisional = −3 × (picks NOT in podiumDrivers)`
>
> **Task:** For each of the 7 players (kundan/anna/jazz/omar/joe/michael/koli), recompute confirmed and provisional from scratch and compare to the committed `s(prov, conf)` value. Report any discrepancy as `player: expected s(X, Y) vs committed s(A, B) — reason`. If everything matches, say "all 7 players match." Do not edit any files. Under 250 words.

**Wait for ALL 20 subagents to finish** before proceeding. Aggregate their findings:
- If all 20 report green → proceed to Step 6.
- If any report a discrepancy → diagnose it, fix the offending file, then **re-run the subagent for that question** until it confirms. Don't trust your own diagnosis without re-verification.
- Subagents that report "no change required for this race, values look correct" are still doing valuable work — they're confirming nothing silently drifted.

**Why this matters:** during Miami we had several compounding errors that survived the main agent's own review:
- Q6 kundan off by 3, Q7 jazz off by 9 (drift in old values).
- Q14 totals not recomputed when `<team>Winner` values flipped (Racing Bulls + Cadillac).
- Q2 scores not recomputed when Williams overtook Audi in the constructors ranking.
- Q9 michael's DNF tracking skipped entirely.
- Q10 anna's race5 set to wrong driver's result (mapped to Albon instead of Lawson).

Subagents that recompute from scratch with no exposure to the original (possibly-wrong) values catch this cleanly. Dispatch one per question and trust their recomputation over your in-flight edits.

### Subagent prompts MUST include these high-leverage checks:

Every subagent prompt should contain:
1. The question number and its scoring rule (copy from Step 4 of this skill).
2. The race that just happened plus the relevant real-world facts (you researched these in Step 1).
3. **Explicit instruction to verify even if no change appears needed** — confirm the current values are still correct given the new state of the world.
4. **A null result is valid** — "I checked, no update is required for this race, all values match" is a successful verification, not a failure.

**Specific prompt fragments for high-risk questions:**

**Q9 verification subagent:**
> List every DNF in the just-finished main race as `driver → team` pairs. Then for each of the 7 players, look up their Q9 team pick. For each player, state whether their team had 0 / 1 / 2 cars DNF in this race, and what update (if any) is required to `dnfs` / `doubleDnfs` arrays. Compare this expected state to the committed values. Report any player whose state doesn't match. Critically, do NOT skip this verification just because the race seemed clean — confirm explicitly for each player.

**Q10 verification subagent:**
> Remember the FIXED slot→driver mapping: race1=Albon, race2=Hulkenberg, race3=Perez, race4=Hadjar, race5=Lawson. For each of the 7 players, walk through all 5 slots. If `race{N}` matches a race that has already happened (per `currentRace` and prior races), the slot's `pos` and `pts` must reflect the **slot-driver's** main-race finishing position in that race (NOT the race winner's, NOT any other driver's). Verify each filled slot and report any mismatch, especially calling out cases where the value looks like it came from the wrong driver.

**Q2 / Q3 verification subagent:**
> Re-derive the full constructors (Q2) / drivers (Q3) ordering from `data.ts` post-race. For each of the 7 players, look up their pick, compute its current rank, and apply the scoring rule (P6 / P4 with distance bands). Compare to committed scores. **Pay special attention to teams/drivers that overtook each other this race, since rank shifts can change scores for players whose own pick's pts didn't change.**

**Q14 verification subagent:**
> For each of the 11 teams, state the current `<team>Winner` value (which driver, or null). Then for each of the 7 players, count how many of their team picks match the current winners. Multiply by 5 to get the expected Q14 provisional score. Compare to committed values. **Trigger an explicit recheck of every player's total even if their picks didn't change — `*Winner` flips silently affect totals.**

**Q6 / Q7 verification subagent:**
> List the current `podiumDrivers` array in the component. For each of the 7 players, classify each pick as (in list / not in list) and each non-pick that is in list as (missed). Compute confirmed = 5×correct − 3×missed, provisional = −3×wrong. Compare to committed s(prov, conf) values. Report any drift. Dedupe duplicate picks (e.g. Stroll twice).

## Step 6 — Final verification

After subagents are all green:

```bash
npx tsc --noEmit
```

Should produce no output. Pre-existing unused-import hints in question-10 are fine — they aren't from your edits.

Optionally start the dev server and visually check the affected questions render:

```bash
ng serve
```

## Step 7 — Produce the per-question summary table (REQUIRED)

Before committing, return a **complete summary table to the user** covering all 20 questions. One row per question, no question omitted — even questions that didn't change must appear with an explicit "no change" entry and the reason.

**Required table format:**

| Q | Title | Changed? | What changed | Why |
|---|-------|----------|--------------|-----|
| 1 | World Champion | … | … | … |
| 2 | Constructors 6th | … | … | … |
| … | … | … | … | … |
| 20 | Grand Slam gamble | … | … | … |

**Per-column expectations:**

- **Changed?** — one of: `Yes`, `No`, or `No (audited)`.
  - `Yes` = at least one value in either `scores.ts` or the question's component was modified.
  - `No` = nothing changed and nothing about this race required reconsidering it (e.g. Q15 Aus podium was confirmed before this update).
  - `No (audited)` = verified that no change was needed (e.g. a tiebreak shift could have moved things but didn't; or the race didn't trigger anything for this question). Use this for any question where the agent considered whether to touch it.

- **What changed** — concise description of the diff. Examples:
  - "Added Norris to `podiumDrivers`; +5 conf / +3 prov to all 7 players who picked him."
  - "michael's `dnfs` += Miami; scores `c(-0)` → `c(-5)`."
  - "Recomputed all 7 players against Norris/Russell/Leclerc 3-way tie at 13 sprint pts; kundan 10→8, omar 25→18, jazz 12→25, joe 2→6, michael 8→12, koli 15→10."
  - "No change — none of the 5 statements resolved this weekend; Horner still not in F1, no retirements announced."

- **Why** — the real-world or game-state reason. This is where you cite the race event that triggered (or didn't trigger) the change. Examples:
  - "Norris took P2 in Miami main race — his first podium of 2026."
  - "Gasly DNF lap 4 of Miami main (flipped after Lawson contact); Alpine had a DNF and michael picked Alpine."
  - "Antonelli leads championship by 20 pts post-Miami; Russell remains P2."
  - "Miami main race was dry from lights-to-flag — no driver fitted intermediates or wets."
  - "Antonelli took pole (Q1+Q2+Q3 fastest) and won race, but fastest lap went to Norris → not a Grand Slam."

**Also include below the table:**

- Any **pre-existing bugs caught** during the recompute-from-scratch audit (with the specific value before/after and the rule used to derive the correct value). Past audits caught `mercedesStat1='2'` (should be 1) and `Sainz lapCount=163` (should be 164).
- Any **judgment calls** that should have been a user question but weren't (so the user can override).
- Any **race facts you couldn't fully verify** (e.g. ambiguous sources, missing per-driver data).

**Wait for user confirmation of the table before proceeding to Step 8.** The user uses this table to spot-check the work; if anything looks off, they'll redirect before commit.

## Step 8 — Commit

Match the existing commit-message style — short, lowercase, e.g. `monaco update`. Do **not** push unless the user asks.

## Common gotchas

- **Lap counts**: do NOT assume every finisher did the full race distance. Always check per-driver lap counts in the official classification (P11+ are usually 1+ laps down).
- **F1 main-race points** in 2026: 25-18-15-12-10-8-6-4-2-1, no fastest-lap point.
- **Sprint points**: 8-7-6-5-4-3-2-1 for P1–P8.
- **Q14 Racing Bulls stat** is total laps, not lap-count rank — match the lapCount value.
- **f15standings duplicate** mirrors driversChampionshiop — keep both in sync.
- **Priority field** in `data.ts` standings is the tiebreaker when `count` is equal — lower number = higher rank.
- **Q4 races array** must also be updated when the player's driver wins a DOTD, otherwise the race-icon badges disappear from the UI.
- **The user wants narration**: state what's changing and why as you go, not just a final summary.

## Source-of-truth files (read these to ground yourself)

- [src/types/races.ts](../../../src/types/races.ts) — race order, lap counts per circuit, sprint flag.
- [src/types/drivers.ts](../../../src/types/drivers.ts) — driver→team mapping.
- [src/types/teams.ts](../../../src/types/teams.ts) — team metadata.
- [src/types/players.ts](../../../src/types/players.ts) — the 7 players.
- [src/assets/data/scores.ts](../../../src/assets/data/scores.ts) — comments at the top of `questionScores` summarise per-question gotchas.

## Worked example commit

The Miami update touched these files (typical scope for a sprint weekend):

```
src/app/question-10/question-10.component.ts |   6 +-
src/app/question-12/question-12.component.ts |   2 +-
src/app/question-14/question-14.component.ts |  20 +-
src/app/question-6/question-6.component.ts   |   2 +-
src/app/question-7/question-7.component.ts   |   2 +-
src/app/question-9/question-9.component.ts   |   2 +-
src/assets/data/config.ts                    |   2 +-
src/assets/data/data.ts                      | 136 +++++-----
src/assets/data/scores.ts                    |  50 ++--
```

A non-sprint weekend usually touches fewer files (no Q11, no Q12, no sprint standings).
