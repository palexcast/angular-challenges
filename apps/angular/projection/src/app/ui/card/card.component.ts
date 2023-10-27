import { JsonPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [NgIf, NgFor, ListItemComponent, NgTemplateOutlet, JsonPipe],
})
export class CardComponent<T extends { id: number }> {
  @Input({ required: true }) list: T[] = [];
  @ContentChild('rowItem', { read: TemplateRef }) rowTemplate!: TemplateRef<{
    $implicit: T;
  }>;

  @Output() addNewItem = new EventEmitter<void>();
  @Output() delete = new EventEmitter<number>();
}
