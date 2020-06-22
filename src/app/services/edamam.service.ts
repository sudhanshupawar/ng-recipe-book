import { EdamamRoot } from './../data/model/Edamam';
import { ReponseAccordingToTimeService } from './reponse-according-to-time.service';
import { environment } from './../../environments/environment';
import { Injectable, APP_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EdamamService {

  constructor(private reponseAccordingToTimeService: ReponseAccordingToTimeService, private http: HttpClient) { }


  private APP_ID = environment.APP_ID;
  private APP_KEY = environment.APPLICATION_KEY;
  private query = this.reponseAccordingToTimeService.getCurrentMealType();

  private baseUrl = '';


  dafaultQuery<EdamamRoot>() {
    this.baseUrl = `https://api.edamam.com/search?q=${this.query}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}&from=0&to=32`;

    return this.http.get<EdamamRoot>(this.baseUrl);
  }

  chageMealQuery<EdamamRoot>(mealType: string) {

    this.baseUrl = `https://api.edamam.com/search?q=${mealType}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}&from=0&to=32`;

    return this.http.get<EdamamRoot>(this.baseUrl);
  }

}
