export const getRandomThing = (notThisOne, maxNumOfThings) => {
  const thingNumber = Math.floor(Math.random() * (maxNumOfThings - 1) + 1)

  if (thingNumber !== notThisOne) return thingNumber;
  return getRandomThing(notThisOne)
}

export const getOptionsForVote = () => {
  const first = getRandomThing();
  const second = getRandomThing(first);

  return [Object.values(things)[first], Object.values(things)[second]];
}
