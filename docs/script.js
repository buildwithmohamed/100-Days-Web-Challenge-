const dropdownBtn = document.querySelector('.dropdownbtn')
const dropdownmenu = document.querySelector('.dropdown-menu')
const container = document.querySelector('.container')

// Close Dropdown

dropdownBtn.addEventListener('mouseover',  () => {
    // event.preventDefault()
    dropdownmenu.classList.remove('hidden')

  
})
// Open DropDown

container.addEventListener("click", () => {
    dropdownmenu.classList.add('hidden')
})


dropdownmenu.addEventListener("mouseleave", () => {
    dropdownmenu.classList.toggle('hidden')
})


