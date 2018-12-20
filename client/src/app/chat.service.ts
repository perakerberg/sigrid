import { Injectable } from '@angular/core';
import { ChatResponse, Mood } from './chatresponse';
import { FoodService } from './food.service';
import { Responder } from './responders/responderbase';
import { MiscResponder } from './responders/miscresponder';
import { DefaultResponder } from './responders/defaultresponder';
import { TimeResponder } from './responders/timeresponder';
import { AnimalResponder } from './responders/animalresponder';
import { FoodResponder } from './responders/foodresponder';
import { MathResponder } from './responders/mathresponder';
import { JokeResponder } from './responders/jokeresponder';
import { Class12Responder } from './responders/class12responder';
import { Class56Responder } from './responders/class56responder';
import { Class34Responder } from './responders/class34responder';
import { EmptyResponder } from './responders/emptyReponder';
import { MoodResponder } from './responders/moodResponder';

@Injectable()
export class ChatService {

  private history: string[] = [];
  private responders: Responder[] =
    [
        new MoodResponder(),
        new Class56Responder(),
        new Class34Responder(),
        new Class12Responder(),
        new FoodResponder(),
        new AnimalResponder(),
        new TimeResponder(),
        new MathResponder(),
        new JokeResponder(),
        new MiscResponder(),
        new DefaultResponder(),
        new EmptyResponder()

    ];
  constructor(private foodService: FoodService) {

   }

  public sendMessage(message: string, currentMood: Mood): ChatResponse[] {

    // Gå igenom alla svarare och se om du hittar ett svar
        for (let i = 0; i < this.responders.length; i++) {
            const response = this.responders[i].respond(message, currentMood);
            if (response && response.length > 0) {
                return response;
            }
        }
        return [new ChatResponse('Hjälp! Ingen har berättat vad jag ska säga nu')];
  }

  private CreateMoodResponse(mood: Mood, ...values: string[]): ChatResponse[] {
    return values.map(x => new ChatResponse(x, mood));
  }


  private CreateResponse(...values: string[]): ChatResponse[] {
    return values.map(x => new ChatResponse(x));
  }







}
