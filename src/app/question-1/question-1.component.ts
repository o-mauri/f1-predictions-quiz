import { Component } from '@angular/core';

import { QuestionTitleComponent } from '../question-title/question-title.component';
import { Driver, Player } from '../../types/main-types';

import { Drivers } from '../../types/drivers';
import { players } from '../../types/players';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { ResultsTab } from '../results-tab/results-tab';
import { StandingsTable } from '../standings-table/standings-table';
import { driversChampionshiop } from '../../assets/data/data';

interface Question1Answer {
  player: Player;
  driver: Driver;
  provisionalPoints: string;
  confirmedNegativePoints: string;
  confirmedPoints: string;
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


  readonly answers: Question1Answer[] = [
  {
    player: players.kundan,
    driver: Drivers.georgeRussell,
    provisionalPoints: '+0',
    confirmedNegativePoints: '',
    confirmedPoints: '',
  },
  {
    player: players.anna,
    driver: Drivers.georgeRussell,
    provisionalPoints: '+0',
    confirmedNegativePoints: '',
    confirmedPoints: '',
  },
  {
    player: players.jazz,
    driver: Drivers.maxVerstappen,
    provisionalPoints: '+0',
    confirmedNegativePoints: '',
    confirmedPoints: '',
  },
  {
    player: players.omar,
    driver: Drivers.charlesLeclerc,
    provisionalPoints: '+0',
    confirmedNegativePoints: '',
    confirmedPoints: '',
  },
  {
    player: players.joe,
    driver: Drivers.oscarPiastri,
    provisionalPoints: '+0',
    confirmedNegativePoints: '',
    confirmedPoints: '',
  },
  {
    player: players.koli,
    driver: Drivers.maxVerstappen,
    provisionalPoints: '+0',
    confirmedNegativePoints: '',
    confirmedPoints: '',
  },
  {
    player: players.michael,
    driver: Drivers.maxVerstappen,
    provisionalPoints: '+0',
    confirmedNegativePoints: '',
    confirmedPoints: '',
  }

];


}
