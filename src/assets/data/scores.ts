import { PlayerKey } from '../../types/players';

export interface QuestionScore {
  provisional: number;
  confirmed: number | null;
}

export type QuestionPlayerScores = Record<PlayerKey, QuestionScore>;

/** Shorthand: s(provisional, confirmed) — confirmed defaults to null (not yet confirmed) */
function s(provisional = 0, confirmed: number | null = null): QuestionScore {
  return { provisional, confirmed };
}

/** Shorthand: confirmed-only score, e.g. c(25) = s(0, 25) */
function c(confirmed: number): QuestionScore {
  return { provisional: 0, confirmed };
}

/** All-zero scores for all players */
function z(): QuestionPlayerScores {
  return {
    kundan: s(),
    anna: s(),
    jazz: s(),
    omar: s(),
    joe: s(),
    michael: s(),
    koli: s(),
  };
}

/**
 * Single source of truth for all question scores.
 *
 * HOW TO UPDATE:
 *   - Edit the provisional/confirmed values for the relevant question and player.
 *   - The total-scores page and each question page both read from here automatically.
 *
 * NOTES ON SPECIFIC QUESTIONS:
 *   - Q10: per-race points (race1pts…race5pts) also live inside question-10.component.ts
 *          for the per-race breakdown display. Update both when a race result lands.
 *   - Q14: per-team winner (results.mercedesWinner etc.) also lives inside question-14.component.ts
 *          for the +5 badge display. Update both when a result is confirmed.
 *   - Q15/Q16: per-driver podium points (points1…points3) also live in their components.
 *              Update both when a race result lands.
 *   - Q17: per-statement answers live in question-17.component.ts for the True/False display.
 *          Only scores.ts needs updating for the total-scores page.
 *   - Q18: interRaces/wetRaces arrays live in question-18.component.ts for the per-race display.
 *          Update both when a race result lands.
 */
export const questionScores: Record<number, QuestionPlayerScores> = {
  // ── Q1: World Champion ─────────────────────────────────────────────────────
  1: {
    kundan:  s(10),
    anna:    s(10),
    jazz:    s(0),
    omar:    s(1),
    joe:     s(0),
    michael: s(0),
    koli:    s(0),
  },

  // ── Q2: Constructors 6th ───────────────────────────────────────────────────
  2: {
    kundan:  s(5),
    anna:    s(0),
    jazz:    s(0),
    omar:    s(5),
    joe:     s(10),
    michael: s(1),
    koli:    s(0),
  },

  // ── Q3: Drivers 4th ────────────────────────────────────────────────────────
  3: {
    kundan:  s(1),
    anna:    s(0),
    jazz:    s(0),
    omar:    s(10),
    joe:     s(5),
    michael: s(5),
    koli:    s(0),
  },

  // ── Q4: Most DOTD awards ───────────────────────────────────────────────────
  4: z(),

  // ── Q5: Most laps led ──────────────────────────────────────────────────────
  5: {
    kundan:  s(25),
    anna:    s(0),
    jazz:    s(15),
    omar:    s(25),
    joe:     s(25),
    michael: s(25),
    koli:    s(15),
  },

  // ── Q6: Every Podium driver ────────────────────────────────────────────────
  6: {
    kundan:  s(-18, 15),
    anna:    s(-27,15),
    jazz:    s(-27,15),
    omar:    s(-24,15),
    joe:     s(-21,15),
    michael: s(-15,15),
    koli:    s(-33,15),
  },

  // ── Q7: Every Q1 elimination ───────────────────────────────────────────────
  7: {
    kundan:  s(-30,14),
    anna:    s(-27,6),
    jazz:    s(-36,6),
    omar:    s(-36,22),
    joe:     s(-30,22),
    michael: s(-27,-2),
    koli:    s(-21,-10),
  },

  // ── Q8: Most chaotic race weekends ─────────────────────────────────────────
  8: {
    kundan:  c(15),
    anna:    c(15),
    jazz:    c(0),
    omar:    c(0),
    joe:     c(0),
    michael: c(0),
    koli:    c(0),
  },

  // ── Q9: Team with least DNFs ───────────────────────────────────────────────
  9: {
    kundan:  c(-0),
    anna:    c(-0),
    jazz:    c(-5),
    omar:    c(-0),
    joe:     c(-5),
    michael: c(-0),
    koli:    c(-0),
  },

  // ── Q10: Driver race point picks (sub-scores in component) ─────────────────
  10: z(),

  // ── Q11: Sprint World Champion ─────────────────────────────────────────────
  11: z(),

  // ── Q12: Sprint/main race same winner count ────────────────────────────────
  12: {
    kundan:  s(),
    anna:    s(),
    jazz:    s(),
    omar:    s(1),
    joe:     s(),
    michael: s(),
    koli:    s(1),
  },

  // ── Q13: Most pit-stop sprint race ─────────────────────────────────────────
  13: z(),

  // ── Q14: Team mate battles (sub-scores / +5 badges in component) ───────────
  14: {
    kundan:  s(10),
    anna:    s(10),
    jazz:    s(10),
    omar:    s(10),
    joe:     s(15),
    michael: s(15),
    koli:    s(10),
  },

  // ── Q15: Australian GP podium (per-driver pts in component) ────────────────
  15: {
    kundan:  c(4),
    anna:    c(5),
    jazz:    c(2),
    omar:    c(7),
    joe:     c(2),
    michael: c(0),
    koli:    c(0),
  },

  // ── Q16: Abu Dhabi GP podium (per-driver pts in component) ─────────────────
  16: z(),

  // ── Q17: True or False ─────────────────────────────────────────────────────
  17: {
    kundan:  s(20),
    anna:    s(15),
    jazz:    s(15),
    omar:    s(10),
    joe:     s(15),
    michael: s(5),
    koli:    s(10),
  },

  // ── Q18: Wet races (interRaces/wetRaces arrays in component) ───────────────
  18: z(),

  // ── Q19: F1.5 Champion ─────────────────────────────────────────────────────
  19: {
    kundan:  s(15),
    anna:    s(1),
    jazz:    s(0),
    omar:    s(0),
    joe:     s(0),
    michael: s(25),
    koli:    s(2),
  },

  // ── Q20: Grand Slam gamble ─────────────────────────────────────────────────
  20: {
    kundan:  s(-40),
    anna:    s(),
    jazz:    s(),
    omar:    s(-40),
    joe:     s(-40),
    michael: s(-40),
    koli:    s(),
  },
};
