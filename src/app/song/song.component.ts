import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../services/google.service';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  videoSearchText : string = "";
  videoId : string = "";
  videoUrl ?: SafeResourceUrl;

  constructor(public google : GoogleService) { }

  ngOnInit() {
  }

  async searchVideo(): Promise <void>{
    this.videoId = await this.google.searchVideoId(this.videoSearchText); // Obtenir l'id d'une vidéo
   this.videoUrl= this.google.getSafeUrl(this.videoId); // Obtenir l'URL de la vidéo "sanitizé". La vidéo sera automatiquement affichée dans la page après.
  }
}
