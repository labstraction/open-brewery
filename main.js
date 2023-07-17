
let pageNumber = 1;

DBService.getBreweries(pageNumber)
.then(breweries => render(breweries))

function render(breweries){
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';



    for (let i = 0; i < breweries.length; i++) {

        const brewery = breweries[i];

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('brewery-card');

        // const nameStrong = document.createElement('strong');
        // const nameNode = document.createTextNode(brewery.name);
        // nameStrong.appendChild(nameNode);
        // cardDiv.appendChild(nameStrong);
        cardDiv.appendChild(createElementWithString('strong', brewery.name))

        const addressDiv = document.createElement('div');

        // const citySpan = document.createElement('span');
        // const cityNode = document.createTextNode(brewery.city);
        // citySpan.appendChild(cityNode);
        // addressDiv.appendChild(citySpan);
        addressDiv.appendChild(createElementWithString('span', brewery.city));


        // const stateSpan = document.createElement('span');
        // const stateNode = document.createTextNode(', ' + brewery.state);
        // stateSpan.appendChild(stateNode);
        // addressDiv.appendChild(stateSpan);
        addressDiv.appendChild(createElementWithString('span', ', ' + brewery.state));
        cardDiv.appendChild(addressDiv);

        const detailButton = createElementWithString('button', 'dettaglio');
        detailButton.addEventListener('click', () => saveAndNavigate({...brewery}));
        cardDiv.appendChild(detailButton);
        mainContainer.appendChild(cardDiv);
    }

}

function saveAndNavigate(brewery){
    //sessionStorage.setItem('selectedBrewery', brewery.id);
    window.location = './detail.html?id=' + brewery.id;
}

// function appendElementWithString(container, elementName,contentString){
//     const element = document.createElement(elementName);
//     const node = document.createTextNode(contentString);
//     element.appendChild(node);
//     container.appendChild(element);
// }


function previous() {
    pageNumber--;
    if (pageNumber < 1) {
        pageNumber = 1;
    }
    DBService.getBreweries(pageNumber)
    .then(breweries => render(breweries))
}

function next(){
    pageNumber++;
    DBService.getBreweries(pageNumber)
    .then(breweries => render(breweries))

}


//displaiare le informazioni delle birrerie nella maniera più cool possibile