import { Game } from './game';
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

	public saveGame(game: Game): Promise<any> {
		if (game.$key) {
			return this.gameObservable.set(game.$key, game);
		} else {
			return this.gameObservable.push(game);
		}
	}

	public deleteGame(game: Game): Promise<any> {
		return this.gameObservable.remove(game.$key);
	}
}
