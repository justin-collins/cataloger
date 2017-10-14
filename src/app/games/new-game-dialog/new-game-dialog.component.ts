import { Platform } from '../../core/platform';
import { Game } from '../../core/game';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'ctlg-new-game-dialog',
	templateUrl: './new-game-dialog.component.html',
	styleUrls: ['./new-game-dialog.component.scss']
})
export class NewGameDialogComponent {
	public platforms = Platform.LIST;

	constructor(public dialogRef: MatDialogRef<NewGameDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public game: Game) { }

	public saveGame() {
		this.dialogRef.close(this.game);
	}
}
