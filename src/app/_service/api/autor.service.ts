import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, map, Observable} from 'rxjs';
import {AutorDTO} from '../../_model/autor-d-t-o';
import {AutorFiltroDTO} from '../../_model/autor-filtro-d-t-o';
import {AppService} from '../../app.service';

@Injectable({
	providedIn: 'root'
})
export class AutorService extends AppService {

	private resource = '/autor';

	constructor(private httpClient: HttpClient) {
		super();
	}

	getPesquisarAutor(autorFiltroDTO: AutorFiltroDTO): Observable<any> {
		let params = new HttpParams();
		if (autorFiltroDTO.id) {
			params = params.append('id', `${autorFiltroDTO.id}`);
		}
		if (autorFiltroDTO.nome) {
			params = params.append('nome', autorFiltroDTO.nome);
		}
		if (autorFiltroDTO.pseudonimo) {
			params = params.append('pseudonimo', autorFiltroDTO.pseudonimo);
		}
		if (autorFiltroDTO.dataNascimento) {
			params = params.append('dataNascimento', autorFiltroDTO.dataNascimento);
		}

		return this.httpClient.get<any>(
			this.baseApi + this.resource,
			{
				headers: this.getHeaders(),
				params
			}
		).pipe(
			map(this.extractData),
			catchError(this.handleError)
		);
	}

	getCarregarAutor(id: number) {
		return this.httpClient.get<any>(
			this.baseApi + this.resource + '/' + id,
			{
				headers: this.getHeaders()
			}
		).pipe(
			map(this.extractData),
			catchError(this.handleError)
		);
	}

	postIncluirAutor(autorDTO: AutorDTO): Observable<any> {
		return this.httpClient.post<any>(
			this.baseApi + this.resource,
			autorDTO,
			{
				headers: this.getHeaders()
			}
		).pipe(
			map(this.extractData),
			catchError(this.handleError)
		);
	}

	putAlterarAutor(autorDTO: AutorDTO): Observable<any> {
		return this.httpClient.put<any>(
			this.baseApi + this.resource,
			autorDTO,
			{
				headers: this.getHeaders()
			}
		).pipe(
			map(this.extractData),
			catchError(this.handleError)
		);
	}

}
