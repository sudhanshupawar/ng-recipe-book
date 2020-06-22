import { EdamamService } from './../services/edamam.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  bindDataTo: string;
  searchData: string;

  constructor(private route: ActivatedRoute, private edamamService: EdamamService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: Params) => {

      this.bindDataTo = params.get('q');
      this.searchData = params.get('searchData');

    });

  }

}
