import { Injectable } from '@angular/core';
import { Hit } from '../data/model/Edamam';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarkArray: Hit[];

  constructor() { }

  initBookmark() {

    const bookmarkPresent = localStorage.getItem('bookmarks');

    bookmarkPresent ? console.log('bookmark present ')
      : localStorage.setItem('bookmarks', JSON.stringify(this.bookmarkArray = []));

  }

  getBookmarkItems(): Hit[] {

    return JSON.parse(localStorage.getItem('bookmarks'));

  }

  bookmarkToggle(recipe: Hit, route: string) {

    const bookmarkArray: Hit[] = JSON.parse(localStorage.getItem('bookmarks'));

    if (route === 'bookmark') {

      if (recipe.bookmarked) {

        const index = bookmarkArray.indexOf(recipe);

        recipe.bookmarked = !recipe.bookmarked;

        bookmarkArray.splice(index, 1);

      } else {

        recipe.bookmarked = !recipe.bookmarked;

        bookmarkArray.push(recipe);

      }

    } else {

      if (bookmarkArray.length === 0) {

        recipe.bookmarked = !recipe.bookmarked;

        bookmarkArray.push(recipe);

      }

      bookmarkArray.forEach(rec => {

        if (!(rec.recipe.label === recipe.recipe.label)) {

          recipe.bookmarked = !recipe.bookmarked;

          bookmarkArray.push(recipe);

        }

      });

    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarkArray));

  }
}
