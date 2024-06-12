function countWords() {
    const text = document.getElementById('textInput').value.trim();
    const words = text.split(/\s+/).filter(word => word !== '');
    const wordCounts = countOccurrences(words);
    displayCounts(wordCounts, 'wordCount');
}

function countLetters() {
    const text = document.getElementById('textInput').value.trim();
    const letters = text.replace(/\s+/g, '');
    const letterCounts = countOccurrences(letters.split(''));
    displayCounts(letterCounts, 'letterCount');
}

function countOccurrences(arr) {
    const counts = {};
    arr.forEach(item => {
        if (counts[item]) {
            counts[item]++;
        } else {
            counts[item] = 1;
        }
    });
    return counts;
}

function displayCounts(counts, targetId) {
    const countDiv = document.getElementById(targetId);
    countDiv.innerHTML = '';

    const sortedCounts = Object.entries(counts).sort((a, b) => a[0].localeCompare(b[0]));
    sortedCounts.forEach(([key, count]) => {
        const countItem = document.createElement('div');
        countItem.textContent = `${key}: ${count}`;
        countDiv.appendChild(countItem);
    });
}
