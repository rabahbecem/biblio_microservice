
import { Customer } from "./customer";

export class Facture {
    id!:string;
    date!:Date;
    amount!:BigInt;
   customerID!:string;
   customer!:Customer; 
   
}
