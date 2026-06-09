/* THE WORLD CUP — live data layer.
   Pulls the full tournament (schedule + live scores + results + winners) from
   ESPN's free public JSON feed. No key. Falls back to fixtures.js if it fails. */
(function(){
  var URL='https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=20260611-20260719&limit=950';
  function norm(s){return (s||'').toLowerCase().replace(/[^a-z]/g,'');}
  var M=null;
  function maps(){
    var N=window.NATION||{},codes={},names={};
    for(var c in N){codes[c]=c;names[norm(N[c].n)]=c;}
    var nameAlias={southkorea:'KOR',koreareplic:'KOR',republicofkorea:'KOR',cotedivoire:'CIV',ivorycoast:'CIV',
      caboverde:'CPV',capeverde:'CPV',czechrepublic:'CZE',czechia:'CZE',turkey:'TUR',turkiye:'TUR',curacao:'CUW',
      drcongo:'COD',congodr:'COD',democraticrepublicofthecongo:'COD',bosniaherzegovina:'BIH',bosniaandherzegovina:'BIH',
      unitedstates:'USA',saudiarabia:'KSA',newzealand:'NZL'};
    for(var k in nameAlias)names[k]=nameAlias[k];
    return {codes:codes,names:names,abbr:{SAU:'KSA',DRC:'COD',CGO:'COD',NZL:'NZL'}};
  }
  function resolve(ab,nm){ if(!M)M=maps(); ab=(ab||'').toUpperCase();
    if(M.codes[ab])return ab; if(M.abbr[ab])return M.abbr[ab]; return M.names[norm(nm)]||null; }
  function team(comp){var t=comp.team||{};return {code:resolve(t.abbreviation,t.displayName),
    name:t.displayName,abbr:t.abbreviation,logo:t.logo,score:(comp.score!=null?String(comp.score):''),winner:!!comp.winner};}
  function parse(ev){
    var c=ev.competitions&&ev.competitions[0]; if(!c)return null;
    var cs=c.competitors||[]; var h=null,a=null,i;
    for(i=0;i<cs.length;i++){if(cs[i].homeAway==='home')h=cs[i];if(cs[i].homeAway==='away')a=cs[i];}
    if(!h)h=cs[0]; if(!a)a=cs[1]; if(!h||!a)return null;
    var st=(c.status&&c.status.type)||{}, g='';
    if(c.notes&&c.notes[0]&&c.notes[0].headline){var m=c.notes[0].headline.match(/Group\s+([A-L])/i);if(m)g=m[1].toUpperCase();}
    return {date:(ev.date||'').slice(0,10),iso:ev.date,state:st.state||'pre',done:!!st.completed,
      detail:st.shortDetail||'',venue:(c.venue&&c.venue.address&&c.venue.address.city)||(c.venue&&c.venue.fullName)||'',
      g:g,home:team(h),away:team(a)};
  }
  window.WCLIVE={load:function(){
    return fetch(URL,{mode:'cors'}).then(function(r){if(!r.ok)throw new Error('espn '+r.status);return r.json();})
      .then(function(j){return (j.events||[]).map(parse).filter(Boolean);});
  }};
})();
