export class FuncParam{
    name: string;
    type: string;
    description: string;
  
    constructor(name: string, description: string, type: string){
        this.name = name;
        this.description = description;
        this.type = type;
    }
}