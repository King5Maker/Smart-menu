document.addEventListener("DOMContentLoaded", function () {
    const sheetID = '1Cod33blcjGFALKYso80iMGJS7kqWVtqU_RyE4jpULsA';  // Your Google Sheets ID
    const apiKey = 'AIzaSyBQZ6LEB6RgWZJskW85_rbqaYw1X-XFYjM';  // Your API Key
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/Menu?key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const entries = data.values;  // Access the sheet data directly
            let menuList = "<h2>Menu</h2>";
            let currentCategory = "";

            entries.forEach(row => {
                const category = row[0];  // Assuming the category is in the first column
                const foodItem = row[1];  // Assuming the food item is in the second column
                const price = row[2];     // Assuming the price is in the third column

                if (category !== currentCategory) {
                    currentCategory = category;
                    menuList += `<h3>${currentCategory}</h3><ul>`;
                }

                menuList += `<li>${foodItem} - ₹${price}</li>`;
            });

            menuList += "</ul>";
            document.body.innerHTML += menuList;
        })
        .catch(error => console.error("Error fetching menu:", error));
});
