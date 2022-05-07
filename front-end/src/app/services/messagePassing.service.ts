import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MessagePassingService {
    private message_object = new BehaviorSubject<any>(null);

    constructor() { }

    passMessageToConfirmBox(title: any, text: any, type:any) {
        this.message_object.next({ title, text, type });
    }

    onReceiveConfirmBoxMessage(): Observable<any> {
        return this.message_object.asObservable();
    }
}