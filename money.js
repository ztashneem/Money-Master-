// function number 1
// Expenses and Balance Function
function updatevalue() {
    const incomeInput = document.getElementById('income-input');
    const incomeValue = incomeInput.value;
    const product = parseFloat(incomeValue);
    const foodInput = document.getElementById('food-input');
    const foodValue = foodInput.value;
    const product1 = parseFloat(foodValue);
    foodInput.value = '';
    const rentInput = document.getElementById('rent-input');
    const rentValue = rentInput.value;
    const product2 = parseFloat(rentValue);
    rentInput.value = '';
    const clothInput = document.getElementById('cloth-input');
    const clothValue = clothInput.value;
    const product3 = parseFloat(clothValue);
    clothInput.value = '';
    totalExpenses = product1 + product2 + product3;
    const totalInput = document.getElementById('total-expenses');
    const totalInputText = totalInput.innerText;
    totalInput.innerText = totalExpenses;
    balance = product - totalExpenses;
    const balanceInput = document.getElementById('balance-remain');
    const balanceInputText = balanceInput.innerText;
    balanceInput.innerText = balance;
    return balance;
//End  Expenses and Balance Function
}
//Saving Amount - Remaining Balance
//function number 2
function saveupdatevalue() {
    const saveInput = document.getElementById('save-input');
    const saveValue = saveInput.value;
    const product4 = parseFloat(saveValue);
    saveInput.value = '';
    const incomeInput = document.getElementById('income-input');
    const incomeValue = incomeInput.value;
    const product = parseFloat(incomeValue);
    incomeInput.value = '';
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = (product * product4) / 100;
    const savingAmountText = savingAmount.innerText;
    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceText = remainingBalance.innerText;
    remainingBalance.innerText = balance - savingAmountText;
//End Saving Amount - Remaining Balance
}
//  Function Called 01
document.getElementById('calcaulate-total').addEventListener('click', function () {
    updatevalue();
});
//  Function Called 02
document.getElementById('save-total').addEventListener('click', function () {
    saveupdatevalue();
});