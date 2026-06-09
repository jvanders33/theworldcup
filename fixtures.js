/* THE WORLD CUP — fixtures + nation lookup for the Matchday engine.
   Round 1 of the group stage (June 11–17, 2026). Append later rounds as
   {d:'YYYY-MM-DD', g:'GROUP', h:'HOMECODE', a:'AWAYCODE', v:'Venue'}. */
window.NATION = {
  MEX:{n:'Mexico',iso:'mx'}, RSA:{n:'South Africa',iso:'za'}, KOR:{n:'South Korea',iso:'kr'}, CZE:{n:'Czechia',iso:'cz'},
  CAN:{n:'Canada',iso:'ca'}, BIH:{n:'Bosnia & Herz.',iso:'ba'}, QAT:{n:'Qatar',iso:'qa'}, SUI:{n:'Switzerland',iso:'ch'},
  BRA:{n:'Brazil',iso:'br'}, MAR:{n:'Morocco',iso:'ma'}, HAI:{n:'Haiti',iso:'ht'}, SCO:{n:'Scotland',iso:'gb-sct'},
  USA:{n:'United States',iso:'us'}, PAR:{n:'Paraguay',iso:'py'}, AUS:{n:'Australia',iso:'au'}, TUR:{n:'Türkiye',iso:'tr'},
  GER:{n:'Germany',iso:'de'}, CUW:{n:'Curaçao',iso:'cw'}, CIV:{n:'Ivory Coast',iso:'ci'}, ECU:{n:'Ecuador',iso:'ec'},
  NED:{n:'Netherlands',iso:'nl'}, JPN:{n:'Japan',iso:'jp'}, SWE:{n:'Sweden',iso:'se'}, TUN:{n:'Tunisia',iso:'tn'},
  BEL:{n:'Belgium',iso:'be'}, EGY:{n:'Egypt',iso:'eg'}, IRN:{n:'Iran',iso:'ir'}, NZL:{n:'New Zealand',iso:'nz'},
  ESP:{n:'Spain',iso:'es'}, CPV:{n:'Cape Verde',iso:'cv'}, KSA:{n:'Saudi Arabia',iso:'sa'}, URU:{n:'Uruguay',iso:'uy'},
  FRA:{n:'France',iso:'fr'}, SEN:{n:'Senegal',iso:'sn'}, IRQ:{n:'Iraq',iso:'iq'}, NOR:{n:'Norway',iso:'no'},
  ARG:{n:'Argentina',iso:'ar'}, ALG:{n:'Algeria',iso:'dz'}, AUT:{n:'Austria',iso:'at'}, JOR:{n:'Jordan',iso:'jo'},
  POR:{n:'Portugal',iso:'pt'}, COD:{n:'DR Congo',iso:'cd'}, UZB:{n:'Uzbekistan',iso:'uz'}, COL:{n:'Colombia',iso:'co'},
  ENG:{n:'England',iso:'gb-eng'}, CRO:{n:'Croatia',iso:'hr'}, GHA:{n:'Ghana',iso:'gh'}, PAN:{n:'Panama',iso:'pa'}
};
window.FIXTURES = [
  {d:'2026-06-11', g:'A', h:'MEX', a:'RSA', v:'Mexico City'},
  {d:'2026-06-11', g:'A', h:'KOR', a:'CZE', v:'Guadalajara'},
  {d:'2026-06-12', g:'B', h:'CAN', a:'BIH', v:'Toronto'},
  {d:'2026-06-12', g:'D', h:'USA', a:'PAR', v:'Los Angeles'},
  {d:'2026-06-13', g:'B', h:'QAT', a:'SUI', v:'SF Bay Area'},
  {d:'2026-06-13', g:'C', h:'BRA', a:'MAR', v:'New York NJ'},
  {d:'2026-06-13', g:'C', h:'HAI', a:'SCO', v:'Boston'},
  {d:'2026-06-14', g:'E', h:'GER', a:'CUW', v:'Houston'},
  {d:'2026-06-14', g:'F', h:'NED', a:'JPN', v:'Dallas'},
  {d:'2026-06-14', g:'E', h:'CIV', a:'ECU', v:'Philadelphia'},
  {d:'2026-06-14', g:'F', h:'SWE', a:'TUN', v:'Monterrey'},
  {d:'2026-06-15', g:'H', h:'ESP', a:'CPV', v:'Atlanta'},
  {d:'2026-06-15', g:'G', h:'BEL', a:'EGY', v:'Seattle'},
  {d:'2026-06-15', g:'H', h:'KSA', a:'URU', v:'Miami'},
  {d:'2026-06-15', g:'G', h:'IRN', a:'NZL', v:'Los Angeles'},
  {d:'2026-06-16', g:'I', h:'FRA', a:'SEN', v:'New York NJ'},
  {d:'2026-06-16', g:'I', h:'IRQ', a:'NOR', v:'Boston'},
  {d:'2026-06-16', g:'J', h:'ARG', a:'ALG', v:'Kansas City'},
  {d:'2026-06-16', g:'J', h:'AUT', a:'JOR', v:'SF Bay Area'},
  {d:'2026-06-17', g:'K', h:'POR', a:'COD', v:'Houston'},
  {d:'2026-06-17', g:'L', h:'ENG', a:'CRO', v:'Dallas'},
  {d:'2026-06-17', g:'L', h:'GHA', a:'PAN', v:'Toronto'},
  {d:'2026-06-17', g:'K', h:'UZB', a:'COL', v:'Mexico City'},
  {d:'2026-06-14', g:'D', h:'AUS', a:'TUR', v:'Vancouver'}
];
