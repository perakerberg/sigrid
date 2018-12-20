import { ResponderBase } from './responderbase';
import { ChatResponse, Mood } from '../chatresponse';

export class Class56Responder extends ResponderBase {
    doResponse(message: string): ChatResponse[] {

        if (message.includes('gammal är du')) {
            return this.CreateMoodResponse(Mood.Afraid, 'Jag är sju miljoner år', 'Jättegammalt.');
        }
        if (message.includes('beatbox')) {
            return this.CreateResponse('t-p-t-p-t-t-p-t-p-t-t-p-t-p-t');
        }
        return [];
    }
}
