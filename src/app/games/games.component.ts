import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'app-games',
	templateUrl: './games.component.html',
	styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
	private items: FirebaseListObservable<any[]>;

	constructor(af: AngularFire) {
		this.items = af.database.list('/items');

		// const itemObservable = af.database.object('/item');
		// itemObservable.set({ name: 'new name!'});
	}

	ngOnInit() {
	}

}
