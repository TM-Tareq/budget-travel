const allBtn = document.getElementsByClassName('add-btn');
// console.log(allBtn)

let count = 0;

for(const btn of allBtn) {
    btn.addEventListener("click", function(e) {
        count ++;

        const placeName = e.target.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;

        const selectedContainer = document.getElementById('selected-place-container');

        const li = document.createElement("li");

        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price;

        e.target.parentNode.style.backgroundColor = "gray"

        li.appendChild(p);
        li.appendChild(p2);

        const budget = document.getElementById('budget').innerText;
        const convertedBudget = parseInt(budget);

        if(convertedBudget - parseInt(price) < 0) {
            alert('low budget is harmful');
            return;
        }

        document.getElementById('budget').innerText = convertedBudget - parseInt(price);

        selectedContainer.appendChild(li);
        li.style.display = 'flex';

        // const totalCost = document.getElementById('total-cost').innerText;

        // const convertedTotalCost = parseInt(totalCost);

        // const sum = convertedTotalCost + parseInt(price);

        // setInnerText('total-cost', sum);

        totalCost('total-cost', parseInt(price))


        // here the grand total section
        // const grandTotal = document.getElementById('grand-total').innerText;
        // const convertedGrandTotal = parseInt(grandTotal);
        // const sum2 = convertedGrandTotal + parseInt(price);
        // console.log(sum2)
    
        // setInnerText('grand-total', sum2);

        // grandTotalCost("grand-total", parseInt(price));

        grandTotalCost('grand-total', parseInt(price));

        setInnerText('cart-count', count);
    });
}


function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;

    const convertedTotalCost = parseInt(totalCost);

    const sum = convertedTotalCost + parseInt(value);

    setInnerText(id, sum);
}

function grandTotalCost(category) {
    const grandTotal = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(grandTotal);

    if(category === 'bus') {
        setInnerText('grand-total', convertedTotalCost + 100);
    } else if(category === 'train') {
        setInnerText('grand-total', convertedTotalCost - 200);
    } else {
        setInnerText('grand-total', convertedTotalCost + 500);
    }

    // const sum2 = convertedTotalCost + parseInt(value);
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
} 