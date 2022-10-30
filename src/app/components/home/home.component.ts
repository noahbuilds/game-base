import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Game } from 'src/app/models/game';
import { ActivatedRoute, Params } from '@angular/router';
import { Api as ApiResponse } from 'src/app/models/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 public sort?: string;
 public games?: Array<Game>

  constructor( private gameService: HttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe((params:Params)=>{
    if(params['game-search']){
      this.searchGames('metacrit', params['game-search']); 
    }
    else{
      this.searchGames('metacrit')
    }
   })
  }

  searchGames(sort:string, search?:string){
    this.gameService.getGameList(sort, search).subscribe((gameList: ApiResponse<Game>)=>{
      this.games =gameList.results
      console.log(gameList)
    })
  }

}
