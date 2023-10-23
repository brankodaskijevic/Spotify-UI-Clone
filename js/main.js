const sidebar = document.querySelector(".sidebar.left-section-container")
const resizer = document.querySelector(".resizer")

resizer.addEventListener("mousedown", (event) => {
  document.addEventListener("mousemove", resize, false)

  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", resize, false)
  }, false)
})

function resize(event) {
  const dynamicSize = `${event.x}px`
  sidebar.style.flexBasis = dynamicSize
}

