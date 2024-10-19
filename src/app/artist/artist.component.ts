import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/Spotify.service';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistName : string = "";
  artist ?: Artist;
  tabArtistes : Artist[] = [];

  constructor(public httpService: SpotifyService) { }

  async ngOnInit() {
   await this.httpService.connect(); 
  }

  async getArtist() : Promise<void>{
    // Allo 👋
    this.artist=await this.httpService.searchArtist(this.artistName);
    this.addArtiste();
  }

  async addArtiste(){
    if (this.artist){
      this.tabArtistes.push(this.artist);
      this.artist = undefined;
    }
  }



}
