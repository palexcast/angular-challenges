import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CDFlashingDirective } from '@angular-challenges/shared/directives';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ListItemComponent } from './list-item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    CDFlashingDirective,
    MatDividerModule,
    MatListModule,
    ListItemComponent,
  ],
  template: ` <mat-list class="flex w-full">
    <div *ngIf="names?.length === 0" class="empty-list-label">Empty list</div>
    <app-list-item
      *ngFor="let name of names; trackBy: trackByFn"
      [name]="name" />
    <mat-divider *ngIf="names?.length !== 0"></mat-divider>
  </mat-list>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() names: string[] = [];

  trackByFn(_: number, name: string) {
    return name;
  }
}
