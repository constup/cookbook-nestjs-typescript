import {ServiceInterface} from "./service.interface";

export class Service1 implements ServiceInterface{
    doSomething(text: string): string {
        return `Service 1: ${text}`;
    }
}