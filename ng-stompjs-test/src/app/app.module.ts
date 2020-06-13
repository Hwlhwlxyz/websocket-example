import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { myRxStompConfig } from './my-rx-stomp.config';
import { Ng2stompjsComponent } from './ng2stompjs/ng2stompjs.component';
import { StompComponent } from './stomp/stomp.component';

@NgModule({
  declarations: [
    AppComponent,
    Ng2stompjsComponent,
    StompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  {
    provide: InjectableRxStompConfig,
    useValue: myRxStompConfig
  },
  {
    provide: RxStompService,
    useFactory: rxStompServiceFactory,
    deps: [InjectableRxStompConfig]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
