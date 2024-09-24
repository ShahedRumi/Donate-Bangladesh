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