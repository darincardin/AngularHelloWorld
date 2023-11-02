import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World</h1>

    <span *ngFor="let i of arr" >
      {{i}}
    </span>
    
  `
})
export class AppComponent {


    title = "Darin";
    arr = ["a", 'b', 'c' ];
    b = "b";
}
