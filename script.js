// Static data (replace with real data in a production project)
const dropoutData = {
    school: { category: "School-wise", data: [{ name: "School A", value: 15 }, { name: "School B", value: 8 }, /* ... */] },
    area: { category: "Area-wise", data: [{ name: "Area X", value: 20 }, { name: "Area Y", value: 12 }, /* ... */] },
    gender: { category: "Gender-wise", data: [{ name: "Male", value: 10 }, { name: "Female", value: 15 }] },
    caste: { category: "Caste-wise", data: [{ name: "Caste 1", value: 7 }, { name: "Caste 2", value: 18 }] },
    age: { category: "Age/Standard-wise", data: [{ name: "Age 10", value: 5 }, { name: "Age 12", value: 12 }, /* ... */] },
};

const categorySelector = document.getElementById("category");
const chartContainer = document.getElementById("chart-container");

// Function to render a bar chart based on the selected category
function renderChart(selectedCategory) {
    const data = dropoutData[selectedCategory].data;

    // Replace this with a real charting library in a production project
    chartContainer.innerHTML = `
        <h2>${dropoutData[selectedCategory].category} Dropout Rates</h2>
        <div id="chart">
            <!-- Render a bar chart here -->
        </div>
    `;
}

// Event listener for category selection change
categorySelector.addEventListener("change", () => {
    const selectedCategory = categorySelector.value;
    renderChart(selectedCategory);
});

// Initial render
renderChart(categorySelector.value);
