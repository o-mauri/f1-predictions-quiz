import { Component } from '@angular/core';
import { Driver, Player } from '../../types/main-types';
import { players } from '../../types/players';
import { Drivers } from '../../types/drivers';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { StandingsTable } from '../standings-table/standings-table';
import { ResultsTab } from '../results-tab/results-tab';
import { driversChampionshiop } from '../../assets/data/data';

interface Question3Answer {
  player: Player;
  driver: Driver;
  provisionalPoints: string;
  confirmedNegativePoints: string;
  confirmedPoints: string;
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

  readonly answers: Question3Answer[] = [
    {
      player: players.kundan,
      driver: Drivers.maxVerstappen,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.anna,
      driver: Drivers.oscarPiastri,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.jazz,
      driver: Drivers.georgeRussell,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.omar,
      driver: Drivers.lewisHamilton,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.joe,
      driver: Drivers.landoNorris,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.michael,
      driver: Drivers.charlesLeclerc,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.koli,
      driver: Drivers.georgeRussell,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
  ];
}
