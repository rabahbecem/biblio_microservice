import { Input } from "@angular/core";

export class CommandeDetail {
    Livre!:string;
    Qte!:Number;
    
    public get livre(){
        return this.Livre;
    }
   
    public get qte(){
        return this.Qte
    }
    public set livre(value: string){
        this.Livre=value;
    }
    public set qte(va: Number){
        this.Qte=va;
    }
}
