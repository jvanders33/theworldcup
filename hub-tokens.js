/* ============================================================
   THE WORLD CUP — HUB TOKEN LISTS
   One place to manage every listing across the whole site.
   Paste a VERIFIED contract address (mint). Name, ticker, logo,
   price and market cap auto-fill from on-chain data.
   ============================================================ */
window.HUB = {

  /* World Cup / meta themed tokens — {address:'<mint>'} (name/ticker auto-fill) */
  worldcup: [
    {name:'The World Cup', ticker:'TWC', address:(window.TWC_TOKENS && window.TWC_TOKENS.TWC) || ''},
    {address:'33eum82LaAhtv5YkUq1BdwEviSErH5CnFxqVNLT5pump'},
    {address:'H3pH7frVidjqQTpBpZtDhvuMZu97VkBGPHkngYegpump'},
    {address:'DyMx8bQYFCw8Ng6qxT2zkNs9ijTm5W8wFoFj29v5pump'},
    {address:'8GxLxKA8tf3h8JUkXFfP4dNyn6D2vvwyGif5wanRpump'},  // $MASCOTS — 2026 mascots; LP burned, mint+freeze revoked
    {address:'3vcjvdljkvuy8aenl8lgksio52tzteg7w8d68rijpump'},  // $FWC26 — FIFA World Cup 2026 Coin (small cap)
    // {address:'<mint>'},
  ],

  /* Player themed tokens — {address:'<mint>'} */
  players: [
    // {address:'<mint>'},
  ],

  /* Country themed tokens — NATIONCODE:'<mint>' (falls back to tokens.js) */
  country: {
    // Group A
    MEX:'4DbaSWS3jYHEmQQP2jGHLz2PMHrmzbWNZynM32YFpump', RSA:'G6jshPGug6B4X9EskPZSoQzMMcPP7sZJKvsq26rwpump', KOR:'DJfxEAEc8JU1Jf4yajYwi4Qma5Jb2qgYmxkoUctEpump', CZE:'6DEPJP4gWLpXTQjEWnXZUc57HY7svWaAN63hTosApump',
    // Group B
    CAN:'Gr6dUXQKQwsfqtedc26GK4qLawCoxT7bk2cyFuwGpump', BIH:'5K1J5pMBaS5LRddJLQ4bFCAcJUQGV1sMqoxWKjZjpump', QAT:'841uQfUMKTQmcQDPDrusRcHcH5SYr8qVJoPnhezHpump', SUI:'2Ra6W2qhsCKTb83JDZ6y5NMuQf23CGJhvLicmQi6pump',
    // Group C
    BRA:'88gKZC3rmTH9CuMVmUXyxAg3ijY7wD8n2AK9WGPBpump', MAR:'twuH9xFoyWfpJUwuGdKfzaVok9sVo87VTXev7pVpump', HAI:'9EfHVmbAUGCiBvB8XGqAoGszj9Dxu456xPXsB8mCpump', SCO:'2rezQLfcLDXimtLXPDFnCKxW3QCKHRDkm6JSySVcpump',
    // Group D
    USA:'3hqrigP7PiomQQ5RtdYE9kagmo2q4r3euae2fEJWpump', PAR:'22TBuCLZLNzWmko5af4mc1AwT39zyh9riWL5x26apump', AUS:'5bp1N2FctJ2MQqGMxP9QrWTh7PgX1mg9y3Pm8tZgpump', TUR:'AJCAd7ixokqPegWtEa133BUyJydERvEWs8bDJFPWpump',
    // Group E
    GER:'Bv3qk2ViNmXvXs8T3VESqJsypkm9NGi3YAisFRmTpump', CUW:'2i5MxfUtB4CfXzczty8HxWojVSjDxGfJc5tHge5Gpump', CIV:'9k7s6G7mwmpFRRE5Yb3hE9PYtrvJkaFp676gXigGpump', ECU:'Ehfbc4bJUBUox7iFEAyqwwqseEp9xwQXdD24jWggpump',
    // Group F
    NED:'iabWvp2SGYhvmfd9huN3smdWGwSq1xafc2fQF1Ypump', JPN:'3myG7jK9ejeofY67E6sK3U4T1RVYuW875nmb1MKZpump', SWE:'9su6LMTBCJa3Fcwhnq4NrRupZnrtwUGpng1Dnt3Jpump', TUN:'F9cvyLcGwvs42ZyHmMvq5qtj1vJFdjvNJgwDdBs7pump',
    // Group G
    BEL:'Ed7QEvbkumr5CPkSegQUy6SfXbvC32Vut5PSSab3pump', EGY:'8B5STCstZ4hGTv54VBTvscPgWZbR9PwY2oZKWYGypump', IRN:'6gU6PMzreEuZjVnjVhWT1V6XHLaQWDi3NyXFedUXpump', NZL:'GDEp82Xj5y3CVo9Wc7DgX37iTbUTqXhAASVfAcYEpump',
    // Group H
    ESP:'D2bSDzYKpFCePrp98dfN4uuKH1SBnYiiWjwmpYBspump', CPV:'7uej4Cu1BW2rhjUbyRBJxSr1fBVztW9Aefum7rqYpump', KSA:'Bdjfur6JPfj8s89rqnk7zj9MmtYFMYKCDM1PLg2wpump', URU:'E3KxuGBsGQ7n4v4M29thLnwuZRdnPHEQXTGLL31zpump',
    // Group I
    FRA:'2gXeM4einZoLMSQ5K7s6rHzCAeksU2hRFouBpqSopump', SEN:'J5EppEJ24KBJCgUFiev8h4tgqLNRGUiykzfL4abgpump', IRQ:'CV6oyXbcTLPqnqKv9BgvhJU5xXEhqiAkSR6V9PeMpump', NOR:'ACGL2YHwKVbeNX1uXweHe6eYyjRiRpvaThWxFgmepump',
    // Group J
    ARG:'8vR5VdBAGAWVjvycijB4yLTRmJ3N8RaUS6m3jgAnpump', ALG:'SJpCpLd5K1RZMNAmum6tqqcvBndMoM9p4cfBAk6pump', AUT:'9QriWeK9xyb6mdPhnHUYgLdcHK4K1Nx2sofpMiipump', JOR:'7oBA7LMBEcNiG1ygvGmyMMcwcyGJKfjkj6EVkbptpump',
    // Group K
    POR:'Se2HT3A2WTqdpAeBy6wwuYMtoqmodGC7eLxrBFUpump', COD:'E4gCAyCBorg8K4x6MU7SbXsKqTJKdGVYSy6QcVNxpump', UZB:'CNgYGabJrqPGmKgaGymNPBRLKe1KDTHZBUj8owN8pump', COL:'FXbMB3vqfwp4UFHGodm7zAggzqMZ88XRhd3kd1u3pump',
    // Group L
    ENG:'DTuthGCM1nMgv1wr6fsHQFoHwzBBCcdpq63gnMFmpump', CRO:'9FKNTn3671wHRK8URYPEYVphJt48ia6GzLNTSarbpump', GHA:'3s63jkytjPVMk1P6Xq5CfdnKwCD6f8HuV2oMPoy9pump', PAN:'9bZNHosiUnv3dQMKqXdcjj1ynSFtwY5FLySWMjmqpump'
  }
};

/* ---- shared helpers (used by every page) ---- */
(function(){
  const SOL='So11111111111111111111111111111111111111112';
  function buy(address){
    if(!address)return;
    if(!window.Jupiter||!window.Jupiter.init){alert('Swap is loading — try again in a second.');return;}
    window.Jupiter.init({displayMode:'modal',formProps:{initialInputMint:SOL,initialOutputMint:address}});
  }
  function fmtP(p){p=Number(p);if(!isFinite(p)||p<=0)return '—';if(p>=1)return '$'+p.toFixed(3);if(p>=0.001)return '$'+p.toFixed(5);return '$'+p.toPrecision(2);}
  function fmtN(n){n=Number(n);if(!isFinite(n)||n<=0)return '—';if(n>=1e6)return '$'+(n/1e6).toFixed(2)+'M';if(n>=1e3)return '$'+(n/1e3).toFixed(1)+'K';return '$'+n.toFixed(0);}
  async function fetchTokens(addresses){
    const out={}; addresses=(addresses||[]).filter(Boolean); if(!addresses.length)return out;
    for(let i=0;i<addresses.length;i+=30){
      try{
        const res=await fetch('https://api.dexscreener.com/latest/dex/tokens/'+addresses.slice(i,i+30).join(','));
        const data=await res.json();
        (data.pairs||[]).forEach(p=>{
          const a=p.baseToken&&p.baseToken.address; if(!a)return;
          const liq=(p.liquidity&&p.liquidity.usd)||0;
          if(!out[a]||liq>out[a]._liq) out[a]={price:p.priceUsd,chg:p.priceChange&&p.priceChange.h24,mc:p.marketCap||p.fdv,name:p.baseToken.name,sym:p.baseToken.symbol,_liq:liq};
        });
      }catch(e){}
    }
    return out;
  }
  function logo(addr){return 'https://dd.dexscreener.com/ds-data/tokens/solana/'+addr+'.png?size=lg';}
  window.HUBLIB={SOL,buy,fmtP,fmtN,fetchTokens,logo};
})();
