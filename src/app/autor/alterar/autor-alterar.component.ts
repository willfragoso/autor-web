import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';
import {AutorDTO} from '../../_model/autor-d-t-o';
import {LivroDTO} from '../../_model/livro-d-t-o';
import {AutorService} from '../../_service/api/autor.service';

declare var window: any;

@Component({
	selector: 'app-autor-alterar',
	templateUrl: './autor-alterar.component.html',
	styleUrls: ['./autor-alterar.component.scss']
})
export class AutorAlterarComponent implements OnInit {

	autorDTO: AutorDTO = new AutorDTO();

	livroDTO: LivroDTO = new LivroDTO();

	index: number = -1;

	isAlteracao: boolean | undefined;

	modalCadastrarLivro: any;

	constructor(private router: Router,
				private activatedRoute: ActivatedRoute,
				private autorService: AutorService,
				private notifierService: NotifierService) {
		this.activatedRoute.params.forEach(
			params => {
				this.carregarAutor(params['id']);
				return;
			}
		).then();
	}

	ngOnInit() {
		this.modalCadastrarLivro = new window.bootstrap.Modal(
			document.getElementById('modalCadastrarLivro')
		);
	}

	carregarAutor(id: number) {
		this.autorService.getCarregarAutor(id).subscribe(
			{
				next: autorDTO => {
					this.autorDTO = autorDTO;
				},
				error: errorMessage => {
					this.notifierService.notify('error', errorMessage);
				}
			}
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
		this.autorService.putAlterarAutor(this.autorDTO).subscribe(
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
