import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() searchTextFieldChangeEvent = new EventEmitter<string>();

  onSerchTextFieldChange(event: any) {
    console.log("login from app-search");
    
    this.searchTextFieldChangeEvent.emit(event.target.value);
  }
}
