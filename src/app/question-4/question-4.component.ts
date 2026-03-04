import { Component } from '@angular/core';
import { Drivers } from '../../types/drivers';
import { players } from '../../types/players';
import { Driver, Player } from '../../types/main-types';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';

interface Question4Answer {
  player: Player;
  driver: Driver;
  provisionalPoints: string;
  confirmedNegativePoints: string;
  confirmedPoints: string;
}
@Component({
  selector: 'app-question-4',
  standalone: true,
  templateUrl: './question-4.component.html',
  styleUrl: './question-4.component.scss',
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent],
})
export class Question4Component {
  readonly answers: Question4Answer[] = [
    {
      player: players.kundan,
      driver: Drivers.lewisHamilton,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.anna,
      driver: Drivers.lewisHamilton,
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
      driver: Drivers.kimiAntonelli,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.joe,
      driver: Drivers.kimiAntonelli,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.michael,
      driver: Drivers.landoNorris,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.koli,
      driver: Drivers.landoNorris,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
  ];
}
