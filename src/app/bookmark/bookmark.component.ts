import { Router } from '@angular/router';
import { Hit } from './../data/model/Edamam';
import { BookmarkService } from './../services/bookmark.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  hits: Hit[];

  constructor(private bookmarkService: BookmarkService, private router: Router) { }

  ngOnInit(): void {
    this.hits = this.bookmarkService.getBookmarkItems();
  }

  goToRecipieInfo(recipe: Hit) {

    this.router.navigate(['/recipies', (recipe.recipe.label).replace(/\s/g, '-'), { from: 'bookmarks' }]);

  }
}
