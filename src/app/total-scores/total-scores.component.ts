import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { players, PlayerKey } from '../../types/players';
import { Player } from '../../types/main-types';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { questionScores } from '../../assets/data/scores';

interface TotalPlayerScore {
  player: Player;
  key: PlayerKey;
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

  readonly totalPlayerScores: TotalPlayerScore[] = (
    Object.entries(players) as [PlayerKey, Player][]
  ).map(([key, player]) => ({ player, key }));

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
    return questionScores[q]?.[score.key]?.provisional ?? 0;
  }

  getConfirmed(score: TotalPlayerScore, q: number): number {
    return questionScores[q]?.[score.key]?.confirmed ?? 0;
  }

  getTotalProvisional(score: TotalPlayerScore): number {
    let sum = 0;
    for (const q of this.questionNumbers) {
      sum += this.getProvisional(score, q);
    }
    return sum;
  }

  getTotalConfirmed(score: TotalPlayerScore): number {
    let sum = 0;
    for (const q of this.questionNumbers) {
      sum += this.getConfirmed(score, q);
    }
    return sum;
  }

  formatPoints(n: number): string {
    return n >= 0 ? `+${n}` : `${n}`;
  }

  showStacked(provisional: number, confirmed: number): boolean {
    return provisional !== 0 && confirmed !== 0;
  }

  showConfirmedOnly(provisional: number, confirmed: number): boolean {
    return provisional === 0 && confirmed !== 0;
  }
}
