import { Component, OnInit } from '@angular/core';

interface TipoNomina {
  valor: string;
}

@Component({
  selector: 'app-nomina-modal',
  templateUrl: './nomina-modal.component.html',
  styleUrls: ['./nomina-modal.component.css']
})
export class NominaModalComponent implements OnInit {

  tipoNomina: TipoNomina[] = [
    {valor: 'Semanal'},
    {valor: 'Quincenal'},
    {valor: 'Catorcenal'},
    {valor: 'Mensual'}
  ];
  selectedTipoNomina = this.tipoNomina[0].valor;

  selectTipoTel(event: Event) {
    this.selectedTipoNomina = (event.target as HTMLSelectElement).value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
