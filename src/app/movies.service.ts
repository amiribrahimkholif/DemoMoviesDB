import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }



  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`http://api.themoviedb.org/3/trending/${mediaType}/week?api_key=86fb893e5105b3466f1e547500c608bd`);
  }
  getMovieDetails(movie_id:string,mediaType:string):Observable<any>
  {
    return  this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${movie_id}?api_key=86fb893e5105b3466f1e547500c608bd&language=en-US`);
  }

}
