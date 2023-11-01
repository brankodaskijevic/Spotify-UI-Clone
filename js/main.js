const sidebar = document.querySelector(".sidebar.left-section-container")
const resizer = document.querySelector(".resizer")
const mainContainerHeaderItems = document.querySelectorAll(".container-item")
const headerItemsButton = document.querySelectorAll(".container-item-button button")


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

// showing button on mouseover for main container header items

document.addEventListener("DOMContentLoaded", () => {
  mainContainerHeaderItems.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      if (index != 0) {
        headerItemsButton[index].style.visibility = "visible"
        headerItemsButton[index].style.transitions = "0.5s"
      }
    })

    item.addEventListener("mouseout", () => {
      if (index != 0) {
        headerItemsButton[index].style.visibility = "hidden"
        headerItemsButton[index].style.transitions = "0.5s"
      }
    })
  })
})

// setting first button to visible playing button
headerItemsButton[0].style.visibility = "visible"
headerItemsButton[0].innerHTML = '<i class="fas fa-pause"></i>'
