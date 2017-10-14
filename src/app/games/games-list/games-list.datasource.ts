import { FirebaseListObservable } from 'angularfire2/database';
import { GameService } from './../../core/game.service';
import { DataSource } from '@angular/cdk/collections';

export class GamesDataSource extends DataSource<any> {
	constructor(private gameService: GameService) {
		super();
	}

	connect(): FirebaseListObservable<Element[]> {
		return this.gameService.games();
	}

	disconnect() { }
}
