import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-results-tab',
  imports: [CommonModule, MatIconModule],
  templateUrl: './results-tab.html',
  styleUrl: './results-tab.scss',
})
export class ResultsTab {
  public trayOpen: boolean = false
}
