import { Fighter } from "../Fighter/Fighter";
import { type CharacterDataStructure } from "../../characterCard/Character/CharacterDataStructure";
import { Character } from "../../characterCard/Character/Character";
import { type SquireStructure } from "./SquireStructure";

export class Squire extends Character implements SquireStructure {
  constructor(
    characterData: CharacterDataStructure,
    public kissAssLevel: number,
    public serves: Fighter
  ) {
    super(characterData);
    this.kissAssLevel = this.kissAssLevelFilter(kissAssLevel);

    if (serves instanceof Fighter) {
      this.serves = serves;
    }
  }

  communicate(): string {
    return `${super.communicate()}I'm a loser`;
  }

  private kissAssLevelFilter(kissAssLevel: number): number {
    if (kissAssLevel < 0) {
      return 0;
    }

    if (kissAssLevel > 10) {
      return 10;
    }

    return kissAssLevel;
  }
}
