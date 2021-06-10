import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item'; //Se importa el modelo item

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
// Typescript es estricto, no permite definir variables sin inicializarlas
  items: Item[] = []; //Este objeto esta declarado en models/item.ts

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
      id: 0,
      title: 'manzana',
      price: 10.5,
      quantity: 4,
      completed: false
      },
      {
      id: 1,
      title: 'pan',
      price: 3.5,
      quantity: 8,
      completed: true
    }];
  }

}
