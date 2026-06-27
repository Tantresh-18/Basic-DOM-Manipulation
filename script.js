let count = localStorage.getItem("count") || 0;

const countDisplay = document.getElementById("count");
const historyList = document.getElementById("historyList");

countDisplay.innerText = count;

// Save function
function saveCount() {
    localStorage.setItem("count", count);
}

// Update UI
function updateDisplay() {
    countDisplay.innerText = count;
    saveCount();
}

// Add history
function addHistory(action) {
    const li = document.createElement("li");
    li.innerText = action + " → " + count;
    historyList.prepend(li);
}

// Increase
document.getElementById("increase").addEventListener("click", () => {
    count++;
    updateDisplay();
    addHistory("Increment");
});

// Decrease
document.getElementById("decrease").addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateDisplay();
        addHistory("Decrement");
    }
});

// Reset
document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    updateDisplay();
    addHistory("Reset");
});

// Custom add
document.getElementById("addCustom").addEventListener("click", () => {
    const value = parseInt(document.getElementById("customValue").value);

    if (!isNaN(value)) {
        count += value;
        updateDisplay();
        addHistory("Added " + value);
    }
});

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
    if (e.key === "+") {
        count++;
    }
    if (e.key === "-") {
        if (count > 0) count--;
    }
    updateDisplay();
});