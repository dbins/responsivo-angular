import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../core/api.service";
import { Portfolio } from "./../shared/models/portfolio";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"]
})
export class PortfolioComponent implements OnInit {
  items: Portfolio[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    //this.apiService.portfolio().subscribe((resultado: Portfolio[]) => {
    //  this.items = resultado;
    //});

    this.items = [
      {
        id: 1,
        image: "imagem1.png",
        caption: "Portfólio 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 2,
        image: "imagem1.png",
        caption: "Portfólio 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 3,
        image: "imagem1.png",
        caption: "Portfólio 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 4,
        image: "imagem1.png",
        caption: "Portfólio 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 5,
        image: "imagem1.png",
        caption: "Portfólio 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 6,
        image: "imagem1.png",
        caption: "Portfólio 6",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      }
    ];
  }
}
