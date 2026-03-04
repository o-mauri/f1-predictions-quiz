import { Component } from '@angular/core';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { players } from '../../types/players';
import { Player, Race } from '../../types/main-types';
import { Races } from '../../types/races';
import { RaceIconComponent } from '../race-icon/race-icon.component';

interface Question18Answer {
  player: Player;
  race1: Race;
  raceText1: string;
  race2: Race;
  raceText2: string;
  race3: Race;
  raceText3: string;
}

@Component({
  selector: 'app-question-18',
  standalone: true,
  templateUrl: './question-18.component.html',
  styleUrl: './question-18.component.scss',
  imports: [QuestionTitleComponent, PlayerIconComponent, RaceIconComponent],
})
export class Question18Component {
  interRaces: Race[] = [];
  wetRaces: Race[] = [];

  readonly answers: Question18Answer[] = [
    {
      player: players.kundan,
      race1: Races.canada,
      raceText1: '',
      race2: Races.greatBritain,
      raceText2: '',
      race3: Races.saoPaulo,
      raceText3: '',
    },
    {
      player: players.anna,
      race1: Races.greatBritain,
      raceText1: '',
      race2: Races.belgium,
      raceText2: '',
      race3: Races.netherlands,
      raceText3: '',
    },
    {
      player: players.jazz,
      race1: Races.greatBritain,
      raceText1: '',
      race2: Races.belgium,
      raceText2: '',
      race3: Races.netherlands,
      raceText3: '',
    },
    {
      player: players.omar,
      race1: Races.canada,
      raceText1: '',
      race2: Races.greatBritain,
      raceText2: '',
      race3: Races.belgium,
      raceText3: '',
    },
    {
      player: players.joe,
      race1: Races.monaco,
      raceText1: '',
      race2: Races.austria,
      raceText2: '',
      race3: Races.netherlands,
      raceText3: '',
    },
    {
      player: players.michael,
      race1: Races.japan,
      raceText1: '',
      race2: Races.greatBritain,
      raceText2: '',
      race3: Races.belgium,
      raceText3: '',
    },
    {
      player: players.koli,
      race1: Races.greatBritain,
      raceText1: '',
      race2: Races.belgium,
      raceText2: '',
      race3: Races.italy,
      raceText3: '',
    },
  ];
}
