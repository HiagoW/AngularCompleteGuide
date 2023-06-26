import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService {
    // Use Subject instead of EventEmitter for cross component communication with services
    // This will not work w/ @Output decorator
    activatedEmitter = new Subject<boolean>();
}