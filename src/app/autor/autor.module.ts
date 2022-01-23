import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
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

		MatButtonModule,
		MatIconModule,
		MatToolbarModule
	],
	providers: [],
	bootstrap: []
})
export class AutorModule {
}
