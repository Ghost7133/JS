let works = [
  {
    name: "Иван",
    age: 15,
  },
  {
    name: "Александр",
    age: 16,
  },
  {
    name: "Михаил",
    age: 17,
  },

  {
    name: "Кирилл",
    age: 18,
  },
  {
    name: "Роман",
    age: 19,
  },
];
function workers(massive) {
  const array = [];
  for (let i = 0; i < works.length; i++) {
    array.push(`${massive[i].name}, ${massive[i].age}`);
  }
  console.log(array);
}
workers(works);
