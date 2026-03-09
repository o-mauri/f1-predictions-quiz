import { Component } from '@angular/core';

import { QuestionTitleComponent } from '../question-title/question-title.component';
import { Driver, Player } from '../../types/main-types';

import { Drivers } from '../../types/drivers';
import { players, getPlayerKey } from '../../types/players';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { questionScores, QuestionScore } from '../../assets/data/scores';

interface Question20Answer {
  player: Player;
  driver: Driver | null;
}

@Component({
  selector: 'app-question-20',
  standalone: true,
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent],
  templateUrl: './question-20.component.html',
  styleUrl: './question-20.component.scss',
})
export class Question20Component {
  getScore(player: Player): QuestionScore {
    return questionScores[20][getPlayerKey(player)];
  }

  fmt(n: number | null): string {
    if (n === null) return '';
    return n >= 0 ? `+${n}` : `${n}`;
  }

  readonly answers: Question20Answer[] = [
    { player: players.kundan,  driver: Drivers.georgeRussell },
    { player: players.anna,    driver: null },
    { player: players.jazz,    driver: null },
    { player: players.omar,    driver: Drivers.georgeRussell },
    { player: players.joe,     driver: Drivers.maxVerstappen },
    { player: players.michael, driver: Drivers.maxVerstappen },
    { player: players.koli,    driver: null },
  ];
}
