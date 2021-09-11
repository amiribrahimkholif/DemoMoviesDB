import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  imgPrefix:string ='https://image.tmdb.org/t/p/w500/';
  movieDetails:any ={};
  tvDetails:any ={};
  personDetails:any ={};
  id:string = '';
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) {
   this.id =  _ActivatedRoute.snapshot.params.id;
   _MoviesService.getMovieDetails(this.id,"movie").subscribe((response)=>{
      this.movieDetails = response ;
    });
   _MoviesService.getMovieDetails(this.id,"tv").subscribe((response)=>{
      this.tvDetails = response ;
    });
   _MoviesService.getMovieDetails(this.id,"person").subscribe((response)=>{
      this.personDetails = response ;
    });
   }

  ngOnInit(): void {
  }

}
