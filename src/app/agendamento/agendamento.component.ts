import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ModalTattoComponent } from '../modal-tattoo/modal-tatto.component';
import { ModalPercingComponent } from '../modal-percing/modal-percing.component';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  abreDialog() {
    const dialogRef = this.dialog.open(ModalTattoComponent, {
      maxWidth: '100vw',
      maxHeight: '85vh',
    });
    dialogRef.afterClosed()
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalPercingComponent);
    dialogRef.afterClosed()
  }
}
