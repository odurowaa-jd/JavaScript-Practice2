

                //AMAZON SHIPPING CALCULATOR.
    function handleCostKeydown(event) {

      if (event.key === 'Enter') { 
        // Check if the Enter key was pressed.
        calculateTotal(); 
        // Call the function to calculate the total cost.
      }

    }

    function calculateTotal() {
        const inputElement = document.querySelector('.js-cost-input');
        let cost = Number(inputElement.value); 
        // Convert the input value to a number.

        if (cost < 40) {
          cost = cost +10;
        }

        document.querySelector('.js-total-cost')
        .innerHTML = `Total Cost: $${cost}`;
    }


            //YOUTUBE SUBSCRIBE BUTTON.
    function subscribe() {
       const buttonElement = document.querySelector('.js-subscribe-btn');

  if (buttonElement.innerHTML === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed!';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
    }
