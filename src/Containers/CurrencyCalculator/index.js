import { useEffect, useState } from "react";
import style from "./calculator.module.scss";
import { country_list, currency_code } from "./Components/CountryList";
import bgImg from "../../Assets/Images/bgImg.png";
import bitcoinLogo from "../../Assets/Images/bitcoinLogo.png";
import { AxiosGet } from "../../Components/Apicaller";

const CurrencyCalculator = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [inputVal, setinputVal] = useState(0);
  const [flagUrl, setflagUrl] = useState(
    `https://flagcdn.com/48x36/${"US".toLowerCase()}.png`
  );
  const [currencyCode, setcurrencyCode] = useState("USD");
  const [btcVal, setbtcVal] = useState(0);

  function optionOnclick(e) {
    setflagUrl(
      `https://flagcdn.com/48x36/${country_list[
        currency_code.indexOf(e)
      ].toLowerCase()}.png`
    );
    setcurrencyCode(e);
  }

  async function onSubmit() {
    console.log("FORM");

    const response = await AxiosGet(currencyCode, inputVal);
    if (response.status === 200) {
      setbtcVal(response.data);
    }
  }

  return (
    <div className={style.wrapper}>
      <img src={bgImg} className={style.bgImg} />
      <div className={style.card}>
        <header>CURRENCY CONVERTER</header>
        <div className={style.form}>
          <div className={style.drop_list}>
            <div className={style.from}>
              <p>From</p>
              <div
                className={style.select_box}
                onClick={() => setShowOptions((prev) => !prev)}
              >
                <img src={flagUrl} alt="flag" />
                <p>{currencyCode}</p>
                {/* <select>{loadOptions()}</select> */}
                {showOptions && (
                  <div className={style.optionDiv}>
                    {currency_code.map((item, key) => {
                      return (
                        <div onClick={(e) => optionOnclick(e.target.innerHTML)}>
                          {item}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            {/* <div className={style.icon}>
              <FontAwesomeIcon icon={faExchangeAlt} />
            </div> */}
            <div className={style.to}>
              <p>To</p>
              <div className={style.select_box}>
                <img src={bitcoinLogo} className={style.btc} />
                <p>BTC</p>
              </div>
            </div>
          </div>
          <div>
            <p>Enter Amount</p>
            <input
              type={"number"}
              value={inputVal}
              onChange={(e) => setinputVal(e.target.value)}
            />
          </div>
          <div className={style.btcDiv}>
            <p>{btcVal}</p>
            <p>BTC</p>
          </div>
          <button onClick={onSubmit}>Convert</button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCalculator;
