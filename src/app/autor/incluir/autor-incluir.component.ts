import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';
import {AutorDTO} from '../../_model/autor-d-t-o';
import {LivroDTO} from '../../_model/livro-d-t-o';
import {AutorService} from '../../_service/api/autor.service';

declare var window: any;

@Component({
	selector: 'app-autor-incluir',
	templateUrl: './autor-incluir.component.html',
	styleUrls: ['./autor-incluir.component.scss']
})
export class AutorIncluirComponent implements OnInit {

	autorDTO: AutorDTO = new AutorDTO();

	livroDTO: LivroDTO = new LivroDTO();

	index: number = -1;

	isAlteracao: boolean | undefined;

	modalCadastrarLivro: any;

	constructor(private router: Router,
				private autorService: AutorService,
				private notifierService: NotifierService) {
	}

	ngOnInit() {
		this.modalCadastrarLivro = new window.bootstrap.Modal(
			document.getElementById('modalCadastrarLivro')
		);
	}

	abrirModalIncluirLivro() {
		this.isAlteracao = false;
		this.index = -1;
		this.modalCadastrarLivro.show();
	}

	abrirModalAlterarLivro(livroDTO: LivroDTO, index: number) {
		this.isAlteracao = true;
		this.index = index;
		this.livroDTO = JSON.parse(JSON.stringify(livroDTO));
		this.modalCadastrarLivro.show();
	}

	salvarLivro() {
		if (this.isAlteracao) {
			this.autorDTO.livros[this.index] = JSON.parse(JSON.stringify(this.livroDTO));
		} else {
			this.autorDTO.livros.push(JSON.parse(JSON.stringify(this.livroDTO)));
		}
		this.livroDTO = new LivroDTO();
		this.modalCadastrarLivro.hide();
	}

	excluirLivro(index: number) {
		this.autorDTO.livros.splice(index, 1);
	}

	salvarAutor() {
		this.autorService.postIncluirAutor(this.autorDTO).subscribe(
			{
				next: () => {
					this.notifierService.notify('success', 'O registro foi gravado com sucesso.');
					this.voltar();
				},
				error: errorMessage => {
					this.notifierService.notify('error', errorMessage);
				}
			}
		);
	}

	voltar() {
		this.router.navigate(['autor']).then();
	}

}
