import { Field } from "./Field";
import { Function } from "./Function";

export class Section{
    name: string;
    description: string;
    functions: Function[];
    fields: Field[];

    constructor(name: string, description: string, functions: Function[], fields: Field[]){
        this.name = name;
        this.description = description;
        this.functions = functions;
        this.fields = fields;
    }

    static empty(){
        return new Section("", "", [], []);
    }
}