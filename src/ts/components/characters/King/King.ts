import { Character } from "../../characterCard/Character/Character";
import { type CharacterDataStructure } from "../../characterCard/Character/CharacterDataStructure";
import { type KingStructure } from "./KingStructure";

export class King extends Character implements KingStructure {
  constructor(
    characterData: CharacterDataStructure,
    public yearsOfReign: number
  ) {
    super(characterData);
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}
