import { FirebaseListObservable } from 'angularfire2/database';
import { GameService } from './../../core/game.service';
import { DataSource } from '@angular/cdk/collections';

export class GamesDataSource extends DataSource<any> {
	public isEmpty: boolean = false;
	public isLoading: boolean = true;

	constructor(private gameService: GameService) {
		super();
	}

	connect(): FirebaseListObservable<Element[]> {
		this.isLoading = true;

		let games = this.gameService.games();
		games.forEach(this.verifyData);
		return games;
	}

	private verifyData = (resp: Array<any>): void => {
		// setTimeout = workaround for angular changedetection
		setTimeout(() => {
			this.isEmpty = (resp.length === 0);
			this.isLoading = false;
		}, 0);
	}

	disconnect() { }
}
