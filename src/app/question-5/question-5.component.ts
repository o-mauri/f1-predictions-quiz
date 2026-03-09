import { Component } from '@angular/core';
import { Driver, Player } from '../../types/main-types';
import { players, getPlayerKey } from '../../types/players';
import { Drivers } from '../../types/drivers';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { StandingsTable } from '../standings-table/standings-table';
import { ResultsTab } from '../results-tab/results-tab';
import { lapCount } from '../../assets/data/data';
import { questionScores, QuestionScore } from '../../assets/data/scores';

interface Question5Answer {
  player: Player;
  driver: Driver;
}

@Component({
  selector: 'app-question-5',
  standalone: true,
  templateUrl: './question-5.component.html',
  styleUrl: './question-5.component.scss',
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent, StandingsTable, ResultsTab],
})
export class Question5Component {
  public lapCount = lapCount;

  getScore(player: Player): QuestionScore {
    return questionScores[5][getPlayerKey(player)];
  }

  fmt(n: number | null): string {
    if (n === null) return '';
    return n >= 0 ? `+${n}` : `${n}`;
  }

  readonly answers: Question5Answer[] = [
    { player: players.kundan,  driver: Drivers.georgeRussell },
    { player: players.anna,    driver: Drivers.fernandoAlonso },
    { player: players.jazz,    driver: Drivers.lewisHamilton },
    { player: players.omar,    driver: Drivers.georgeRussell },
    { player: players.joe,     driver: Drivers.georgeRussell },
    { player: players.michael, driver: Drivers.georgeRussell },
    { player: players.koli,    driver: Drivers.lewisHamilton },
  ];
}
