export interface Country {
    name: string;
    capital: string;
    citizens: number;
    areasquarekm: number;
    citizenspersquarekm: number;
    flag: string;

    // gamemode features
    capitalLevel: 1 | 2 | 3;
    capitalAnswers?: string [];

    flagLevel: 1 | 2 | 3;
    flagAnswers?: string [];
  }