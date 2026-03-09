import { Component } from '@angular/core';
import { players, getPlayerKey } from '../../types/players';
import { Drivers } from '../../types/drivers';
import { Driver, Player } from '../../types/main-types';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { ResultsTab } from '../results-tab/results-tab';
import { StandingsTable } from '../standings-table/standings-table';
import { sprintStandings } from '../../assets/data/data';
import { questionScores, QuestionScore } from '../../assets/data/scores';

interface Question11Answer {
  player: Player;
  driver: Driver;
}

@Component({
  selector: 'app-question-11',
  standalone: true,
  templateUrl: './question-11.component.html',
  styleUrl: './question-11.component.scss',
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent, ResultsTab, StandingsTable],
})
export class Question11Component {
  public sprintStandings = sprintStandings;

  getScore(player: Player): QuestionScore {
    return questionScores[11][getPlayerKey(player)];
  }

  fmt(n: number | null): string {
    if (n === null) return '';
    return n >= 0 ? `+${n}` : `${n}`;
  }

  readonly answers: Question11Answer[] = [
    { player: players.kundan,  driver: Drivers.kimiAntonelli },
    { player: players.anna,    driver: Drivers.kimiAntonelli },
    { player: players.jazz,    driver: Drivers.landoNorris },
    { player: players.omar,    driver: Drivers.georgeRussell },
    { player: players.joe,     driver: Drivers.maxVerstappen },
    { player: players.michael, driver: Drivers.oscarPiastri },
    { player: players.koli,    driver: Drivers.lewisHamilton },
  ];
}
