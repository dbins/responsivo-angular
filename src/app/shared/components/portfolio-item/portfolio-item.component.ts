import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-portfolio-item",
  templateUrl: "./portfolio-item.component.html",
  styleUrls: ["./portfolio-item.component.css"]
})
export class PortfolioItemComponent implements OnInit {
  @Input() id: number;
  @Input() caption: string;
  @Input() description: string;
  @Input() image: string;

  constructor() {}

  ngOnInit(): void {}
}
