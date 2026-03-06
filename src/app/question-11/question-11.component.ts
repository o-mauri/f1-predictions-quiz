import { Component } from '@angular/core';
import { players } from '../../types/players';
import { Drivers } from '../../types/drivers';
import { Driver, Player } from '../../types/main-types';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { ResultsTab } from '../results-tab/results-tab';
import { StandingsTable } from '../standings-table/standings-table';
import { sprintStandings } from '../../assets/data/data';

interface Question11Answer {
  player: Player;
  driver: Driver;
  provisionalPoints: string;
  confirmedNegativePoints: string;
  confirmedPoints: string;
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

  readonly answers: Question11Answer[] = [
    {
      player: players.kundan,
      driver: Drivers.kimiAntonelli,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.anna,
      driver: Drivers.kimiAntonelli,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.jazz,
      driver: Drivers.landoNorris,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.omar,
      driver: Drivers.georgeRussell,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.joe,
      driver: Drivers.maxVerstappen,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.michael,
      driver: Drivers.oscarPiastri,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.koli,
      driver: Drivers.lewisHamilton,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
  ];
}
