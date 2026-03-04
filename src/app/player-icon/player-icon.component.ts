import { Component, input, computed } from '@angular/core';
import { Player } from '../../types/main-types';

type Size = 'sm' | 'med' | 'large';
type Variant = 'image' | 'initials';

const SIZE_MAP: Record<Size, string> = {
  sm: '32px',
  med: '48px',
  large: '64px',
};

const FONT_SIZE_MAP: Record<Size, string> = {
  sm: '11px',
  med: '16px',
  large: '22px',
};

const NAME_FONT_SIZE_MAP: Record<Size, string> = {
  sm: '9px',
  med: '11px',
  large: '13px',
};

@Component({
  selector: 'app-player-icon',
  standalone: true,
  template: `
    @if (variant() === 'image') {
      <div class="player-icon-wrap">
        <div class="player-icon" [style]="imageContainerStyle()">
          <img
            [src]="imageSrc()"
            [alt]="player().name"
            class="player-icon__img"
          />
        </div>
        @if (showName()) {
          <span class="player-icon__name" [style]="nameTextStyle()">{{ player().name }}</span>
        }
      </div>
    } @else {
      <div class="player-icon player-icon--initials" [style]="initialsContainerStyle()">
        <span class="player-icon__initials" [style]="initialsTextStyle()">{{ player().initials }}</span>
      </div>
    }
  `,
  styles: [`
    .player-icon-wrap {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 0.35rem;
    }

    .player-icon {
      display: inline-flex;
      position: relative;
      overflow: hidden;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .player-icon__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .player-icon__initials {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: 700;
      letter-spacing: 0.5px;
      line-height: 1;
      user-select: none;
    }

    .player-icon__name {
      color: #ffffff;
      font-weight: 600;
      letter-spacing: 0.03em;
      white-space: nowrap;
    }
  `],
})
export class PlayerIconComponent {
  player = input.required<Player>();
  size = input<Size>('med');
  variant = input<Variant>('image');
  showName = input<boolean>(true);

  imageSrc = computed(() => `assets/players/${this.player().image}`);

  imageContainerStyle = computed(() => {
    const dim = SIZE_MAP[this.size()];
    return {
      width: dim,
      height: dim,
      border: '2px solid var(--racing-red-border)',
    };
  });

  initialsContainerStyle = computed(() => {
    const dim = SIZE_MAP[this.size()];
    return {
      width: dim,
      height: dim,
      background: this.player().color,
    };
  });

  initialsTextStyle = computed(() => {
    const hex = this.player().color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return {
      fontSize: FONT_SIZE_MAP[this.size()],
      color: luminance > 0.5 ? '#1a1a1a' : '#ffffff',
    };
  });

  nameTextStyle = computed(() => ({
    fontSize: NAME_FONT_SIZE_MAP[this.size()],
  }));
}
