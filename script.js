document.addEventListener('input', function() {
    const totalBill = parseFloat(document.getElementById('totalBill').value);
    const numPeople = parseInt(document.getElementById('numPeople').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);

    if (!isNaN(totalBill) && !isNaN(numPeople) && numPeople > 0 && !isNaN(taxRate)) {
        const totalWithTax = totalBill + (totalBill * (taxRate / 100));
        const pricePerPerson = totalWithTax / numPeople;
        document.getElementById('pricePerPerson').textContent = pricePerPerson.toFixed(2);
    } else {
        document.getElementById('pricePerPerson').textContent = '0.00';
    }
});

