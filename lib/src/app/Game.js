import { Character } from "./Character.js";
import { Utils } from "./Utils.js";
export function createGameState() {
    return {
        grassyField: {
            lowerSrc: "/images/maps/Battleground1.png",
            upperSrc: "/images/maps/Battleground1.png",
            gameObjects: {
                player01: new Character({
                    isPlayerControlled: true,
                    x: Utils.withGrid(6),
                    y: Utils.withGrid(6),
                    src: "/images/characters/players/erio.png",
                    direction: 'down'
                }),
            }
        },
        hallway: {
            lowerSrc: "/images/maps/Battleground2.png",
            upperSrc: "/images/maps/Battleground2.png",
            gameObjects: {
                hero: new Character({
                    isPlayerControlled: true,
                    x: Utils.withGrid(5),
                    y: Utils.withGrid(6),
                }),
                npcHero: new Character({
                    x: 10,
                    y: 4,
                    src: "/images/characters/players/witch-girl.png"
                })
            }
        },
        giantTree: {}
    };
}
//# sourceMappingURL=Game.js.map