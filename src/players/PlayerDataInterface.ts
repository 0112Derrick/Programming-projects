import { Character } from '../app/Character.js';

export interface playerSignupDataInterface {
    username: string,
    email: string,
    password: string,
}

export interface playerStatusInterface {
    username: string,
    status: string,
}

export interface commonDataInterface {
    username: string,
}

export interface playerProfileDataInterface extends commonDataInterface {
    username: string,
    email: string,

}
interface commonCharacterDataInterface {
    username: string,
}
export interface characterDataInterface extends commonCharacterDataInterface {
    characterID: number,
    attributes: {
        level: number,
        experience: number,
        experienceCap: number,
        statPoints: number,
        hp: number,// Determines how many times a player can take damage before dying & hp regen amount
        sp: number, // Determines how many times a magic atk can be used and regen amount
        Def: number,// Determines how much damage is taken from phyiscal hits
        Mdef: number,// Determines how much damage is taken from Magic hits
        Crit: number,// Determines wheter or not a hit does increased damgage & increased damage amount

        //stats directly controlled by the player when using levelinh points
        Atk: number,// Determines Physical atk damage and gives a minor boost to hp total
        Matk: number,// Determines Magic atk damage and gives a minor boost to sp total
<<<<<<< HEAD
        Vit: number,// Increases hp and def 
        Men: number,//Increases sp & mdef 
=======
        Vit: number,// Increases hp and def
        Men: number,//Increases sp & mdef
>>>>>>> multiplayer
        Dex: number,//Increases Crit  
    },
    class: string,
    guild: string,
    items: string[],
}
export default interface playerDataInterface extends playerProfileDataInterface {
    characters: characterDataInterface[];
}
<<<<<<< HEAD



=======
>>>>>>> multiplayer
