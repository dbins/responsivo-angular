import { Component, OnInit } from "@angular/core";
import { Servicos } from "./../shared/models/servicos";

@Component({
  selector: "app-servicos",
  templateUrl: "./servicos.component.html",
  styleUrls: ["./servicos.component.css"]
})
export class ServicosComponent implements OnInit {
  items: Servicos[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        id: 1,
        icon: "fa-volume-up fa",
        caption: "Stay Successful",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
      },
      {
        id: 2,
        icon: "fa-calendar fa",
        caption: "Create An Effective Team",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
      },
      {
        id: 3,
        icon: "fa-globe fa",
        caption: "Launch A Unique Project",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
      },
      {
        id: 4,
        icon: "fa-trophy fa",
        caption: "Achieve Your Targets",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
      }
    ];
  }
}
