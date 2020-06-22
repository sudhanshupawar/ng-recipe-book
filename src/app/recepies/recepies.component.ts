import { EdamamRoot, Hit } from './../data/model/Edamam';
import { EdamamService } from './../services/edamam.service';
import { Component, OnInit } from '@angular/core';
import { ReponseAccordingToTimeService } from '../services/reponse-according-to-time.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  massage: string;
  showMassge = true;
  currentmealtype: string;
  mealtype: string;


  recipes: Hit[];

  constructor(private reponseAccordingToTimeService: ReponseAccordingToTimeService,
    private edamamService: EdamamService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.massage = this.reponseAccordingToTimeService.getOrderedMassage();
    this.currentmealtype = this.reponseAccordingToTimeService.getCurrentMealType();

    const prevStoredData = localStorage.getItem(this.currentmealtype);

    this.mealtype = this.currentmealtype;

    if (prevStoredData) {
      this.recipes = JSON.parse(prevStoredData);
    } else {
      this.edamamService.dafaultQuery<EdamamRoot>()
        .subscribe(response => {
          this.recipes = response.hits;
          localStorage.setItem(this.currentmealtype, JSON.stringify(this.recipes));
        });
    }
  }

  onChangeMealType(mealtype: string) {

    this.showMassge = false;
    this.mealtype = mealtype;
    const prevStoredData = localStorage.getItem(mealtype);
    if (prevStoredData) {
      this.recipes = JSON.parse(prevStoredData);

    } else {
      this.edamamService.chageMealQuery<EdamamRoot>(mealtype)
        .subscribe(response => {
          this.recipes = response.hits;
          localStorage.setItem(mealtype, JSON.stringify(this.recipes));
        });
    }

  }

  goToRecipieInfo(recipe: Hit) {

    this.router.navigate(['/recipies', (recipe.recipe.label).replace(/\s/g, '-'), { mealtype: this.mealtype }]);

  }

}
