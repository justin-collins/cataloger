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
	MdTableModule
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
		MdTableModule
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
		MdTableModule
	]
})
export class CatalogerMaterialModule { }
