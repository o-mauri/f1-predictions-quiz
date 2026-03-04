import { Component } from '@angular/core';
import { Driver, Player } from '../../types/main-types';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { Drivers } from '../../types/drivers';
import { players } from '../../types/players';

interface Question16Answer {
  player: Player;
  driver1: Driver;
  points1: number;
  driver2: Driver;
  points2: number;
  driver3: Driver;
  points3: number;
}

@Component({
  selector: 'app-question-16',
  standalone: true,
  templateUrl: './question-16.component.html',
  styleUrl: './question-16.component.scss',
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent],
})
export class Question16Component {
  readonly answers: Question16Answer[] = [
    {
      player: players.kundan,
      driver1: Drivers.georgeRussell,
      points1: 0,
      driver2: Drivers.lewisHamilton,
      points2: 0,
      driver3: Drivers.kimiAntonelli,
      points3: 0,
    },
    {
      player: players.anna,
      driver1: Drivers.georgeRussell,
      points1: 0,
      driver2: Drivers.lewisHamilton,
      points2: 0,
      driver3: Drivers.maxVerstappen,
      points3: 0,
    },  
    {
      player: players.jazz,
      driver1: Drivers.lewisHamilton,
      points1: 0,
      driver2: Drivers.maxVerstappen,
      points2: 0,
      driver3: Drivers.charlesLeclerc,
      points3: 0,
    },
    {
      player: players.omar,
      driver1: Drivers.lewisHamilton,
      points1: 0,
      driver2: Drivers.maxVerstappen,
      points2: 0,
      driver3: Drivers.georgeRussell,
      points3: 0,
    },
    {
      player: players.joe,
      driver1: Drivers.maxVerstappen,
      points1: 0,
      driver2: Drivers.charlesLeclerc,
      points2: 0,
      driver3: Drivers.oscarPiastri,
      points3: 0,
    },
    {
      player: players.michael,
      driver1: Drivers.maxVerstappen,
      points1: 0,
      driver2: Drivers.landoNorris,
      points2: 0,
      driver3: Drivers.oscarPiastri,
      points3: 0,
    },
    {
      player: players.koli,
      driver1: Drivers.maxVerstappen,
      points1: 0,
      driver2: Drivers.landoNorris,
      points2: 0,
      driver3: Drivers.oscarPiastri,
      points3: 0,
    },
  ];
}
