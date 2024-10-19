import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/Spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(public httpService: SpotifyService) { }

  ngOnInit(): void {
   this.httpService.connect(); 
  }

}
