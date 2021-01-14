// Set your API key here
const APIKEY = 'ckey_4d5b231f1a584413ae6c3715bcf';

function getData() {
    // Get key HTML elements and reset table content
    // const ul = document.getElementById('metadata');
    const tableRef = document.getElementById('tokenTable').getElementsByTagName('tbody')[0];
    tableRef.innerHTML = "";

    // Covalent API request setup
    const address = document.getElementById('address').value || 'demo.eth';
    const url = new URL(`https://api.covalenthq.com/v1/1/address/${address}/transactions_v2/`);
    url.search = new URLSearchParams({
        key: APIKEY
    })
    console.log("wwww");

    // Use Fetch API to get Covalent data
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log("tryy");
        let txns = data.data.items;
        // // Update wallet metadata
        // ul.innerHTML = 
        //     `<li> Last update: ${data.data.updated_at} </li>` +
        //     `<li> Fiat currency: ${data.data.quote_currency} </li>`;

        txns.forEach(function(txn){
          let num = txn.tx_hash;
          console.log(num);
          let time = txn.block_signed_at;
          console.log(time);
          let quote = parseFloat(txn.value_quote).toFixed(2);
          console.log(quote);
          let gas = parseFloat(txn.gas_quote).toFixed(2);
          console.log(gas);
          let sus = txn.successful;
          let boool = "";
          if (sus){
            boool = "Yes";

          }
          else{
            boool = "No";
          }
          console.log(sus);
          // let signature = "";
          // txn.log_events.forEach(function(log){
          //   let sign = log.decoded.signature;
          //   signature = sign + "," + signature
          // })
          tableRef.insertRow().innerHTML = 
          `<td> ${time} </td>`+
          `<td> ${num} </td>`+
          `<td> ${boool} </td>`+
          `<td> $${quote} </td>`+
           `<td> $${gas} </td>`
          // `<td> ${signature} </td>`

        })

        // return tokens.map(function(token) { // Map through the results and for each run the code below
        // if (token.contract_decimals > 0) {
        //     balance = parseInt(token.balance) / Math.pow(10, token.contract_decimals);
        // } else {
        //     balance = parseInt(token.balance);
        // }
        // tableRef.insertRow().innerHTML = 
        //     `<td><img src=${token.logo_url} style=width:50px;height:50px;></td>` +
        //     `<td> ${token.contract_name} </td>` +
        //     `<td> ${token.contract_ticker_symbol} </td>` +
        //     `<td> ${balance.toFixed(4)} </td>` +
        //     `<td> $${parseFloat(token.quote).toFixed(2)} </td>` +
        //     `<td> ${token.type} </td>`;
        // })
    })
}


