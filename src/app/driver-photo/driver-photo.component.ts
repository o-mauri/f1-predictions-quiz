import { Component, input, computed } from '@angular/core';
import { Driver } from '../../types/main-types';

type Size = 'sm' | 'med' | 'large';
type Variant = 'square' | 'circular' | 'initials';

const SIZE_MAP: Record<Size, string> = {
  sm: '32px',
  med: '48px',
  large: '64px',
};

const FONT_SIZE_MAP: Record<Size, string> = {
  sm: '13px',
  med: '16px',
  large: '22px',
};

@Component({
  selector: 'app-driver-photo',
  standalone: true,
  template: `
    <div class="driver-photo" [style]="containerStyle()" [class.driver-photo--greyed]="greyed()">
      @if (variant() === 'initials') {
        <span class="driver-photo__initials" [style]="initialsTextStyle()">{{ driver().initials }}</span>
      } @else {
        <img
          [src]="photoSrc()"
          [alt]="driver().longName + ' photo'"
          class="driver-photo__img"
        />
      }
      @if (crossed()) {
        <span class="driver-photo__cross"></span>
      }
      @if (ticked()) {
        <svg class="driver-photo__tick" viewBox="0 0 24 24" fill="none">
          <path d="M3 13 L8 18 L21 6" stroke="rgba(0,180,60,0.75)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      }
    </div>
  `,
  styles: [`
    .driver-photo {
      display: inline-flex;
      position: relative;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      flex-shrink: 0;
    }

    .driver-photo--greyed {
      opacity: 0.5;
    }

    .driver-photo__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
    }

    .driver-photo__initials {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: 700;
      letter-spacing: 0.5px;
      line-height: 1;
      user-select: none;
    }

    .driver-photo__cross {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .driver-photo__cross::before,
    .driver-photo__cross::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 3px;
      background: rgba(204, 0, 0, 0.75);
      transform-origin: center;
    }

    .driver-photo__cross::before {
      transform: translateY(-50%) rotate(45deg);
    }

    .driver-photo__cross::after {
      transform: translateY(-50%) rotate(-45deg);
    }

    .driver-photo__tick {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
  `],
})
export class DriverPhotoComponent {
  driver = input.required<Driver>();
  size = input<Size>('med');
  variant = input<Variant>('square');
  greyed = input<boolean>(false);
  crossed = input<boolean>(false);
  ticked = input<boolean>(false);

  photoSrc = computed(() => `assets/driverphotos/${this.driver().image}`);

  containerStyle = computed(() => {
    const dim = SIZE_MAP[this.size()];
    const variant = this.variant();
    const teamColor = this.driver().team.primaryColor;
    return {
      width: dim,
      height: dim,
      border: `2px solid ${teamColor}`,
      borderRadius: variant === 'square' ? '6px' : '50%',
      background: variant === 'initials' ? teamColor : undefined,
    };
  });

  initialsTextStyle = computed(() => {
    const hex = this.driver().team.primaryColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return {
      fontSize: FONT_SIZE_MAP[this.size()],
      color: luminance > 0.5 ? '#1a1a1a' : '#ffffff',
    };
  });
}
