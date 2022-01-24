import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AutorAlterarComponent} from './alterar/autor-alterar.component';
import {AutorRoutingModule} from './autor-routing.module';
import {AutorIncluirComponent} from './incluir/autor-incluir.component';
import {AutorListarComponent} from './listar/autor-listar.component';

@NgModule({
	declarations: [
		AutorListarComponent,
		AutorIncluirComponent,
		AutorAlterarComponent
	],
	imports: [
		AutorRoutingModule,
		FormsModule,
		CommonModule
	],
	providers: [],
	bootstrap: []
})
export class AutorModule {
}
