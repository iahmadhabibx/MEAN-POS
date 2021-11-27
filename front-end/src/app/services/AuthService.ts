import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SHARED_DATA } from "../shared/sharedData";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    BASE_URL = SHARED_DATA.BASE_URL;
    private USERS = [
        { _id: "2153ced", fullName: "Ahmad Habib", email: "ahmad@test.com", password: "PW123456", userRole: 0 }
    ]
    constructor(private http: HttpClient) { }

    authenticateUserCredentials(user: any) {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.BASE_URL}/users/loginUserToPOS/${user}`).subscribe({
                next: results => resolve(results),
                error: err => reject(err)
            });
        });
    };
}