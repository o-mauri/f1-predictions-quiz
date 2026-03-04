import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { Drivers } from '../../types/drivers';
import { Driver, Player, Race } from '../../types/main-types';
import { Races } from '../../types/races';
import { players } from '../../types/players';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { RaceIconComponent } from '../race-icon/race-icon.component';

interface Question10Answer {
  player: Player;
  race1: Race;
  race1pos: string;
  race1pts: number;
  race2: Race;
  race2pos: string;
  race2pts: number;
  race3: Race;
  race3pos: string;
  race3pts: number;
  race4: Race;
  race4pos: string;
  race4pts: number;
  race5: Race;
  race5pos: string;
  race5pts: number;
}

@Component({
  selector: 'app-question-10',
  standalone: true,
  templateUrl: './question-10.component.html',
  styleUrl: './question-10.component.scss',
  imports: [
    CommonModule,
    QuestionTitleComponent,
    DriverPhotoComponent,
    PlayerIconComponent,
    RaceIconComponent,
  ],
})
export class Question10Component {
  readonly drivers = Drivers;
  answers: Question10Answer[] = [
    {
      player: players.kundan,
      race1: Races.italy,
      race1pos: '',
      race1pts: 0,
      race2: Races.greatBritain,
      race2pos: '',
      race2pts: 0,
      race3: Races.mexicoCity,
      race3pos: '',
      race3pts: 0,
      race4: Races.italy,
      race4pos: '',
      race4pts: 0,
      race5: Races.austria,
      race5pos: '',
      race5pts: 0,
    },
    {
      player: players.anna,
      race1: Races.greatBritain,
      race1pos: '',
      race1pts: 0,
      race2: Races.saudiArabia,
      race2pos: '',
      race2pts: 0,
      race3: Races.mexicoCity,
      race3pos: '',
      race3pts: 0,
      race4: Races.netherlands,
      race4pos: '',
      race4pts: 0,
      race5: Races.miami,
      race5pos: '',
      race5pts: 0,
    },
    {
      player: players.jazz,
      race1: Races.japan,
      race1pos: '',
      race1pts: 0,
      race2: Races.singapore,
      race2pos: '',
      race2pts: 0,
      race3: Races.australia,
      race3pos: '',
      race3pts: 0,
      race4: Races.miami,
      race4pos: '',
      race4pts: 0,
      race5: Races.canada,
      race5pos: '',
      race5pts: 0,
    },
    {
      player: players.omar,
      race1: Races.greatBritain,
      race1pos: '',
      race1pts: 0,
      race2: Races.canada,
      race2pos: '',
      race2pts: 0,
      race3: Races.abuDhabi,
      race3pos: '',
      race3pts: 0,
      race4: Races.madrid,
      race4pos: '',
      race4pts: 0,
      race5: Races.japan,
      race5pos: '',
      race5pts: 0,
    },
    {
      player: players.joe,
      race1: Races.bahrain,
      race1pos: '',
      race1pts: 0,
      race2: Races.monaco,
      race2pos: '',
      race2pts: 0,
      race3: Races.azerbaijan,
      race3pos: '',
      race3pts: 0,
      race4: Races.canada,
      race4pos: '',
      race4pts: 0,
      race5: Races.miami,
      race5pos: '',
      race5pts: 0,
    },
    {
      player: players.michael,
      race1: Races.lasVegas,
      race1pos: '',
      race1pts: 0,
      race2: Races.greatBritain,
      race2pos: '',
      race2pts: 0,
      race3: Races.mexicoCity,
      race3pos: '',
      race3pts: 0,
      race4: Races.azerbaijan,
      race4pos: '',
      race4pts: 0,
      race5: Races.unitedStates,
      race5pos: '',
      race5pts: 0,
    },
    {
      player: players.koli,
      race1: Races.barcelonaCatalunya,
      race1pos: '',
      race1pts: 0,
      race2: Races.singapore,
      race2pos: '',
      race2pts: 0,
      race3: Races.mexicoCity,
      race3pos: '',
      race3pts: 0,
      race4: Races.belgium,
      race4pos: '',
      race4pts: 0,
      race5: Races.hungary,
      race5pos: '',
      race5pts: 0,
    },
  ];
}
