import { NgModule } from '@angular/core';

import {
	MdSidenavModule,
	MdDialogModule,
	MdButtonModule,
	MdIconModule,
	MdToolbarModule,
	MdListModule,
	MdInputModule
} from '@angular/material';

@NgModule({
	imports: [
		MdSidenavModule,
		MdDialogModule,
		MdButtonModule,
		MdIconModule,
		MdToolbarModule,
		MdListModule
	],
	exports: [
		MdSidenavModule,
		MdDialogModule,
		MdButtonModule,
		MdIconModule,
		MdToolbarModule,
		MdListModule,
		MdInputModule
	]
})
export class CatalogerMaterialModule { }
