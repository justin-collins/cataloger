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
	MatSnackBarModule
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
		MatSnackBarModule
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
		MatSnackBarModule
	]
})
export class CatalogerMaterialModule { }
