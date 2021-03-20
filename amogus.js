let sus = false;
const body = document.body.style;

function imposter() {
  sus = !sus;
  body.fontFamily = sus ? "amogus" : "var(--mainFont)";
  body.textTransform = sus ? "uppercase" : "none";
}
