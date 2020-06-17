import {Publisher} from "./publisher"

export interface Subscriber {
    id: string;
    publisher: Publisher;
    update();
}


