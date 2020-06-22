import { Injectable, OnInit } from '@angular/core';
import * as mealtypejson from '../data/json/mealtype.json';
import { Mealtype } from '../data/model/MealType';


@Injectable({
  providedIn: 'root'
})
export class ReponseAccordingToTimeService {

  private massage: string;
  private currentmealtype: string;
  private time = new Date().getHours();

  private mealtypes: Mealtype[] = mealtypejson.mealtypes;

  timeResponse() {
    if (5 <= this.time && this.time <= 6) {
      this.massage = ' Good morning ! It\'s Tea time';
      this.currentmealtype = this.mealtypes[4].mealtype;

    } else if (6 < this.time && this.time <= 9) {
      this.massage = ' Good morning ! It\'s Breakfast time';
      this.currentmealtype = this.mealtypes[0].mealtype;

    } else if (9 < this.time && this.time <= 13) {
      this.massage = ' Good Afternoon ! It\'s Lunch time';
      this.currentmealtype = this.mealtypes[1].mealtype;

    } else if (18 < this.time && this.time <= 24) {
      this.massage = ' Good Evening ! It\'s Dinner time';
      this.currentmealtype = this.mealtypes[2].mealtype;

    } else {
      this.massage = 'Hey there , It\'s snaks time !';
      this.currentmealtype = this.mealtypes[3].mealtype;

    }
  }

  getOrderedMassage() {
    this.timeResponse();
    return this.massage;
  }

  getCurrentMealType() {
    this.timeResponse();
    return this.currentmealtype;
  }

}
