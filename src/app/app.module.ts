import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    RecepiesComponent,
    SearchComponent,
    BookmarkComponent,
    CardComponent,
    SidebarComponent,
    NavbarComponent,
    RecipeInfoComponent,
    SearchResultComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
