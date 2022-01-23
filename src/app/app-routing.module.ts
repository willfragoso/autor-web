import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'autor',
		pathMatch: 'full'
	},
	{
		path: 'autor',
		loadChildren: () => import('./autor/autor.module').then(m => m.AutorModule)
	},
	{
		path: '**',
		redirectTo: 'autor'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
