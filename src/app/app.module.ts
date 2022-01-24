import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NotifierModule} from 'angular-notifier';
import {LoadingInterceptor} from './_interceptor/loading.interceptor';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		NotifierModule
	],
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
