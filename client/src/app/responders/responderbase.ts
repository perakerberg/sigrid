import { ChatResponse, Mood } from '../chatresponse';

export interface Responder {
    respond(message: string, currentMood: Mood): ChatResponse[];
}

export abstract class ResponderBase implements Responder {

    mood: Mood;

    respond(message: string, currentMood: Mood): ChatResponse[] {
        this.mood = currentMood;
        const response = this.doResponse(message.toLowerCase());

        if (response && response.length > 0) {
            return response;
        }


    }

    abstract doResponse(message: string): ChatResponse[];

    protected CreateMoodResponse(mood: Mood, ...values: string[]): ChatResponse[] {
        return values.map(x => new ChatResponse(x, mood));
      }


      protected CreateResponse(...values: string[]): ChatResponse[] {
        return values.map(x => new ChatResponse(x));
      }

}
