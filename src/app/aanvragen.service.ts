import { Injectable } from "@angular/core";
import { Aanvraag } from "./Aanvraag";

@Injectable({
  providedIn: "root"
})
export class AanvragenService {
  constructor() {}

  SaveAanvraag(aanvraag: Aanvraag, aanvragen: Aanvraag[]): Aanvraag[] {
    let al_in_storage = false;
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key == aanvraag.naam) {
          al_in_storage = true;
        }
      }
    }
    if (!al_in_storage) {
      localStorage.setItem(aanvraag.naam, JSON.stringify(aanvraag));
      aanvragen.push(aanvraag);
    }
    return aanvragen;
  }
}
