import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'dir-temp',
  template: `
    <button [ngClass]="pressedClassesLoaded"    (click)="onClickLoaded($event, 'loaded'   )">Loaded</button>
    <button [ngClass]="pressedClassesImportant" (click)="onClickLoaded($event, 'important')">Important</button>
    <button [ngClass]="pressedClassesDangerous" (click)="onClickLoaded($event, 'dangerous')">Dangerous</button>
  `,
  styleUrls: ['./temp.component.css']
})
export class TempComponent {
  @Output() update = new EventEmitter<[boolean, number]>();

  loadedIsPressed = false;
  importantIsPressed = false;
  dangerousIsPressed = false;
  pressedClassesLoaded: any;
  pressedClassesImportant: any;
  pressedClassesDangerous: any;

  onClickLoaded(event: MouseEvent, button: string): void {
    if (button === 'loaded') {
      this.pressedClassesLoaded = {pressed: !this.loadedIsPressed};
      this.loadedIsPressed = !this.loadedIsPressed;
      this.update.emit([this.loadedIsPressed, 1]);
    } else
    if (button === 'important') {
      this.pressedClassesImportant = {pressed: !this.importantIsPressed};
      this.importantIsPressed = !this.importantIsPressed;
      this.update.emit([this.importantIsPressed, 2]);
    } else
    if (button === 'dangerous') {
      this.pressedClassesDangerous = {pressed: !this.dangerousIsPressed};
      this.dangerousIsPressed = !this.dangerousIsPressed;
      this.update.emit([this.dangerousIsPressed, 3]);
    }
  }
}
