import { Component } from '@angular/core';

@Component({
  selector: 'my-p',
  template: `
    <p style="font-weight: 300;">
      <ng-content></ng-content>
    </p>
  `,
  styles: [
  ]
})
export class MyPComponent {

}
