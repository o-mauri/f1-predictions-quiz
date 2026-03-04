import { Component } from '@angular/core';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { Player } from '../../types/main-types';
import { players } from '../../types/players';

interface Question17Answer {
  player: Player;
  q1true: boolean;
  q2true: boolean;
  q3true: boolean;
  q4true: boolean;
  q5true: boolean;
}

interface Question17Statement {
  statement: string;
  answer: boolean;
  confirmed: boolean;
}

@Component({
  selector: 'app-question-17',
  standalone: true,
  templateUrl: './question-17.component.html',
  styleUrl: './question-17.component.scss',
  imports: [QuestionTitleComponent, PlayerIconComponent],
})
export class Question17Component {
  statements: Question17Statement[] = [
    {
      statement:
        'One of Alonso or Hamilton will announce their retirement before the end of the season',
      answer: false,
      confirmed: false,
    },
    {
      statement: 'Christian Horner will return to F1 as a Team Principal/Key Stakeholder',
      answer: false,
      confirmed: false,
    },
    {
      statement: 'There will be a new 1st time race winner in 2026',
      answer: false,
      confirmed: false,
    },
    {
      statement: 'Audi scores more points than cadillac in 2026',
      answer: false,
      confirmed: false,
    },
    {
      statement: 'The Drivers Championship is decided at the final race of the season',
      answer: false,
      confirmed: false,
    },
  ];

  readonly answers: Question17Answer[] = [
    {
      player: players.kundan,
      q1true: false,
      q2true: true,
      q3true: false,
      q4true: true,
      q5true: false,
    },
    {
      player: players.anna,
      q1true: false,
      q2true: true,
      q3true: true,
      q4true: true,
      q5true: false,
    },
    {
      player: players.jazz,
      q1true: true,
      q2true: false,
      q3true: true,
      q4true: true,
      q5true: false,
    },
    {
      player: players.omar,
      q1true: true,
      q2true: false,
      q3true: true,
      q4true: true,
      q5true: true,
    },
    {
      player: players.joe,
      q1true: true,
      q2true: false,
      q3true: true,
      q4true: true,
      q5true: false,
    },
    {
      player: players.michael,
      q1true: true,
      q2true: true,
      q3true: true,
      q4true: true,
      q5true: true,
    },
    {
      player: players.koli,
      q1true: true,
      q2true: true,
      q3true: true,
      q4true: true,
      q5true: false,
    },
  ];

  private readonly answerKeys: (keyof Omit<Question17Answer, 'player'>)[] = [
    'q1true',
    'q2true',
    'q3true',
    'q4true',
    'q5true',
  ];

  getPlayerAnswer(answer: Question17Answer, statementIndex: number): boolean {
    return answer[this.answerKeys[statementIndex]];
  }

  isCorrect(statement: Question17Statement, playerAnswer: boolean): boolean {
    return statement.answer === playerAnswer;
  }

  getAnswersForPick(statementIndex: number, pickedTrue: boolean): Question17Answer[] {
    return this.answers.filter((a) => this.getPlayerAnswer(a, statementIndex) === pickedTrue);
  }
}
