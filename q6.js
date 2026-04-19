const myProfile = {
  name: "Amobi Philip",
  age: 27,
  country: "Nigeria",
  hobby: "writing",
};
function displayProfile(person) {
  console.log(
    `Hello my name is ${person.name}, i'm ${person.age} years old, i'm from ${person.country}. I love ${person.hobby}.`,
  );
}
displayProfile(myProfile);
