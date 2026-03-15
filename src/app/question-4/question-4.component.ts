import { Component } from '@angular/core';
import { Drivers } from '../../types/drivers';
import { players, getPlayerKey } from '../../types/players';
import { Driver, Player, Race } from '../../types/main-types';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { RaceIconComponent } from '../race-icon/race-icon.component';
import { questionScores, QuestionScore } from '../../assets/data/scores';
import { Races } from '../../types/races';

interface Question4Answer {
  player: Player;
  driver: Driver;
  races: Race[];
}

@Component({
  selector: 'app-question-4',
  standalone: true,
  templateUrl: './question-4.component.html',
  styleUrl: './question-4.component.scss',
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent, RaceIconComponent],
})
export class Question4Component {

  getScore(player: Player): QuestionScore {
    return questionScores[4][getPlayerKey(player)];
  }

  fmt(n: number | null): string {
    if (n === null) return '';
    return n >= 0 ? `+${n}` : `${n}`;
  }

  readonly answers: Question4Answer[] = [
    { player: players.kundan,  driver: Drivers.lewisHamilton, races: [] },
    { player: players.anna,    driver: Drivers.lewisHamilton, races: [] },
    { player: players.jazz,    driver: Drivers.landoNorris, races: [] },
    { player: players.omar,    driver: Drivers.kimiAntonelli, races: [Races.china] },
    { player: players.joe,     driver: Drivers.kimiAntonelli, races: [Races.china] },
    { player: players.michael, driver: Drivers.landoNorris, races: [] },
    { player: players.koli,    driver: Drivers.landoNorris, races: [] },
  ];
}
