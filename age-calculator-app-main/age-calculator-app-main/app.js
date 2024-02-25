function ageCalculaterDisplay() {
  // get html elemnts

  const btn = document.querySelector("#btn");

  const cruntDate = new Date(); // taken crunt date
  const cruntDay = cruntDate.getDate(); // extrect the cruntDay
  const cruntMonth = cruntDate.getMonth(); // extrect the cruntMonth
  const cruntYear = cruntDate.getFullYear(); // extrect the cruntYear

  btn.addEventListener("click", () => {
    const userDay = document.querySelector(".dayInput").value;
    const userMonth = document.querySelector(".monthInput").value;
    const userYear = document.querySelector(".yearInput").value;

    const userBirthDay = cruntDay - userDay;
    const userBirthMont = cruntMonth - userMonth;
    const userBirthYear = cruntYear - userYear;
    console.log(userBirthDay, userBirthMont, userBirthYear);
  });
}

ageCalculaterDisplay();
