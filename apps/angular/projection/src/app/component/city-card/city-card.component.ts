import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { City } from '../../model/city.model';
import {
  FakeHttpService,
  randomCity,
} from '../../data-access/fake-http.service';
import { CityStore } from '../../data-access/city.store';

@Component({
  selector: 'app-city-card',
  template: `<app-card
    [list]="cities"
    (addNewItem)="addNewItem()"
    (delete)="delete($event)">
    <img image src="assets/img/teacher.png" width="200px" />
    <ng-template #rowItem let-item>
      <span>{{ item.name }}, {{ item.country }}</span>
    </ng-template>
  </app-card>`,
  standalone: true,
  styles: [
    `
      :host {
        --background-color: rgba(0, 0, 250, 0.1);
      }
    `,
  ],
  imports: [CardComponent],
})
export class CityCardComponent implements OnInit {
  cities: City[] = [];

  constructor(private http: FakeHttpService, private store: CityStore) {}

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((t) => this.store.addAll(t));

    this.store.cities$.subscribe((c) => (this.cities = c));
  }
  addNewItem() {
    this.store.addOne(randomCity());
  }
  delete(id: number) {
    this.store.deleteOne(id);
  }
}
