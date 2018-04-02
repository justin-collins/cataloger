import { Game } from './game';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameService {
	private servicePath: string = '/games';

	constructor(private af: AngularFireDatabase) {}

	public games(): Observable<Game[]> {
		return this.af.list<Game[]>(this.servicePath).snapshotChanges().map(resp => {
			return resp.map(this.mapAFKeyToGame);
		});
	}

	public game(gameKey: string): Observable<Game> {
		return this.af.object<Game>(`${this.servicePath}/${gameKey}`).snapshotChanges().map(this.mapAFKeyToGame);
	}

	public save(game: Game): any {
		let postGame: Game = this.cleanGameData(game);

		if (game.id) {
			return this.af.list<Game>(this.servicePath).set(game.id, postGame);
		} else {
			return this.af.list<Game>(this.servicePath).push(postGame);
		}
	}

	public delete(game: Game): Promise<any> {
		return this.af.list<Game>(this.servicePath).remove(game.id);
	}

	private mapAFKeyToGame(item): Game {
		if (item.key) {
			return <Game>{id: item.payload.key, ...item.payload.val()};
		} else {
			return null;
		}
	}

	private cleanGameData(game: Game): Game {
		if (game.platform) delete game.platform.title;

		return game;
	}
}
