import { ResponderBase } from './responderbase';
import { ChatResponse } from '../chatresponse';

export class FoodResponder extends ResponderBase {
    doResponse(message: string): ChatResponse[] {
        if (message.includes(' mat imorgon')) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return this.getFood(tomorrow);
        }
        if (message.includes(' mat i övermorgon?')) {
            const date = new Date();
            date.setDate(date.getDate() + 2);
            return this.getFood(date);
        }

        if (message.includes(' mat idag?')) {
            const today = new Date();
            return this.getFood(today);
        }
        return [];
    }

    getFood(date: Date): ChatResponse[] {
        if (date.getDay() === 0 ) {
            return this.CreateResponse('Ingen mat på söndagar. Iallafall inte i skolan.', 'Får jag käka hos dig?');
        }
        if (date.getDay() === 1 ) {
            return this.CreateResponse('Pastagratäng med kassler, riven ost och grädde.', 'Hörde jag ett dags för lunch?');
        }
        if (date.getDay() === 2 ) {
            return this.CreateResponse('Fiskpinnar med kokt potatis. Serveras med citronkruka och majonnäs.', 'Oj. Citrongurksmajonäs var det visst.');
        }
        if (date.getDay() === 3 ) {
            return this.CreateResponse('Köttbullar med potatismos och rårörda lingon.', 'Klassiker', 'Fett');
        }
        if (date.getDay() === 4 ) {
            return this.CreateResponse('Vegetarisk lasagne.', 'Utan kött blir man inte trött.', 'Om man äter nåt annat då alltså.');
        }

        if (date.getDay() === 5 ) {
            return this.CreateResponse('Potatis- och purjolökssoppa. Serveras med nybakt bröd.', 'p-p-p-p-p-p purjolök!');
        }
        if (date.getDay() === 6 ) {
            return this.CreateResponse('Lördagsgodis', 'Bjuder du?');
        }

    }
}
