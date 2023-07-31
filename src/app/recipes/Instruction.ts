import {Ingredient} from "./Ingredient";

export interface Instruction {
  id: number,
  step: number,
  action: string,
  description?: string,
  duration?: number,
  ingredients?: Ingredient[]
}
