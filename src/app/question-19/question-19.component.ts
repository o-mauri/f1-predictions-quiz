import { Component } from '@angular/core';

import { QuestionTitleComponent } from '../question-title/question-title.component';
import { Driver, Player } from '../../types/main-types';

import { Drivers } from '../../types/drivers';
import { players } from '../../types/players';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';

interface Question19Answer {
  player: Player;
  driver: Driver;
  provisionalPoints: string;
  confirmedNegativePoints: string;
  confirmedPoints: string;
}

@Component({
  selector: 'app-question-19',
  standalone: true,
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent],
  templateUrl: './question-19.component.html',
  styleUrl: './question-19.component.scss',
})
export class Question19Component {
  readonly answers: Question19Answer[] = [
    {
      player: players.kundan,
      driver: Drivers.landoNorris,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.anna,
      driver: Drivers.alexanderAlbon,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.jazz,
      driver: Drivers.carlosSainz,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.omar,
      driver: Drivers.nicoHulkenberg,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.joe,
      driver: Drivers.sergioPerez,
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
      driver: Drivers.gabrielBortoleto,
      provisionalPoints: '+0',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
  ];
}
