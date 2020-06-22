import { ReponseAccordingToTimeService } from './../services/reponse-according-to-time.service';
import { Mealtype } from './../data/model/MealType';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as mealtypejson from '../data/json/mealtype.json';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() onChageMealType = new EventEmitter<string>();

  mealtypes: Mealtype[] = mealtypejson.mealtypes;
  currentmealtype: string;

  constructor(private reponseAccordingToTimeService: ReponseAccordingToTimeService) { }

  ngOnInit(): void {
    this.currentmealtype = this.reponseAccordingToTimeService.getCurrentMealType();
  }

  requestCertainMealType(mealtype) {
    this.onChageMealType.emit(mealtype);
  }



}
