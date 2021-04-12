const YOUTUBE_MOVIES = [
  {
    id: "u0l5gdGn_1U",
    title: "シングルロープ上級1",
    description: "",
    button_status: "enabled",
  },
  {
    id: "b0-lNZzrnhM",
    title: "シングルロープ中級1",
    description: "",
    button_status: "disabled",
  },
  {
    id: "hqpm-lnxAd0",
    title: "シングルロープ中級2",
    description: "",
    button_status: "disabled",
  },
  {
    id: "DCmPqbu9m1Q",
    title: "ダブルダッチ上級1",
    description: "",
    button_status: "enabled",
  },
  {
    id: "YvtUxz2Z4Lk",
    title: "ダブルダッチ上級2",
    description: "",
    button_status: "disabled",
  },
  {
    id: "i4OpUslzW1Y",
    title: "ダブルダッチ上級3",
    description: "",
    button_status: "disabled",
  },
  {
    id: "RMkWSFKyk0s",
    title: "ダブルダッチ上級4",
    description: "",
    button_status: "disabled",
  },
];

//<div class="row row-cols-1 row-cols-md-3 g-4">
let card_low = document.createElement("div");
card_low.className = "row row-cols-1 row-cols-md-3 g-4";
document.getElementById("cards").appendChild(card_low);

YOUTUBE_MOVIES.forEach((element) => {
  //    <div class="col">
  let card_cal = document.createElement("div");
  card_cal.className = "col";
  card_low.appendChild(card_cal);

  //        <div class="card h-100">
  let card_height = document.createElement("div");
  card_height.className = "card h-100";
  card_cal.appendChild(card_height);

  //            <img src="http://i.ytimg.com/vi/u0l5gdGn_1U/mqdefault.jpg" class="card-img-top">
  let card_img = document.createElement("img");
  card_img.src = `http://i.ytimg.com/vi/${element["id"]}/mqdefault.jpg`;
  card_img.className = "card-img-top";
  card_height.appendChild(card_img);

  //            <div class="card-body">
  let card_body = document.createElement("div");
  card_body.className = "card-body";
  card_height.appendChild(card_body);

  //          <h5 class="card-title">シングルロープ上級1</h5>
  let card_title = document.createElement("h5");
  card_title.className = "card-title";
  card_title.innerHTML = element["title"];
  card_body.appendChild(card_title);

  //          <p class="card-text">dummy description</p>
  let card_text = document.createElement("p");
  card_text.className = "card-text";
  card_text.innerHTML = element["description"];
  card_body.appendChild(card_text);

  //          <a href="#" class="btn btn-primary">トレーニング開始！</a>
  let card_button = document.createElement("a");
  card_button.href = `content/${element["id"]}/${element["id"]}.html`;
  card_button.className = "btn btn-primary";
  if (element["button_status"] === "disabled") {
    card_button.className += ` ${element["button_status"]}`;
    card_button.innerHTML = "COMMING SOON";
  } else {
    card_button.innerHTML = "トレーニング開始！";
  }
  card_body.appendChild(card_button);
});
