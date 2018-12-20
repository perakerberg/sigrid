import { ResponderBase } from './responderbase';
import { ChatResponse } from '../chatresponse';

export class TimeResponder extends ResponderBase {
    doResponse(message: string): ChatResponse[] {
        if (message.includes('klockan')) {
            const date = new Date();

            return this.CreateResponse(date.toLocaleTimeString().substring(0, 5));
        }

        return [];
    }
}
