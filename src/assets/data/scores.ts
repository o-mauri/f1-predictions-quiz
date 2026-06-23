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
    kundan:  s(1),
    anna:    s(1),
    jazz:    s(0),
    omar:    s(0),
    joe:     s(0),
    michael: s(0),
    koli:    s(0),
  },

  // ── Q2: Constructors 6th ───────────────────────────────────────────────────
  2: {
    kundan:  s(5),
    anna:    s(1),
    jazz:    s(0),
    omar:    s(0),
    joe:     s(10),
    michael: s(5),
    koli:    s(1),
  },

  // ── Q3: Drivers 4th ────────────────────────────────────────────────────────
  3: {
    kundan:  s(0),
    anna:    s(1),
    jazz:    s(5),
    omar:    s(1),
    joe:     s(5),
    michael: s(10),
    koli:    s(5),
  },

  // ── Q4: Most DOTD awards ───────────────────────────────────────────────────
  4: {
    kundan:  s(6),
    anna:    s(6),
    jazz:    s(0),
    omar:    s(6),
    joe:     s(6),
    michael: s(0),
    koli:    s(0),
  },

  // ── Q5: Most laps raced ──────────────────────────────────────────────────────
  5: {
    kundan:  s(4),
    anna:    s(0),
    jazz:    s(25),
    omar:    s(4),
    joe:     s(4),
    michael: s(4),
    koli:    s(25),
  },

  // ── Q6: Every Podium driver ────────────────────────────────────────────────
  6: {
    kundan:  s(-6, 32),
    anna:    s(-15, 32),
    jazz:    s(-15, 32),
    omar:    s(-12, 32),
    joe:     s(-9, 32),
    michael: s(-3, 32),
    koli:    s(-18, 40),
  },

  // ── Q7: Every Q1 elimination ───────────────────────────────────────────────
  7: {
    kundan:  s(-15, 39),
    anna:    s(-12, 23),
    jazz:    s(-12, 31),
    omar:    s(-21, 47),
    joe:     s(-18, 39),
    michael: s(-6, -1),
    koli:    s(-12, -1),
  },

  // ── Q8: Most chaotic race weekends ─────────────────────────────────────────
  8: {
    kundan:  c(15),
    anna:    c(15),
    jazz:    c(35),
    omar:    c(0),
    joe:     c(15),
    michael: c(35),
    koli:    c(35),
  },

  // ── Q9: Team with least DNFs ───────────────────────────────────────────────
  9: {
    kundan:  c(-10),
    anna:    c(-10),
    jazz:    c(-30),
    omar:    c(-10),
    joe:     c(-30),
    michael: c(-5),
    koli:    c(-10),
  },

  // ── Q10: Driver race point picks (sub-scores in component) ─────────────────
  10: {
    kundan:  c(0),
    anna:    c(0),
    jazz:    c(6),
    omar:    c(2),
    joe:     c(10),
    michael: c(0),
    koli:    c(0),
  },

  // ── Q11: Sprint World Champion ─────────────────────────────────────────────
  11: {
    kundan:  s(10),
    anna:    s(10),
    jazz:    s(18),
    omar:    s(25),
    joe:     s(6),
    michael: s(12),
    koli:    s(8),
  },

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
  13: {
    kundan:  s(),
    anna:    s(),
    jazz:    s(),
    omar:    s(10),
    joe:     s(),
    michael: s(10),
    koli:    s(10),
  },

  // ── Q14: Team mate battles (sub-scores / +5 badges in component) ───────────
  14: {
    kundan:  s(35),
    anna:    s(30),
    jazz:    s(30),
    omar:    s(25),
    joe:     s(20),
    michael: s(25),
    koli:    s(30),
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
    kundan:  s(15),
    anna:    s(15,5),
    jazz:    s(15,5),
    omar:    s(10,5),
    joe:     s(15,5),
    michael: s(5,5),
    koli:    s(10,5),
  },

  // ── Q18: Wet races (interRaces/wetRaces arrays in component) ───────────────
  18: {
    kundan:  c(5),
    anna:    s(),
    jazz:    s(),
    omar:    c(5),
    joe:     s(),
    michael: s(),
    koli:    s(),
  },

  // ── Q19: F1.5 Champion ─────────────────────────────────────────────────────
  19: {
    kundan:  s(25),
    anna:    s(0),
    jazz:    s(1),
    omar:    s(0),
    joe:     s(0),
    michael: s(0),
    koli:    s(0),
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
