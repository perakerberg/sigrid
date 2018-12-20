import { ResponderBase } from './responderbase';
import { ChatResponse, Mood } from '../chatresponse';

export class JokeResponder extends ResponderBase {

    private jokes: ChatResponse[][] = [
        this.CreateResponse('– Titta mamma, den där apan ser ut som faster Rut.',
        '– Fy, så säger man inte.', '– Men apan förstår väl inte vad jag säger?'),

        this.CreateResponse('Nej, det känner jag inte för.', 'Men fråga igen så kanske jag ändrar mig'),

        this.CreateResponse('Jag tänkte dra ett skämt om Titanic', 'Men jag ville inte sjunka så lågt'),

        this.CreateResponse('Vad är det som är bra med Schweiz?', 'Jag vet inte, men flaggan är ett stort plus.'),
    ];
    doResponse(message: string): ChatResponse[] {

        const randomJoke = this.jokes[Math.floor(Math.random() * this.jokes.length)];

        if (message.includes(' skämt') || message.includes(' vits') || message.includes(' rolig') ||  message.includes(' kul')) {
            return randomJoke;
        }
        return [];
    }
}
