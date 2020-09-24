const p = document.querySelectorAll("p")

p.forEach(function (parapraph) {
  if (parapraph.textContent.includes("the"))
    parapraph.remove()
})