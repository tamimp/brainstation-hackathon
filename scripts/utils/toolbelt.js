




function handleFormSubmit(event) {

    event.target.reset();
}

const btnEl = document.getElementById('button');

btnEl.addEventListener('submit', handleFormSubmit);
