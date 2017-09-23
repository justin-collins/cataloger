import { NgModule } from '@angular/core';

import {
	MdSidenavModule,
	MdDialogModule,
	MdButtonModule,
	MdIconModule,
	MdToolbarModule,
	MdListModule,
	MdInputModule,
	MdCheckboxModule,
	MdSelectModule,
	MdTableModule,
	MdSnackBarModule
} from '@angular/material';

@NgModule({
	imports: [
		MdSidenavModule,
		MdDialogModule,
		MdButtonModule,
		MdIconModule,
		MdToolbarModule,
		MdListModule,
		MdCheckboxModule,
		MdSelectModule,
		MdTableModule,
		MdSnackBarModule
	],
	exports: [
		MdSidenavModule,
		MdDialogModule,
		MdButtonModule,
		MdIconModule,
		MdToolbarModule,
		MdListModule,
		MdInputModule,
		MdCheckboxModule,
		MdSelectModule,
		MdTableModule,
		MdSnackBarModule
	]
})
export class CatalogerMaterialModule { }
