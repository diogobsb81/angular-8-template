import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { PathResolveService } from '../path-resolve.service';
import { ProcessosComponent } from '../processos/processos.component';
import { paths } from './../app-paths';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: paths.home
	},
	{ path: paths.home, component: HomeComponent, canActivate: [ AuthGuard ] },
	{ path: paths.processos, component: ProcessosComponent, canActivate: [ AuthGuard ] },
	{ path: paths.login, component: LoginComponent },

	// otherwise redirect to not found
	{
		path: '**',
		resolve: {
			path: PathResolveService
		},
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [ CommonModule, RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	declarations: []
})
export class RoutingModule {}
