/**
 * DXC RUN 4U API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Error20response } from '../model/error20response';
import { JWT20response } from '../model/jWT20response';
import { Login20request } from '../model/login20request';
import { Register20request } from '../model/register20request';
import { Registration20response } from '../model/registration20response';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AuthService {

    protected basePath = 'https://localhost/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param authorization JWT auth token, format: JWT &lt;access_token&gt;
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getHelloWorld(authorization: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getHelloWorld(authorization: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getHelloWorld(authorization: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getHelloWorld(authorization: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling getHelloWorld.');
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<any>(`${this.basePath}/auth/hello`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Log in as an existing user
     * 
     * @param payload 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postLogin(payload: Login20request, observe?: 'body', reportProgress?: boolean): Observable<JWT20response>;
    public postLogin(payload: Login20request, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JWT20response>>;
    public postLogin(payload: Login20request, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JWT20response>>;
    public postLogin(payload: Login20request, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (payload === null || payload === undefined) {
            throw new Error('Required parameter payload was null or undefined when calling postLogin.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<JWT20response>(`${this.basePath}/auth`,
            payload,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Register a new user
     * 
     * @param payload 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postRegister(payload: Register20request, observe?: 'body', reportProgress?: boolean): Observable<Registration20response>;
    public postRegister(payload: Register20request, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Registration20response>>;
    public postRegister(payload: Register20request, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Registration20response>>;
    public postRegister(payload: Register20request, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (payload === null || payload === undefined) {
            throw new Error('Required parameter payload was null or undefined when calling postRegister.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Registration20response>(`${this.basePath}/auth/register`,
            payload,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
