import { ResponderBase } from './responderbase';
import { ChatResponse, Mood } from '../chatresponse';

export class MoodResponder extends ResponderBase {

    sleeptalk: string[] = [
        'Enhörningar, regnbågar, ostbågar...',
        'Hej lilla katt, mjau mjau',
        'Men tack, inte ska jag få nobelpriset IGEN?!',
        'hfreau fsdhk fsdhkf uewuewq',
        'biddebiddebopp skrutti-lutti-lutt'];
    doResponse(message: string): ChatResponse[] {
        const randomSaying = this.sleeptalk[Math.floor(Math.random() * this.sleeptalk.length)];

        if (this.mood === Mood.Sleeping) {
            if (message.includes('vakna')) {
                return this.CreateMoodResponse(Mood.Sleepy, 'Oj, förlåt', 'Somnade jag?');
            }
            return this.CreateMoodResponse(Mood.Sleeping, 'zzzz...', randomSaying);

        }
        if (message.includes('god natt') || message.includes('sov gott')) {
            return this.CreateMoodResponse(Mood.Sleeping, 'zzzz....');
        }
        return [];
    }
}
