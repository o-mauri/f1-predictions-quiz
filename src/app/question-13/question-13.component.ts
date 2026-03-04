import { Component } from '@angular/core';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { players } from '../../types/players';
import { Races } from '../../types/races';
import { Player, Race } from '../../types/main-types';
import { RaceIconComponent } from '../race-icon/race-icon.component';

interface Question13Answer {
  player: Player;
  race: Race;
  pitCount: number;
  provisionalPoints: string;
  confirmedPoints: string;
}

@Component({
  selector: 'app-question-13',
  standalone: true,
  templateUrl: './question-13.component.html',
  styleUrl: './question-13.component.scss',
  imports: [QuestionTitleComponent, PlayerIconComponent, RaceIconComponent],
})
export class Question13Component {
  getPitCountRange(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }

  readonly answers: Question13Answer[] = [
    {
      player: players.kundan,
      race: Races.greatBritain,
      provisionalPoints: '+0',
      pitCount: 0,
      confirmedPoints: '',
    },
    {
      player: players.anna,
      race: Races.greatBritain,
      provisionalPoints: '+0',
      pitCount: 0,
      confirmedPoints: '',
    },
    {
      player: players.jazz,
      race: Races.greatBritain,
      provisionalPoints: '+0',
      pitCount: 0,
      confirmedPoints: '',
    },
    {
      player: players.omar,
      race: Races.canada,
      provisionalPoints: '+0',
      pitCount: 0,
      confirmedPoints: '',
    },
    {
      player: players.joe,
      race: Races.netherlands,
      provisionalPoints: '+0',
      pitCount: 0,
      confirmedPoints: '',
    },
    {
      player: players.michael,
      race: Races.canada,
      provisionalPoints: '+0',
      pitCount: 0,
      confirmedPoints: '',
    },
    {
      player: players.koli,
      race: Races.canada,
      provisionalPoints: '+0',
      pitCount: 0,
      confirmedPoints: '',
    },
  ];
}
