import { gamemodes } from "./enums/gamemodes";
import { questionmodes } from "./enums/questionmodes";

export interface GameSettings {
    gameLevel: 1|2|3;
    questionMode: questionmodes[];
    gameMode: gamemodes;
    answerInjection: boolean;

    rounds: number;
    roundStarted: boolean;
    roundPaused: boolean;
}