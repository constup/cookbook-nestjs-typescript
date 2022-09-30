import {ServiceInterface} from "./service.interface";

export class Service2 implements ServiceInterface{
    doSomething(text: string): string {
        return `Service 2: ${text}`;
    }
}