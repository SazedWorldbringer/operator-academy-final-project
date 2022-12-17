export const getRandomThing = (maxNumOfThings, notThisOne) => {
  const thingNumber = Math.floor(Math.random() * (maxNumOfThings - 1) + 1)

  if (thingNumber !== notThisOne) return thingNumber;
  return getRandomThing(notThisOne)
}

export const getOptionsForVote = (things) => {
  let maxNum = Object.keys(things).length

  const first = getRandomThing(maxNum);
  const second = getRandomThing(maxNum, first);

  return [Object.values(things)[first], Object.values(things)[second]];
}
