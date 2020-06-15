import {Publisher} from "./publisher";
import {Subscriber} from "./subscriber";

const publisher: Publisher = new Publisher();
const subscriber: Subscriber = new Subscriber();
console.log("sum: ", publisher.add(2, 3));
console.log("sum: ", subscriber.add(2, 3));
