import { Platform } from '../../shared/platform';
import { Game } from '../../shared/game.model';
import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'ctlg-edit-game-dialog',
	templateUrl: './edit-game-dialog.component.html',
	styleUrls: ['./edit-game-dialog.component.scss']
})
export class EditGameDialogComponent {
	public platforms = Platform.LIST;

	constructor(public dialogRef: MdDialogRef<EditGameDialogComponent>,
				@Inject(MD_DIALOG_DATA) public game: Game) {}

	public saveGame() {
		this.dialogRef.close(this.game);
	}
}
