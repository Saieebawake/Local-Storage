const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
    e.preventDefault();
    const item = {
        text: 'Item Name'
    }
}

addItems.addEventListener('submit', addItem);