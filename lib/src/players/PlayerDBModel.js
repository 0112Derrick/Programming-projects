import pkg from 'mongoose';
const { Schema, model } = pkg;
const { pbkdf2Sync } = await import('node:crypto');
let crypto;
try {
    crypto = await import('node:crypto');
}
catch (err) {
    console.log('crypto support is disabled!');
}
export const characterSchema = new Schema({
    username: { type: String },
    characterID: { type: Number },
    attributes: { type: Object },
    class: { type: String },
    guild: { type: String },
    items: { type: [String] },
});
characterSchema.method('syncCharacter', function (character) {
    let docAsObject = this.toObject();
    let characterLocal = {
        username: docAsObject.username,
        characterID: docAsObject.characterID,
        attributes: {
            level: docAsObject.level,
            experience: docAsObject.experience,
            experienceCap: docAsObject.experirenceCap,
            statPoints: docAsObject.statPoints,
            hp: docAsObject.hp,
            sp: docAsObject.sp,
            Def: docAsObject.Def,
            Mdef: docAsObject.Mdef,
            Crit: docAsObject.Crit,
            Atk: docAsObject.atk,
            Matk: docAsObject.Matk,
            Vit: docAsObject.Vit,
            Men: docAsObject.Men,
            Dex: docAsObject.Dex,
        },
        class: docAsObject.class,
        guild: docAsObject.guild,
        items: docAsObject.items,
    };
    character.setData(characterLocal);
});
export const playerSchema = new Schema({
    username: { type: String },
    email: { type: String, index: { unique: true }, required: true },
    hash: { type: String },
    salt: { type: String },
    characters: { type: [String] },
});
playerSchema.method('validPassword', function (password) {
    const reaclHash = pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString();
    return this.hash === reaclHash;
});
playerSchema.method('hashPassword', function (password) {
    let arrayBufferView = new Int16Array(16);
    this.salt = crypto.getRandomValues(arrayBufferView);
    this.hash = pbkdf2Sync(password, this.salt, 1000, 64, 'sha512');
    playerSchema.method('syncPlayer', function (player) {
        let docAsObject = this.toObject();
        let playerLocal = {
            characters: docAsObject.characters,
            username: docAsObject.username,
            email: docAsObject.email,
        };
        player.setData(playerLocal);
    });
});
const PlayerModel = model('Players', playerSchema);
export default PlayerModel;
//# sourceMappingURL=PlayerDBModel.js.map