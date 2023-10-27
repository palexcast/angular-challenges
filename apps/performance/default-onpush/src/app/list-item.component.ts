import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CDFlashingDirective } from '@angular-challenges/shared/directives';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, CDFlashingDirective, MatListModule],
  template: `<mat-list-item cd-flash class="text-orange-500">
    <div MatListItemLine class="flex justify-between">
      <h3 title="Name">
        {{ name }}
      </h3>
    </div>
  </mat-list-item>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  @Input({ required: true }) name: string = '';
}
