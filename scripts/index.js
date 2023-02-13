import header from "../components/header.js";
import related from "../components/related.js";
import footer from "../components/footer.js";
import head from "../components/head.js";
import body from "../components/body.js";
import top from "../components/top.js";

// top offer 
let Top = document.querySelector(".top");
Top.innerHTML=top();
Top.style.display="none";

// head
let Head = document.querySelector("head");
Head.innerHTML+=head();

// body 
let BodyAll = document.querySelector("body");
BodyAll.innerHTML+=body();

// navbar
let nav = document.querySelector("#header");
nav.innerHTML=header();

// footer
let ft = document.querySelector("footer");
ft.innerHTML=footer();


// related post 
let rePost = document.querySelector("#related");
rePost.innerHTML+=related();
rePost.style.display="block";
