import { Component } from '@angular/core';
import { players, getPlayerKey } from '../../types/players';
import { Drivers } from '../../types/drivers';
import { Races } from '../../types/races';
import { Driver, Player, Race } from '../../types/main-types';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { RaceIconComponent } from '../race-icon/race-icon.component';
import { questionScores, QuestionScore } from '../../assets/data/scores';

interface Question12Answer {
  player: Player;
  selectedNumber: number;
}

interface SprintRaceResult {
  race: Race;
  sprintWinner: Driver | null;
  mainRaceWinner: Driver | null;
}

@Component({
  selector: 'app-question-12',
  standalone: true,
  templateUrl: './question-12.component.html',
  styleUrl: './question-12.component.scss',
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent, RaceIconComponent],
})
export class Question12Component {
  getScore(player: Player): QuestionScore {
    return questionScores[12][getPlayerKey(player)];
  }

  fmt(n: number | null): string {
    if (n === null) return '';
    return n >= 0 ? `+${n}` : `${n}`;
  }

  readonly answers: Question12Answer[] = [
    { player: players.kundan,  selectedNumber: 3 },
    { player: players.anna,    selectedNumber: 3 },
    { player: players.jazz,    selectedNumber: 4 },
    { player: players.omar,    selectedNumber: 2 },
    { player: players.joe,     selectedNumber: 4 },
    { player: players.michael, selectedNumber: 3 },
    { player: players.koli,    selectedNumber: 2 },
  ];

  readonly sprintRaces: SprintRaceResult[] = [
    { race: Races.china,        sprintWinner: Drivers.georgeRussell, mainRaceWinner: Drivers.kimiAntonelli },
    { race: Races.miami,        sprintWinner: null, mainRaceWinner: null },
    { race: Races.canada,       sprintWinner: null, mainRaceWinner: null },
    { race: Races.greatBritain, sprintWinner: null, mainRaceWinner: null },
    { race: Races.netherlands,  sprintWinner: null, mainRaceWinner: null },
    { race: Races.singapore,    sprintWinner: null, mainRaceWinner: null },
  ];

  sameWinnerCount(): number {
    return this.sprintRaces.filter(
      (sr) => sr.sprintWinner && sr.mainRaceWinner && sr.sprintWinner === sr.mainRaceWinner,
    ).length;
  }

  isSameWinner(sr: SprintRaceResult): boolean {
    return !!(sr.sprintWinner && sr.mainRaceWinner && sr.sprintWinner === sr.mainRaceWinner);
  }
}
