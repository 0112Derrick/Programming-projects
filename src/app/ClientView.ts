import { HTML_IDS as $id } from "../constants/HTMLElementIds.js";
import $ClientSyntheticEventEmitter from '../framework/ClientSyntheticEventEmitter.js'
import DOMPurify from 'dompurify';
import { EventConstants as $events } from '../constants/EventConstants.js'

class MissingElementError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Missing Html Element'
    }
}

class ClientView extends $ClientSyntheticEventEmitter {

    private DOM: HTMLElement[] = [];


    constructor() {
        super();
        for (let elem_id in $id) {
            let elem = document.getElementById($id[elem_id]);
            if (elem) {
                this.DOM[$id[elem_id]] = elem;
            } else {
                throw new MissingElementError(`Element id: ${$id}: ${$id[elem_id]} .`);
            }
        }
        this.DOM[$id.LOGOUT].addEventListener('click', () => { this.logoutAccountCallback() })

        document.getElementById('logout')!.addEventListener('click', () => { this.logoutAccountCallback() });
        const characterCreate = document.getElementById('characterScreen-CreateCharacterBtn');
<<<<<<< HEAD
        characterCreate?.addEventListener('click', () => { this.createCharacter()})
    }
    createCharacter() {
        //check GenderText
        
        //check ClassText 
=======
        characterCreate?.addEventListener('click', () => { this.createCharacter() })
    }
    createCharacter() {
        //check GenderText

        //check ClassText
>>>>>>> multiplayer

    }

    logoutAccountCallback() {
        this.dispatchEventLocal($events.LOGOUT, null);
    }


}
<<<<<<< HEAD
export let View = new ClientView();
=======
export let View = new ClientView();
>>>>>>> multiplayer
