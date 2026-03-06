import { Component, signal, computed } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon'
import { TotalScoresComponent } from './total-scores/total-scores.component';
import { Question1Component } from './question-1/question-1.component';
import { Question2Component } from './question-2/question-2.component';
import { Question3Component } from './question-3/question-3.component';
import { Question4Component } from './question-4/question-4.component';
import { Question5Component } from './question-5/question-5.component';
import { Question6Component } from './question-6/question-6.component';
import { Question7Component } from './question-7/question-7.component';
import { Question8Component } from './question-8/question-8.component';
import { Question9Component } from './question-9/question-9.component';
import { Question10Component } from './question-10/question-10.component';
import { Question11Component } from './question-11/question-11.component';
import { Question12Component } from './question-12/question-12.component';
import { Question13Component } from './question-13/question-13.component';
import { Question14Component } from './question-14/question-14.component';
import { Question15Component } from './question-15/question-15.component';
import { Question16Component } from './question-16/question-16.component';
import { Question17Component } from './question-17/question-17.component';
import { Question18Component } from './question-18/question-18.component';
import { Question19Component } from './question-19/question-19.component';
import { Question20Component } from './question-20/question-20.component';
import { QuestionSelectorComponent } from './question-selector/question-selector.component';

const TOTAL_QUESTIONS = 20;

@Component({
  selector: 'app-root',
  imports: [
    QuestionSelectorComponent,
    TotalScoresComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question5Component,
    Question6Component,
    Question7Component,
    Question8Component,
    Question9Component,
    Question10Component,
    Question11Component,
    Question12Component,
    Question13Component,
    Question14Component,
    Question15Component,
    Question16Component,
    Question17Component,
    Question18Component,
    Question19Component,
    Question20Component
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly appTitle = 'F1 Predictions Quiz';

  /** 0 = Total scores, 1–20 = Question 1–20 */
  readonly currentIndex = signal(0);

  readonly selectorOptions = computed(() => {
    const options: { value: number; label: string }[] = [
      { value: 0, label: 'Total scores' },
    ];
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      options.push({ value: i, label: `Question ${i}` });
    }
    return options;
  });

  readonly canGoPrev = computed(() => this.currentIndex() > 0);
  readonly canGoNext = computed(() => this.currentIndex() < TOTAL_QUESTIONS);

  goPrev(): void {
    if (this.canGoPrev()) {
      this.currentIndex.update((i) => i - 1);
    }
  }

  goNext(): void {
    if (this.canGoNext()) {
      this.currentIndex.update((i) => i + 1);
    }
  }

  onSelect(value: string | number): void {
    const index = Number(value);
    if (!Number.isNaN(index) && index >= 0 && index <= TOTAL_QUESTIONS) {
      this.currentIndex.set(index);
    }
  }
}
