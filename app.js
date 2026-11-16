(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const duration = 60; // 60 virtual seconds at one second per tick.
  let elapsed = 0, timer = null, running = false, completed = false;
  const start = $('start'), pause = $('pause'), reset = $('reset');
  function render(){
    const p = Math.min(1,elapsed/duration);
    const alt = Math.max(0,Math.round(15000*Math.pow(1-p,1.65)));
    const speed = p >= 1 ? 0 : Math.max(1.7,45*(1-p)+1.7*p);
    const fuel = Math.max(37,Math.round(82-45*p));
    const comms = p > .68 && p < .83 ? 'DEGRADED' : 'NOMINAL';
    const hazard = p > .80 && p < .92 ? 'ELEVATED' : 'LOW';
    $('altitude').textContent = alt.toLocaleString('en-US');
    $('speed').textContent = speed.toFixed(1);
    $('fuel').textContent = String(fuel);
    $('comms').textContent = comms;
    $('comms').style.color = comms==='NOMINAL' ? '#9ce2c0' : '#ffc37a';
    $('hazard').textContent = hazard;
    $('hazard').style.color = hazard==='LOW' ? '#9ce2c0' : '#ffc37a';
    $('elapsed').textContent = `T+ ${String(Math.floor(elapsed/60)).padStart(2,'0')}:${String(elapsed%60).padStart(2,'0')}`;
    const x = 60+540*p, y = 45+221*(.38*p+.62*p*p);
    $('lander-marker').setAttribute('transform',`translate(${x.toFixed(1)} ${y.toFixed(1)})`);
    let advice='Mission ready. Start the simulation to begin a conceptual descent.';
    if(completed) advice='Simulated touchdown reached. Review mission evidence and limitations; no real landing has occurred.';
    else if(running && comms==='DEGRADED') advice='Relay quality degraded in this scenario. Operator review recommended; maintain human command.';
    else if(running && hazard==='ELEVATED') advice='Illustrative terrain risk elevated. Human operator should evaluate the designated landing region.';
    else if(running && p>.45) advice='Descent underway. Continue monitoring speed, altitude and communications.';
    else if(running) advice='Approach nominal in simulated conditions. Recommendation is advisory only.';
    else if(elapsed>0) advice='Simulation paused. Telemetry is frozen at the last simulated step.';
    $('advisory').textContent=advice;
    $('mission-state').textContent=completed?'SIMULATION COMPLETE':running?'SIMULATION RUNNING':elapsed?'SIMULATION PAUSED':'READY FOR SIMULATION';
    $('state-dot').style.background=completed?'#82e5ed':running?'#9ce2c0':'#ffc37a';
    start.disabled=running||completed; pause.disabled=!running;
    start.textContent=elapsed&&!completed?'▶ RESUME DESCENT':'▶ START DESCENT';
  }
  function stop(){if(timer!==null){clearInterval(timer);timer=null;}running=false;}
  function tick(){elapsed=Math.min(duration,elapsed+1);if(elapsed===duration){stop();completed=true;}render();}
  start.addEventListener('click',()=>{if(running||completed)return;running=true;timer=setInterval(tick,1000);render();});
  pause.addEventListener('click',()=>{stop();render();});
  reset.addEventListener('click',()=>{stop();elapsed=0;completed=false;render();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&running){stop();render();}});
  render();
})();
