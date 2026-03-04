import {
  Component,
  ElementRef,
  computed,
  HostListener,
  input,
  output,
  signal,
  inject,
} from '@angular/core';

export interface SelectOption {
  value: number;
  label: string;
}

@Component({
  selector: 'app-question-selector',
  standalone: true,
  template: `
    <div class="dropdown" [class.dropdown-open]="isOpen()">
      <button
        type="button"
        class="dropdown-trigger"
        [attr.aria-expanded]="isOpen()"
        aria-haspopup="listbox"
        [attr.aria-label]="'Select question or total scores'"
        (click)="toggle()"
      >
        <span class="dropdown-label">{{ selectedLabel() }}</span>
        <span class="dropdown-chevron" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 4.5L6 8L9.5 4.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
      @if (isOpen()) {
        <ul
          class="dropdown-panel"
          role="listbox"
          [attr.aria-activedescendant]="'opt-' + value()"
        >
          @for (opt of options(); track opt.value) {
            <li
              [id]="'opt-' + opt.value"
              role="option"
              [attr.aria-selected]="opt.value === value()"
              class="dropdown-option"
              [class.dropdown-option-selected]="opt.value === value()"
              (click)="select(opt.value)"
            >
              {{ opt.label }}
            </li>
          }
        </ul>
      }
    </div>
  `,
  styles: [
    `
      :host {
        flex: 1;
        min-width: 0;
        display: flex;
      }

      .dropdown {
        flex: 1;
        min-width: 0;
        position: relative;
      }

      .dropdown-trigger {
        width: 100%;
        height: 2.75rem;
        padding: 0 2.25rem 0 0.75rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        background: var(--input-bg);
        color: var(--accent);
        border: 1px solid var(--accent-soft);
        border-radius: 4px;
        font-size: 1rem;
        font-family: var(--font-body);
        font-weight: 500;
        letter-spacing: 0.03em;
        cursor: pointer;
        text-align: left;
        transition: border-color 0.15s ease, box-shadow 0.15s ease;

        &:hover {
          border-color: var(--accent-dim);
        }

        &:focus {
          outline: none;
          border-color: var(--focus-ring);
          box-shadow: 0 0 0 2px var(--racing-red-dark);
        }
      }

      .dropdown-label {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .dropdown-chevron {
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--accent);
        transition: transform 0.2s ease;
      }

      .dropdown-open .dropdown-chevron {
        transform: rotate(180deg);
      }

      .dropdown-panel {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        margin: 0;
        padding: 0.25rem 0;
        list-style: none;
        background: var(--racing-red);
        border: 1px solid var(--accent-soft);
        border-radius: 4px;
        box-shadow: var(--shadow), 0 8px 24px rgba(0, 0, 0, 0.5);
        max-height: 16rem;
        overflow-y: auto;
        z-index: 20;
      }

      .dropdown-option {
        padding: 0.5rem 0.75rem;
        font-size: 0.9375rem;
        font-family: var(--font-body);
        font-weight: 500;
        letter-spacing: 0.02em;
        color: var(--accent);
        cursor: pointer;
        transition: background 0.1s ease;

        &:hover {
          background: var(--racing-red-border);
        }
      }

      .dropdown-option-selected {
        background: var(--racing-red-dark);
        color: var(--accent);
      }

      @media (min-width: 480px) {
        .dropdown-trigger {
          height: 3rem;
          font-size: 1.0625rem;
        }
      }
    `,
  ],
})
export class QuestionSelectorComponent {
  readonly options = input.required<SelectOption[]>();
  readonly value = input.required<number>();

  readonly valueChange = output<number>();

  readonly isOpen = signal(false);

  readonly selectedLabel = computed(() => {
    const v = this.value();
    const opts = this.options();
    const found = opts.find((o) => o.value === v);
    return found ? found.label : '';
  });

  toggle(): void {
    this.isOpen.update((open) => !open);
  }

  select(val: number): void {
    this.valueChange.emit(val);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node;
    if (this.isOpen() && !this.elementRef?.nativeElement?.contains(target)) {
      this.isOpen.set(false);
    }
  }

  private elementRef = inject(ElementRef);
}
