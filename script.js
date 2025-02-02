document.addEventListener("DOMContentLoaded", function () {
    const menu = [
        { name: "Pizza", price: "₹199" },
        { name: "Burger", price: "₹99" },
        { name: "Pasta", price: "₹149" }
    ];

    let menuList = "<h2>Menu</h2><ul>";
    menu.forEach(item => {
        menuList += `<li>${item.name} - ${item.price}</li>`;
    });
    menuList += "</ul>";

    document.body.innerHTML += menuList;
});
