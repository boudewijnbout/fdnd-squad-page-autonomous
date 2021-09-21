var optieAll = document.querySelector("#filter-all");
var optieTeam1 = document.querySelector("#filter-team1");
var optieTeam2 = document.querySelector("#filter-team2");
var optieTeam3 = document.querySelector("#filter-team3");

function filterLijst(event){
  let deLijst = document.querySelector("#list");
  let nieuweFilter = event.target.value;
  deLijst.className = "";
  deLijst.classList.add(nieuweFilter);
}

optieAll.addEventListener("change", filterLijst);
optieTeam1.addEventListener("change", filterLijst);
optieTeam2.addEventListener("change", filterLijst);
optieTeam3.addEventListener("change", filterLijst);

