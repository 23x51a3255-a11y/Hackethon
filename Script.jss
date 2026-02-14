function generateRecommendation() {

    const occasion = document.getElementById("occasion").value;
    const season = document.getElementById("season").value;
    const resultDiv = document.getElementById("result");

    if (!occasion || !season) {
        resultDiv.innerHTML = "<p>Please select both options!</p>";
        return;
    }

    let recommendation = "";

    if (occasion === "casual" && season === "summer") {
        recommendation = `
            <div class="card">
                <img src="https://images.unsplash.com/photo-1520975918318-8f9c1e2c1c66" alt="Casual Summer Outfit">
                <h3>Casual Summer Look</h3>
                <p>Light cotton t-shirt with denim shorts and sneakers.</p>
            </div>
        `;
    } 
    else if (occasion === "party" && season === "winter") {
        recommendation = `
            <div class="card">
                <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246" alt="Party Winter Outfit">
                <h3>Winter Party Glam</h3>
                <p>Stylish leather jacket with boots and elegant accessories.</p>
            </div>
        `;
    }
    else if (occasion === "office") {
        recommendation = `
            <div class="card">
                <img src="https://images.unsplash.com/photo-1520975661595-6453be3f7070" alt="Office Outfit">
                <h3>Professional Office Wear</h3>
                <p>Formal blazer with tailored trousers and polished shoes.</p>
            </div>
        `;
    }
    else if (occasion === "wedding") {
        recommendation = `
            <div class="card">
                <img src="https://images.unsplash.com/photo-1529634806983-0e5b8b4e0d19" alt="Wedding Outfit">
                <h3>Elegant Wedding Attire</h3>
                <p>Traditional outfit with matching accessories and classy footwear.</p>
            </div>
        `;
    }
    else {
        recommendation = `
            <div class="card">
                <img src="https://images.unsplash.com/photo-1495121605193-b116b5b09a74" alt="Default Outfit">
                <h3>Smart Seasonal Look</h3>
                <p>Comfortable and stylish outfit perfect for the selected season.</p>
            </div>
        `;
    }

    resultDiv.innerHTML = recommendation;
}
