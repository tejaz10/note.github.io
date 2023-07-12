document.querySelector(".content__physics").style.display = "flex";
document.querySelector(".notes").style.display = "flex";

function show(vary) {
  document.querySelector(vary).style.display = "flex";
  document.querySelector(".notes").style.display = "none";
}

document.querySelector(".ctab").addEventListener("click", function () {
  document.querySelector(".content__chemistry").style.display = "flex";
  document.querySelector(".Cnotes").style.display = "flex";
  document.querySelector(".content__physics").style.display = "none";
  document.querySelector(".Cnotes5").style.display = "none";
});

document.querySelector(".ptab").addEventListener("click", function () {
  document.querySelector(".content__physics").style.display = "flex";
  document.querySelector(".notes").style.display = "flex";
  document.querySelector(".content__chemistry").style.display = "none";
});

// physics cycle :
document.querySelector(".show").addEventListener("click", function () {
  document.querySelector(".notes").style.display = "flex";
  document.querySelector(".notes1").style.display = "none";
  document.querySelector(".notes2").style.display = "none";
  document.querySelector(".notes3").style.display = "none";
  document.querySelector(".notes4").style.display = "none";
  document.querySelector(".notes5").style.display = "none";
});

document.querySelector(".show1").addEventListener("click", function () {
  show(".notes1");
  document.querySelector(".notes").style.display = "none";
  document.querySelector(".notes2").style.display = "none";
  document.querySelector(".notes3").style.display = "none";
  document.querySelector(".notes4").style.display = "none";
  document.querySelector(".notes5").style.display = "none";
});

document.querySelector(".show2").addEventListener("click", function () {
  show(".notes2");
  document.querySelector(".notes").style.display = "none";
  document.querySelector(".notes1").style.display = "none";
  document.querySelector(".notes3").style.display = "none";
  document.querySelector(".notes4").style.display = "none";
  document.querySelector(".notes5").style.display = "none";
});
document.querySelector(".show3").addEventListener("click", function () {
  show(".notes3");
  document.querySelector(".notes").style.display = "none";
  document.querySelector(".notes1").style.display = "none";
  document.querySelector(".notes2").style.display = "none";
  document.querySelector(".notes4").style.display = "none";
  document.querySelector(".notes5").style.display = "none";
});
document.querySelector(".show4").addEventListener("click", function () {
  show(".notes4");
  document.querySelector(".notes").style.display = "none";
  document.querySelector(".notes1").style.display = "none";
  document.querySelector(".notes3").style.display = "none";
  document.querySelector(".notes2").style.display = "none";
  document.querySelector(".notes5").style.display = "none";
});
document.querySelector(".show5").addEventListener("click", function () {
  show(".notes5");
  document.querySelector(".notes").style.display = "none";
  document.querySelector(".notes1").style.display = "none";
  document.querySelector(".notes3").style.display = "none";
  document.querySelector(".notes4").style.display = "none";
  document.querySelector(".notes2").style.display = "none";
});

// Chemistry cycle:
document.querySelector(".Cshow").addEventListener("click", function () {
  document.querySelector(".Cnotes").style.display = "flex";
  document.querySelector(".Cnotes1").style.display = "none";
  document.querySelector(".Cnotes2").style.display = "none";
  document.querySelector(".Cnotes3").style.display = "none";
  document.querySelector(".Cnotes4").style.display = "none";
  document.querySelector(".Cnotes5").style.display = "none";
});

document.querySelector(".Cshow1").addEventListener("click", function () {
  show(".Cnotes1");
  document.querySelector(".Cnotes").style.display = "none";
  document.querySelector(".Cnotes2").style.display = "none";
  document.querySelector(".Cnotes3").style.display = "none";
  document.querySelector(".Cnotes4").style.display = "none";
  document.querySelector(".Cnotes5").style.display = "none";
});

document.querySelector(".Cshow2").addEventListener("click", function () {
  show(".Cnotes2");
  document.querySelector(".Cnotes").style.display = "none";
  document.querySelector(".Cnotes1").style.display = "none";
  document.querySelector(".Cnotes3").style.display = "none";
  document.querySelector(".Cnotes4").style.display = "none";
  document.querySelector(".Cnotes5").style.display = "none";
});
document.querySelector(".Cshow3").addEventListener("click", function () {
  show(".Cnotes3");
  document.querySelector(".Cnotes").style.display = "none";
  document.querySelector(".Cnotes1").style.display = "none";
  document.querySelector(".Cnotes2").style.display = "none";
  document.querySelector(".Cnotes4").style.display = "none";
  document.querySelector(".Cnotes5").style.display = "none";
});
document.querySelector(".Cshow4").addEventListener("click", function () {
  show(".Cnotes4");
  document.querySelector(".Cnotes").style.display = "none";
  document.querySelector(".Cnotes1").style.display = "none";
  document.querySelector(".Cnotes3").style.display = "none";
  document.querySelector(".Cnotes2").style.display = "none";
  document.querySelector(".Cnotes5").style.display = "none";
});
document.querySelector(".Cshow5").addEventListener("click", function () {
  show(".Cnotes5");
  document.querySelector(".Cnotes").style.display = "none";
  document.querySelector(".Cnotes1").style.display = "none";
  document.querySelector(".Cnotes3").style.display = "none";
  document.querySelector(".Cnotes4").style.display = "none";
  document.querySelector(".Cnotes2").style.display = "none";
});
