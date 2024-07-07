//Creates a random 4 didgit number and appends a string to the front (the recipe name in this case)

export const addRandomNumber = (str) => {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `${str}-${randomNumber}`;
};
