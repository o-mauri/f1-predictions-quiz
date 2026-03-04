import { Component } from '@angular/core';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { TeamIconComponent } from '../team-icon/team-icon.component';
import { CommonModule } from '@angular/common';
import { Player, Race, Team } from '../../types/main-types';
import { players } from '../../types/players';
import { Teams } from '../../types/teams';
import { Races } from '../../types/races';
import { RaceIconComponent } from '../race-icon/race-icon.component';

interface Question9Answer {
  player: Player;
  team: Team;
  confirmedNegativePoints: string;
  dnfs: Race[];
  doubleDnfs: Race[];
}
@Component({
  selector: 'app-question-9',
  standalone: true,
  templateUrl: './question-9.component.html',
  styleUrl: './question-9.component.scss',
  imports: [
    QuestionTitleComponent,
    PlayerIconComponent,
    TeamIconComponent,
    CommonModule,
    RaceIconComponent,
  ],
})
export class Question9Component {
  allRaces: Race[] = Object.values(Races);

  readonly answers: Question9Answer[] = [
    {
      player: players.kundan,
      team: Teams.ferrari,
      confirmedNegativePoints: '-0',
      dnfs: [],
      doubleDnfs: [],
    },
    {
      player: players.anna,
      team: Teams.mercedes,
      confirmedNegativePoints: '-0',
      dnfs: [],
      doubleDnfs: [],
    },
    {
      player: players.jazz,
      team: Teams.mclaren,
      confirmedNegativePoints: '-0',
      dnfs: [],
      doubleDnfs: [],
    },
    {
      player: players.omar,
      team: Teams.ferrari,
      confirmedNegativePoints: '-0',
      dnfs: [],
      doubleDnfs: [],
    },
    {
      player: players.joe,
      team: Teams.mclaren,
      confirmedNegativePoints: '-0',
      dnfs: [],
      doubleDnfs: [],
    },
    {
      player: players.michael,
      team: Teams.alpine,
      confirmedNegativePoints: '-0',
      dnfs: [],
      doubleDnfs: [],
    },
    {
      player: players.koli,
      team: Teams.mercedes,
      confirmedNegativePoints: '-0',
      dnfs: [],
      doubleDnfs: [],
    },
  ];
}
