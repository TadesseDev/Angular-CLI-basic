import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerComponent } from './container/container.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [AppComponent, ContainerComponent, NavComponent, HeaderComponent, NotificationComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
