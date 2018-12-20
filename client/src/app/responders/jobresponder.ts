import { ResponderBase } from './responderbase';
import { ChatResponse } from '../chatresponse';

export class JobResponder extends ResponderBase {

    doResponse(message: string): ChatResponse[] {

        return [];
    }
}
