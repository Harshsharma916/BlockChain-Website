import axios from "axios";

export async function AxiosGet(currency_code,value) {
  const response = await axios.get(`https://blockchain.info/tobtc?currency=${currency_code}&value=${value}`);
  if (response) {
    return response;
  }
}


export async function Apicall(url, data) {
  const response = await fetch(url, {
    method: data.method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data?.data ? data?.data : ""), // body data type must match "Content-Type" header
  });

  if (response) {
    return response.json();
  }
}
