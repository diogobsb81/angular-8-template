import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AppComponent } from './app.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ProcessosComponent } from './processos/processos.component';
import { RoutingModule } from './routing/routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent,
		HomeComponent,
		HeaderComponent,
		SidenavListComponent,
		ProcessosComponent,
		LoginComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		FlexLayoutModule,
		RoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule,
		NgHttpLoaderModule.forRoot()
	],
	providers: [ AuthGuardService, AuthGuard ],
	bootstrap: [ AppComponent ],
	exports: [ FormsModule, ReactiveFormsModule ]
})
export class AppModule {}
