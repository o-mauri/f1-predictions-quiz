import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-question-title',
  standalone: true,
  templateUrl: './question-title.component.html',
  styleUrl: './question-title.component.scss',
})
export class QuestionTitleComponent {
  number = input.required<number>();
  title = input.required<string>();
  question = input.required<string>();
  description = input.required<string>();
}