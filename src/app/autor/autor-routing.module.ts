import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AutorAlterarComponent} from './alterar/autor-alterar.component';
import {AutorIncluirComponent} from './incluir/autor-incluir.component';
import {AutorListarComponent} from './listar/autor-listar.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'listar'
	},
	{
		path: 'listar',
		component: AutorListarComponent
	},
	{
		path: 'incluir',
		component: AutorIncluirComponent
	},
	{
		path: 'alterar',
		component: AutorAlterarComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AutorRoutingModule {
}
