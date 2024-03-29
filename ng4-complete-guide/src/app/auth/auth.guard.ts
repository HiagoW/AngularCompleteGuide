import { Injectable } from "@angular/core";
import { Observable, map, take } from "rxjs";
import { AuthService } from "./auth.service";
import { Router, UrlTree } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthGuard {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
        return this.authService.user.pipe(
            take(1),
            map(user => {
                const isAuth = !!user;
                if (isAuth) {
                    return true;
                }
                return this.router.createUrlTree(['/auth']);
            })
        );
    }
}