import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getUrl()
  {
    return "url('https://image.freepik.com/darmowe-wektory/tlo-medyczne-struktury-molekularnej_115579-408.jpg')";
  }

}

