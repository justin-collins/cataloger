import { CatalogerMaterialModule } from './material.module';
import { NewGameDialogComponent } from './shared/new-game-dialog/new-game-dialog.component';
import { GamesService } from './shared/games.service';
import { CatalogerRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';

@NgModule({
	declarations: [
		AppComponent,
		GamesComponent,
		NewGameDialogComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule,
		CatalogerRoutingModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		CatalogerMaterialModule
	],
	entryComponents: [
		NewGameDialogComponent
	],
	providers: [
		GamesService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
