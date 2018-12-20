import { ResponderBase } from './responderbase';
import { ChatResponse, Mood } from '../chatresponse';

export class Class12Responder extends ResponderBase {
    doResponse(message: string): ChatResponse[] {
        if (message.includes('vad gör du')) {
            return this.CreateResponse('Jag hjälper dig', 'Schysst va?!');
        }
        return [];
    }
}
