import { Component } from '@angular/core';
import { GuiColumn } from '@generic-ui/ngx-grid';

@Component({
  selector: 'generic-ui-grid-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grid';


  columns: Array<GuiColumn> = [
    {
      header: 'Name',
      field: 'name'
    },
    {
      header: 'Job',
      field: 'job'
    },
    {
      header: 'Age',
      field: 'age'
    }];

  source: Array<any> = [
    {
      name: 'Brad',
      job: 'programmer',
      age: '40'
    },
    {
      name: 'John',
      job: 'athlete',
      age: '22'
    },
    {
      name: 'Eve',
      job: 'artist',
      age: '25'
    }];
}
