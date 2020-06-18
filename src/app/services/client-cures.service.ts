import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserAccessService} from './auth/user-access.service';
import {DosageModel} from '../models/dosage.model';

@Injectable({
  providedIn: 'root'
})
export class ClientCuresService {

  constructor(private http: HttpClient, private auth: UserAccessService) { }

  url = 'http://127.0.0.1:8080/api/accept/';


  getStats() {
    return this.http.get(this.url + this.auth.currentUser.userId + '/get-stats');
  }

  acceptDose(dose: DosageModel) {
    return this.http.post(this.url + this.auth.currentUser.userId + '/apply-accept', dose);
  }
}
