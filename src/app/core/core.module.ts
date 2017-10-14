import { MessagingService } from './messaging.service';
import { CatalogerMaterialModule } from './../material.module';
import { GamesService } from './games.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
		CatalogerMaterialModule
	],
	declarations: [],
	providers: [
		GamesService,
		MessagingService
	]
})
export class CoreModule { }
