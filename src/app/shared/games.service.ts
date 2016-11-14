import { Game } from './game.model';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class GamesService {
	private gameObservable;

	constructor(private af: AngularFire) {
		this.gameObservable = af.database.list('/games');
	}

	public getGames():FirebaseListObservable<any[]>{
		return this.gameObservable;
	}

	public addGame(newGame){
		this.gameObservable.push(newGame);
	}
}
