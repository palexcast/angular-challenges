import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CDFlashingDirective } from '@angular-challenges/shared/directives';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    CommonModule,
    CDFlashingDirective,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  template: ` <mat-form-field class="w-full" cd-flash>
    <input
      placeholder="Add one member to the list"
      matInput
      type="text"
      [(ngModel)]="label"
      (keydown)="handleKey($event)" />
  </mat-form-field>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent {
  @Output() labelEnter = new EventEmitter<string>();

  label = '';
  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.labelEnter.emit(this.label);
      this.label = '';
    }
  }
}
