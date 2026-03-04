import { Component, input, computed } from '@angular/core';
import { Race } from '../../types/main-types';

type Size = 'sm' | 'med' | 'large';
type Variant = 'square' | 'circular' | 'standard';

const SIZE_MAP: Record<Size, string> = {
  sm: '32px',
  med: '48px',
  large: '64px',
};

const FONT_SIZE_MAP: Record<Size, string> = {
  sm: '0.55rem',
  med: '0.65rem',
  large: '0.7rem',
};

const SURFACE_FONT_SIZE_MAP: Record<Size, string> = {
  sm: '0.9rem',
  med: '1.3rem',
  large: '1.8rem',
};

const BORDER_COLOR = '#3a3a3a';

@Component({
  selector: 'app-race-icon',
  standalone: true,
  template: `
    <div class="race-icon-wrapper">
      <div class="race-icon" [style]="containerStyle()">
        <img
          [src]="flagSrc()"
          [alt]="race().name + ' flag'"
          class="race-icon__img"
          [class.race-icon__img--dimmed]="!!surfaceText()"
        />
        @if (surfaceText()) {
          <span class="race-icon__surface-text" [style]="surfaceTextStyle()">{{
            surfaceText()
          }}</span>
        }
      </div>
      @if (showLabel()) {
        <span class="race-icon__label" [style]="labelStyle()">{{ race().name }}</span>
      }
    </div>
  `,
  styles: [
    `
      .race-icon-wrapper {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
      }

      .race-icon {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        flex-shrink: 0;
      }

      .race-icon__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .race-icon__img--dimmed {
        filter: brightness(0.4) saturate(0.7);
      }

      .race-icon__surface-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: 700;
        text-align: center;
        white-space: nowrap;
        pointer-events: none;
        letter-spacing: 0.02em;
      }

      .race-icon__label {
        color: white;
        text-align: center;
        line-height: 1.2;
        margin-top: 4px;
      }
    `,
  ],
})
export class RaceIconComponent {
  race = input.required<Race>();
  size = input<Size>('med');
  variant = input<Variant>('standard');
  showLabel = input<boolean>(false);
  surfaceText = input<string>('');

  flagSrc = computed(() => `assets/worldflags/${this.race().flag}`);

  containerStyle = computed(() => {
    const dim = SIZE_MAP[this.size()];
    const variant = this.variant();

    if (variant === 'standard') {
      const heightPx = parseInt(dim);
      const widthPx = Math.round((heightPx * 8) / 5);
      return {
        width: `${widthPx}px`,
        height: dim,
        border: `2px solid ${BORDER_COLOR}`,
        borderRadius: '6px',
      };
    }

    return {
      width: dim,
      height: dim,
      border: `2px solid ${BORDER_COLOR}`,
      borderRadius: variant === 'circular' ? '50%' : '6px',
    };
  });

  labelStyle = computed(() => ({
    fontSize: FONT_SIZE_MAP[this.size()],
  }));

  surfaceTextStyle = computed(() => ({
    fontSize: SURFACE_FONT_SIZE_MAP[this.size()],
  }));
}
