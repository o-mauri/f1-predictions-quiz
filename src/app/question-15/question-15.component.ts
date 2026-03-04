import { Component } from '@angular/core';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { Driver, Player } from '../../types/main-types';
import { Drivers } from '../../types/drivers';
import { players } from '../../types/players';

interface Question15Answer {
  player: Player;
  driver1: Driver;
  points1: number;
  driver2: Driver;
  points2: number;
  driver3: Driver;
  points3: number;
}

@Component({
  selector: 'app-question-15',
  standalone: true,
  templateUrl: './question-15.component.html',
  styleUrl: './question-15.component.scss',
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent],
})
export class Question15Component {
  readonly answers: Question15Answer[] = [
    {
      player: players.kundan,
      driver1: Drivers.lewisHamilton,
      points1: 0,
      driver2: Drivers.charlesLeclerc,
      points2: 0,
      driver3: Drivers.georgeRussell,
      points3: 0,
    },
    {
      player: players.anna,
      driver1: Drivers.georgeRussell,
      points1: 0,
      driver2: Drivers.maxVerstappen,
      points2: 0,
      driver3: Drivers.lewisHamilton,
      points3: 0,
    },
    {
      player: players.jazz,
      driver1: Drivers.maxVerstappen,
      points1: 0,
      driver2: Drivers.landoNorris,
      points2: 0,
      driver3: Drivers.georgeRussell,
      points3: 0,
    },
    {
      player: players.omar,
      driver1: Drivers.georgeRussell,
      points1: 0,
      driver2: Drivers.charlesLeclerc,
      points2: 0,
      driver3: Drivers.lewisHamilton,
      points3: 0,
    },
    {
      player: players.joe,
      driver1: Drivers.maxVerstappen,
      points1: 0,
      driver2: Drivers.georgeRussell,
      points2: 0,
      driver3: Drivers.landoNorris,
      points3: 0,
    },
    {
      player: players.michael,
      driver1: Drivers.oscarPiastri,
      points1: 0,
      driver2: Drivers.maxVerstappen,
      points2: 0,
      driver3: Drivers.landoNorris,
      points3: 0,
    },
    {
      player: players.koli,
      driver1: Drivers.landoNorris,
      points1: 0,
      driver2: Drivers.maxVerstappen,
      points2: 0,
      driver3: Drivers.oscarPiastri,
      points3: 0,
    },
  ];
}
