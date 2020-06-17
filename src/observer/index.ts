// 重新导出并重新命名

import {Publisher} from "./publisher";

import {Subscriber } from "./subscriber";

// 动物
abstract class Animal {
    name: string;
    protected constructor(name: string) {
        this.name = name;
    }
}

// 物质
interface Substance {
    quality: number;
}

// 水生动物
class Aquatic extends Animal {
    public swim() {
        console.log(this.name + "can swim");
    }
}

// 陆生动物
class Terrestrial extends Animal {
    public walk() {
        console.log(this.name + "can walk");
    }
}

// 空中动物
class Aerial extends Animal {
    public fly() {
        console.log(this.name + "can fly");
    }
}

export class Fish extends Aquatic implements Subscriber{
    id: string = "fish";
    publisher: Publisher;

    constructor(name: string) {
        super(name);
    }

    public update() {
        console.log("swim swim swim");
    }
}

export class Horse extends Terrestrial implements Subscriber {
    id: string = "horse";
    publisher: Publisher;

    constructor(name) {
        super(name);
    }

    public update() {
        console.log("run run run");
    }
}

export class Eagle extends Aerial implements Subscriber, Substance {
    id: string = "eagle";

    quality: number;

    publisher: Publisher;

    constructor(name) {
        super(name);
    }

    public update() {
        console.log("fly, fly, fly", this.publisher);
    }

}

export class Man extends Animal implements Publisher, Substance {

    id: string = "man";

    public meter: number;

    public observers: Array<Subscriber> = new Array<Subscriber>();

    quality: number = 200;

    constructor(name) {
        super(name);
    }

    public attach(o: Subscriber) {
        o.publisher = this;
        this.observers.push(o);
    };

    public detach(o: Subscriber) {
        const index = this.observers.findIndex(elem => elem.id === o.id);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    };

    public notify(meter: number) {
        this.meter = meter;
        this.observers.forEach(elem => {
            elem.update();
        })
    };
}

export {Publisher as Subject, Subscriber as Observer}
