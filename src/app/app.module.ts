import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NewGameDialogComponent } from './games/new-game-dialog/new-game-dialog.component';
import { CatalogerMaterialModule } from './material.module';
import { CatalogerRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';

@NgModule({
	declarations: [
		AppComponent,
		NewGameDialogComponent,
		ProfileComponent,
		GamesListComponent,
		GameDetailComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		CoreModule,
		SharedModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		CatalogerRoutingModule,
		CatalogerMaterialModule
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [
		NewGameDialogComponent
	]
})
export class AppModule { }
