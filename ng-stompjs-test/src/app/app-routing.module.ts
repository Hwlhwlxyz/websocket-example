import { StompComponent } from './stomp/stomp.component';
import { Ng2stompjsComponent } from './ng2stompjs/ng2stompjs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'ng2stomp', component:Ng2stompjsComponent},
  {path:'stompjs', component:StompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
