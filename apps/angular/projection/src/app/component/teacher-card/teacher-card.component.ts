import { Component, OnInit } from '@angular/core';
import {
  FakeHttpService,
  randTeacher,
} from '../../data-access/fake-http.service';
import { TeacherStore } from '../../data-access/teacher.store';
import { Teacher } from '../../model/teacher.model';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-teacher-card',
  template: `<app-card
    [list]="teachers"
    (addNewItem)="addNewItem()"
    (delete)="delete($event)">
    <img image src="assets/img/teacher.png" width="200px" />
    <ng-template #rowItem let-item>
      <span>{{ item.firstname }}</span>
    </ng-template>
  </app-card>`,
  standalone: true,
  styles: [
    `
      :host {
        --background-color: rgba(250, 0, 0, 0.1);
      }
    `,
  ],
  imports: [CardComponent],
})
export class TeacherCardComponent implements OnInit {
  teachers: Teacher[] = [];

  constructor(private http: FakeHttpService, private store: TeacherStore) {}

  ngOnInit(): void {
    this.http.fetchTeachers$.subscribe((t) => this.store.addAll(t));

    this.store.teachers$.subscribe((t) => (this.teachers = t));
  }
  addNewItem() {
    this.store.addOne(randTeacher());
  }
  delete(id: number) {
    this.store.deleteOne(id);
  }
}
