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

// document.getElementById('page').addEventListener('click',function(event){
//     const buttons = document.getElementsByClassName('button');
//     for(let item of buttons){
//         item.style.backgroundColor = '#F9F7F3';
//     }
//     if(event.target.tagName === 'BUTTON') {
//         event.target.style.backgroundColor = '#B4F461';
//     }
// })


document.getElementById('page').addEventListener('click', function(event) {
    const buttons = document.getElementsByClassName('button');
    
    if (event.target.tagName === 'BUTTON') {
        for (let item of buttons) {
            item.style.backgroundColor = '#F9F7F3';
        }
        event.target.style.backgroundColor = '#B4F461';
    }
});
