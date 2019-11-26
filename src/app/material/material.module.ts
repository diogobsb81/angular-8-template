import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatSidenavModule,
	MatTabsModule,
	MatToolbarModule
} from '@angular/material';

@NgModule({
	imports: [
		MatMenuModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
		CommonModule,
		MatTabsModule,
		MatSidenavModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule
	],
	exports: [
		MatMenuModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
		MatTabsModule,
		MatSidenavModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule
	],
	declarations: []
})
export class MaterialModule {}
