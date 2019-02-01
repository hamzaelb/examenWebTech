import { Component } from "@angular/core";
import { AanvragenService } from "./aanvragen.service";
import { FormControl, FormGroup } from "@angular/forms";
import { Aanvraag } from "./Aanvraag";
import { Data } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Aanvragen";
  aanvraag: FormGroup;
  aanvragen: Aanvraag[];

  ngOnInit() {
    this.aanvraag = new FormGroup({
      naam: new FormControl(""),
      examen: new FormControl(""),
      reden: new FormControl(""),
      datum_indienen: new FormControl("")
    });
  }
  constructor(public AanvragenService: AanvragenService) {}

  nieuwe_Aanvraag() {
    let aanvraag: Aanvraag;
    aanvraag = this.aanvraag.value;
    this.aanvragen = this.AanvragenService.SaveAanvraag(
      aanvraag,
      this.aanvragen
    );
  }
}
