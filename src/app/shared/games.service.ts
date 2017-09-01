import { Game } from './game.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GamesService {
	private gameObservable;

	constructor(private af: AngularFireDatabase) {
		this.gameObservable = af.list('/games');
	}

	public getGames(): FirebaseListObservable<any[]> {
		return this.gameObservable;
	}

	public addGame(newGame) {
		this.gameObservable.push(newGame);
	}
}
