import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() page: string;

  title = 'course-project-basics';

  setPage($event) {
    this.page = $event;
  }
}
