function showSectionById(id){
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function showColorById(id){
    document.getElementById('btn-donate').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
    document.getElementById(id).classList.add('bg-[#B4F461]')
}

// History Function
function updateDonationHistory(donationAmount,title) {
    const d= new Date()
        const div=document.createElement('div');
        div.classList.add('p-8','outline', 'rounded-lg', 'outline-[#E7E7E7]','mb-2');
        div.innerHTML=` <h2 class="font-bold text-xl text-[#111111] mb-4">${donationAmount} Taka is Donated ${title}</h2>
    <p class="font-light text-[16px]">${d}</p> `

        document.getElementById('history-container').appendChild(div)

}
