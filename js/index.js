// Gliding functioning for p cycle
let click7 = true;

function changeP() {
  if (click7) {
    showContentP.style.display = "flex";
    showContent.style.display = "none";
  }
}

const showNotes = document.querySelector(".notes");
const showPhy = document.querySelector(".phy");
let click = true;

// showNotes.style.display = "none";
function show() {
  if (click) {
    showNotes.style.display = "flex";
    showNotes1.style.display = "none";
    showPhy.style.display = "table";
    click = false;
  } else {
    showNotes.style.display = "none";
    showNotes1.style.display = "none";
    showNotes2.style.display = "none";
    showNotes3.style.display = "none";
    showNotes5.style.display = "none";
    showNotes4.style.display = "none";

    showMat.style.display = "none";
    showPhy.style.display = "none";
    showWeb.style.display = "none";
    showMech.style.display = "none";
    showMqp.style.display = "none";
    showQp.style.display = "none";
    click = true;
  }
}

const showNotes1 = document.querySelector(".notes1");
const showMat = document.querySelector(".mat");
let click1 = true;

showNotes1.style.display = "none";
function show1() {
  if (click1) {
    showNotes.style.display = "none";
    showNotes2.style.display = "none";
    showNotes3.style.display = "none";
    showNotes1.style.display = "flex";
    showMat.style.display = "table";
    click1 = false;
  } else {
    showNotes.style.display = "none";
    showNotes1.style.display = "none";
    showNotes2.style.display = "none";
    showNotes3.style.display = "none";
    showNotes4.style.display = "none";
    showNotes5.style.display = "none";

    showMat.style.display = "none";
    showPhy.style.display = "none";
    showWeb.style.display = "none";
    showMech.style.display = "none";
    showMqp.style.display = "none";
    showQp.style.display = "none";
    click1 = true;
  }
}

const showNotes2 = document.querySelector(".notes2");
const showWeb = document.querySelector(".web");
let click2 = true;

showNotes2.style.display = "none";
function show2() {
  if (click2) {
    showNotes.style.display = "none";
    showNotes1.style.display = "none";
    showNotes3.style.display = "none";
    showNotes2.style.display = "flex";
    showWeb.style.display = "table";
    click2 = false;
  } else {
    showNotes.style.display = "none";
    showNotes1.style.display = "none";
    showNotes2.style.display = "none";
    showNotes3.style.display = "none";
    showNotes4.style.display = "none";
    showNotes5.style.display = "none";

    showMat.style.display = "none";
    showPhy.style.display = "none";
    showWeb.style.display = "none";
    showMech.style.display = "none";
    showMqp.style.display = "none";
    showQp.style.display = "none";
    click2 = true;
  }
}

const showNotes3 = document.querySelector(".notes3");
const showMech = document.querySelector(".mech");
let click3 = true;

showNotes3.style.display = "none";
function show3() {
  if (click3) {
    showNotes.style.display = "none";
    showNotes1.style.display = "none";
    showNotes2.style.display = "none";
    showNotes4.style.display = "none";

    showNotes3.style.display = "flex";
    showMech.style.display = "table";
    click3 = false;
  } else {
    showNotes.style.display = "none";
    showNotes1.style.display = "none";
    showNotes2.style.display = "none";
    showNotes3.style.display = "none";
    showNotes4.style.display = "none";
    showNotes5.style.display = "none";

    showMat.style.display = "none";
    showPhy.style.display = "none";
    showWeb.style.display = "none";
    showMech.style.display = "none";
    showMqp.style.display = "none";
    showQp.style.display = "none";
    click3 = true;
  }
}

const showNotes4 = document.querySelector(".notes4");
const showMqp = document.querySelector(".mqp");
let click4 = true;

showNotes4.style.display = "none";
function show4() {
  if (click4) {
    showNotes.style.display = "none";
    showNotes1.style.display = "none";
    showNotes2.style.display = "none";
    showNotes3.style.display = "none";
    showNotes5.style.display = "none";

    showNotes4.style.display = "flex";
    showMqp.style.display = "table";
    click4 = false;
  } else {
    showNotes.style.display = "none";
    showNotes1.style.display = "none";
    showNotes2.style.display = "none";
    showNotes3.style.display = "none";
    showNotes4.style.display = "none";
    showNotes5.style.display = "none";

    showMat.style.display = "none";
    showPhy.style.display = "none";
    showWeb.style.display = "none";
    showMech.style.display = "none";
    showMqp.style.display = "none";
    showQp.style.display = "none";
    click4 = true;
  }
}

const showNotes5 = document.querySelector(".notes5");
const showQp = document.querySelector(".qp");
let click5 = true;

showNotes5.style.display = "none";
function show5() {
  if (click5) {
    showNotes.style.display = "none";
    showNotes1.style.display = "none";
    showNotes2.style.display = "none";
    showNotes3.style.display = "none";
    showNotes4.style.display = "none";
    showNotes5.style.display = "flex";
    showQp.style.display = "table";
    click5 = false;
  } else {
    showNotes.style.display = "none";
    showNotes1.style.display = "none";
    showNotes2.style.display = "none";
    showNotes3.style.display = "none";
    showNotes4.style.display = "none";
    showNotes5.style.display = "none";

    showMat.style.display = "none";
    showPhy.style.display = "none";
    showWeb.style.display = "none";
    showMech.style.display = "none";
    showMqp.style.display = "none";
    showQp.style.display = "none";
    click5 = true;
  }
}

// Gliding Functioning

// notes section variables for c cycle

const showCNotes = document.querySelector(".Cnotes");
const showCNotes1 = document.querySelector(".Cnotes1");
const showCNotes2 = document.querySelector(".Cnotes2");
const showCNotes3 = document.querySelector(".Cnotes3");
const showCNotes4 = document.querySelector(".Cnotes4");
const showCNotes5 = document.querySelector(".Cnotes5");

// table section variables for c cycle

const showCPhy = document.querySelector(".Cphy");
const showCMat = document.querySelector(".Cmat");
const showCWeb = document.querySelector(".Cweb");
const showCMech = document.querySelector(".Cmech");
const showCMqp = document.querySelector(".Cmqp");
const showCQp = document.querySelector(".Cqp");

// clicks variables

let click8 = true;
let click9 = true;
let click10 = true;
let click11 = true;
let click12 = true;
let click13 = true;
let click14 = true;
let click15 = true;
let click16 = true;

const showContent = document.querySelector(".content__chemistry");
const showContentP = document.querySelector(".content__physics");
let click6 = true;

showContent.style.display = "none";
function changeC() {
  if (click6) {
    showContent.style.display = "flex";
    showContentP.style.display = "none";

    // showCNotes.style.display = "none";
    showCNotes1.style.display = "none";
    showCNotes2.style.display = "none";
    showCNotes3.style.display = "none";
    showCNotes4.style.display = "none";
    showCNotes5.style.display = "none";
  }
}

function showC() {
  if (click8) {
    showCNotes.style.display = "flex";
    showCNotes1.style.display = "none";
    showCPhy.style.display = "table";
    click8 = false;
  } else {
    showCNotes.style.display = "none";
    showCNotes1.style.display = "none";
    showCNotes2.style.display = "none";
    showCNotes3.style.display = "none";
    showCNotes5.style.display = "none";
    showCNotes4.style.display = "none";

    showCMat.style.display = "none";
    showCPhy.style.display = "none";
    showCWeb.style.display = "none";
    showCMech.style.display = "none";
    showCMqp.style.display = "none";
    showCQp.style.display = "none";
    click8 = true;
  }
}

showCNotes1.style.display = "none";
function showC1() {
  if (click9) {
    showCNotes.style.display = "none";
    showCNotes2.style.display = "none";
    showCNotes3.style.display = "none";
    showCNotes1.style.display = "flex";
    showCMat.style.display = "table";
    click9 = false;
  } else {
    showCNotes.style.display = "none";
    showCNotes1.style.display = "none";
    showCNotes2.style.display = "none";
    showCNotes3.style.display = "none";
    showCNotes4.style.display = "none";
    showCNotes5.style.display = "none";

    showCMat.style.display = "none";
    showCPhy.style.display = "none";
    showCWeb.style.display = "none";
    showCMech.style.display = "none";
    showCMqp.style.display = "none";
    showCQp.style.display = "none";
    click9 = true;
  }
}

showCNotes2.style.display = "none";
function showC2() {
  if (click10) {
    showCNotes.style.display = "none";
    showCNotes1.style.display = "none";
    showCNotes3.style.display = "none";
    showCNotes2.style.display = "flex";
    showCWeb.style.display = "table";
    click10 = false;
  } else {
    showCNotes.style.display = "none";
    showCNotes1.style.display = "none";
    showCNotes2.style.display = "none";
    showCNotes3.style.display = "none";
    showCNotes4.style.display = "none";
    showCNotes5.style.display = "none";

    showCMat.style.display = "none";
    showCPhy.style.display = "none";
    showCWeb.style.display = "none";
    showCMech.style.display = "none";
    showCMqp.style.display = "none";
    showCQp.style.display = "none";
    click10 = true;
  }
}

showCNotes3.style.display = "none";
function showC3() {
  if (click11) {
    showCNotes.style.display = "none";
    showCNotes1.style.display = "none";
    showCNotes2.style.display = "none";
    showCNotes4.style.display = "none";

    showCNotes3.style.display = "flex";
    showCMech.style.display = "table";
    click11 = false;
  } else {
    showCNotes.style.display = "none";
    showCNotes1.style.display = "none";
    showCNotes2.style.display = "none";
    showCNotes3.style.display = "none";
    showCNotes4.style.display = "none";
    showCNotes5.style.display = "none";

    showCMat.style.display = "none";
    showCPhy.style.display = "none";
    showCWeb.style.display = "none";
    showCMech.style.display = "none";
    showCMqp.style.display = "none";
    showCQp.style.display = "none";
    click11 = true;
  }
}

showCNotes4.style.display = "none";
function showC4() {
  if (click12) {
    showCNotes.style.display = "none";
    showCNotes1.style.display = "none";
    showCNotes2.style.display = "none";
    showCNotes3.style.display = "none";
    showCNotes5.style.display = "none";

    showCNotes4.style.display = "flex";
    showCMqp.style.display = "table";
    click12 = false;
  } else {
    showCNotes.style.display = "none";
    showCNotes1.style.display = "none";
    showCNotes2.style.display = "none";
    showCNotes3.style.display = "none";
    showCNotes4.style.display = "none";
    showCNotes5.style.display = "none";

    showCMat.style.display = "none";
    showCPhy.style.display = "none";
    showCWeb.style.display = "none";
    showCMech.style.display = "none";
    showCMqp.style.display = "none";
    showCQp.style.display = "none";
    click12 = true;
  }
}

showCNotes5.style.display = "none";
function showC5() {
  if (click13) {
    showCNotes.style.display = "none";
    showCNotes1.style.display = "none";
    showCNotes2.style.display = "none";
    showCNotes3.style.display = "none";
    showCNotes4.style.display = "none";
    showCNotes5.style.display = "flex";
    showCQp.style.display = "table";
    click13 = false;
  } else {
    showCNotes.style.display = "none";
    showCNotes1.style.display = "none";
    showCNotes2.style.display = "none";
    showCNotes3.style.display = "none";
    showCNotes4.style.display = "none";
    showCNotes5.style.display = "none";

    showCMat.style.display = "none";
    showCPhy.style.display = "none";
    showCWeb.style.display = "none";
    showCMech.style.display = "none";
    showCMqp.style.display = "none";
    showCQp.style.display = "none";
    click13 = true;
  }
}
