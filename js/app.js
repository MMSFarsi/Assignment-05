document.getElementById('donate-btn').addEventListener('click', function() {
    // Get the donation amount from the input field
    const donationInput = document.getElementById('donation-amount').value;

    // Validate input type
    if (isNaN(donationInput) || donationInput<='0' || donationInput.trim() === '') {
        alert('Wrong input: Please enter a number');
        return;
    }

    const donationAmount = parseFloat(donationInput);
    const noahkhaliAmount = parseFloat(document.getElementById('noahkhali-amount').innerText);
    
    // Check if myBalance is less than donationAmount
    const myBalance = parseFloat(document.getElementById('my-balance').innerText);
    if (myBalance < donationAmount) {
        alert('Error: Insufficient balance');
        return;
    }

    // Update the amounts
    const totalNoahkhaliAmount = noahkhaliAmount + donationAmount;
    document.getElementById('noahkhali-amount').innerText = totalNoahkhaliAmount;

    document.getElementById('my-balance').innerText = myBalance - donationAmount;

    // Add history
    const historyDetails = `${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh`;
    const d = new Date();
    document.getElementById("history-time").innerHTML = d;
    document.getElementById('history-details').innerHTML = historyDetails;
});






// document.getElementById('donate-btn').addEventListener('click',
//     function(){
//         const donationAmount=parseFloat(document.getElementById('donation-amount').value);
//         const noahkhaliAmount=parseFloat(document.getElementById('noahkhali-amount').innerText);
//         const totalNoahkhaliAmount=noahkhaliAmount+donationAmount;
//         document.getElementById('noahkhali-amount').innerText=totalNoahkhaliAmount

//         const myBalance=parseFloat(document.getElementById('my-balance').innerText);
//         document.getElementById('my-balance').innerText=myBalance-donationAmount;


//         // add history
//         const historyDetails= `${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh`
//         const d = new Date();
//       const a = document.getElementById("history-time").innerHTML = d;
//        const b =document.getElementById('history-details').innerHTML=historyDetails;

//     }
// )

document.getElementById('donate-btn2').addEventListener('click',
    function(){
        const donationAmount2=parseFloat(document.getElementById('donation-amount2').value);
        const feniAmount=parseFloat(document.getElementById('feni-amount').innerText);
        const totalFeniAmount=feniAmount+donationAmount2;
        document.getElementById('feni-amount').innerText=totalFeniAmount

        const myBalance=parseFloat(document.getElementById('my-balance').innerText);
        document.getElementById('my-balance').innerText=myBalance-donationAmount2

        


    }
)



// Button
document.getElementById('btn-donate').addEventListener('click',
    function(){
       
        showSectionById('main-page')
        showColorById('btn-donate')
    }
)
document.getElementById('btn-history').addEventListener('click',
    function(){
        
        showSectionById('history-page')
        showColorById('btn-history')
    }
)

// Button Color

