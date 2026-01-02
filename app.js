const ops = document.getElementById("ops");
const feel = document.getElementById("feel");

const KEY_OPS = "ops_text";
const KEY_FEEL = "feel_text";

ops.value = localStorage.getItem(KEY_OPS) ?? "";
feel.value = localStorage.getItem(KEY_FEEL) ?? "";

let t = null;
function saveSoon() {
  clearTimeout(t);
  t = setTimeout(() => {
    localStorage.setItem(KEY_OPS, ops.value);
    localStorage.setItem(KEY_FEEL, feel.value);
  }, 250);
}

ops.addEventListener("input", saveSoon);
feel.addEventListener("input", saveSoon);
