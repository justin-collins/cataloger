import { NewGameDialogComponent } from './shared/new-game-dialog/new-game-dialog.component';
import { GamesService } from './shared/games.service';
import { CatalogerRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';
import { GamesComponent } from './games/games.component';

export const firebaseConfig = {
	apiKey: 'AIzaSyAzTB1c6OrjzK1e5ZcGgtb8AAtZqcrGFRE',
	authDomain: 'cataloger-6dc97.firebaseapp.com',
	databaseURL: 'https://cataloger-6dc97.firebaseio.com',
	storageBucket: 'cataloger-6dc97.appspot.com',
	messagingSenderId: '895381901707'
};

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
		MaterialModule.forRoot(),
		AngularFireModule.initializeApp(firebaseConfig)
	],
	entryComponents:[
		NewGameDialogComponent
	],
	providers: [
		GamesService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
