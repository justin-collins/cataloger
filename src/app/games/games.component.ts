import { Game } from './../shared/game.model';
import { EditGameDialogComponent } from './edit-game-dialog/edit-game-dialog.component';
import { Platform } from './../shared/platform';
import { GamesService } from '../shared/games.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { MdDialog, MdDialogRef, MdDialogConfig, MdSnackBar } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

@Component({
	selector: 'ctlg-games',
	templateUrl: './games.component.html',
	styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
	private dialogRef: MdDialogRef<EditGameDialogComponent>;
	private dialogConfig: MdDialogConfig = {
		hasBackdrop: false,
		position: {
			bottom: '0px',
			right: '100px'
		}
	};

	public games: DataSource<any>;
	public displayedColumns = ['title', 'played', 'platform', 'actions'];

	constructor(private gamesService: GamesService,
		public dialog: MdDialog,
		public snackBar: MdSnackBar) {
		this.games = new GamesDataSource(gamesService);
	}

	ngOnInit() { }

	public openNewGamePanel(): void {
		const game = new Game;
		this.openGamePanel(game);
	}

	public getPlatformTitle(platformKey: string): string {
		return (Platform.lookup(platformKey)) ? Platform.lookup(platformKey).title : '';
	}

	public openGamePanel(game: Game): void {
		if (this.dialogRef) return;

		this.dialogConfig.data = game;

		this.dialogRef = this.dialog.open(EditGameDialogComponent, this.dialogConfig);
		this.dialogRef.afterClosed().subscribe(this.saveGame);
	}

	private saveGame = (game: Game): void => {
		this.resetDialog();
		this.gamesService.saveGame(game).then(() => {
			this.snackBar.open('Game Saved', '', { duration: 3000 });
		});
	}

	private resetDialog(): void {
		this.dialogRef = null;
		this.dialogConfig.data = null;
	}
}

export class GamesDataSource extends DataSource<any> {
	constructor(private gamesService: GamesService) {
		super();
	}

	connect(): FirebaseListObservable<Element[]> {
		return this.gamesService.getGames();
	}

	disconnect() { }
}
