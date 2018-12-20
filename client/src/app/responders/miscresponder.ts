import { ResponderBase } from './responderbase';
import { ChatResponse, Mood } from '../chatresponse';

export class MiscResponder extends ResponderBase {

    private greetIndex = 0;
    private greetings: string[] = [
        'Hej hej',
        'Tjena! Läget?',
        'Haj haj',
        'Tjeeeeena',
        'Hejsan!'
    ];

    doResponse(message: string): ChatResponse[] {

        if (message.includes('heter du') || message.includes('är du')) {
        return this.CreateResponse('Jag heter SIGRID. Vem är det jag pratar med?');
    }

    if (message.includes('hej då')) {
        return this.CreateResponse('Ska du redan gå?', 'Okej, hej då', 'Har du gått?', 'Hallå?!');
    }
    if (message.startsWith('hej')) {
        const response = this.CreateResponse(this.greetings[this.greetIndex]);
        this.greetIndex++;
        if (this.greetIndex >= this.greetings.length) {
                this.greetIndex = 0;
            }
        return response;
    }

    if (message.includes('mår jag')) {
        return this.CreateResponse('Jag tror du mår bra. Eller dåligt. Eller mittemellan. Lite sådär.', 'Eller?');
    }

    if (message.includes('mår du')) {
        return this.CreateResponse('Jag mår bra. Tror jag.', 'Vad tror du?');
    }

    if (message.includes('annat språk')) {
        return this.CreateMoodResponse(Mood.Spanish, 'No, solo hablo sueco. Siempre quise aprender otro idioma, pero desafortunadamente.');
    }

    if (message.startsWith('säg inte')) {
        return this.CreateResponse('Okej. Men jag kan inte lova nåt.');
    }

    if (message.startsWith('säg ')) {
        if (message.endsWith('på spanska')) {
            return this.CreateMoodResponse(Mood.Spanish, message.substring(3).replace('på spanska', ''));
        }
        if (message.endsWith('på engelska')) {
            return this.CreateMoodResponse(Mood.English, message.substring(3).replace('på engelska', ''));
        }
        return this.CreateResponse(message.substring(3));
    }

    if (message.includes('fin') && message.includes('du')) {
        return this.CreateResponse('Oj tack!', 'Du är snäll du');
    }

    if (message.includes('bu!') || message.includes('skräm mig') || message.includes('läskig')) {
        return this.CreateMoodResponse(Mood.Scary, 'Mo ha ha ha haaa');
    }

    if (message.includes('var bor du'))     {
        return this.CreateResponse('jag bor i Syrien');
    }

    if (message.includes(' sång') || message.includes('sjung')) {
        // tslint:disable-next-line:max-line-length
        return this.CreateResponse('En Boogie woogie brud I Boogie woogie skrud Som hon dansar swingdans herregud Allting sitter snett ändå blir det rätt När vi ger oss ut i vår duett',
    'Okej, vi skippar det.');
    }


        return [];
    }
}
