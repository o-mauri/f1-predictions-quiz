import { Component } from '@angular/core';
import { Player, Race } from '../../types/main-types';
import { CommonModule } from '@angular/common';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { Races } from '../../types/races';
import { players } from '../../types/players';
import { RaceIconComponent } from '../race-icon/race-icon.component';

interface Question8Answer {
  player: Player;
  race1: Race;
  race2: Race;
  red1: number;
  sc1: number;
  vsc1: number;
  red2: number;
  sc2: number;
  vsc2: number;
  confirmedPoints: string;
}

@Component({
  selector: 'app-question-8',
  standalone: true,
  templateUrl: './question-8.component.html',
  styleUrl: './question-8.component.scss',
  imports: [CommonModule, QuestionTitleComponent, PlayerIconComponent, RaceIconComponent],
})
export class Question8Component {
  readonly answers: Question8Answer[] = [
    {
      player: players.kundan,
      race1: Races.australia,
      race2: Races.saoPaulo,
      red1: 0,
      sc1: 0,
      vsc1: 0,
      red2: 0,
      sc2: 0,
      vsc2: 0,
      confirmedPoints: '+0',
    },
    {
      player: players.anna,
      race1: Races.australia,
      race2: Races.greatBritain,
      red1: 0,
      sc1: 0,
      vsc1: 0,
      red2: 0,
      sc2: 0,
      vsc2: 0,
      confirmedPoints: '+0',
    },
    {
      player: players.jazz,
      race1: Races.monaco,
      race2: Races.abuDhabi,
      red1: 0,
      sc1: 0,
      vsc1: 0,
      red2: 0,
      sc2: 0,
      vsc2: 0,
      confirmedPoints: '+0',
    },
    {
      player: players.omar,
      race1: Races.saudiArabia,
      race2: Races.madrid,
      red1: 0,
      sc1: 0,
      vsc1: 0,
      red2: 0,
      sc2: 0,
      vsc2: 0,
      confirmedPoints: '+0',
    },
    {
      player: players.joe,
      race1: Races.canada,
      race2: Races.azerbaijan,
      red1: 0,
      sc1: 0,
      vsc1: 0,
      red2: 0,
      sc2: 0,
      vsc2: 0,
      confirmedPoints: '+0',
    },
    {
      player: players.michael,
      race1: Races.monaco,
      race2: Races.belgium,
      red1: 0,
      sc1: 0,
      vsc1: 0,
      red2: 0,
      sc2: 0,
      vsc2: 0,
      confirmedPoints: '+0',
    },
    {
      player: players.koli,
      race1: Races.monaco,
      race2: Races.belgium,
      red1: 0,
      sc1: 0,
      vsc1: 0,
      red2: 0,
      sc2: 0,
      vsc2: 0,
      confirmedPoints: '+0',
    },
  ];
}
