import { EventEmitter } from "@angular/core";


export class CounterService {
    activeToInactive = 0;
    inactiveToActive = 0;

    activeToInactiveEmitter = new EventEmitter<number>();
    inactiveToActiveEmmiter = new EventEmitter<number>();

    changeActiveToInactive() {
        this.activeToInactive += 1;
        this.activeToInactiveEmitter.emit(this.activeToInactive);
    }

    changeInactiveToActive() {
        this.inactiveToActive += 1;
        this.inactiveToActiveEmmiter.emit(this.inactiveToActive);
    }
}