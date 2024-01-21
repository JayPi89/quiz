import { gamemodes } from "../enums/quiz/gamemodes";
import { questionmodes } from "../enums/quiz/questionmodes";

export interface GameSettings {
    gameLevel: 1|2|3;
    questionMode: questionmodes[];
    gameMode: gamemodes;
    answerInjection: boolean;

    rounds: number;
    roundStarted: boolean;
    roundPaused: boolean;
}