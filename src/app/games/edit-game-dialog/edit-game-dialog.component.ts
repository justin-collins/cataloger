import { Platform } from '../../core/platform';
import { Game } from '../../core/game';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'ctlg-edit-game-dialog',
	templateUrl: './edit-game-dialog.component.html',
	styleUrls: ['./edit-game-dialog.component.scss']
})
export class EditGameDialogComponent {
	public platforms = Platform.LIST;

	constructor(public dialogRef: MatDialogRef<EditGameDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public game: Game) { }

	public saveGame() {
		this.dialogRef.close(this.game);
	}
}
