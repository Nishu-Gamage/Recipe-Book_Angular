import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loaderFeature = 'recipe';

  onNavEvent(navClickEvent:string){
    this.loaderFeature = navClickEvent;
  }

}
