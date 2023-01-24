import { Character } from "../../characterCard/Character/Character";
import { type AdvisorStructre } from "./AdvisorStructure";
import { type CharacterDataStructure } from "../../characterCard/Character/CharacterDataStructure";

export class Advisor extends Character implements AdvisorStructre {
  constructor(
    characterData: CharacterDataStructure,
    public advises: Character
  ) {
    super(characterData);
    if (advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate(): string {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}
