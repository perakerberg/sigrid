import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { ChatResponse, Mood } from './chatresponse';
import { FoodService } from './food.service';
import { MoodService } from './mood.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public moods  = Mood;
  message: string;
  response: ChatResponse[];
  lastSentMessage: string;
  lastResponse: string[];
  blinking: boolean;
  public get mood() {
      return this.moodService ? this.moodService.currentMood : Mood.Neutral;
  }
  public speaking: boolean;

  constructor(private service: ChatService, private moodService: MoodService) {
    this.lastResponse = [];
    this.startBlinking();
  }

  startBlinking() {
    this.blinking = false;
    setTimeout( () => {
            this.blinking = true;
            setTimeout( () => {
                this.startBlinking();
            }, 1000);
        }, 5000 );
    }


  // Lyssna på alla tangenter som trycks ner
  public onKeyPress(event: KeyboardEvent) {
    // Kolla om det var ENTER
    if (event.keyCode === 13) {
        // Töm förra svaret om det fanns något
        this.lastResponse = [];

        // Hämta svar för texten som matades in
        this.response = this.service.sendMessage(this.message, this.mood);

        this.moodService.registerResponse(this.response[0].mood);
        // Läs upp svaret, en mening i taget.
        this.speak(0);

        // Kom ihåg det senaste vi skickade
        this.lastSentMessage = this.message;
        this.message = '';
    }

}

  speak(index: number) {

    // Lägg ut svaret i text
    this.lastResponse.push(this.response[index].message);

    // Läs upp svaret med rätt röst
    responsiveVoice.speak(this.response[index].message, this.response[index].mood === Mood.English ? 'US English Female' :
    this.response[index].mood === Mood.Spanish ? 'Spanish Female' :
    this.response[index].mood === Mood.Scary ? 'Romanian Male' : 'Swedish Male',
        {   onend: () => {
                this.speaking = false;
                index++;

                if (this.response.length > index) {
                    setTimeout(() => {this.speak(index); }, 300);
                }
        },

        pitch: this.response[index].mood === Mood.Afraid ? 1.9 :
               this.response[index].mood === Mood.English ? 1.4 :
               this.response[index].mood === Mood.Sad ? 0.4 :
               this.response[index].mood === Mood.Scary ? 0.1 :
               this.response[index].mood === Mood.Sleeping ? 0.1 : 1.2,
        speed: this.response[index].mood === Mood.Sleeping ? 0.1 : 0.5,

        onstart: () => { setTimeout(() => {this.speaking = true; }, 200); }
        });
    }
}
