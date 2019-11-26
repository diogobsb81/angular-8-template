import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
	@Output() public sidenavToggle = new EventEmitter();

	isLoggedIn$: Observable<boolean>;
	constructor(private authService: AuthGuardService) {}

	ngOnInit() {
		this.isLoggedIn$ = this.authService.isLoggedIn;
	}

	public onToggleSidenav = () => {
		this.sidenavToggle.emit();
	};
	onLogout() {
		this.authService.logout();
	}
}
