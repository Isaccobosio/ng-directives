import { Component, Input } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaded = false;
  important = false;
  dangerous = false;
  controlsVisible = false;
  fraseControllo = 'Visualizza controlli';
  componentClasses = {
    show: this.loaded,
    warning: this.important && this.dangerous
  };

  receive(event: any): void {
    if (event[1] === 1) {
      this.loaded = event[0];
    } else if (event[1] === 2) {
      this.important = event[0];
    } else if (event[1] === 3) {
      this.dangerous = event[0];
    }
    this.updateCSS();
  }

  updateCSS(): void {
    this.componentClasses = {
      show: this.loaded,
      warning: this.important && this.dangerous
    };
  }
  
  visualize(event: MouseEvent) {
    this.controlsVisible = !this.controlsVisible;
    if (this.controlsVisible) {
      this.fraseControllo = 'Nascondi i controlli';
    } else {
      this.fraseControllo = 'Visualizza controlli';
    }
  }
}
