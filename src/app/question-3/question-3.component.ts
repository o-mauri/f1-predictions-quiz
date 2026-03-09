import { Component } from '@angular/core';
import { Driver, Player } from '../../types/main-types';
import { players, getPlayerKey } from '../../types/players';
import { Drivers } from '../../types/drivers';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { StandingsTable } from '../standings-table/standings-table';
import { ResultsTab } from '../results-tab/results-tab';
import { driversChampionshiop } from '../../assets/data/data';
import { questionScores, QuestionScore } from '../../assets/data/scores';

interface Question3Answer {
  player: Player;
  driver: Driver;
}

@Component({
  selector: 'app-question-3',
  standalone: true,
  templateUrl: './question-3.component.html',
  styleUrl: './question-3.component.scss',
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent, StandingsTable, ResultsTab],
})
export class Question3Component {

  public driversChampionship = driversChampionshiop;

  getScore(player: Player): QuestionScore {
    return questionScores[3][getPlayerKey(player)];
  }

  fmt(n: number | null): string {
    if (n === null) return '';
    return n >= 0 ? `+${n}` : `${n}`;
  }

  readonly answers: Question3Answer[] = [
    { player: players.kundan,  driver: Drivers.maxVerstappen },
    { player: players.anna,    driver: Drivers.oscarPiastri },
    { player: players.jazz,    driver: Drivers.georgeRussell },
    { player: players.omar,    driver: Drivers.lewisHamilton },
    { player: players.joe,     driver: Drivers.landoNorris },
    { player: players.michael, driver: Drivers.charlesLeclerc },
    { player: players.koli,    driver: Drivers.georgeRussell },
  ];
}
