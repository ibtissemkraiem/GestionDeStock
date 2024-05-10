
//? pour rendre les champs non obligatoires

export interface Menu {
    id:number;
    titre?:string;
    icon?:string;
    url?: string;
    sousMenu?:Array<Menu>; 
    isOpen?: boolean;
}