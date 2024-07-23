"use strict";

// Get Element From HTML

let userInput = document.getElementById("user");
let search_btn = document.getElementById("btn");
let error_message = document.getElementById("error");
let avatar_desktop = document.getElementById("avatar-desktop");
let avatar_mobile = document.getElementById("avatar-mobile");
let joined = document.getElementById("join-date");
let fullName = document.getElementById("name");
let username = document.getElementById("login");
let bio = document.getElementById("bio");
let repos = document.getElementById("repos");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
let blog = document.getElementById("blog");
let city = document.getElementById("city");
let twitter = document.getElementById("twitter");
let company = document.getElementById("company");
let twitterLink = document.getElementById("twitterLink");

search_btn.addEventListener("click", findGithubUser);

async function findGithubUser() {
  let api = `https://api.github.com/users/${userInput.value}`;
  let fetchData = await fetch(api);
  let response = await fetchData.json();
  let data = response;
  console.log(data);

  if (data.message == "Not Found") {
    error_message.innerText = `${data.message}`;
  } else {
    avatar_desktop.src = data.avatar_url;
    avatar_mobile.src = data.avatar_url;
    fullName.innerText = data.name;
    username.innerText = "@" + data.login;
    bio.innerText = data.bio;
    // Joined Date
    let joinedDate = new Date(data.created_at);
    let day = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    joined.innerText = `${day[joinedDate.getDay()]} ${
      months[joinedDate.getMonth()]
    } ${joinedDate.getDate()} ${joinedDate.getFullYear()}`;

    followers.innerText =
      data.followers < 10 ? "0" + data.followers : data.followers;
    following.innerText =
      data.following < 10 ? "0" + data.following : data.following;
    repos.innerText =
      data.public_repos < 10 ? "0" + data.public_repos : data.public_repos;
    if (data.location) {
      city.innerText = data.location;
    } else {
      city.innerText = "Not Added";
    }
    if (data.twitter_username) {
      twitter.innerText = data.twitter_username;
      twitterLink.href = `https://www.x.com/${data.twitter_username}`;
      twitterLink.target = "blank";
    } else {
      twitter.innerText = "Not Added";
    }
    if (data.company) {
      company.innerText = data.company;
    } else {
      company.innerText = "Not Added";
    }
    if (data.blog) {
      blog.innerText = data.blog;
      blog.href = `${data.blog}`;
      blog.target = "blank";
    } else {
      blog.innerText = "Not Added";
    }
  }
}
