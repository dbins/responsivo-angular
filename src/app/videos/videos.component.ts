import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../core/api.service";
import { Videos } from "./../shared/models/videos";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.css"]
})
export class VideosComponent implements OnInit {
  items: Videos[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    //this.apiService.videos().subscribe((resultado: Videos[]) => {
    //  this.items = resultado;
    //});
    this.items = [
      {
        id: 1,
        image: "imagem1.png",
        caption: "Vídeo 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 2,
        image: "imagem1.png",
        caption: "Vídeo 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 3,
        image: "imagem1.png",
        caption: "Vídeo 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 4,
        image: "imagem1.png",
        caption: "Vídeo 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 5,
        image: "imagem1.png",
        caption: "Vídeo 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 6,
        image: "imagem1.png",
        caption: "Vídeo 6",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      }
    ];
  }
}
