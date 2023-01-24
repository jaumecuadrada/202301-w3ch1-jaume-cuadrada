import { type CharacterStructure } from "../../characterCard/Character/CharacterStructure";
import { type Character } from "../../characterCard/Character/Character";

export type AdvisorStructre = {
  advises: Character;
} & CharacterStructure;
