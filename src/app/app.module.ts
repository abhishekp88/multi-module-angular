import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Module1  } from "../../projects/app1/src/app/app.module";
import { Module2 } from "../../projects/app2/src/app/app.module";
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path: 'app1', 
   loadChildren: '../../projects/app1/src/app/app.module'},
  {path: 'app2', 
   loadChildren: '../../projects/app2/src/app/app.module'},
  { path: '**', redirectTo: '/app1/one'}
 ];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    Module1,
    Module2
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
