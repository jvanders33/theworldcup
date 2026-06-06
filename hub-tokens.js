/* ============================================================
   THE WORLD CUP — HUB TOKEN LISTS
   One place to manage every listing across the whole site.
   Paste a VERIFIED contract address (mint). Name, ticker, logo,
   price and market cap auto-fill from on-chain data.
   ALWAYS verify on DexScreener/pump.fun first — a wrong address
   points a Buy button at the wrong token.
   ============================================================ */
window.HUB = {

  /* World Cup / meta themed tokens  — {address:'<mint>'} */
  worldcup: [
    {name:'The World Cup', ticker:'TWC', address:(window.TWC_TOKENS && window.TWC_TOKENS.TWC) || ''},
    {address:'33eum82LaAhtv5YkUq1BdwEviSErH5CnFxqVNLT5pump'},
    {address:'H3pH7frVidjqQTpBpZtDhvuMZu97VkBGPHkngYegpump'},
    {address:'DyMx8bQYFCw8Ng6qxT2zkNs9ijTm5W8wFoFj29v5pump'},
    // {address:'<mint>'},
  ],

  /* Player themed tokens — {address:'<mint>'} */
  players: [
    // {address:'<mint>'},
  ],

  /* Country themed tokens — NATIONCODE:'<mint>' (falls back to tokens.js) */
  country: {
    // BRA:'<mint>', ARG:'<mint>', ENG:'<mint>',
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
