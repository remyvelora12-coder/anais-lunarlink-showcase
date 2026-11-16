/* ANAIS LunarLink: demonstrative, deterministic site scoring; NOT flight software. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.LunarSiteEngine=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const VERSION='0.3.0';
  const FACTORS={slope:{weight:0.35,ideal:0,max:15,units:'degrees'},roughness:{weight:0.30,ideal:0,max:100,units:'index'},illumination:{weight:0.20,ideal:100,max:100,units:'percent'},comms:{weight:0.15,ideal:100,max:100,units:'percent'}};
  function clamp(x,lo,hi){return Math.max(lo,Math.min(hi,x));}
  function scoreSite(site){
    for(const k of Object.keys(FACTORS))if(typeof site[k]!=='number'||!Number.isFinite(site[k]))throw new Error('Invalid numeric input for '+k);
    if(site.slope<0||site.slope>30||site.roughness<0||site.roughness>100||site.illumination<0||site.illumination>100||site.comms<0||site.comms>100)throw new Error('Input outside demonstration range');
    const components={slope:clamp(1-site.slope/15,0,1),roughness:clamp(1-site.roughness/100,0,1),illumination:site.illumination/100,comms:site.comms/100};
    const raw=Object.keys(FACTORS).reduce((sum,k)=>sum+components[k]*FACTORS[k].weight,0);
    const score=Math.round(raw*1000)/10;
    const flags=[];
    if(site.slope>10)flags.push('Steep slope in this illustrative scenario');
    if(site.roughness>65)flags.push('Elevated illustrative roughness');
    if(site.illumination<30)flags.push('Low illumination');
    if(site.comms<40)flags.push('Low estimated communications coverage');
    const grade=flags.length?'REVIEW':score>=80?'FAVORABLE':score>=60?'MARGINAL':'REVIEW';
    return {name:site.name||'Unnamed candidate',score,grade,flags,components,inputs:{slope:site.slope,roughness:site.roughness,illumination:site.illumination,comms:site.comms}};
  }
  function rankSites(sites){return sites.map(scoreSite).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));}
  return {VERSION,FACTORS,scoreSite,rankSites};
});
