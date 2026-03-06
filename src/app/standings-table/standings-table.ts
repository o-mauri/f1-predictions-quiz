import { Component, computed, input } from '@angular/core';
import { standing } from '../../assets/data/data';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { TeamIconComponent } from '../team-icon/team-icon.component';

export interface PositionPoints {
  position: number;
  points: number;
  confirmed?: boolean;
}

@Component({
  selector: 'app-standings-table',
  imports: [DriverPhotoComponent, TeamIconComponent],
  templateUrl: './standings-table.html',
  styleUrl: './standings-table.scss',
})
export class StandingsTable {
  public inputData = input.required<standing[]>();
  public sortAscending = input<boolean>(false);
  public driverType = input<boolean>(true);

  public countLabel = input<string>('PTS');
  public goldenPosition = input<number>();
  public showRange = input<[number, number]>();
  public positionPoints = input<PositionPoints[]>();

  public positionPointsMap = computed(() => {
    const pts = this.positionPoints() ?? [];
    return new Map(pts.map(p => [p.position, p]));
  });

  public visibleData = computed(() => {
    const sorted = [...this.inputData()].sort((a, b) => {
      if (a.count !== b.count) {
        return this.sortAscending() ? a.count - b.count : b.count - a.count;
      }
      return a.priority - b.priority;
    });

    const range = this.showRange();
    const entries = sorted.map((row, i) => ({ row, position: i + 1 }));
    return range ? entries.slice(range[0] - 1, range[1]) : entries;
  });
}
