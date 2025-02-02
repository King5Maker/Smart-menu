document.addEventListener("DOMContentLoaded", function () {
    const sheetID = '1Cod33blcjGFALKYso80iMGJS7kqWVtqU_RyE4jpULsA';  // Your Google Sheets ID
    const apiKey = 'AIzaSyBQZ6LEB6RgWZJskW85_rbqaYw1X-XFYjM';  // Your API Key
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/Menu!A1:C100?key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const entries = data.values;  // Get data from the API response
            let menuList = "<h2>Menu</h2>";
            let currentCategory = "";

            // Loop through the data to build the menu display
            entries.forEach(row => {
                const category = row[0];  // Category (first column)
                const foodItem = row[1];  // Food item (second column)
                const price = row[2];     // Price (third column)

                // Check if the category is different and add category heading
                if (category !== currentCategory) {
                    currentCategory = category;
                    menuList += `<h3>${currentCategory}</h3><ul>`;
                }

                // Add food item to the list
                menuList += `<li>${foodItem} - ₹${price}</li>`;
            });

            menuList += "</ul>";
            document.body.innerHTML += menuList;
        })
        .catch(error => console.error("Error fetching menu:", error));
});
