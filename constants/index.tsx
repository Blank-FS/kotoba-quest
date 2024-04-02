export const categories = [
  "academics",
  "food",
  "occupation",
  "transportation",
  "relationship",
];

export interface Pset {
  pset: Question[];
}
export interface Question {
  question: Noun[];
}
export interface Noun {
  id: string;
  noun: string;
  meaning: string;
  kanji?: string;
  updateAt: Date;
  createdAt: Date;
  correct: boolean;
}

export interface NounType {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  noun: string;
  meaning: string;
  kanji?: string;
  category: string;
}
////////////////////////////////////////////////////////////
export interface WordType {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  word: string;
  meaning: string;
  kanji?: string | null;
  groupId: string;
}

export interface GroupType {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  category: string;
  typeId?: string;
}

export interface TypeType {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  type: string;
}
//////////////////////////////////////////////////////////////
export interface WordQuestion {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  word: string;
  meaning: string;
  kanji?: string | null;
  groupId: string;
  correct: boolean;
}
