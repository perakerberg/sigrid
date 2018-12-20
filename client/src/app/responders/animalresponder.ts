import { ResponderBase } from './responderbase';
import { ChatResponse, Mood } from '../chatresponse';

export class AnimalResponder extends ResponderBase {
    doResponse(message: string): ChatResponse[] {
        if (message.includes('säger räven')) {
            return this.CreateResponse('Ring-ding-ding-ding-ding-ding-ding, pao-pao-pao-pao-pao-pao-pao, boom-boom-boom.', 'Typ.');
        }

        if (message.includes('säger åsnan')) {
            return this.CreateResponse('Iiiii-å-iiii-åååå-iiiii-åååå.', 'Typ.');
        }

        if (message.includes('björn')) {
            return this.CreateMoodResponse(
                Mood.Afraid, 'Har du sett en björn här? Jag är jätterädd för björnar! Jag kissar ner mig om jag ser en björn.',
                'Oj, sa jag det högt?');
        }


        if (message.includes('säger hunden')) {
            return this.CreateResponse('Voff voff','Och att Gunnar vill ha glass');
        }

        if (message.includes('favoritdjur')) {
            return this.CreateResponse('Kanske en grisanka?. Eller en jaguar-buffel?', 'Det finns så många fina djur', 'Utom björnar då.');
        }


        return [];
    }
}
