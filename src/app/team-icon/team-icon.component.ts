import { Component, input, computed } from '@angular/core';
import { Team } from '../../types/main-types';

type Size = 'sm' | 'med' | 'large';
type Variant = 'square' | 'circular';

const SIZE_MAP: Record<Size, string> = {
  sm: '32px',
  med: '48px',
  large: '64px',
};

const NAME_FONT_SIZE_MAP: Record<Size, string> = {
  sm: '9px',
  med: '11px',
  large: '13px',
};

@Component({
  selector: 'app-team-icon',
  standalone: true,
  template: `
    <div class="team-icon-wrapper">
      <div class="team-icon" [style]="containerStyle()">
        <img
          [src]="logoSrc()"
          [alt]="team().name + ' logo'"
          class="team-icon__img"
        />
      </div>
      @if (showName()) {
        <span class="team-icon__name" [style]="nameTextStyle()">{{ team().name }}</span>
      }
    </div>
  `,
  styles: [`
    .team-icon-wrapper {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 0.35rem;
    }

    .team-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      flex-shrink: 0;
    }

    .team-icon__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.4);
    }

    .team-icon__name {
      color: #ffffff;
      font-weight: 600;
      letter-spacing: 0.03em;
      white-space: nowrap;
      text-align: center;
    }
  `],
})
export class TeamIconComponent {
  team = input.required<Team>();
  size = input<Size>('med');
  variant = input<Variant>('square');
  showName = input<boolean>(false);

  logoSrc = computed(() => `assets/teamlogos/${this.team().logo}`);

  nameTextStyle = computed(() => ({
    fontSize: NAME_FONT_SIZE_MAP[this.size()],
  }));

  containerStyle = computed(() => {
    const dim = SIZE_MAP[this.size()];
    const isCircular = this.variant() === 'circular';
    return {
      width: dim,
      height: dim,
      border: `2px solid ${this.team().primaryColor}`,
      borderRadius: isCircular ? '50%' : '6px',
    };
  });
}
