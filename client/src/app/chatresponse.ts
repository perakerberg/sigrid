export enum Mood {
    Neutral,
    Happy,
    Sad,
    Tired,
    Sleepy,
    Sleeping,
    Afraid,
    English,
    Spanish,
    Scary
}

export class ChatResponse {
    message: string;
    mood: Mood;

    constructor(message: string, mood?: Mood) {
        this.message = message;
        this.mood = mood;
    }
}
