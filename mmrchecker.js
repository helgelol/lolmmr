// Logic from https://mylolmmr.com/

var rank = {
  IRONIV: 0,
  IRONIII: 150,
  IRONII: 300,
  IRONI: 450,

  BRONZEIV: 500,
  BRONZEIII: 650,
  BRONZEII: 800,
  BRONZEI: 950,

  SILVERIV: 1000,
  SILVERIII: 1150,
  SILVERII: 1300,
  SILVERI: 1450,

  GOLDIV: 1500,
  GOLDIII: 1650,
  GOLDII: 1800,
  GOLDI: 1950,

  PLATINUMIV: 2000,
  PLATINUMIII: 2150,
  PLATINUMII: 2300,
  PLATINUMI: 2450,

  DIAMONDIV: 2500,
  DIAMONDIII: 2650,
  DIAMONDII: 2800,
  DIAMONDI: 2950,

  MASTER: 3000,

  GRANDMASTER: 3500,

  CHALLENGER: 4000,
};

var url_debutchecker = "https://api.mylolmmr.com/api/mmr/";
var url_fincategorie = "450";
var url_fincategorieother = "420";
var url_fincategorienormal = "430";
var url_fincategoriedraft = "400";
const buttonsearch = document.getElementById("buttonsearch");
const namescore = document.getElementsByClassName("namescore");
const mmrscorearam = document.getElementsByClassName("mmrscorearam");

buttonsearch.addEventListener("click", buttonHandler);

function buttonHandler() {
  var mmrname = document.getElementById("input--summoner").value;
  var mmrregion = document.getElementById("choise-region").value;

  if (mmrregion !== "") {
    fetch(url_debutchecker + mmrregion + "/" + mmrname + "/" + url_fincategorie)
      .then((res) => res.json())
      .then((data) => {
        var mmrscoreraram = data.mmr;

        function difference(mmrscoreraram, b) {
          return Math.abs(data.mmr - b);
        }

        function findBy(arr, key, comparatorFn) {
          return arr.reduce(function (prev, curr, index, arr) {
            return comparatorFn.call(arr, prev[key], curr[key]) ? prev : curr;
          });
        }

        function minComp(prev, curr) {
          return prev < curr;
        }

        function maxComp(prev, curr) {
          return prev > curr;
        }

        let items = [
          { name: "Iron IV", count: difference(mmrscoreraram, rank.IRONIV) },
          { name: "Iron III", count: difference(mmrscoreraram, rank.IRONIII) },
          { name: "Iron II", count: difference(mmrscoreraram, rank.IRONII) },
          { name: "Iron I", count: difference(mmrscoreraram, rank.IRONI) },

          {
            name: "Bronze IV",
            count: difference(mmrscoreraram, rank.BRONZEIV),
          },
          {
            name: "Bronze III",
            count: difference(mmrscoreraram, rank.BRONZEIII),
          },
          {
            name: "Bronze II",
            count: difference(mmrscoreraram, rank.BRONZEII),
          },
          { name: "Bronze I", count: difference(mmrscoreraram, rank.BRONZEI) },

          {
            name: "Silver IV",
            count: difference(mmrscoreraram, rank.SILVERIV),
          },
          {
            name: "Silver III",
            count: difference(mmrscoreraram, rank.SILVERIII),
          },
          {
            name: "Silver II",
            count: difference(mmrscoreraram, rank.SILVERII),
          },
          { name: "Silver I", count: difference(mmrscoreraram, rank.SILVERI) },

          { name: "Gold IV", count: difference(mmrscoreraram, rank.GOLDIV) },
          { name: "Gold III", count: difference(mmrscoreraram, rank.GOLDIII) },
          { name: "Gold II", count: difference(mmrscoreraram, rank.GOLDII) },
          { name: "Gold I", count: difference(mmrscoreraram, rank.GOLDI) },

          {
            name: "Platinium IV",
            count: difference(mmrscoreraram, rank.PLATINUMIV),
          },
          {
            name: "Platinium III",
            count: difference(mmrscoreraram, rank.PLATINUMIII),
          },
          {
            name: "Platinium II",
            count: difference(mmrscoreraram, rank.PLATINUMII),
          },
          {
            name: "Platinium I",
            count: difference(mmrscoreraram, rank.PLATINUMI),
          },

          {
            name: "Diamon IV",
            count: difference(mmrscoreraram, rank.DIAMONDIV),
          },
          {
            name: "Diamon III",
            count: difference(mmrscoreraram, rank.DIAMONDIII),
          },
          {
            name: "Diamon II",
            count: difference(mmrscoreraram, rank.DIAMONDII),
          },
          { name: "Diamon I", count: difference(mmrscoreraram, rank.DIAMONDI) },

          { name: "Master", count: difference(mmrscoreraram, rank.MASTER) },

          {
            name: "Grandmaster",
            count: difference(mmrscoreraram, rank.GRANDMASTER),
          },

          {
            name: "Challenger",
            count: difference(mmrscoreraram, rank.CHALLENGER),
          },
        ];

        $("#approximationaram").html(
          "In aram, your approximate MMR score is level : " +
            findBy(items, "count", minComp).name
        );
        $("#themmrscore").show(),
          $("#dataname").html(data.name),
          $("#dataarammmr").html(data.mmr.toFixed(2));

        location.href = "#themmrscore";
      });

    fetch(
      url_debutchecker + mmrregion + "/" + mmrname + "/" + url_fincategorieother
    )
      .then((res) => res.json())
      .then((data) => {
        $("#dataranked").html(data.mmr.toFixed(2));

        var mmrscoreranked = data.mmr;

        function difference(mmrscoreranked, b) {
          return Math.abs(data.mmr - b);
        }

        function findBy(arr, key, comparatorFn) {
          return arr.reduce(function (prev, curr, index, arr) {
            return comparatorFn.call(arr, prev[key], curr[key]) ? prev : curr;
          });
        }

        function minComp(prev, curr) {
          return prev < curr;
        }

        function maxComp(prev, curr) {
          return prev > curr;
        }

        var items = [
          { name: "Iron IV", count: difference(mmrscoreranked, rank.IRONIV) },
          { name: "Iron III", count: difference(mmrscoreranked, rank.IRONIII) },
          { name: "Iron II", count: difference(mmrscoreranked, rank.IRONII) },
          { name: "Iron I", count: difference(mmrscoreranked, rank.IRONI) },

          {
            name: "Bronze IV",
            count: difference(mmrscoreranked, rank.BRONZEIV),
          },
          {
            name: "Bronze III",
            count: difference(mmrscoreranked, rank.BRONZEIII),
          },
          {
            name: "Bronze II",
            count: difference(mmrscoreranked, rank.BRONZEII),
          },
          { name: "Bronze I", count: difference(mmrscoreranked, rank.BRONZEI) },

          {
            name: "Silver IV",
            count: difference(mmrscoreranked, rank.SILVERIV),
          },
          {
            name: "Silver III",
            count: difference(mmrscoreranked, rank.SILVERIII),
          },
          {
            name: "Silver II",
            count: difference(mmrscoreranked, rank.SILVERII),
          },
          { name: "Silver I", count: difference(mmrscoreranked, rank.SILVERI) },

          { name: "Gold IV", count: difference(mmrscoreranked, rank.GOLDIV) },
          { name: "Gold III", count: difference(mmrscoreranked, rank.GOLDIII) },
          { name: "Gold II", count: difference(mmrscoreranked, rank.GOLDII) },
          { name: "Gold I", count: difference(mmrscoreranked, rank.GOLDI) },

          {
            name: "Platinium IV",
            count: difference(mmrscoreranked, rank.PLATINUMIV),
          },
          {
            name: "Platinium III",
            count: difference(mmrscoreranked, rank.PLATINUMIII),
          },
          {
            name: "Platinium II",
            count: difference(mmrscoreranked, rank.PLATINUMII),
          },
          {
            name: "Platinium I",
            count: difference(mmrscoreranked, rank.PLATINUMI),
          },

          {
            name: "Diamon IV",
            count: difference(mmrscoreranked, rank.DIAMONDIV),
          },
          {
            name: "Diamon III",
            count: difference(mmrscoreranked, rank.DIAMONDIII),
          },
          {
            name: "Diamon II",
            count: difference(mmrscoreranked, rank.DIAMONDII),
          },
          {
            name: "Diamon I",
            count: difference(mmrscoreranked, rank.DIAMONDI),
          },

          { name: "Master", count: difference(mmrscoreranked, rank.MASTER) },

          {
            name: "Grandmaster",
            count: difference(mmrscoreranked, rank.GRANDMASTER),
          },

          {
            name: "Challenger",
            count: difference(mmrscoreranked, rank.CHALLENGER),
          },
        ];

        $("#approximationrank").html(
          "In ranked Solo/Duo, your approximate MMR score is level : " +
            findBy(items, "count", minComp).name
        );
      });

    fetch(
      url_debutchecker +
        mmrregion +
        "/" +
        mmrname +
        "/" +
        url_fincategorienormal
    )
      .then((res) => res.json())
      .then((data) => {
        $("#datanormal").html(data.mmr.toFixed(2));

        var mmrscorenormal = data.mmr;

        function difference(mmrscorenormal, b) {
          return Math.abs(data.mmr - b);
        }

        function findBy(arr, key, comparatorFn) {
          return arr.reduce(function (prev, curr, index, arr) {
            return comparatorFn.call(arr, prev[key], curr[key]) ? prev : curr;
          });
        }

        function minComp(prev, curr) {
          return prev < curr;
        }

        function maxComp(prev, curr) {
          return prev > curr;
        }

        var items = [
          { name: "Iron IV", count: difference(mmrscorenormal, rank.IRONIV) },
          { name: "Iron III", count: difference(mmrscorenormal, rank.IRONIII) },
          { name: "Iron II", count: difference(mmrscorenormal, rank.IRONII) },
          { name: "Iron I", count: difference(mmrscorenormal, rank.IRONI) },

          {
            name: "Bronze IV",
            count: difference(mmrscorenormal, rank.BRONZEIV),
          },
          {
            name: "Bronze III",
            count: difference(mmrscorenormal, rank.BRONZEIII),
          },
          {
            name: "Bronze II",
            count: difference(mmrscorenormal, rank.BRONZEII),
          },
          { name: "Bronze I", count: difference(mmrscorenormal, rank.BRONZEI) },

          {
            name: "Silver IV",
            count: difference(mmrscorenormal, rank.SILVERIV),
          },
          {
            name: "Silver III",
            count: difference(mmrscorenormal, rank.SILVERIII),
          },
          {
            name: "Silver II",
            count: difference(mmrscorenormal, rank.SILVERII),
          },
          { name: "Silver I", count: difference(mmrscorenormal, rank.SILVERI) },

          { name: "Gold IV", count: difference(mmrscorenormal, rank.GOLDIV) },
          { name: "Gold III", count: difference(mmrscorenormal, rank.GOLDIII) },
          { name: "Gold II", count: difference(mmrscorenormal, rank.GOLDII) },
          { name: "Gold I", count: difference(mmrscorenormal, rank.GOLDI) },

          {
            name: "Platinium IV",
            count: difference(mmrscorenormal, rank.PLATINUMIV),
          },
          {
            name: "Platinium III",
            count: difference(mmrscorenormal, rank.PLATINUMIII),
          },
          {
            name: "Platinium II",
            count: difference(mmrscorenormal, rank.PLATINUMII),
          },
          {
            name: "Platinium I",
            count: difference(mmrscorenormal, rank.PLATINUMI),
          },

          {
            name: "Diamon IV",
            count: difference(mmrscorenormal, rank.DIAMONDIV),
          },
          {
            name: "Diamon III",
            count: difference(mmrscorenormal, rank.DIAMONDIII),
          },
          {
            name: "Diamon II",
            count: difference(mmrscorenormal, rank.DIAMONDII),
          },
          {
            name: "Diamon I",
            count: difference(mmrscorenormal, rank.DIAMONDI),
          },

          { name: "Master", count: difference(mmrscorenormal, rank.MASTER) },

          {
            name: "Grandmaster",
            count: difference(mmrscorenormal, rank.GRANDMASTER),
          },

          {
            name: "Challenger",
            count: difference(mmrscorenormal, rank.CHALLENGER),
          },
        ];

        $("#approximationnormal").html(
          "In Normal, your approximate MMR score is level : " +
            findBy(items, "count", minComp).name
        );
      });

    fetch(
      url_debutchecker + mmrregion + "/" + mmrname + "/" + url_fincategoriedraft
    )
      .then((res) => res.json())
      .then((data) => {
        $("#datadraft").html(data.mmr.toFixed(2));

        var mmrscoredraft = data.mmr;

        function difference(mmrscoredraft, b) {
          return Math.abs(data.mmr - b);
        }

        function findBy(arr, key, comparatorFn) {
          return arr.reduce(function (prev, curr, index, arr) {
            return comparatorFn.call(arr, prev[key], curr[key]) ? prev : curr;
          });
        }

        function minComp(prev, curr) {
          return prev < curr;
        }

        function maxComp(prev, curr) {
          return prev > curr;
        }

        var items = [
          { name: "Iron IV", count: difference(mmrscoredraft, rank.IRONIV) },
          { name: "Iron III", count: difference(mmrscoredraft, rank.IRONIII) },
          { name: "Iron II", count: difference(mmrscoredraft, rank.IRONII) },
          { name: "Iron I", count: difference(mmrscoredraft, rank.IRONI) },

          {
            name: "Bronze IV",
            count: difference(mmrscoredraft, rank.BRONZEIV),
          },
          {
            name: "Bronze III",
            count: difference(mmrscoredraft, rank.BRONZEIII),
          },
          {
            name: "Bronze II",
            count: difference(mmrscoredraft, rank.BRONZEII),
          },
          { name: "Bronze I", count: difference(mmrscoredraft, rank.BRONZEI) },

          {
            name: "Silver IV",
            count: difference(mmrscoredraft, rank.SILVERIV),
          },
          {
            name: "Silver III",
            count: difference(mmrscoredraft, rank.SILVERIII),
          },
          {
            name: "Silver II",
            count: difference(mmrscoredraft, rank.SILVERII),
          },
          { name: "Silver I", count: difference(mmrscoredraft, rank.SILVERI) },

          { name: "Gold IV", count: difference(mmrscoredraft, rank.GOLDIV) },
          { name: "Gold III", count: difference(mmrscoredraft, rank.GOLDIII) },
          { name: "Gold II", count: difference(mmrscoredraft, rank.GOLDII) },
          { name: "Gold I", count: difference(mmrscoredraft, rank.GOLDI) },

          {
            name: "Platinium IV",
            count: difference(mmrscoredraft, rank.PLATINUMIV),
          },
          {
            name: "Platinium III",
            count: difference(mmrscoredraft, rank.PLATINUMIII),
          },
          {
            name: "Platinium II",
            count: difference(mmrscoredraft, rank.PLATINUMII),
          },
          {
            name: "Platinium I",
            count: difference(mmrscoredraft, rank.PLATINUMI),
          },

          {
            name: "Diamon IV",
            count: difference(mmrscoredraft, rank.DIAMONDIV),
          },
          {
            name: "Diamon III",
            count: difference(mmrscoredraft, rank.DIAMONDIII),
          },
          {
            name: "Diamon II",
            count: difference(mmrscoredraft, rank.DIAMONDII),
          },
          { name: "Diamon I", count: difference(mmrscoredraft, rank.DIAMONDI) },

          { name: "Master", count: difference(mmrscoredraft, rank.MASTER) },

          {
            name: "Grandmaster",
            count: difference(mmrscoredraft, rank.GRANDMASTER),
          },

          {
            name: "Challenger",
            count: difference(mmrscoredraft, rank.CHALLENGER),
          },
        ];

        $("#approximationdraft").html(
          "In ranked Flex, your approximate MMR score is level : " +
            findBy(items, "count", minComp).name
        );
      });
  } else {
    $("#red-alert").show();
  }
  // window.history.pushState('', 'What is of my MMR ? League of Legends MMR Checker', mmrname);
}
