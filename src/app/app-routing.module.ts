import { SearchResultComponent } from './search-result/search-result.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SearchComponent } from './search/search.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'recipies', pathMatch: 'full' },
  { path: 'recipies/:recipiesName', component: RecipeInfoComponent },
  { path: 'recipies', component: RecepiesComponent },
  { path: 'search/:searchData', component: SearchResultComponent },
  { path: 'search', component: SearchComponent },
  { path: 'bookmark', component: BookmarkComponent },
  { path: '**', redirectTo: 'recipies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
