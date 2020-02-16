import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../core/api.service";
import { Ferramentas } from "./../shared/models/ferramentas";

@Component({
  selector: "app-ferramentas",
  templateUrl: "./ferramentas.component.html",
  styleUrls: ["./ferramentas.component.css"]
})
export class FerramentasComponent implements OnInit {
  items: Ferramentas[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    //this.apiService.ferramentas().subscribe((resultado: Ferramentas[]) => {
    //  this.items = resultado;
    //});
    this.items = [
      {
        id: 1,
        image: "imagem1.png",
        caption: "Ferramentas 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 2,
        image: "imagem1.png",
        caption: "Ferramentas 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 3,
        image: "imagem1.png",
        caption: "Ferramentas 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 4,
        image: "imagem1.png",
        caption: "Ferramentas 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 5,
        image: "imagem1.png",
        caption: "Ferramentas 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 6,
        image: "imagem1.png",
        caption: "Ferramentas 6",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      }
    ];
  }
}
