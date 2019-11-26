import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthGuardService } from './auth-guard.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthGuardService, private router: Router) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.authService.isLoggedIn.pipe(
			take(1),
			map((isLoggedIn: boolean) => {
				if (!isLoggedIn) {
					this.router.navigate([ '/login' ]);
					return false;
				}
				return true;
			})
		);
	}
}
