import { Component, Input, OnInit } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-video-item",
  templateUrl: "./video-item.component.html",
  styleUrls: ["./video-item.component.css"]
})
export class VideoItemComponent implements OnInit {
  @Input() id: number;
  @Input() caption: string;
  @Input() description: string;
  @Input() image: string;

  constructor(private modalService: NgbModal) {}
  closeResult: string;
  ngOnInit(): void {}

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
