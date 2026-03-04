import { Component } from '@angular/core';
import { PlayerIconComponent } from '../player-icon/player-icon.component';

import { QuestionTitleComponent } from '../question-title/question-title.component';
import { TeamIconComponent } from '../team-icon/team-icon.component';
import { Player, Team } from '../../types/main-types';
import { players } from '../../types/players';
import { Teams } from '../../types/teams';

interface Question2Answer {
  player: Player;
  team: Team;
  provisionalPoints: string;
  confirmedNegativePoints: string;
  confirmedPoints: string;
}

@Component({
  selector: 'app-question-2',
  standalone: true,
  imports: [QuestionTitleComponent, TeamIconComponent, PlayerIconComponent],
  templateUrl: './question-2.component.html',
  styleUrl: './question-2.component.scss',
})
export class Question2Component {
  readonly answers: Question2Answer[] = [
    {
      player: players.kundan,
      team: Teams.haas,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.anna,
      team: Teams.williams,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.jazz,
      team: Teams.astonMartin,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.omar,
      team: Teams.audi,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.joe,
      team: Teams.racingBulls,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.michael,
      team: Teams.alpine,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.koli,
      team: Teams.williams,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
  ];
}
