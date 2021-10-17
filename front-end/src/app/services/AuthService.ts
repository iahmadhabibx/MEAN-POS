import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private USERS = [
        { _id: "2153ced", fullName: "Ahmad Habib", email: "ahmad@test.com", password: "PW123456", userRole: 0 }
    ]
    constructor() { }
}