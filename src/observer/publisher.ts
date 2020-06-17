import {Subscriber} from "./subscriber";

export interface Publisher {
    id: string;
    observers: Array<Subscriber>;
    attach(o: Subscriber): void;
    detach(o: Subscriber): void;
    notify(dis: number);
}
