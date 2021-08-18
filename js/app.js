// UI
const currencyoneel = document.getElementById('currency-one'),
amountoneel = document.getElementById('amount-one');

const currencytwoel = document.getElementById('currency-two'),
    amountwoel  = document.getElementById('amount-two');

const swapel = document.getElementById('swap'),
    rateel = document.getElementById('rate');


function calculate(){
    // console.log('hay');
    const crcyone = currencyoneel.value;
    const crcytwo = currencytwoel.value;

    const amtone = amountoneel.value;
    const amttwo = amountwoel.value;

    const apikey = '180680f4d580a514034b699e';
    const uri = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;

    // console.log('crycone, crtwo');
    // console.log('amtone, amttwo');

    // AJAX request
    // prototype promiseဖြစ်တာက apiချိတ်တာအဆင်ပြေတယ်လို့ပြောတာ
    // uriကနေlinkကိုခေါ်တာ
    fetch(uri)
    // jsonကိုဆွဲထုတ်တာ
    .then(res=> res.json())
    // jsonထဲကdataကိုjs objectထဲထည့်တာ
    .then(req=>{
        // console.log(req);
        // console.log(typeof req.conversion_rates);
        // console.log(req.conversio_rates[crcytwo]);

        const rate = req.conversion_rates[crcytwo];
        // console.log(rate);

        // swapနားက ဥပမာ 1USD မှာ ဘယ်လောက်ရှိတယ်ဆိုတာပြချင်တာ
        // htmlထဲတန်းထည့်
        rateel.innerHTML = `1${crcyone} = ${rate} ${crcytwo}`;

        // amt1နဲ့rateနဲ့ကိုမြှောက်ပြီး 2မှာပြ
        amountwoel.value = (amountoneel.value * rate).toFixed(2);
    });  

}

// Event Listener
currencyoneel.addEventListener('change', calculate);
amountoneel.addEventListener('input', calculate);

currencytwoel.addEventListener('change', calculate);
amountwoel.addEventListener('input', calculate);

// currcencyနှစ်ခုကိုလဲမှာ
swapel.addEventListener('click', () => {
    // console.log('swap');
    const temp = currencyoneel.value;

    currencyoneel.value = currencytwoel.value;
    currencytwoel.value = temp;
    calculate();
});