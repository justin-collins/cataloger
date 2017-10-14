import { MessagingService } from './../core/messaging.service';
import { GamesDataSource } from './games.datasource';
import { ConfirmDialogComponent } from './../shared/confirm-dialog/confirm-dialog.component';
import { Game } from './../core/game';
import { EditGameDialogComponent } from './edit-game-dialog/edit-game-dialog.component';
import { Platform } from './../core/platform';
import { GamesService } from '../core/games.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MatSnackBar } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

@Component({
	selector: 'ctlg-games',
	templateUrl: './games.component.html',
	styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
	private confirmationDialogRef: MatDialogRef<ConfirmDialogComponent>;

	private gameEditDialogRef: MatDialogRef<EditGameDialogComponent>;
	private gameEditDialogConfig: MatDialogConfig = {
		hasBackdrop: false,
		position: {
			bottom: '0px',
			right: '100px'
		}
	};

	public games: DataSource<any>;
	public displayedColumns = ['title', 'played', 'platform', 'actions'];

	constructor(private gamesService: GamesService,
		public dialog: MatDialog,
		public snackBar: MatSnackBar,
		private messagingService: MessagingService) {
		this.games = new GamesDataSource(gamesService);
	}

	ngOnInit() { }

	public getPlatformTitle(platformKey: string): string {
		return (Platform.lookup(platformKey)) ? Platform.lookup(platformKey).title : '';
	}

	public openNewGamePanel(): void {
		let game = new Game;
		this.openGamePanel(game);
	}

	public openGamePanel(game: Game): void {
		this.gameEditDialogConfig.data = game;

		this.gameEditDialogRef = this.dialog.open(EditGameDialogComponent, this.gameEditDialogConfig);
		this.gameEditDialogRef.afterClosed().subscribe(this.saveGame);
	}

	private saveGame = (game: Game): void => {
		if (!game) return;

		this.gamesService.saveGame(game).then(() => {
			this.messagingService.message('Game Saved');
		});
	}

	public deleteConfirmation(game: Game): void {
		let confirmMessage = `Are you sure you wish to delete the game "${game.title}"`;

		this.confirmationDialogRef = this.dialog.open(ConfirmDialogComponent, { data: confirmMessage });
		this.confirmationDialogRef.afterClosed().subscribe((result) => {
			if (result) this.deleteGame(game);
		});
	}

	private deleteGame(game: Game): void {
		this.gamesService.deleteGame(game).then(() => this.showGameDeletedSnack());
	}

	private showGameDeletedSnack(): void {
		let snackBarRef = this.snackBar.open('Game Deleted', 'Undo', { duration: 3000 });

		snackBarRef.onAction().subscribe(this.undoDelete);
	}

	// TODO: Wait for material datatable to mature a bit before implementing
	// currently very difficult to isolate individual rows with or without animation
	// https://embed.plnkr.co/3QT7JQ/ good sample
	private undoDelete(): void {

	}
}
