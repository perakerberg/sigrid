import { ResponderBase } from './responderbase';
import { ChatResponse } from '../chatresponse';

export class DefaultResponder extends ResponderBase {
    private unknownAnswers = ['Jag vet faktiskt inte',
    'Va?',
    'Vad menar du?',
    'Det där vet inte jag',
    'Nu vet jag inte vad jag ska svara',
    'Nä hörrödu, det vet inte jag',
    'Bäst att du frågar nån annan',
    'Vet inte',
    'Vet ej',
    'Det där förstod jag inte',
    'Nu fattar jag naada',
    'Noll koll tyvärr',
'Nu hör jag väldigt dåligt',
'Di-Do-Di-DO.'];

    doResponse(message: string): ChatResponse[] {
        return this.CreateResponse(this.unknownAnswers[Math.floor(Math.random() * this.unknownAnswers.length)]);
    }
}
