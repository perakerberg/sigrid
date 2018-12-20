import { ResponderBase } from './responderbase';
import { ChatResponse, Mood } from '../chatresponse';

export class EmptyResponder extends ResponderBase {
    doResponse(message: string): ChatResponse[] {

        return this.CreateResponse('Jag är inte programmerad än');
    }
}
