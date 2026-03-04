import { Component } from '@angular/core';

import { QuestionTitleComponent } from '../question-title/question-title.component';
import { Driver, Player } from '../../types/main-types';

import { Drivers } from '../../types/drivers';
import { players } from '../../types/players';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';

interface Question20Answer {
  player: Player;
  driver: Driver | null;
  provisionalPoints: string;
  confirmedNegativePoints: string;
  confirmedPoints: string;
}

@Component({
  selector: 'app-question-20',
  standalone: true,
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent],
  templateUrl: './question-20.component.html',
  styleUrl: './question-20.component.scss',
})
export class Question20Component {
  readonly answers: Question20Answer[] = [
    {
      player: players.kundan,
      driver: Drivers.georgeRussell,
      provisionalPoints: '-40',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.anna,
      driver: null,
      provisionalPoints: '',
      confirmedNegativePoints: '',
      confirmedPoints: '+0',
    },
    {
      player: players.jazz,
      driver: null,
      provisionalPoints: '',
      confirmedNegativePoints: '',
      confirmedPoints: '+0',
    },
    {
      player: players.omar,
      driver: Drivers.georgeRussell,
      provisionalPoints: '-40',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.joe,
      driver: Drivers.maxVerstappen,
      provisionalPoints: '-40',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.michael,
      driver: Drivers.maxVerstappen,
      provisionalPoints: '-40',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.koli,
      driver: null,
      provisionalPoints: '',
      confirmedNegativePoints: '',
      confirmedPoints: '+0',
    },
  ];
}
