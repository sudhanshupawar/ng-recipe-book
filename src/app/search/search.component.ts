import { Healthlabel } from './../data/model/HealthLabel';
import { Dishtype } from './../data/model/DishTypes';
import { Dietlabel } from './../data/model/DietLabel';
import { Cuisinetype } from './../data/model/CuisinesTypes';
import { Component, OnInit } from '@angular/core';
import * as cuisinetypes from '../data/json/cuisinetype.json';
import * as dietlabels from '../data/json/dietlabel.json';
import * as distypes from '../data/json/dishtype.json';
import * as healthlabel from '../data/json/healthlabel.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cuisinetypes: Cuisinetype[] = cuisinetypes.cuisinetypes;
  dietlabels: Dietlabel[] = dietlabels.dietlabels;
  distypes: Dishtype[] = distypes.dishtypes;
  healthlabels: Healthlabel[] = healthlabel.healthlabels;

  randomColor = ['bg-red-400', 'bg-orange-400',
    'bg-green-400', 'bg-teal-400', 'bg-purple-400', 'bg-blue-400', 'bg-indigo-400'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getRandomBackground() {
    return this.randomColor[Math.round(Math.random() * (this.randomColor.length - 1))];
  }

  withFrontData(searchData: string) {
    this.router.navigate(['/search', searchData, { q: 'front' }]);
  }

  withBackData(searchData: string) {
    this.router.navigate(['/search', searchData, { q: 'back' }]);
  }

  searchByUserInput(searchRecipe: string) {
    this.router.navigate(['/search', searchRecipe.toLowerCase(), { q: 'search' }]);

  }
}
