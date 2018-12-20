import { ResponderBase } from './responderbase';
import { ChatResponse } from '../chatresponse';

export class MathResponder extends ResponderBase {
    comments: string[] = [
        'Det är ju jättemycket!',
        'Kom igen - ge mig nåt svårt',
        'Vänta, jag är på toa.',
        'En sekund. Så.',
        '1, 2, 3... ',
        '42! Bara skoja...',
        'Jag är lite upptagen nu, men...',
        'Kan inte du det själv?',
        'Nu får du sluta fråga mig allt.',
        'Något får du faktiskt lösa själv'];

    doResponse(message: string): ChatResponse[] {


        let toCalculate: string;
        if (message.startsWith('räkna ut') || message.startsWith('vad blir') || message.startsWith('vad är ')) {

            toCalculate = message.substring(8).replace('?', '');
        }

        if (toCalculate) {

            const randomSaying = this.comments[Math.floor(Math.random() * this.comments.length)];
            // tslint:disable-next-line:no-eval
            const result = eval(toCalculate);

            if (result === 2) {
                return this.CreateResponse('En liten gris gick till skolan. - En kompis hängde med.', 'Alltså, det blir två!');
            }
            if (result === 4) {
                return this.CreateResponse('Två små godisbitar i min mage. Och så två till.', 'Gott.', 'Fyra!');
            }
            if (result === Infinity) {
                return this.CreateResponse('Nu försökte du busa med mig. Aj baja, inte dela med noll.', 'Fett o najs.');

            }
            return this.CreateResponse(randomSaying, 'Svaret är ' + result.toString().replace('.', ','));
        }

        return [];
    }
}
