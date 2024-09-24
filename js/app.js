document.getElementById('donate-btn').addEventListener('click', function () {
    const donationInput = document.getElementById('donation-amount').value;
    if (isNaN(donationInput) || donationInput <= '0' || donationInput.trim() === '') {
        alert('Invalid Donation Amount');
        return;
    }
    const donationAmount = parseFloat(donationInput);
    const noahkhaliAmount = parseFloat(document.getElementById('noahkhali-amount').innerText);
    const myBalance = parseFloat(document.getElementById('my-balance').innerText);
    if (myBalance < donationAmount) {
        alert('You dont have enough money');
        return;
    }

    const totalNoahkhaliAmount = noahkhaliAmount + donationAmount;
    document.getElementById('noahkhali-amount').innerText = totalNoahkhaliAmount;
    document.getElementById('my-balance').innerText = myBalance - donationAmount;


    const title1 = document.getElementById('title-01').innerText;
    updateDonationHistory(donationAmount, title1);


    document.getElementById('my_modal_5').showModal();


}
);


document.getElementById('donate-btn2').addEventListener('click', function () {
    const donationInput = document.getElementById('donation-amount2').value;
    if (isNaN(donationInput) || donationInput <= '0' || donationInput.trim() === '') {
        alert('Invalid Donation Amount');
        return;
    }
    const donationAmount = parseFloat(donationInput);
    const feniAmount = parseFloat(document.getElementById('feni-amount').innerText);
    const myBalance = parseFloat(document.getElementById('my-balance').innerText);
    if (myBalance < donationAmount) {
        alert('You dont have enough money');
        return;
    }

    const totalfeniAmount = feniAmount + donationAmount;
    document.getElementById('feni-amount').innerText = totalfeniAmount;
    document.getElementById('my-balance').innerText = myBalance - donationAmount;

    const title2 = document.getElementById('title-2').innerText;
    updateDonationHistory(donationAmount, title2);

    document.getElementById('my_modal_6').showModal();


}
);
document.getElementById('donate-btn3').addEventListener('click', function () {
    const donationInput = document.getElementById('donation-amount3').value;
    if (isNaN(donationInput) || donationInput <= '0' || donationInput.trim() === '') {
        alert('Invalid Donation Amount');
        return;
    }
    const donationAmount = parseFloat(donationInput);
    const quotaAmount = parseFloat(document.getElementById('quota-amount').innerText);
    const myBalance = parseFloat(document.getElementById('my-balance').innerText);
    if (myBalance < donationAmount) {
        alert('You dont have enough money');
        return;
    }
    // Update the amounts
    const totalquotaAmount = quotaAmount + donationAmount;
    document.getElementById('quota-amount').innerText = totalquotaAmount;
    document.getElementById('my-balance').innerText = myBalance - donationAmount;

    const title3 = document.getElementById('title-3').innerText;
    updateDonationHistory(donationAmount, title3);

    // If all conditions pass, show the modal
    document.getElementById('my_modal_7').showModal();


}
);



// Button
document.getElementById('btn-donate').addEventListener('click',
    function () {

        showSectionById('main-page');
        showColorById('btn-donate');
    }
)
document.getElementById('btn-history').addEventListener('click',
    function () {

        showSectionById('history-page');
        showColorById('btn-history');
    }
);
