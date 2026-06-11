import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './playground/components/users/users.component';

@NgModule({
  declarations: [
    // Component, Directives, Pipes
    AppComponent,
    UsersComponent,
  ],
  imports: [
    // Modules
    BrowserModule,
  ],
  providers: [], // Services
  bootstrap: [AppComponent],
})
export class AppModule {}
