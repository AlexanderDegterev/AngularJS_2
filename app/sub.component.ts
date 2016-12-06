import {Component,Input} from 'angular2/core';

@Component({
selector: 'my-component',
template: `
<!--для вывода данных их массива предусмотрена директива *ngFor="let item of items"-->
                <!--<tr *ngFor="let item of items">-->
                
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <td>{{elt.purchase}}</td>
                        <td>{{elt.price}}</td>
                        <td><input type="checkbox" [(ngModel)]="elt.done" /></td>
                        <button class="btn btn-default" (click)="delete()">Удалить</button>
                    </tr>
                </tbody>
            </table>
`,
  styleUrls: ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css'],
  styles: [` 
            td{max-width:40px;}
    `]
})
export class MyComponent {
  @Input()
  elt: any;
  
  @Input()
  data: any[];

  delete() {
    var index = this.data.indexOf(this.elt);
    this.data.splice(index, 1);
  }
}