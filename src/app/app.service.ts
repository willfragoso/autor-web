import {HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable()
export class AppService {

	get baseApi() {
		return environment.baseApiUrl + '/autor-api';
	}

	protected getHeaders(): any {
		const serviceHeaders = new HttpHeaders(
			{
				'Content-Type': 'application/json; charset=UTF-8'
			}
		);
		return {headers: serviceHeaders};
	}

	protected extractData(httpResponse: HttpResponse<any>): any {
		return httpResponse;
	}

	protected handleError(httpErrorResponse: HttpErrorResponse) {
		// console.log(httpErrorResponse);
		let errorMessage;
		if (httpErrorResponse.status == 0) {
			errorMessage = 'Erro de conexão. Não houve resposta do servidor backend.';
		} else {
			if (httpErrorResponse.error && httpErrorResponse.error['message']) {
				errorMessage = `${httpErrorResponse.error.message}`;
			} else {
				errorMessage = `${httpErrorResponse.message}`;
			}
		}
		return throwError(errorMessage);
	}

}
