import { questionmodes } from "../enums/quiz/questionmodes";

export class Questionobject {
    question: string;
    answer: string[] = [];
    type: questionmodes;
}