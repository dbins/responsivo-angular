import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../core/api.service";
import { Blog } from "./../shared/models/blog";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  items: Blog[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    //this.apiService.blog().subscribe((resultado: Blog[]) => {
    //  this.items = resultado;
    //});
    this.items = [
      {
        id: 1,
        image: "imagem1.png",
        caption: "Blog 1",
        category: "SQL",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 2,
        image: "imagem1.png",
        caption: "Blog 2",
        category: "SQL",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 3,
        image: "imagem1.png",
        caption: "Blog 3",
        category: "SQL",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 4,
        image: "imagem1.png",
        caption: "Blog 4",
        category: "SQL",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 5,
        image: "imagem1.png",
        caption: "Blog 5",
        category: "SQL",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      },
      {
        id: 6,
        image: "imagem1.png",
        caption: "Blog 6",
        category: "SQL",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
      }
    ];
  }
}
