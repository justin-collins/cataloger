import { AngularFireDatabase } from '@angular/fire/database';
import { Game } from './game';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GameService {
	private servicePath: string = '/games';

	constructor(private af: AngularFireDatabase) {}

	public games(): Observable<Game[]> {
		return this.af.list<Game[]>(this.servicePath).snapshotChanges().pipe(
			map(resp => {
				return resp.map(this.mapAFKeyToGame);
			})
		);
	}

	public game(gameKey: string): Observable<Game> {
		return this.af.object<Game>(`${this.servicePath}/${gameKey}`).snapshotChanges().pipe(
			map(this.mapAFKeyToGame)
		);
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
