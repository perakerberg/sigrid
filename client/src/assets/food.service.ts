import { Injectable } from '@angular/core';

@Injectable()
export class FoodService {

  constructor() {

  }
    public getFood(date: Date): string {
        const formattedDate = date.toISOString().substring(0, 10);

        const day = date.getDay();

        switch (day) {
            case 0: {
                return 'Söndagsmaten får du äta hemma. Här är det stängt.';
            }
            case 1: {
                return 'Pastagratäng med kassler, riven ost och grädde.';
            }
            case 2: {
                return 'Fiskpinnar med kokt potatis. Serveras med citrongurkmajonnäs.';
            }
            case 3: {
                return 'Köttbullar med potatismos och rårörda lingon.';
            }
            case 4: {
                return 'Vegetarisk lasagne.';
            }
            case 5: {
            return 'Potatis - och purjolökssoppa. Serveras med nybakt bröd.';
            }
            case 6: {
                return 'Tårta! Men du får ingen för det är lördag.';
            }
            default:
                return '';
        }
    }
}
