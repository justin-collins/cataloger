import { Game } from './game';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class GameService {
	private gameObservable: any;

	constructor(private af: AngularFireDatabase) {
		this.gameObservable = af.list('/games');
	}

	public games(): FirebaseListObservable<any[]> {
		return this.gameObservable;
	}

	public game(gameKey: string): FirebaseObjectObservable<any> {
		return this.af.object(`/games/${gameKey}`);
	}

	public save(game: Game): Promise<any> {
		if (game.$key) {
			return this.gameObservable.set(game.$key, game);
		} else {
			return this.gameObservable.push(game);
		}
	}

	public delete(game: Game): Promise<any> {
		return this.gameObservable.remove(game.$key);
	}
}
