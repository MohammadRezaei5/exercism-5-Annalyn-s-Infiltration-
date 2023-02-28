// this is for me --> i cant understand this please look again 😑🙂😶

// const knightIsAwake = true;

function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

// console.log(canExecuteFastAttack(knightIsAwake));

///********///

// const knightIsAwake = false;
// const archerIsAwake = true;
// const prisonerIsAwake = false;

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

// console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));

///********///

// const archerIsAwake = false;
// const prisonerIsAwake = true;

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return prisonerIsAwake && !archerIsAwake;
}

// console.log(canSignalPrisoner(archerIsAwake, prisonerIsAwake));

///********///

// const knightIsAwake = false;
// const archerIsAwake = true;
// const prisonerIsAwake = false;
// const petDogIsPresent = false;

function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return (
    (!knightIsAwake && !archerIsAwake && prisonerIsAwake) ||
    (petDogIsPresent && !archerIsAwake)
  );
}
// console.log(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));
