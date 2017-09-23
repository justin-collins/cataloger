import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'ctlg-confirm-dialog',
	templateUrl: './confirm-dialog.component.html',
	styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

	constructor(public dialogRef: MdDialogRef<ConfirmDialogComponent>,
		@Inject(MD_DIALOG_DATA) public confirmMessage: string) { }

	ngOnInit() { }

}
