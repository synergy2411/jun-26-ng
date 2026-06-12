import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './playground/components/users/users.component';
import { FormsModule } from '@angular/forms';
import { UserImageComponent } from './playground/components/users/user-image/user-image.component';
import { UserInfoComponent } from './playground/components/users/user-info/user-info.component';
import { CardComponent } from './playground/ui/card/card.component';
import { LifeCycleComponent } from './playground/components/life-cycle/life-cycle.component';
import { DirectiveDemoComponent } from './playground/components/directive-demo/directive-demo.component';

@NgModule({
  declarations: [
    // Component, Directives, Pipes
    AppComponent,
    UsersComponent,
    UserImageComponent,
    UserInfoComponent,
    CardComponent,
    LifeCycleComponent,
    DirectiveDemoComponent,
  ],
  imports: [
    // Modules
    BrowserModule,
    FormsModule,
  ],
  providers: [], // Services
  bootstrap: [AppComponent],
})
export class AppModule {}
