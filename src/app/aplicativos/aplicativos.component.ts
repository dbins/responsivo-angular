import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../core/api.service";
import { Aplicativos } from "./../shared/models/aplicativos";

@Component({
  selector: "app-aplicativos",
  templateUrl: "./aplicativos.component.html",
  styleUrls: ["./aplicativos.component.css"]
})
export class AplicativosComponent implements OnInit {
  items: Aplicativos[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    //this.apiService.aplicativos().subscribe((resultado: Aplicativos[]) => {
    //  this.items = resultado;
    //});
    this.items = [
      {
        id: 1,
        image: "imagem1.png",
        caption: "Aplicativo 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 2,
        image: "imagem1.png",
        caption: "Aplicativo 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 3,
        image: "imagem1.png",
        caption: "Aplicativo 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 4,
        image: "imagem1.png",
        caption: "Aplicativo 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 5,
        image: "imagem1.png",
        caption: "Aplicativo 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 6,
        image: "imagem1.png",
        caption: "Aplicativo 6",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      }
    ];
  }
}
