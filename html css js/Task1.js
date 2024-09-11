
const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');
const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  itemList.innerHTML = ''; // Clear previous results

  // Filter and display matching items
  const filteredItems = items.filter(item => item.toLowerCase().includes(filter));

  if (filteredItems.length > 0) {
    itemList.classList.remove('hidden');
    filteredItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      li.className = 'py-1';
      itemList.appendChild(li);
    });
  } else {
    itemList.classList.add('hidden'); // Hide the list if no items match
  }
});
