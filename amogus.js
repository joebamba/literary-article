let sus = false;
const body = document.body.style;

function imposter() {
  sus = !sus;
  body.fontFamily = sus ? "amogus" : "serif";
  body.textTransform = sus ? "uppercase" : "none";
}
