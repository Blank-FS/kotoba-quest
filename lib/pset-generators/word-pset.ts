import { WordType } from "@/constants";

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function shuffleArray(array: any[]) {
  for (let i = 0; i < (array.length >= 3 ? 3 : array.length); i++) {
    const j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleChoices(array: WordType[]) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function wordPset(amount: number, wordData: WordType[]) {
  let validChoices = wordData.slice(); // The valid choices to pick from
  let pset: WordType[][] = [];
  for (let i = 0; i < amount; i++) {
    let rng = getRandomInt(0, validChoices.length);
    let word = { ...validChoices[rng], correct: true }; // Get the correct choice
    validChoices.splice(rng, 1); // Remove correct choice from pool
    if (validChoices.length === 0) validChoices = wordData.slice(); // Refresh valid choices
    let copyData = shuffleArray(
      wordData.filter(
        (value: any, index: number) =>
          value.groupId === word.groupId && value.word !== word.word
      )
    ); // shuffled data
    // Create unit
    let unit: WordType[] = [word];
    for (let i = 0; i < (copyData.length >= 3 ? 3 : copyData.length); i++) {
      let temp = { ...copyData[i], correct: false };
      unit.push(temp);
    }
    unit = shuffleChoices(unit);
    pset.push(unit);
  }
  return pset;
}
