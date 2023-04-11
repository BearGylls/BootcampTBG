export class Animal {
    public height: number=0;
    public weight: number=0;
    public size: number=0;
    public specie: string="";

    constructor(specie: string, height: number){
        this.height = height;
        this.weight = Math.floor(Math.random()* 4 );
        this.size = Math.floor(Math.random()* 6 );
    }        
}