function donate(currentDonation, receivedDonation){
    let totalAmount = Number(document.getElementById('totalAmount').innerText);
    if(totalAmount < receivedDonation || isNaN(receivedDonation)){
        alert('Invalid Input');
        return;
    }
    const remainAmount = totalAmount - receivedDonation;
    document.getElementById('totalAmount').innerText = remainAmount;

    return currentDonation + receivedDonation;
}
