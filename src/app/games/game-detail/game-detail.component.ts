import { ConfirmDialogComponent } from './../../shared/confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { GameService } from './../../core/game.service';
import { Game } from './../../core/game';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'ctlg-game-detail',
	templateUrl: './game-detail.component.html',
	styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
	public game: Game = <Game>{};

	private confirmationDialogRef: MatDialogRef<ConfirmDialogComponent>;

	constructor(private route: ActivatedRoute,
				private dialog: MatDialog,
				private snackBar: MatSnackBar,
				private router: Router,
				private gameService: GameService) { }

	ngOnInit() {
		this.gameService.game(this.route.snapshot.params['gameKey']).subscribe(resp => this.game = resp);
	}

	public deleteConfirmation(game: Game): void {
		let confirmMessage = `Are you sure you wish to delete the game "${game.title}"`;

		this.confirmationDialogRef = this.dialog.open(ConfirmDialogComponent, { data: confirmMessage });
		this.confirmationDialogRef.afterClosed().subscribe((result) => {
			if (result) this.deleteGame(game);
		});
	}

	private deleteGame(game: Game): void {
		this.gameService.delete(game).then(() => {
			this.showGameDeletedSnack();
			this.router.navigate(['/games']);
		});
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
