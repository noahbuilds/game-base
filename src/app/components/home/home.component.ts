import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Game } from 'src/app/models/game';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Api as ApiResponse } from 'src/app/models/api';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort?: string;
  public games?: Array<Game>;
  private routeSub?: Subscription;
  private gameSub?: Subscription;
  public isLoading: Boolean = true;


  constructor(
    private gameService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
   this.routeSub= this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }

  searchGames(sort: string|any, search?: string) {
    this.gameSub= this.gameService
      .getGameList(sort, search)
      .subscribe({
        next: (gameList:ApiResponse<Game>)=>{ 
          this.games = gameList.results;
        },
        complete: ()=>{
          this.isLoading = false
           console.log('Completed task')}
      
      });
  }

  openGameDetails(gameId:number):void{
    this.router.navigate(['details', gameId])
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    if(this.gameSub){
      this.gameSub.unsubscribe();
    }
    if(this.routeSub){
      this.routeSub.unsubscribe();
    }

   

  }
}
