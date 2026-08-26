import { Component } from '@angular/core';
import { Player, Race } from '../../types/main-types';
import { CommonModule } from '@angular/common';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { Races } from '../../types/races';
import { players, getPlayerKey } from '../../types/players';
import { RaceIconComponent } from '../race-icon/race-icon.component';
import { questionScores, QuestionScore } from '../../assets/data/scores';

interface Question8Answer {
  player: Player;
  race1: Race;
  race2: Race;
  text1: string;
  red1: number;
  sc1: number;
  vsc1: number;
  text2: string;
  red2: number;
  sc2: number;
  vsc2: number;
}

@Component({
  selector: 'app-question-8',
  standalone: true,
  templateUrl: './question-8.component.html',
  styleUrl: './question-8.component.scss',
  imports: [CommonModule, QuestionTitleComponent, PlayerIconComponent, RaceIconComponent],
})
export class Question8Component {

  getScore(player: Player): QuestionScore {
    return questionScores[8][getPlayerKey(player)];
  }

  fmt(n: number | null): string {
    if (n === null) return '';
    return n >= 0 ? `+${n}` : `${n}`;
  }

  readonly answers: Question8Answer[] = [
    { player: players.kundan,  race1: Races.australia,  race2: Races.saoPaulo,     text1: "+15", red1: 0, sc1: 0, vsc1: 3, text2: "", red2: 0, sc2: 0, vsc2: 0 },
    { player: players.anna,    race1: Races.australia,  race2: Races.greatBritain, text1: "+15", red1: 0, sc1: 0, vsc1: 3, text2: "+20", red2: 0, sc2: 1, vsc2: 2 },
    { player: players.jazz,    race1: Races.monaco,     race2: Races.abuDhabi,     text1: "+35", red1: 1, sc1: 2, vsc1: 0, text2: "", red2: 0, sc2: 0, vsc2: 0 },
    { player: players.omar,    race1: Races.saudiArabia, race2: Races.madrid,      text1: "X", red1: 0, sc1: 0, vsc1: 0, text2: "", red2: 0, sc2: 0, vsc2: 0 },
    { player: players.joe,     race1: Races.canada,     race2: Races.azerbaijan,   text1: "+15", red1: 0, sc1: 0, vsc1: 3, text2: "", red2: 0, sc2: 0, vsc2: 0 },
    { player: players.michael, race1: Races.monaco,     race2: Races.belgium,      text1: "+35", red1: 1, sc1: 2, vsc1: 0, text2: "+20", red2: 0, sc2: 1, vsc2: 2 },
    { player: players.koli,    race1: Races.monaco,     race2: Races.belgium,      text1: "+35", red1: 1, sc1: 2, vsc1: 0, text2: "+20", red2: 0, sc2: 1, vsc2: 2 },
  ];
}
