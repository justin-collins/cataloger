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

	public saveGame(newGame): Promise<any> {
		if (newGame.$key) {
			return this.gameObservable.set(newGame.$key, newGame);
		} else {
			return this.gameObservable.push(newGame);
		}
	}
}
