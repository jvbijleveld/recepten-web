import {Recipe} from "../recipes/recipe";

export const recipetList: Recipe[] = [
  {id: 1, name: "First recept", instructions: [{id:11, step: 1, action:"WAIT", instruction: "Instruction 11" }]},
  {id: 2, name: "Second recept", instructions: [{id:21, step: 1, action:"BAKE", instruction: "Instruction 21" }]},
  {id: 3, name: "Third recept", instructions: [{id:31, step: 1, action:"COOK", instruction: "Instruction 31" }]},
  {id: 4, name: "Fourth recept", instructions: [{id:41, step: 1, action:"STIR", instruction: "Instruction 41" }]}
];
