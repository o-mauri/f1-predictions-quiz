import { Component } from '@angular/core';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { TeamIconComponent } from '../team-icon/team-icon.component';
import { CommonModule } from '@angular/common';
import { Player, Race, Team } from '../../types/main-types';
import { players, getPlayerKey } from '../../types/players';
import { Teams } from '../../types/teams';
import { Races } from '../../types/races';
import { RaceIconComponent } from '../race-icon/race-icon.component';
import { questionScores, QuestionScore } from '../../assets/data/scores';

interface Question9Answer {
  player: Player;
  team: Team;
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

  getScore(player: Player): QuestionScore {
    return questionScores[9][getPlayerKey(player)];
  }

  fmtNeg(n: number | null): string {
    return '-' + Math.abs(n ?? 0);
  }

  readonly answers: Question9Answer[] = [
    { player: players.kundan,  team: Teams.ferrari,  dnfs: [], doubleDnfs: [] },
    { player: players.anna,    team: Teams.mercedes, dnfs: [], doubleDnfs: [] },
    { player: players.jazz,    team: Teams.mclaren,  dnfs: [Races.australia], doubleDnfs: [Races.china] },
    { player: players.omar,    team: Teams.ferrari,  dnfs: [], doubleDnfs: [] },
    { player: players.joe,     team: Teams.mclaren,  dnfs: [Races.australia], doubleDnfs: [Races.china] },
    { player: players.michael, team: Teams.alpine,   dnfs: [], doubleDnfs: [] },
    { player: players.koli,    team: Teams.mercedes, dnfs: [], doubleDnfs: [] },
  ];
}
