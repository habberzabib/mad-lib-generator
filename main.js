//MADLIB GENERATOR

document.getElementById("btn").addEventListener("click", generateMadLib);

function generateMadLib() {
  //INPUT
  let familyMember = document.getElementById("family-member").value;
  let pluralNoun = document.getElementById("plural-noun").value;
  let action = document.getElementById("action").value;
  //PROCESS
  let msg = `My ${familyMember} loves to emprison ${pluralNoun} and then ${action} like nothing ever happened.`;

  //OUTPUT
  document.getElementById("output").innerHTML = msg;
}
