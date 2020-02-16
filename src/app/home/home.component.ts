import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../core/api.service";
import { Portfolio } from "./../shared/models/portfolio";
import { Habilidades } from "./../shared/models/habilidades";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  items2: Portfolio[] = [];
  items: Habilidades[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    //this.apiService.portfolio().subscribe((resultado: Portfolio[]) => {
    //  this.items2 = resultado;
    //});

    this.items = [
      {
        id: 1,
        image: "assets/habilidades/analise.png",
        caption: "Análise de Dados"
      },
      {
        id: 2,
        image: "assets/habilidades/sites.png",
        caption: "Criação de sites"
      },
      {
        id: 3,
        image: "assets/habilidades/integracao.png",
        caption: "Integração entre sistemas"
      },
      {
        id: 4,
        image: "assets/habilidades/dashboard.png",
        caption: "Dashboards"
      },
      {
        id: 5,
        image: "assets/habilidades/database.png",
        caption: "Banco de Dados"
      },
      {
        id: 6,
        image: "assets/habilidades/aplicativos.png",
        caption: "Aplicativos"
      }
    ];

    this.items2 = [
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
      }
    ];
  }
}
