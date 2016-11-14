import { GamesComponent } from './games/games.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: '/games',
  pathMatch: 'full'
},
{
  path: 'games',
  component: GamesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class CatalogerRoutingModule { }
