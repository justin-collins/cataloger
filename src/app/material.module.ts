import { NgModule } from '@angular/core';

import {
	MatSidenavModule,
	MatDialogModule,
	MatButtonModule,
	MatIconModule,
	MatToolbarModule,
	MatListModule,
	MatInputModule,
	MatCheckboxModule,
	MatSelectModule,
	MatTableModule,
	MatSnackBarModule,
	MatProgressBarModule,
	MatTooltipModule,
	MatMenuModule
} from '@angular/material';

@NgModule({
	imports: [
		MatSidenavModule,
		MatDialogModule,
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
		MatListModule,
		MatCheckboxModule,
		MatSelectModule,
		MatTableModule,
		MatSnackBarModule,
		MatProgressBarModule,
		MatTooltipModule,
		MatMenuModule
	],
	exports: [
		MatSidenavModule,
		MatDialogModule,
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
		MatListModule,
		MatInputModule,
		MatCheckboxModule,
		MatSelectModule,
		MatTableModule,
		MatSnackBarModule,
		MatProgressBarModule,
		MatTooltipModule,
		MatMenuModule
	]
})
export class CatalogerMaterialModule { }
