import { Component, Input } from '@angular/core';

@Component({
  selector: 'tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {

  @Input() text: string = '';
  @Input() color?: string = undefined;
  constructor() { }

  getColor(): string {
    if(this.color){
      return this.color;
    } else {
      if (this.text === 'field') {
        return 'red';
      } else if (this.text === 'function') {
        return 'green';
      } else {
        return 'gray';
      }
    }
  }
}
