import {LivroDTO} from './livro-d-t-o';

export class AutorDTO {
	id: number | undefined;
	nome: string | undefined;
	pseudonimo: string | undefined;
	dataNascimento: Date | undefined;
	livros: LivroDTO[] = [];
}
