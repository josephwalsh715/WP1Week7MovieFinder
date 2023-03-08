import { Component } from '@angular/core';
import { IOMDBResponse } from './omdbresponse';
import { OmdbApiService } from './services/omdb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Finder';
  movieData:IOMDBResponse | undefined;
  errorMessge:any;
  name = 'Joe Walsh';
  studentNo = 'S00222915';

  constructor(private _omdbService:OmdbApiService){ }

  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData=movieData;
        console.log("Director name : " + this.movieData.Director)
      }
    )
    return false;
  }
}
