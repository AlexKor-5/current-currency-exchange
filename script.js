let init = () => {
  let taker = document.getElementById(`taker`);
  (function main() {
    let url = ` https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`;
    let request = new XMLHttpRequest();
    request.open(`GET`, url, true);
    request.send();

    request.onload = () => {
      if (request.status == 200 && request.readyState == 4) {
        console.log(JSON.parse(request.response));
        let money = JSON.parse(request.response);
        console.log(money[0].ccy);
        console.log(money.length);
        let result = ``;
        money.forEach((element, index) => {
          result += `<div><b>Валюта:</b>${element.ccy}&nbsp
          <b>Поточна валюта:</b>${element.base_ccy}&nbsp
          <b>Покупка:</b>${element.buy}&nbsp
          <b>Продаж:</b>${element.sale}&nbsp
          </div>`;
        });
        taker.innerHTML = result;
      }
    }
    request.onerror = () => {
      console.log(`mistake!`);
    }
    request.ontimeout = () => {
      taker.innerHTML = `Час запросу вичерпався!`;
    }
  })();
};
window.addEventListener(`load`, init, false);