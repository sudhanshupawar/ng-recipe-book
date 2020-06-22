import { Recipe } from './../data/model/Edamam';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hit } from '../data/model/Edamam';

export interface CutomeTotalDaily {
  label: string;
  quantity: number;
  unit: string;
}

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {

  label: string;
  mealtype: string;
  from: string;
  prevStoredData: Hit[] = [];

  recipe: Recipe;
  totalDaily: CutomeTotalDaily[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      this.label = params.get('recipiesName');
      this.mealtype = params.get('mealtype');
      this.from = params.get('from');

      if (this.mealtype) {
        this.prevStoredData = JSON.parse(localStorage.getItem(this.mealtype));

      } else {
        this.prevStoredData = JSON.parse(localStorage.getItem(this.from));
      }

      this.manageDataInRecipe();

    });

  }


  manageDataInRecipe() {
    this.prevStoredData.forEach(ele => {

      const formatArrayLabelToCheck = ele.recipe.label.replace(/\s/g, '-');

      if (formatArrayLabelToCheck === this.label) {

        this.recipe = ele.recipe;

        for (const td in this.recipe.totalDaily) {
          if (this.recipe.totalDaily.hasOwnProperty(td)) {
            this.totalDaily.push(this.recipe.totalDaily[td]);
          }
        }

      }

    });
  }

}
