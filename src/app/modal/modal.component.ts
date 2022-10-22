import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title = "";
  @Input() description = "";

  @Output() cerrarMod = new EventEmitter<boolean>();

  constructor() { }

  cerrarModal() {
    this.cerrarMod.emit(false);
  }

  ngOnInit(): void {
  }

}
