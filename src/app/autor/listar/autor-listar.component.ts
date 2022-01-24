import {Component, OnInit} from '@angular/core';
import {NotifierService} from 'angular-notifier';
import {AutorDTO} from '../../_model/autor-d-t-o';
import {AutorFiltroDTO} from '../../_model/autor-filtro-d-t-o';
import {AutorService} from '../../_service/api/autor.service';

@Component({
	selector: 'app-autor-listar',
	templateUrl: './autor-listar.component.html',
	styleUrls: ['./autor-listar.component.scss']
})
export class AutorListarComponent implements OnInit {

	autorFiltroDTO: AutorFiltroDTO = new AutorFiltroDTO;

	arrayAutorDTO: AutorDTO[] = [];

	constructor(private autorService: AutorService, private notifierService: NotifierService) {
	}

	ngOnInit() {
		this.pesquisar();
	}

	pesquisar() {
		this.autorService.getPesquisarAutor(this.autorFiltroDTO).subscribe(
			{
				next: data => {
					this.arrayAutorDTO = data['content'];
					if (this.arrayAutorDTO.length === 0) {
						this.notifierService.notify('warning', 'Nenhum registro foi encontrado.');
					}
				},
				error: errorMessage => {
					this.notifierService.notify('error', errorMessage);
				}
			}
		);
	}

	limpar() {
		this.autorFiltroDTO = new AutorFiltroDTO();
		this.pesquisar();
	}

}
