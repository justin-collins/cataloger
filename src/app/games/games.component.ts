import { Platform } from './../shared/platform';
import { NewGameDialogComponent } from '../shared/new-game-dialog/new-game-dialog.component';
import { GamesService } from '../shared/games.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { MdDialog, MdDialogRef } from '@angular/material';
import {DataSource} from '@angular/cdk/collections';

@Component({
	selector: 'ctlg-games',
	templateUrl: './games.component.html',
	styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
	private dialogRef: MdDialogRef<NewGameDialogComponent>;

	public games: DataSource<any>;
	public displayedColumns = ['title', 'played', 'platform'];

	constructor(private gamesService: GamesService, public dialog: MdDialog) {
		this.games = new GamesDataSource(gamesService);
	}

	ngOnInit() {}

	public addGame() {
		this.dialogRef = this.dialog.open(NewGameDialogComponent);

		this.dialogRef.afterClosed().subscribe(result => {
			this.dialogRef = null;

			if (result) {
				this.gamesService.addGame(result);
			}
		});
	}

	public getPlatformTitle(platformKey: string) {
		return (Platform.lookup(platformKey)) ? Platform.lookup(platformKey).title : '';
	}
}

export class GamesDataSource extends DataSource<any> {
	constructor(private gamesService: GamesService) {
		super();
	}

	connect(): FirebaseListObservable<Element[]> {
		return this.gamesService.getGames();
	}

	disconnect() {}
}
