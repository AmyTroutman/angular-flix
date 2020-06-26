import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchResults = [];
  myMovieList =  [];
  title = 'Angular Flix';

  constructor(private movieService: MovieService) {}
  async ngOnInit(): Promise<void> {
  await this.movieService.loadMovieList();
  this.searchResults = this.movieService.getSearchResults();
  this.myMovieList = this.movieService.getMovieList();
  }
}
