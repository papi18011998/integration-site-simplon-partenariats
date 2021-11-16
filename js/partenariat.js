window.onload = function(){
back_to_top = document.getElementById("btn-back-to-top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    back_to_top.style.display = "block";
  } else {
    back_to_top.display = "none";
  }
}
back_to_top.onclick = function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
}