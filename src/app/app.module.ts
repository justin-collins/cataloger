import { CatalogerRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule }   from '@angular/router';

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
		CategoryComponent
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
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
