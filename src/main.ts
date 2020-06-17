// 倒入重命名
import { Fish, Horse, Eagle, Man, Subject, Observer } from "./observer/index";

const fish: Observer = new Fish("fish");
const horse: Observer = new Horse("horse");
const eagle: Observer = new Eagle("eagle");

const man: Subject = new Man("man");

man.attach(fish);
man.attach(horse);
man.attach(eagle);
man.notify(1000);
