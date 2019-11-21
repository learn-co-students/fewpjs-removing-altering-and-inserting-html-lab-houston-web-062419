let main = document.querySelector('#main')
main.remove()

// let newHeader = document.createElement('h1')
// newHeader.id = 'victory'
// newHeader.innerText = 'Aaron is the champion'

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";
