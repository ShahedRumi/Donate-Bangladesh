
function donationForNoakhali(){
    let noakhaliDonation = Number(document.getElementById('noakhaliDonation').innerText);
    let noakhaliDonateAmount = Number(document.getElementById('noakhaliDonateAmount').value);
    
    let donateCalculation = donate(noakhaliDonation,noakhaliDonateAmount);

    if(donateCalculation){
        document.getElementById('noakhaliDonation').innerText = donateCalculation;
        document.getElementById('donation-modal').checked = true;
        allDonationHistory(noakhaliDonateAmount,'Donate for Flood at Noakhali');
    }
    document.getElementById('noakhaliDonateAmount').value = '';
}


function donateForFeni(){
    let feniDonation = Number(document.getElementById('feniDonation').innerText);
    let feniDonateAmount = Number(document.getElementById('feniDonateAmount').value);
    
    let donateCalculation = donate(feniDonation,feniDonateAmount);

    if(donateCalculation){
        document.getElementById('feniDonation').innerText = donateCalculation;
        document.getElementById('donation-modal').checked = true;
        allDonationHistory(feniDonateAmount,'Donate for Flood Relief in Feni');
    }
    document.getElementById('feniDonateAmount').value = '';
}

function quotaDonation(){
    let quotaDonation = Number(document.getElementById('quotaDonation').innerText);
    let quotaDonateAmount = Number(document.getElementById('quotaDonateAmount').value);
    
    let donateCalculation = donate(quotaDonation,quotaDonateAmount);

    if(donateCalculation){
        document.getElementById('quotaDonation').innerText = donateCalculation;
        document.getElementById('donation-modal').checked = true;
        allDonationHistory(quotaDonateAmount,'Aid for Injured in the Quota Movement');
    }
    document.getElementById('quotaDonateAmount').value = '';

}