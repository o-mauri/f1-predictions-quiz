import { Component } from '@angular/core';
import { PlayerIconComponent } from '../player-icon/player-icon.component';

import { QuestionTitleComponent } from '../question-title/question-title.component';
import { TeamIconComponent } from '../team-icon/team-icon.component';
import { Player, Team } from '../../types/main-types';
import { players, getPlayerKey } from '../../types/players';
import { Teams } from '../../types/teams';
import { ResultsTab } from '../results-tab/results-tab';
import { StandingsTable } from '../standings-table/standings-table';
import { constructorsStandings } from '../../assets/data/data';
import { questionScores, QuestionScore } from '../../assets/data/scores';

interface Question2Answer {
  player: Player;
  team: Team;
}

@Component({
  selector: 'app-question-2',
  standalone: true,
  imports: [QuestionTitleComponent, TeamIconComponent, PlayerIconComponent, ResultsTab, StandingsTable],
  templateUrl: './question-2.component.html',
  styleUrl: './question-2.component.scss',
})
export class Question2Component {

  public constructors = constructorsStandings;

  getScore(player: Player): QuestionScore {
    return questionScores[2][getPlayerKey(player)];
  }

  fmt(n: number | null): string {
    if (n === null) return '';
    return n >= 0 ? `+${n}` : `${n}`;
  }

  readonly answers: Question2Answer[] = [
    { player: players.kundan,  team: Teams.haas },
    { player: players.anna,    team: Teams.williams },
    { player: players.jazz,    team: Teams.astonMartin },
    { player: players.omar,    team: Teams.audi },
    { player: players.joe,     team: Teams.racingBulls },
    { player: players.michael, team: Teams.alpine },
    { player: players.koli,    team: Teams.williams },
  ];
}
