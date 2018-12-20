import { Injectable } from '@angular/core';
import { ChatResponse, Mood } from './chatresponse';
@Injectable()
export class MoodService {


    public currentMood: Mood;
    private lastResponse: Date;
    constructor() {
        this.lastResponse = new Date();
        this.checkInactive();
    }

    public registerResponse(mood: Mood) {
        this.lastResponse = new Date();
        const lastMood = this.currentMood;
        if (mood === Mood.Scary) {
            setTimeout(() => {
                this.currentMood = lastMood;
            }, 2000);
        }
        this.currentMood = mood;

    }

    checkInactive() {
        const currentDate = new Date();
        const baseDiffMinutes =
            this.currentMood === Mood.Sleeping ? 5 :
            this.currentMood === Mood.Sleepy ? 2 :
            this.currentMood === Mood.Tired ? 1 : 0;
        const actualDiffMinutes = new Date(currentDate.getTime() - this.lastResponse.getTime()).getMinutes();

        const diffMinutes =
            baseDiffMinutes > actualDiffMinutes ? baseDiffMinutes : actualDiffMinutes;

        if (diffMinutes >= 5) {
            this.currentMood = Mood.Sleeping;
        } else if (diffMinutes >= 2) {
            this.currentMood = Mood.Sleepy;
        } else if (diffMinutes >= 1) {
            this.currentMood = Mood.Tired;
        }
        setTimeout(() => {
            this.checkInactive();
        }, 10000);
    }
}
