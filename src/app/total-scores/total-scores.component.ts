import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { players } from '../../types/players';
import { Player } from '../../types/main-types';
import { PlayerIconComponent } from '../player-icon/player-icon.component';

interface TotalPlayerScore {
  player: Player;
  totalProvisional: number;
  totalConfirmed: number;
  q1provisional: number;
  q1confirmed: number;
  q2provisional: number;
  q2confirmed: number;
  q3provisional: number;
  q3confirmed: number;
  q4provisional: number;
  q4confirmed: number;
  q5provisional: number;
  q5confirmed: number;
  q6provisional: number;
  q6confirmed: number;
  q7provisional: number;
  q7confirmed: number;
  q8provisional: number;
  q8confirmed: number;
  q9provisional: number;
  q9confirmed: number;
  q10provisional: number;
  q10confirmed: number;
  q11provisional: number;
  q11confirmed: number;
  q12provisional: number;
  q12confirmed: number;
  q13provisional: number;
  q13confirmed: number;
  q14provisional: number;
  q14confirmed: number;
  q15provisional: number;
  q15confirmed: number;
  q16provisional: number;
  q16confirmed: number;
  q17provisional: number;
  q17confirmed: number;
  q18provisional: number;
  q18confirmed: number;
  q19provisional: number;
  q19confirmed: number;
  q20provisional: number;
  q20confirmed: number;
}

@Component({
  selector: 'app-total-scores',
  standalone: true,
  templateUrl: './total-scores.component.html',
  styleUrl: './total-scores.component.scss',
  imports: [CommonModule, PlayerIconComponent],
})
export class TotalScoresComponent {
  readonly questionNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ] as const;

  get orderedScores(): TotalPlayerScore[] {
    return [...this.totalPlayerScores].sort((a, b) => this.totalPoints(b) - this.totalPoints(a));
  }

  totalPoints(score: TotalPlayerScore): number {
    return this.getTotalProvisional(score) + this.getTotalConfirmed(score);
  }

  positionLabel(index: number): string {
    const n = index + 1;
    if (n === 1) return '1st';
    if (n === 2) return '2nd';
    if (n === 3) return '3rd';
    return n + 'th';
  }

  getProvisional(score: TotalPlayerScore, q: number): number {
    return (score as unknown as Record<string, number>)[`q${q}provisional`] ?? 0;
  }

  getConfirmed(score: TotalPlayerScore, q: number): number {
    return (score as unknown as Record<string, number>)[`q${q}confirmed`] ?? 0;
  }

  /** Sum of all provisional points for this player (q1..q20). */
  getTotalProvisional(score: TotalPlayerScore): number {
    let sum = 0;
    for (const q of this.questionNumbers) {
      sum += this.getProvisional(score, q);
    }
    return sum;
  }

  /** Sum of all confirmed points for this player (q1..q20). */
  getTotalConfirmed(score: TotalPlayerScore): number {
    let sum = 0;
    for (const q of this.questionNumbers) {
      sum += this.getConfirmed(score, q);
    }
    return sum;
  }

  /** Format number with + prefix if non-negative: +0, +6, -2 */
  formatPoints(n: number): string {
    return n >= 0 ? `+${n}` : `${n}`;
  }

  /** Whether to show provisional and confirmed stacked (both non-zero) */
  showStacked(provisional: number, confirmed: number): boolean {
    return provisional !== 0 && confirmed !== 0;
  }

  /** Show only confirmed: provisional is 0 and confirmed is non-zero (when both 0 we show provisional) */
  showConfirmedOnly(provisional: number, confirmed: number): boolean {
    return provisional === 0 && confirmed !== 0;
  }

  readonly totalPlayerScores: TotalPlayerScore[] = [
    {
      player: players.kundan,
      totalProvisional: 0,
      totalConfirmed: 0,
      q1provisional: 0,
      q1confirmed: 0,
      q2provisional: 0,
      q2confirmed: 0,
      q3provisional: 0,
      q3confirmed: 0,
      q4provisional: 0,
      q4confirmed: 0,
      q5provisional: 0,
      q5confirmed: 0,
      q6provisional: -27,
      q6confirmed: 0,
      q7provisional: -42,
      q7confirmed: 0,
      q8provisional: 0,
      q8confirmed: 0,
      q9provisional: 0,
      q9confirmed: 0,
      q10provisional: 0,
      q10confirmed: 0,
      q11provisional: 0,
      q11confirmed: 0,
      q12provisional: 0,
      q12confirmed: 0,
      q13provisional: 0,
      q13confirmed: 0,
      q14provisional: 0,
      q14confirmed: 0,
      q15provisional: 0,
      q15confirmed: 0,
      q16provisional: 0,
      q16confirmed: 0,
      q17provisional: 15,
      q17confirmed: 0,
      q18provisional: 0,
      q18confirmed: 0,
      q19provisional: 0,
      q19confirmed: 0,
      q20provisional: -40,
      q20confirmed: 0,
    },
    {
      player: players.anna,
      totalProvisional: 0,
      totalConfirmed: 0,
      q1provisional: 0,
      q1confirmed: 0,
      q2provisional: 0,
      q2confirmed: 0,
      q3provisional: 0,
      q3confirmed: 0,
      q4provisional: 0,
      q4confirmed: 0,
      q5provisional: 0,
      q5confirmed: 0,
      q6provisional: -36,
      q6confirmed: 0,
      q7provisional: -33,
      q7confirmed: 0,
      q8provisional: 0,
      q8confirmed: 0,
      q9provisional: 0,
      q9confirmed: 0,
      q10provisional: 0,
      q10confirmed: 0,
      q11provisional: 0,
      q11confirmed: 0,
      q12provisional: 0,
      q12confirmed: 0,
      q13provisional: 0,
      q13confirmed: 0,
      q14provisional: 0,
      q14confirmed: 0,
      q15provisional: 0,
      q15confirmed: 0,
      q16provisional: 0,
      q16confirmed: 0,
      q17provisional: 10,
      q17confirmed: 0,
      q18provisional: 0,
      q18confirmed: 0,
      q19provisional: 0,
      q19confirmed: 0,
      q20provisional: 0,
      q20confirmed: 0,
    },
    {
      player: players.jazz,
      totalProvisional: 0,
      totalConfirmed: 0,
      q1provisional: 0,
      q1confirmed: 0,
      q2provisional: 0,
      q2confirmed: 0,
      q3provisional: 0,
      q3confirmed: 0,
      q4provisional: 0,
      q4confirmed: 0,
      q5provisional: 0,
      q5confirmed: 0,
      q6provisional: -36,
      q6confirmed: 0,
      q7provisional: -36,
      q7confirmed: 0,
      q8provisional: 0,
      q8confirmed: 0,
      q9provisional: 0,
      q9confirmed: 0,
      q10provisional: 0,
      q10confirmed: 0,
      q11provisional: 0,
      q11confirmed: 0,
      q12provisional: 0,
      q12confirmed: 0,
      q13provisional: 0,
      q13confirmed: 0,
      q14provisional: 0,
      q14confirmed: 0,
      q15provisional: 0,
      q15confirmed: 0,
      q16provisional: 0,
      q16confirmed: 0,
      q17provisional: 10,
      q17confirmed: 0,
      q18provisional: 0,
      q18confirmed: 0,
      q19provisional: 0,
      q19confirmed: 0,
      q20provisional: 0,
      q20confirmed: 0,
    },
    {
      player: players.omar,
      totalProvisional: 0,
      totalConfirmed: 0,
      q1provisional: 0,
      q1confirmed: 0,
      q2provisional: 0,
      q2confirmed: 0,
      q3provisional: 0,
      q3confirmed: 0,
      q4provisional: 0,
      q4confirmed: 0,
      q5provisional: 0,
      q5confirmed: 0,
      q6provisional: -33,
      q6confirmed: 0,
      q7provisional: -54,
      q7confirmed: 0,
      q8provisional: 0,
      q8confirmed: 0,
      q9provisional: 0,
      q9confirmed: 0,
      q10provisional: 0,
      q10confirmed: 0,
      q11provisional: 0,
      q11confirmed: 0,
      q12provisional: 1,
      q12confirmed: 0,
      q13provisional: 0,
      q13confirmed: 0,
      q14provisional: 0,
      q14confirmed: 0,
      q15provisional: 0,
      q15confirmed: 0,
      q16provisional: 0,
      q16confirmed: 0,
      q17provisional: 5,
      q17confirmed: 0,
      q18provisional: 0,
      q18confirmed: 0,
      q19provisional: 0,
      q19confirmed: 0,
      q20provisional: -40,
      q20confirmed: 0,
    },
    {
      player: players.joe,
      totalProvisional: 0,
      totalConfirmed: 0,
      q1provisional: 0,
      q1confirmed: 0,
      q2provisional: 0,
      q2confirmed: 0,
      q3provisional: 0,
      q3confirmed: 0,
      q4provisional: 0,
      q4confirmed: 0,
      q5provisional: 0,
      q5confirmed: 0,
      q6provisional: -30,
      q6confirmed: 0,
      q7provisional: -45,
      q7confirmed: 0,
      q8provisional: 0,
      q8confirmed: 0,
      q9provisional: 0,
      q9confirmed: 0,
      q10provisional: 0,
      q10confirmed: 0,
      q11provisional: 0,
      q11confirmed: 0,
      q12provisional: 0,
      q12confirmed: 0,
      q13provisional: 0,
      q13confirmed: 0,
      q14provisional: 0,
      q14confirmed: 0,
      q15provisional: 0,
      q15confirmed: 0,
      q16provisional: 0,
      q16confirmed: 0,
      q17provisional: 10,
      q17confirmed: 0,
      q18provisional: 0,
      q18confirmed: 0,
      q19provisional: 0,
      q19confirmed: 0,
      q20provisional: -40,
      q20confirmed: 0,
    },
    {
      player: players.michael,
      totalProvisional: 0,
      totalConfirmed: 0,
      q1provisional: 0,
      q1confirmed: 0,
      q2provisional: 0,
      q2confirmed: 0,
      q3provisional: 0,
      q3confirmed: 0,
      q4provisional: 0,
      q4confirmed: 0,
      q5provisional: 0,
      q5confirmed: 0,
      q6provisional: -24,
      q6confirmed: 0,
      q7provisional: -18,
      q7confirmed: 0,
      q8provisional: 0,
      q8confirmed: 0,
      q9provisional: 0,
      q9confirmed: 0,
      q10provisional: 0,
      q10confirmed: 0,
      q11provisional: 0,
      q11confirmed: 0,
      q12provisional: 0,
      q12confirmed: 0,
      q13provisional: 0,
      q13confirmed: 0,
      q14provisional: 0,
      q14confirmed: 0,
      q15provisional: 0,
      q15confirmed: 0,
      q16provisional: 0,
      q16confirmed: 0,
      q17provisional: 0,
      q17confirmed: 0,
      q18provisional: 0,
      q18confirmed: 0,
      q19provisional: 0,
      q19confirmed: 0,
      q20provisional: -40,
      q20confirmed: 0,
    },
    {
      player: players.koli,
      totalProvisional: 0,
      totalConfirmed: 0,
      q1provisional: 0,
      q1confirmed: 0,
      q2provisional: 0,
      q2confirmed: 0,
      q3provisional: 0,
      q3confirmed: 0,
      q4provisional: 0,
      q4confirmed: 0,
      q5provisional: 0,
      q5confirmed: 0,
      q6provisional: -42,
      q6confirmed: 0,
      q7provisional: -24,
      q7confirmed: 0,
      q8provisional: 0,
      q8confirmed: 0,
      q9provisional: 0,
      q9confirmed: 0,
      q10provisional: 0,
      q10confirmed: 0,
      q11provisional: 0,
      q11confirmed: 0,
      q12provisional: 1,
      q12confirmed: 0,
      q13provisional: 0,
      q13confirmed: 0,
      q14provisional: 0,
      q14confirmed: 0,
      q15provisional: 0,
      q15confirmed: 0,
      q16provisional: 0,
      q16confirmed: 0,
      q17provisional: 5,
      q17confirmed: 0,
      q18provisional: 0,
      q18confirmed: 0,
      q19provisional: 0,
      q19confirmed: 0,
      q20provisional: 0,
      q20confirmed: 0,
    },
  ];
}
