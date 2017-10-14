import { RouterModule } from '@angular/router';
import { CatalogerMaterialModule } from './../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		CatalogerMaterialModule
	],
	declarations: [
		ConfirmDialogComponent,
		NavbarComponent
	],
	exports: [
		ConfirmDialogComponent,
		NavbarComponent
	],
	entryComponents: [
		ConfirmDialogComponent
	]
})
export class SharedModule { }
