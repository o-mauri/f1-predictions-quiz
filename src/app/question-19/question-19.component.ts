import { Component } from '@angular/core';

import { QuestionTitleComponent } from '../question-title/question-title.component';
import { Driver, Player } from '../../types/main-types';

import { Drivers } from '../../types/drivers';
import { players, getPlayerKey } from '../../types/players';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { ResultsTab } from '../results-tab/results-tab';
import { StandingsTable } from '../standings-table/standings-table';
import { f15standings } from '../../assets/data/data';
import { questionScores, QuestionScore } from '../../assets/data/scores';

interface Question19Answer {
  player: Player;
  driver: Driver;
}

@Component({
  selector: 'app-question-19',
  standalone: true,
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent, ResultsTab, StandingsTable],
  templateUrl: './question-19.component.html',
  styleUrl: './question-19.component.scss',
})
export class Question19Component {

  public f15standings = f15standings;

  getScore(player: Player): QuestionScore {
    return questionScores[19][getPlayerKey(player)];
  }

  fmt(n: number | null): string {
    if (n === null) return '';
    return n >= 0 ? `+${n}` : `${n}`;
  }

  readonly answers: Question19Answer[] = [
    { player: players.kundan,  driver: Drivers.landoNorris },
    { player: players.anna,    driver: Drivers.alexanderAlbon },
    { player: players.jazz,    driver: Drivers.carlosSainz },
    { player: players.omar,    driver: Drivers.nicoHulkenberg },
    { player: players.joe,     driver: Drivers.sergioPerez },
    { player: players.michael, driver: Drivers.charlesLeclerc },
    { player: players.koli,    driver: Drivers.gabrielBortoleto },
  ];
}
