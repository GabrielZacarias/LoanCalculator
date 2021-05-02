document.querySelector('#loan-form').addEventListener('submit', function(e){
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);


    e.preventDefault();
});

function calculateResults(){
    //get inputs
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    //results input
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    //calculations
    const fullPayment = "$" + parseFloat(amount.value * (1 + ((interest.value / 100) * years.value)));
    const fullInterest = "$" + parseFloat(fullPayment - amount.value);
    const monthly = "$" + parseFloat(fullPayment / (years.value * 12));

    if(isFinite(monthly))
    {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = fullPayment.toFixed(2);
        totalInterest.value = fullInterest.toFixed(2);
        document.getElementById('results').style.display = 'block';
    }else {
        showError('Please check numbers');
    }

    document.getElementById('loading').style.display = 'none';


}

function showError(error){
    //get card
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //make error div
    const errorDiv = document.createElement('div');
    
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    //add to front end
    card.insertBefore(errorDiv, heading);

    //clear div
    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}
