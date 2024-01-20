import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quizapp';
  isExpanded: boolean = false;

  changeValue(value: any) {
    this.isExpanded = value;
  }
}
