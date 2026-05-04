const carsData = [
    {
        id: 1,
        name: "Mercedes Benz",
        price: "$80,000",
        year: 2024,
        fuel: "Gasoline",
        mileage: "4,500 mi",
        transmission: "Auto",
        brand: "Mercedes",
        image: "MY25-GLCCOUPE-CLASS-Resized.webp"
    },
    {
        id: 2,
        name: "BMW C200",
        price: "$45,000",
        year: 2020,
        fuel: "Gasoline",
        mileage: "6,070 mi",
        transmission: "Auto",
        brand: "BMW ",
        image: "bmwc200.png"
    },
    {
        id: 3,
        name: "Nissan sunny",
        price: "$12,000",
        year: 2023,
        fuel: "Gasoline",
        mileage: "5,100 mi",
        transmission: "Auto",
        brand: "Nissan ",
        image: "nissan.jpg"
    },
    {
        id: 4,
        name: "Hyundai Tucson",
        price: "$28,000",
        year: 2025,
        fuel: "Gasoline",
        mileage: "1,460 mi",
        transmission: "Auto",
        brand: "Hyundai  ",
        image: "hyundai.png"
    },
    {
        id: 5,
        name: "BMW C100",
        price: "$32,000",
        year: 2024,
        fuel: "Gasoline",
        mileage: "3,400 mi",
        transmission: "Auto",
        brand: "BMW ",
        image: "bmw c100.jpg"
    },
    {
        id: 6,
        name: "Porsche 911",
        price: "$50,000",
        year: 2026,
        fuel: "Gasoline",
        mileage: "1,000 mi",
        transmission: "Auto",
        brand: "Porsche  ",
        image: "porsche.webp"
    },
];
let currentResults = carsData;
let maxPages = 3;

function displayCars(cars) {
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = "";

    for (let i = 0; i < cars.length; i++) {
        let car = cars[i];

        const carHTML = `
            <div class="car-card">
                <div class="card-img">
                    <img src="${car.image}" alt="${car.name}">
                </div>
                <div class="card-body">
                    <div class="title-price">
                        <div>
                            <h2 class="car-title">${car.name}</h2>
                        </div>
                        <hr>
                        <div class="card-footer">
                            <span class="price">${car.price}</span>
                        </div>
                    </div>

                    <div class="car-specs">
                        <span>📅 ${car.year}</span>
                        <span>⛽ ${car.fuel}</span>
                        <span>⏱️ ${car.mileage}</span>
                        <span>⚙️ ${car.transmission}</span>
                    </div>

                    <hr>
                    <div class="book">
                        <a href="#" >
                            <button class="book-btn">Book Now</button>
                        </a>
                    </div>
                </div>
            </div>
        `;
        cardsContainer.innerHTML += carHTML;
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.removeItem('theme');
    }
}

function toggleView(viewType) {
    const container = document.querySelector('.cards-container');
    if (viewType === 'list') {
        container.classList.add('list-view');
        localStorage.setItem('view', 'list');
    } else {
        container.classList.remove('list-view');
        localStorage.removeItem('view');
    }
}

let currentPage = 1;
function changePage(pageNumber) {
    currentPage = pageNumber;

    const container = document.querySelector('.cards-container');
    container.innerHTML = "";

    let chunk;
    if (pageNumber === 1) {
        chunk = [currentResults[0], currentResults[1]];
    } else if (pageNumber === 2) {
        chunk = [currentResults[2], currentResults[3]];
    } else if (pageNumber === 3) {
        chunk = [currentResults[4], currentResults[5]];
    }

    let buttons = document.querySelectorAll('.pag-btn');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].innerText == pageNumber) {
            buttons[i].classList.add('active');
        }
    }

    displayCars(chunk);
}

function nextPage() {
    if (currentPage < maxPages) {
        changePage(currentPage + 1);
    }
}

function prevPage() {
    if (currentPage > 1) {
        changePage(currentPage - 1);
    }
}
//----------------------------------------------------------------
function searchCars() {
    const nameInput = document.getElementById('car-name').value.toLowerCase();
    const priceFilter = document.getElementById('price-filter').value;
    const transFilter = document.getElementById('transmission').value;
    const yearFilter = document.getElementById('carYear').value;

    let filteredResults = [];

    for (let i = 0; i < carsData.length; i++) {
        let car = carsData[i];

        let matchesName = car.name.toLowerCase().includes(nameInput);

        let matchesPrice = false;
        if (priceFilter === "all") {
            matchesPrice = true;
        }
        else if (priceFilter === "under30") {
            if (car.price === "$12,000" || car.price === "$28,000") {
                matchesPrice = true;
            }
        }
        else if (priceFilter === "30-50") {
            if (car.price === "$32,000" || car.price === "$45,000" || car.price === "$50,000") {
                matchesPrice = true;
            }
        }
        else if (priceFilter === "above50") {
            if (car.price === "$80,000") {
                matchesPrice = true;
            }
        }

        let matchesTrans;
        if (transFilter === "all" || transFilter === "automatic") {
            matchesTrans = true;
        } else if (transFilter === "manual") {
            matchesTrans = false;
        }

        let matchesYear = false;
        if (yearFilter === "all") {
            matchesYear = true;
        } else if (yearFilter === "older") {
            if (car.year < 2023) matchesYear = true;
        } else if (car.year == yearFilter) {
            matchesYear = true;
        }
        if (matchesName && matchesPrice && matchesTrans && matchesYear) {
            filteredResults.push(car);
        }
    }

    if (!document.body.classList.contains('light-mode')) {
        window.scrollTo({
            top: 780,
            behavior: 'smooth'
        });
    }
    currentResults = filteredResults;
    displayFilteredResults(currentResults);
}

function filterByBrand(tagName) {
    let selectedResults = [];

    if (tagName === 'BMW') {
        selectedResults = [carsData[1], carsData[4]];
    }
    else if (tagName === 'Mercedes') {
        selectedResults = [carsData[0]];
    }
    else if (tagName === 'Nissan') {
        selectedResults = [carsData[2]];
    }
    else if (tagName === 'Hyundai') {
        selectedResults = [carsData[3]];
    }
    else if (tagName === 'Porsche') {
        selectedResults = [carsData[5]];
    }

    currentResults = selectedResults;
    displayFilteredResults(currentResults);
}

function displayFilteredResults(results) {
    const container = document.querySelector('.cards-container');
    container.innerHTML = "";
    const pagingDiv = document.querySelector('.paging');
    const view = document.querySelector('.view-btn')

    let buttons = document.querySelectorAll('.pag-btn');

    if (results.length === 0) {
        container.innerHTML = `
        <div class="no-results">
            <h3>No matching results found.</h3>
            <h5>Please try adjusting your filters or search terms to find what you're looking for.</h5>
        </div>`;
        pagingDiv.style.display = 'none';
        view.style.display = 'none';
        return;
    }
    else if (results.length <= 2) {
        pagingDiv.style.display = 'none';
        view.style.display = 'block';
    }
    else if (results.length <= 4) {
        buttons[2].style.display = 'none';
        view.style.display = 'block';
        maxPages = 2;
    }
    else {
        buttons[2].style.display = 'inline-block';
        view.style.display = 'block';
        maxPages = 3;
    }
    changePage(1);

    if (results.length > 2) {
        pagingDiv.style.display = 'flex';
    } else {
        pagingDiv.style.display = 'none';
    }
}

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}
if (localStorage.getItem('view') === 'list') {
    const container = document.querySelector('.cards-container');
    container.classList.add('list-view');
}

window.onload = function () {
    currentResults = carsData;
    changePage(1);
};