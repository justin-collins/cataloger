import { MessagingService } from './../../core/messaging.service';
import { GamesDataSource } from './games-list.datasource';
import { Game } from './../../core/game';
import { NewGameDialogComponent } from './../new-game-dialog/new-game-dialog.component';
import { Platform } from './../../core/platform';
import { GameService } from '../../core/game.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Router } from '@angular/router';

@Component({
	selector: 'ctlg-games-list',
	templateUrl: './games-list.component.html',
	styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
	private gameNewDialogRef: MatDialogRef<NewGameDialogComponent>;
	private gameNewDialogConfig: MatDialogConfig = {
		hasBackdrop: false,
		position: {
			bottom: '0px',
			right: '100px'
		}
	};

	public games: DataSource<any>;
	public displayedColumns = ['title', 'played', 'platform', 'actions'];

	constructor(private gameService: GameService,
		public dialog: MatDialog,
		private router: Router,
		private messagingService: MessagingService) {
		this.games = new GamesDataSource(gameService);
	}

	ngOnInit() { }

	public getPlatformTitle(platformKey: string): string {
		return (Platform.lookup(platformKey)) ? Platform.lookup(platformKey).title : '';
	}

	public openNewGamePanel(): void {
		let game = new Game;
		this.gameNewDialogConfig.data = game;

		this.gameNewDialogRef = this.dialog.open(NewGameDialogComponent, this.gameNewDialogConfig);
		this.gameNewDialogRef.afterClosed().subscribe(this.saveGame);
	}

	private saveGame = (game: Game): void => {
		if (!game) return;

		this.gameService.save(game).then((resp) => {
			this.messagingService.message('Game Saved');
			this.router.navigate(['/games', 'details', resp.key]);
		});
	}
}
