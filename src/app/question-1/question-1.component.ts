import { Component } from '@angular/core';

import { QuestionTitleComponent } from '../question-title/question-title.component';
import { Driver, Player } from '../../types/main-types';

import { Drivers } from '../../types/drivers';
import { players, getPlayerKey } from '../../types/players';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { ResultsTab } from '../results-tab/results-tab';
import { StandingsTable } from '../standings-table/standings-table';
import { driversChampionshiop } from '../../assets/data/data';
import { questionScores, QuestionScore } from '../../assets/data/scores';

interface Question1Answer {
  player: Player;
  driver: Driver;
}

@Component({
  selector: 'app-question-1',
  standalone: true,
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent, ResultsTab, StandingsTable],
  templateUrl: './question-1.component.html',
  styleUrl: './question-1.component.scss',
})
export class Question1Component {

  public driversChampionship = driversChampionshiop;

  getScore(player: Player): QuestionScore {
    return questionScores[1][getPlayerKey(player)];
  }

  fmt(n: number | null): string {
    if (n === null) return '';
    return n >= 0 ? `+${n}` : `${n}`;
  }

  readonly answers: Question1Answer[] = [
    { player: players.kundan,  driver: Drivers.georgeRussell },
    { player: players.anna,    driver: Drivers.georgeRussell },
    { player: players.jazz,    driver: Drivers.maxVerstappen },
    { player: players.omar,    driver: Drivers.charlesLeclerc },
    { player: players.joe,     driver: Drivers.oscarPiastri },
    { player: players.koli,    driver: Drivers.maxVerstappen },
    { player: players.michael, driver: Drivers.maxVerstappen },
  ];
}
