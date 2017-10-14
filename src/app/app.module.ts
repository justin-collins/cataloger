import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { EditGameDialogComponent } from './games/edit-game-dialog/edit-game-dialog.component';
import { CatalogerMaterialModule } from './material.module';
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
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	declarations: [
		AppComponent,
		GamesComponent,
		EditGameDialogComponent,
		ProfileComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule,
		CoreModule,
		SharedModule,
		CatalogerRoutingModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		CatalogerMaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
