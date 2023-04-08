const input = document.querySelector(".newValue");
const btn = document.querySelector(".btn-click");

document.querySelector(".btn-click").addEventListener("click", function () {
  const inputNum = Number(document.querySelector(".newValue").value);
  console.log(inputNum);

  const cocomoCalculator = function (size, mode) {
    if (!size || size < 0)
      alert("Invalid number, Please write an appropariate Num ");

    if (mode === "organic") {
      var effort = 2.4 * Math.pow(size, 1.05);
      var duration = 2.5 * Math.pow(effort, 0.38);
      var people = effort / duration;
    } else if (mode === "semi-detached") {
      var effort = 3.0 * Math.pow(size, 1.12);
      var duration = 2.5 * Math.pow(effort, 0.35);
      var people = effort / duration;
    } else if (mode === "embedded") {
      var effort = 3.6 * Math.pow(size, 1.2);
      var duration = 2.5 * Math.pow(effort, 0.32);
      var people = effort / duration;
    } else {
      throw new Error("Invalid mode");
    }
    var cost = effort * 7500; // assuming $7500 per person-month
    return {
      effort: effort.toFixed(2),
      duration: duration.toFixed(2),
      people: Math.floor(people.toFixed(2)),
      cost: cost.toFixed(2),
    };
  };

  const resObjectOr = cocomoCalculator(inputNum, "organic");
  document.querySelector(".duration").value = resObjectOr.duration;
  document.querySelector(".people").value = resObjectOr.people;

  const resObjectSemi = cocomoCalculator(inputNum, "semi-detached");
  document.querySelector(".duration2").value = resObjectSemi.duration;
  document.querySelector(".people2").value = resObjectSemi.people;

  const resObjectEmb = cocomoCalculator(inputNum, "embedded");
  document.querySelector(".duration3").value = resObjectEmb.duration;
  document.querySelector(".people3").value = resObjectEmb.people;
});
