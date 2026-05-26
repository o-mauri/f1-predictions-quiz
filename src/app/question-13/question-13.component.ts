import { Component } from '@angular/core';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { players, getPlayerKey } from '../../types/players';
import { Races } from '../../types/races';
import { Player, Race } from '../../types/main-types';
import { RaceIconComponent } from '../race-icon/race-icon.component';
import { questionScores, QuestionScore } from '../../assets/data/scores';

interface Question13Answer {
  player: Player;
  race: Race;
  pitCount: number;
}

@Component({
  selector: 'app-question-13',
  standalone: true,
  templateUrl: './question-13.component.html',
  styleUrl: './question-13.component.scss',
  imports: [QuestionTitleComponent, PlayerIconComponent, RaceIconComponent],
})
export class Question13Component {
  getScore(player: Player): QuestionScore {
    return questionScores[13][getPlayerKey(player)];
  }

  fmt(n: number | null): string {
    if (n === null) return '';
    return n >= 0 ? `+${n}` : `${n}`;
  }

  getPitCountRange(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }

  readonly answers: Question13Answer[] = [
    { player: players.kundan,  race: Races.greatBritain, pitCount: 0 },
    { player: players.anna,    race: Races.greatBritain, pitCount: 0 },
    { player: players.jazz,    race: Races.greatBritain, pitCount: 0 },
    { player: players.omar,    race: Races.canada,       pitCount: 2 },
    { player: players.joe,     race: Races.netherlands,  pitCount: 0 },
    { player: players.michael, race: Races.canada,       pitCount: 2 },
    { player: players.koli,    race: Races.canada,       pitCount: 2 },
  ];
}
