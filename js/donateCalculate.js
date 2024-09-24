function donationForNoakhali(){
    let noakhaliDonation = Number(document.getElementById('noakhaliDonation').innerText);
    let noakhaliDonateAmount = Number(document.getElementById('noakhaliDonateAmount').value);
    
    let donateCalculation = donate(noakhaliDonation,noakhaliDonateAmount);

    if(donateCalculation){
        document.getElementById('noakhaliDonation').innerText = donateCalculation;
    }
    document.getElementById('noakhaliDonateAmount').value = '';
}


function donateForFeni(){
    let feniDonation = Number(document.getElementById('feniDonation').innerText);
    let feniDonateAmount = Number(document.getElementById('feniDonateAmount').value);
    
    let donateCalculation = donate(feniDonation,feniDonateAmount);

    if(donateCalculation){
        document.getElementById('feniDonation').innerText = donateCalculation;
    }
    document.getElementById('feniDonateAmount').value = '';
}

function quotaDonation(){
    let quotaDonation = Number(document.getElementById('quotaDonation').innerText);
    let quotaDonateAmount = Number(document.getElementById('quotaDonateAmount').value);
    
    let donateCalculation = donate(quotaDonation,quotaDonateAmount);

    if(donateCalculation){
        document.getElementById('quotaDonation').innerText = donateCalculation;

        let donationHistory = document.getElementById('donate-history');
        let historyBlock = document.createElement('div');
        historyBlock.classList.add('border','rounded-2xl','p-8','space-y-4');
        historyBlock.innerHTML +=`
        <h1 class="text-2xl font-bold">${quotaDonateAmount} Taka is donated for quota movement-2024 at Feni, Bangladesh</h1>
          <p class="text-gray-500">Date: ${new Date}</p>
    `
    donationHistory.appendChild(historyBlock);
    }
    document.getElementById('quotaDonateAmount').value = '';

    
}