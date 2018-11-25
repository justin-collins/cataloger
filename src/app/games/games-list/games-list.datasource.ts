import { GameService } from './../../core/game.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { Game } from '../../core/game';
import { map } from 'rxjs/operators';

export class GamesDataSource extends DataSource<any> {
	public isEmpty: boolean = false;
	public isLoading: boolean = true;

	constructor(private gameService: GameService) {
		super();
	}

	connect(): Observable<Game[]> {
		this.isLoading = true;

		return this.gameService.games().pipe(
			map(results => {
				this.isLoading = false;
				this.isEmpty = (results.length > 0) ? false : true;
				return results;
			})
		);
	}

	disconnect() { }
}
