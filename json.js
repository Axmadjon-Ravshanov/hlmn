document.getElementById("searchBtn").addEventListener("click", async function () {
    const searchText = document.getElementById("searchBox").value.toLowerCase();
    
    const response = await fetch("universitetlar.json");
    const universities = await response.json();

    const result = universities.find(u => u.name.toLowerCase().includes(searchText));

    if (result) {
        // Перенаправляем пользователя на найденную страницу
        window.location.href = result.link;
    } else {
        alert("Universitet topilmadi.");
    }
});