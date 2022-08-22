import { Document } from "mongoose";
import playerDataInterface from "../PlayerDataInterface.js";

export interface IplayerDocument extends Document, playerDataInterface {
    hash: string,
    salt: string,
}