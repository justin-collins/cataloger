import { NewGameDialogComponent } from '../shared/new-game-dialog/new-game-dialog.component';
import { GamesService } from '../shared/games.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
	selector: 'ctlg-games',
	templateUrl: './games.component.html',
	styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
	private games: FirebaseListObservable<any[]>;
	private dialogRef: MdDialogRef<NewGameDialogComponent>;

	constructor(private gamesService: GamesService, public dialog: MdDialog) {
		this.games = gamesService.getGames();

	}

	ngOnInit() {
	}

	public addGame() {
		this.dialogRef = this.dialog.open(NewGameDialogComponent);

		this.dialogRef.afterClosed().subscribe(result => {
			this.dialogRef = null;

			if (result) {
				this.gamesService.addGame(result);
			}
		});
	}
}
