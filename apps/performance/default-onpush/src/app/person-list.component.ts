import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input.component';
import { ListComponent } from './list.component';

@Component({
  selector: 'app-person-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, TextInputComponent, ListComponent],
  template: `
    <h1 cd-flash class="font-semibold text-center" title="Title">
      {{ title | titlecase }}
    </h1>

    <app-text-input class="w-4/5" cd-flash (labelEnter)="onLabel($event)" />
    <app-list class="w-full" [names]="names"></app-list>
  `,
  host: {
    class: 'w-full flex flex-col items-center',
  },
})
export class PersonListComponent {
  @Input() title = '';
  @Input() names: string[] = [];

  onLabel(label: string) {
    this.names = [label, ...this.names];
  }
}
