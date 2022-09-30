import {Service} from "./service";

export class Factory {
    produce(): Service {
        return new Service();
    }
}