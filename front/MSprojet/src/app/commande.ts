import { CommandeDetail } from "./commande-detail";

export class Commande {
    id!:string;
    id_client!:string;
    montant!:Number;
    Date_commande!:Date;
    etat!:string;
    Details!:  CommandeDetail ;
}
