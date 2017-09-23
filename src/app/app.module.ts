import { EditGameDialogComponent } from './games/edit-game-dialog/edit-game-dialog.component';
import { CatalogerMaterialModule } from './material.module';
import { GamesService } from './shared/games.service';
import { CatalogerRoutingModule } from './app.routing';
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
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	declarations: [
		AppComponent,
		GamesComponent,
		EditGameDialogComponent,
		ConfirmDialogComponent,
		NavbarComponent,
		ProfileComponent
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
		EditGameDialogComponent,
		ConfirmDialogComponent
	],
	providers: [
		GamesService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
