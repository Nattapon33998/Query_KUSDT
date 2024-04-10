const axios = require("axios");

async function main() {
  let tier1 = []; // >= 10000 KUSDT
  let tier2 = []; // < 10000 && >= 5000 KUSDT
  let tier3 = []; // < 5000 && > 1000 KUSDT
  let tier1Value = 0;
  let tier2Value = 0;
  let tier3Value = 0;

  let holderList = [];
  // let holders;
  let holdersA = await axios.get(
    "https://www.bkcscan.com/api/v2/tokens/0x7d984C24d2499D840eB3b7016077164e15E5faA6/holders"
  );
  let holdersB = await axios.get(
    "https://www.bkcscan.com/api/v2/tokens/0x7d984C24d2499D840eB3b7016077164e15E5faA6/holders?address_hash=0x4ed82f426f0b726635dfef92dc39e30315baa110&items_count=50&value=1.31179e%2B21"
  );
  // holders = await axios.get(
  //   "https://www.bkcscan.com/api/v2/tokens/0x7d984C24d2499D840eB3b7016077164e15E5faA6/holders",
  //   {
  //     headers: {
  //       address_hash: 0x4ed82f426f0b726635dfef92dc39e30315baa110,
  //       items_count: 50,
  //       value: 1311790000000000000000,
  //     },
  //   }
  // );
  holderList.push(holderA.items);
  console.log(holderA.items);
  console.log(holderList);

  // for (i in holders.data.items) {
  //   const holder = holders.data.items[i];
  //   const value = holder.value / 10 ** 18;
  //   const walletAddress = holder.address.hash;
  //   console.log(`${walletAddress} : ${value}`);
  //   if (value >= 10000) {
  //     tier1.push(walletAddress);
  //     tier1Value += value;
  //   } else if (value < 10000 && value >= 5000) {
  //     tier2.push(walletAddress);
  //     tier2Value += value;
  //   } else if (value < 5000 && value >= 1000) {
  //     tier3.push(walletAddress);
  //     tier3Value += value;
  //   }
  // }
  // console.log("Tier 1 : ", tier1);
  // console.log("Tier 2 : ", tier2);
  // console.log("Tier 3 : ", tier3);
  // console.log("Tier 1 value : ", tier1Value);
  // console.log("Tier 2 value : ", tier2Value);
  // console.log("Tier 3 value : ", tier3Value);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
