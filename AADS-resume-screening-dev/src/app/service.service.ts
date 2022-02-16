import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import *  as  data from './data.json';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  jsonData: any;
  public API = environment.hostUrl;
  public s3API= environment.resumeUploadUrl;

  httpOptions1 = {
    headers: new HttpHeaders({
      'X-Amzn-SageMaker-Custom-Attributes': 'jdskills',
      'Content-Type': 'application/json'

    })
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      'X-Amzn-SageMaker-Custom-Attributes': 'predict',
      'Content-Type': 'application/json',
    })
  };

  httpOptions3 = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain',
    })
  };

  constructor(private httpClient: HttpClient) { }

  public uploadFile(fileNames: any): Observable<any> {
    // this.jsonData= data;
    // return this.jsonData
    console.log("Request Parameters");
    console.log("API : " + this.API);
    console.log("HEADER KEYS : " + this.httpOptions1.headers.keys());
    console.log("HEADER VALUES: " + this.httpOptions1.headers.getAll('X-Amzn-SageMaker-Custom-Attributes') + "," + this.httpOptions2.headers.getAll('Content-Type'));
    console.log("BODY : " + fileNames);
    return this.httpClient.post(this.API, { "names": fileNames }, this.httpOptions1);
  }

  callBackend(dataset: any): Observable<any> {
    console.log("Request Parameters");
    console.log("API : " + this.API);
    console.log("HEADER KEYS : " + this.httpOptions2.headers.keys());
    console.log("HEADER VALUES: " + this.httpOptions2.headers.getAll('X-Amzn-SageMaker-Custom-Attributes') + "," + this.httpOptions2.headers.getAll('Content-Type'));
    console.log("BODY : " + dataset);
    return this.httpClient.post(this.API, dataset, this.httpOptions2);
  }

  uploadFileToBackend(dataset: any): Observable<any> {
    console.log("Request Parameters");
    console.log("API : " + this.API);
    console.log("HEADER KEYS : " + this.httpOptions1.headers.keys());
    console.log("HEADER VALUES: " + this.httpOptions1.headers.getAll('X-Amzn-SageMaker-Custom-Attributes') + "," + this.httpOptions2.headers.getAll('Content-Type'));
    console.log("BODY : " + dataset);
    return this.httpClient.post(this.API, { "name": dataset }, this.httpOptions1);
  }

  uploadS3(dataset: any, fileName:any): Observable<any> {
    console.log("Request Parameters");
    console.log("API : " + this.s3API);
    console.log("HEADER KEYS : " + this.httpOptions3.headers.keys());
    console.log("BODY : " + dataset);
    return this.httpClient.post(this.s3API, { "body": dataset}, this.httpOptions3);
  }











}
