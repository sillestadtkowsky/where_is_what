class BaseEntity {

    public name: string;
    public date: Date = new Date();

    constructor(name?: string){
        this.name = name;
    }
}

export class Wohnung extends BaseEntity {
    
    public raeume: Array<Raum> = new Array<Raum>();

}

export class Raum extends BaseEntity {

    public schraenke: Array<Schrank> = new Array<Schrank>();
}

export class Schrank extends BaseEntity {

    public gegenstaende: Array<Gegenstand> = new Array<Gegenstand>();
}

export class Gegenstand extends BaseEntity {

}