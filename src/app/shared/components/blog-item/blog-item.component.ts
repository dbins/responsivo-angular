import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-blog-item",
  templateUrl: "./blog-item.component.html",
  styleUrls: ["./blog-item.component.css"]
})
export class BlogItemComponent implements OnInit {
  @Input() id: number;
  @Input() caption: string;
  @Input() description: string;
  @Input() image: string;
  @Input() category: string;

  constructor() {}

  ngOnInit(): void {}
}
