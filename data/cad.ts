import { IssuanceData } from './types'

export async function getCadData(): Promise<IssuanceData> {

  const round = (number, decimalPlaces) => {
  const factorOfTen = Math.pow(10, decimalPlaces)
  return Math.round(number * factorOfTen) / factorOfTen
  };
  
//   const req = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=EURUSDT", {
//     "headers": {
//       "content-type": "application/json",
//     },
//   });
  
//   const { price } = await req.json();

  const req2 = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=USDTNGN", {
    "headers": {
      "content-type": "application/json",
    },
  });
  
  const data = await req2.json();
  
  return {
    id: 'cad',
    name: 'Canadian Dollars (CAD)',
    category: 'stable',
<!--     rate: round(price * data.price,0), -->
      rate: round(0.79 * data.price,0),

  };
}