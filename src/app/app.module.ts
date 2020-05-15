import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
//import { HttpClientModule } from '@angular/common/http';";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeDirective } from './home.directive';
import { HomePipe } from './home.pipe';
import { HomeService } from './home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDirective,
    HomePipe,
  
  ],
  imports: [
    BrowserModule,HttpClientModule 
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
