import { FuncParam } from "./FuncParam";

export class Function{

    name: string;
    title: string;
    description: string;
    update_date: string;
    params: FuncParam[];
    returns: string;
    return_description: string;

    constructor(name: string, title: string, description: string, update_date: string, params: FuncParam[], returns: string, return_description: string){
        this.name = name;
        this.title = title;
        this.description = description;
        this.update_date = update_date;
        this.params = params;
        this.returns = returns;
        this.return_description = return_description;
    }

}