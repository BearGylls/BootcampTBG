import { Animal } from "./animal";

export class Elephant extends Animal{
    public name: string ="";

    constructor(specie: string, height: number, name: string){
        super(specie, height);
        this.name = name;
    }
}