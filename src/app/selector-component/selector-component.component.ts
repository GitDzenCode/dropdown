import { Component, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-selector-component',
  templateUrl: './selector-component.component.html',
  styleUrl: './selector-component.component.css'
})
export class SelectorComponentComponent {
  @ViewChild('selector')
  selector!: MatSelect;

  isOpen = false;
  selectedValue: string = '';
  currentSelectedValue: string = '';
  options = [
    { value: 'בקשה התקבלה', label: 'בקשה התקבלה' },
    { value: 'הועבר לטיפול', label: 'הועבר לטיפול' },
    { value: 'הופקה התחייבות', label: 'הופקה התחייבות' }
  ];

  confirm() {
    console.log(this.selectedValue);
    this.isOpen = false;
    this.currentSelectedValue = this.selectedValue;
    this.selector.close();
  }

  onDropdownClosed() {
    this.selectedValue = this.currentSelectedValue;
    this.isOpen = false;
  }

  onDropdownOpened() {
    this.isOpen = true;
  }

  reset() {
    this.selectedValue = '';
    this.currentSelectedValue = '';
  }
}
