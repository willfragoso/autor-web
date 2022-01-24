import {Component, OnInit} from '@angular/core';
import {delay} from 'rxjs';
import {LoadingService} from './_service/util/loading.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	loading: boolean = false;

	constructor(private loadingService: LoadingService) {
	}

	ngOnInit(): void {
		this.listenToLoading();
	}

	private listenToLoading(): void {
		this.loadingService.isLoading.pipe(delay(0)).subscribe(
			isLoading => {
				this.loading = isLoading;
			}
		);
	}

}
