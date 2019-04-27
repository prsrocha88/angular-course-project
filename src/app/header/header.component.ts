import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() selectPage = new EventEmitter<string>();

  onSelectPage(page: string) {
    this.selectPage.emit(page);
  }
}
