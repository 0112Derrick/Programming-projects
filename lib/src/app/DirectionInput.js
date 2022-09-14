export class DirectionInput {
    heldDirections;
    map;
    constructor() {
        this.heldDirections = [];
        this.map = {
            "ArrowUp": "up",
            "ArrowDown": "down",
            "ArrowLeft": "left",
            "ArrowRight": "right",
            "KeyW": "up",
            "KeyS": "down",
            "KeyA": "left",
            "KeyD": "right",
            "Space": "jump",
        };
    }
    get direction() {
        return this.heldDirections[0];
    }
    init() {
        document.addEventListener('keydown', e => {
            const dir = this.map[e.code];
            if (dir && this.heldDirections.indexOf(dir) === -1) {
                this.heldDirections.unshift(dir);
                console.log('direction: ', this.heldDirections);
            }
        });
        document.addEventListener("keyup", (e) => {
            const dir = this.map[e.code];
            const index = this.heldDirections.indexOf(dir);
            if (index > -1) {
                this.heldDirections.splice(index, 1);
                console.log('direction: ', this.heldDirections);
            }
        });
    }
}
//# sourceMappingURL=DirectionInput.js.map