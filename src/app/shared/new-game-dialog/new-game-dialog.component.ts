import { Platform } from './../platform';
import { Game } from '../game.model';
import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
	selector: 'ctlg-new-game-dialog',
	templateUrl: './new-game-dialog.component.html',
	styleUrls: ['./new-game-dialog.component.scss']
})
export class NewGameDialogComponent {
	public newGame = new Game;
	public platforms = Platform.LIST;

	constructor(public dialogRef: MdDialogRef<NewGameDialogComponent>) {}

}
