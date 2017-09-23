import { FirebaseListObservable } from 'angularfire2/database';
import { GamesService } from './../shared/games.service';
import { DataSource } from '@angular/cdk/collections';

export class GamesDataSource extends DataSource<any> {
	constructor(private gamesService: GamesService) {
		super();
	}

	connect(): FirebaseListObservable<Element[]> {
		return this.gamesService.getGames();
	}

	disconnect() { }
}
