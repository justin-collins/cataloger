import { Game } from '../game.model';
import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
	selector: 'new-game-dialog',
	templateUrl: './new-game-dialog.component.html',
	styleUrls: ['./new-game-dialog.component.scss']
})
export class NewGameDialogComponent {
	private newGame = new Game;

	constructor(public dialogRef: MdDialogRef<NewGameDialogComponent>) {}

}
