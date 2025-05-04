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



const dropdown = document.getElementById('customDropdown');

const dropdown2 = document.getElementById('customDropdown2');
const toggle = document.getElementById('dropdownToggle');
const toggle2 = document.getElementById('dropdownToggle2');
const options = document.getElementById('dropdownOptions');
const options2= document.getElementById('dropdownOptions2');
const hiddenInput = document.getElementById('dropdownValue');

toggle.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

toggle2.addEventListener('click', () => {
    dropdown2.classList.toggle('open');
  });
options.querySelectorAll('div').forEach(option => {
  option.addEventListener('click', () => {
    toggle.textContent = option.textContent;
    hiddenInput.value = option.getAttribute('data-value');
    dropdown.classList.remove('open');
  });
});

options2.querySelectorAll('div').forEach(option => {
    option.addEventListener('click', () => {
      toggle2.textContent = option.textContent;
      hiddenInput.value = option.getAttribute('data-value');
      dropdown.classList.remove('open');
    });
  });

document.addEventListener('click', function(event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('open');
  }
});

document.addEventListener('click', function(event) {
    if (!dropdown2.contains(event.target)) {
      dropdown2.classList.remove('open');
    }
  });