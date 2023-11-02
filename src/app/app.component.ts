import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World</h1>

    <div *ngFor="let i of arr" >
      {{i}}
    </div>
    
  `
})
export class AppComponent {


    title = "Darin";
    arr = ["a", 'b', 'c' ];
    b = "b";
}
