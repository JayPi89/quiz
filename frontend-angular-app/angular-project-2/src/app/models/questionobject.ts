import { questionmodes } from "./enums/questionmodes";

export class Questionobject {
    question: string;
    answer: string[] = [];
    type: questionmodes;
}