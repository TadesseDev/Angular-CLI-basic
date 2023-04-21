import { Component } from '@angular/core';

@Component({
  selector: '#app-notification',
  template: `<div
      class="notification"
      style="display: {{ displayNotification }}"
    >
      {{ notificationText }}
    </div>
    <input
      type="text"
      [value]="notificationText"
      (input)="changeInputText($event)"
    />
    <span (click)="closeNotification($event)">close</span>`,
  styles: [
    `
      .notification
          color: red
    `,
  ],
})
export class NotificationComponent {
  notificationText: string = 'notification text';
  displayNotification: string = 'block';
  closeNotification(event: Event): void {
    const target = event.target as HTMLSpanElement;
    this.displayNotification =
      this.displayNotification == 'block' ? 'none' : 'block';
    console.log(target);
  }
  changeInputText(event: Event): void {
    this.notificationText = (event.target as HTMLInputElement).value;
  }
}
