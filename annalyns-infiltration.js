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
