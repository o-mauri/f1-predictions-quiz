import { Component } from '@angular/core';
import { Driver, Player } from '../../types/main-types';
import { players } from '../../types/players';
import { Drivers } from '../../types/drivers';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';

interface Question5Answer {
  player: Player;
  driver: Driver;
  provisionalPoints: string;
  confirmedNegativePoints: string;
  confirmedPoints: string;
}
@Component({
  selector: 'app-question-5',
  standalone: true,
  templateUrl: './question-5.component.html',
  styleUrl: './question-5.component.scss',
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent],
})
export class Question5Component {
  readonly answers: Question5Answer[] = [
    {
      player: players.kundan,
      driver: Drivers.georgeRussell,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.anna,
      driver: Drivers.fernandoAlonso,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.jazz,
      driver: Drivers.lewisHamilton,
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
      driver: Drivers.georgeRussell,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.michael,
      driver: Drivers.georgeRussell,
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
