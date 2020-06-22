import { BookmarkService } from './services/bookmark.service';
import { Hit } from './data/model/Edamam';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recipe-app';

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {

    this.bookmarkService.initBookmark();
  }


}
