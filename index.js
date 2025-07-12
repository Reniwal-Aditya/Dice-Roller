function rollDice() {
    const numOfDice = parseInt(document.getElementById("numOfDice").value);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    // Validate input
    if (numOfDice < 1 || numOfDice > 10) {
        diceResult.innerHTML = '<span style="color: #ff6b6b;">Please enter a number between 1 and 10!</span>';
        diceImages.innerHTML = '';
        return;
    }

    const values = [];
    const diceElements = [];

    // Generate dice values
    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        
        // Create dice element with dot pattern
        const diceElement = `<div class="dice" style="animation-delay: ${i * 0.1}s">${getDiceSymbol(value)}</div>`;
        diceElements.push(diceElement);
    }

    // Calculate total
    const total = values.reduce((sum, value) => sum + value, 0);

    // Display results
    diceResult.innerHTML = `
        <div>Dice Values: ${values.join(', ')}</div>
        <div class="total-sum">Total: ${total}</div>
    `;
    
    // Clear previous dice and add new ones with animation
    diceImages.innerHTML = '';
    setTimeout(() => {
        diceImages.innerHTML = diceElements.join('');
    }, 100);

    console.log('Rolled values:', values);
    console.log('Total:', total);
}

function getDiceSymbol(value) {
    const symbols = {
        1: '⚀',
        2: '⚁',
        3: '⚂',
        4: '⚃',
        5: '⚄',
        6: '⚅'
    };
    return symbols[value] || value;
}

// Add Enter key support
document.getElementById('numOfDice').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        rollDice();
    }
});

// Add some visual feedback when input changes
document.getElementById('numOfDice').addEventListener('input', function(e) {
    const value = parseInt(e.target.value);
    if (value > 10) {
        e.target.style.borderColor = '#ff6b6b';
        e.target.style.color = '#ff6b6b';
    } else {
        e.target.style.borderColor = 'transparent';
        e.target.style.color = '#333';
    }
});

// Initialize with a welcome message
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('diceResult').innerHTML = '<span style="color: #a0a0a0;">Click "Roll Dice" to start!</span>';
});