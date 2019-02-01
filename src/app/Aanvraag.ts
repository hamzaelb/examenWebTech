export class Aanvraag {
  naam: string;
  examen: string;
  reden: string;
  datum_indienen: Date;
  constructor(
    naam: string,
    examen: string,
    reden: string,
    datum_indienen: Date
  ) {
    this.naam = naam;
    this.examen = examen;
    this.reden = reden;
    this.datum_indienen = datum_indienen;
  }
}
