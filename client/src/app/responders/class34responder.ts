import { ResponderBase } from './responderbase';
import { ChatResponse, Mood } from '../chatresponse';

export class Class34Responder extends ResponderBase {
    doResponse(message: string): ChatResponse[] {

        if (message.includes('favoriträtt')) {
            return this.CreateResponse('Pannkakor', 'Eller hamburgare', 'Mums');
        }
        if (message.includes('hur gammal är du?')) {
            return this.CreateResponse('999 år', 'Eller en miljon år.', 'Iallafall jättegammal');
        }
        if (message.includes('var bor du?')) {
            return this.CreateMoodResponse(Mood.English, 'I live in China', 'Or Aelekulla');
        }
        return [];
    }
}
