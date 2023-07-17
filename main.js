
let pageNumber = 1;

DBService.getBreweries(pageNumber)
.then(breweries => render(breweries))

function render(breweries){
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';


    for (brewery of breweries) {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('brewery-card');

        const nameStrong = document.createElement('strong');
        const nameNode = document.createTextNode(brewery.name);
        nameStrong.appendChild(nameNode);
        cardDiv.appendChild(nameStrong);

        const addressDiv = document.createElement('div');

        const citySpan = document.createElement('span');
        const cityNode = document.createTextNode(brewery.city);
        citySpan.appendChild(cityNode);
        addressDiv.appendChild(citySpan);

        const stateSpan = document.createElement('span');
        const stateNode = document.createTextNode(', ' + brewery.state);
        stateSpan.appendChild(stateNode);
        addressDiv.appendChild(stateSpan);
        cardDiv.appendChild(addressDiv);
        mainContainer.appendChild(cardDiv);
    }

}


function previous() {
    pageNumber--;
    DBService.getBreweries(pageNumber)
    .then(breweries => render(breweries))
}

function next(){
    pageNumber++;
    DBService.getBreweries(pageNumber)
    .then(breweries => render(breweries))

}


//displaiare le informazioni delle birrerie nella maniera più cool possibile