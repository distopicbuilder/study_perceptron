<<<<<<< HEAD
export class Perceptron {
  weight = [];
  constructor(weightSize) {
    for (let i = 0; i < weightSize; i++) {
      this.weight[i] = random(-1, 1);
    }
  }
  guess(inputs) {
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * this.weight[i];
    }
    let output = sign(sum);
    return output;
  }
  train(inputs = [], target){

  }
  #sign(n) {
    return n >= 0 ? 1 : -1;
  }
}
=======
// Activation function
var sign = (n) => {
  return n >= 0 ? 1 : -1;
};
export const perceptron = {
  sizeOfWeight: 2,
  weight: [],
  initialization: () => {
    for (let i = 0; i < perceptron.sizeOfWeight; i++) {
      perceptron.weight[i] = random(-1, 1);
    }
  },
  guess: (inputs) => {
    let sum = 0;
    for (let i = 0; i < perceptron.weight.length; i++) {
      sum += inputs[i] * perceptron.weight.length[i];
    }
    let output = sign(sum);
    return output;
  },
};
>>>>>>> parent of 4282bac (Perceptron for class)
