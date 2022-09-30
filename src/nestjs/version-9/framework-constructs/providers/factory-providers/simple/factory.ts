import {Service1} from "./service-1";
import {Service2} from "./service-2";

export class Factory {
    produce(serviceType: number): Service1 {
        switch (serviceType) {
        case 1:
            return new Service1();
        case 2:
            return new Service2();
        }
    }
}