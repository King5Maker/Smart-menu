document.addEventListener("DOMContentLoaded", function () {
    const sheetID = '1Cod33blcjGFALKYso80iMGJS7kqWVtqU_RyE4jpULsA'; // Your sheet ID
    const url = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const entries = data.feed.entry;
            let menuList = "<h2>Menu</h2>";
            let currentCategory = "";

            entries.forEach(entry => {
                const category = entry.gsx$category.$t;  // Category column
                const foodItem = entry.gsx$fooditem.$t;  // Food item column
                const price = entry.gsx$price.$t;       // Price column

                if (category !== currentCategory) {
                    currentCategory = category;
                    menuList += `<h3>${currentCategory}</h3><ul>`;
                }

                menuList += `<li>${foodItem} - ${price}</li>`;
            });

            menuList += "</ul>";
            document.body.innerHTML += menuList;
        })
        .catch(error => console.error("Error fetching menu:", error));
});
