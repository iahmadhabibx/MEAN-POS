import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SHARED_DATA } from "../shared/sharedData";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private BASE_URL = SHARED_DATA.BASE_URL;

    constructor(private http: HttpClient) { }

    authenticateUserCredentials(user: any) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.BASE_URL}/users/loginUserToPOS`, user).subscribe({
                next: results => resolve(results),
                error: err => reject(err)
            });
        });
    };
}