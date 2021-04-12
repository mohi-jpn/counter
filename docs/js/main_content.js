const MAX_HISTORY = 2;
const ctx = document.getElementById("myChart");
let history = [[]];
//following vars are used in creating correct_answer
//let historyReview = [[]];
//const REVIEW_START = Date.now();
let data = [];
let myChart = new Chart(ctx, {
  type: "scatter",
  data: {
    datasets: [
      {
        pointRadius: 5,
        pointHoverRadius: 7,
        data: data,
      },
    ],
  },
  //import from js/options.js
  options: options,
});

ctx.addEventListener("click", function (event) {
  let item = myChart.getElementAtEvent(event);
  if (item.length == 0) return;

  item = item[0];
  let data =
    item._chart.config.data.datasets[item._datasetIndex].data[item._index];
  player.seekTo(START_TIME + data.x);
});

document.getElementById("count").addEventListener("click", function () {
  const time = Date.now();

  document.getElementById("score").innerHTML++;
  history[0].push(time);
  document.getElementById("reset").disabled = false;
});

document.getElementById("reset").addEventListener("click", function () {
  history.unshift([]);
  document.getElementById("score").innerHTML = 0;
  if (history.length > MAX_HISTORY) history.length = MAX_HISTORY;
  data.length = 0;
  myChart.data.datasets[0].data = data;
  displayScatterGraph();
  document.getElementById("reset").disabled = true;
});

document.getElementById("display").addEventListener("click", function () {
  document.getElementById("flexSwitchCheckDefault").checked = false;
  player.pauseVideo();
  player.setPlaybackRate(0.25);
  displayScatterGraph();
});

document.getElementById("practice").addEventListener("click", function () {
  player.setPlaybackRate(1);
});

document
  .getElementById("flexSwitchCheckDefault")
  .addEventListener("change", function () {
    if (document.getElementById("flexSwitchCheckDefault").checked) {
      displayLineGraph();
    } else {
      displayScatterGraph();
    }
  });

//NOTE:
//When you create the correct_answer by review mode,
//use following procedure with button (id="countReview"),
//and see download.js
//
//document.getElementById('countReview').addEventListener('click', function () {
//            historyReview[0].push(Number(videotime)*1000 + REVIEW_START);
//});

const displayScatterGraph = () => {
  let datasets = [];
  correct_answer.concat(history).forEach((element, index) => {
    data = toRelativeTime(element, index);
    datasets.push({
      label: convertLabel(index),
      pointRadius: 5,
      pointHoverRadius: 7,
      data: data,
    });
  });
  myChart.type = "scatter";
  myChart.data.datasets = datasets;
  myChart.options.legend.display = true;
  myChart.update();
};

const displayLineGraph = () => {
  let datasets = [];
  let tmp_datasets = [];
  correct_answer.concat(history).forEach((element, index) => {
    data = toRelativeTime(element, index);
    tmp_datasets.push(data);
  });
  const LENGTHS = tmp_datasets.map((e) => e.length);
  const MAX_ID = LENGTHS.indexOf(Math.max(...LENGTHS));
  const CONVERT_DATA = tmp_datasets[MAX_ID].map((_, c) => {
    return tmp_datasets.map((r) => r[c]).filter((v) => v);
  });
  CONVERT_DATA.forEach((e) => {
    datasets.push({
      pointRadius: 5,
      pointHoverRadius: 7,
      data: e,
      showLine: true,
      fill: false,
      lineTension: 0,
    });
  });
  myChart.type = "line";
  myChart.data.datasets = datasets;
  myChart.options.legend.display = false;
  myChart.update();
};

const convertLabel = (num) => {
  switch (num) {
    case 0:
      return "correct answer";
    case 1:
      return "latest your answer";
    case 2:
      return "old your answer";
  }
};

const toRelativeTime = (answer, index) => {
  const start_time = answer[0];
  return answer.map((time) => {
    return {
      x: (time - start_time) / 1000,
      y: index * 2,
    };
  });
};
