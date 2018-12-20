import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { FoodService } from './food.service';
import { MoodService } from './mood.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ChatService, FoodService, MoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
