import { GameDetailComponent } from './games/game-detail/game-detail.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/games', pathMatch: 'full' },
	{
		path: 'games',
		children: [
			{path: '', component: GamesListComponent},
			{path: 'details/:gameKey', component: GameDetailComponent}
		]
	},
	{
		path: 'profile',
		component: ProfileComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class CatalogerRoutingModule { }
