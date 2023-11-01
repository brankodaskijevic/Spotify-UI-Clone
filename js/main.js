const sidebar = document.querySelector(".sidebar.left-section-container")
const resizer = document.querySelector(".resizer")
const mainContainerHeaderItems = document.querySelectorAll(".container-item")


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

document.addEventListener("DOMContentLoaded", () => {
  mainContainerHeaderItems.forEach(item => {
    item.addEventListener("mouseover", () => {
      console.log("hover")
    })
  })
})
