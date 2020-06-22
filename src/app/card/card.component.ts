import { BookmarkService } from './../services/bookmark.service';
import { Hit } from './../data/model/Edamam';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() recipe: Hit;
  @Input() route: string;

  bokmarkAddedLabel = true;

  randomColor = ['bg-red-400', 'bg-orange-400',
    'bg-green-400', 'bg-teal-400', 'bg-purple-400', 'bg-blue-400', 'bg-indigo-400'];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
  }

  getRandomBackground() {
    return this.randomColor[Math.round(Math.random() * (this.randomColor.length - 1))];
  }

  bookmarkRecipe(recipe: Hit) {

    this.bokmarkAddedLabel = false;

    this.bookmarkService.bookmarkToggle(recipe, this.route);

    setTimeout(() => {
      this.bokmarkAddedLabel = true;
    }, 2000);


  }



}
