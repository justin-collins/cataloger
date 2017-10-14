import { MessagingService } from './messaging.service';
import { CatalogerMaterialModule } from './../material.module';
import { GameService } from './game.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
		CatalogerMaterialModule
	],
	declarations: [],
	providers: [
		GameService,
		MessagingService
	]
})
export class CoreModule { }
