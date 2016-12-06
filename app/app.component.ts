import {Component} from 'angular2/core';
import {MyComponent} from './sub.component';

@Component({
  selector: 'my-app',
  template: `

<div class="page-header">
        <h1> Список покупок </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Название" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, price)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Предмет</th>
                    <th>Цена</th>
                    <th>Куплено</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#elt of items">
                    <my-component [elt]="elt" [items]="items"></my-component>
                </tr>
            </tbody>
        </table>
    </div>
    

    <div *ngFor="#elt of data">
      <my-component [elt]="elt" [data]="data"></my-component>
    </div>
  `,
  directives: [MyComponent]
})
export class AppComponent {
  constructor() {
    this.data = [
      { purchase: "Хлеб", done: false, price: 15 },
      { purchase: "Масло", done: false, price: 60 },
      { purchase: "Картофель", done: true, price: 22 },
      { purchase: "Сыр", done: false, price:31 }
        
    ]
  };
  addItem(text: string, price: number): void {

    if(text==null || text==undefined || text.trim()=="")
      return;
    if(price==null || price==undefined)
      return;
    this.data.push(new data(text, price));
  }
}