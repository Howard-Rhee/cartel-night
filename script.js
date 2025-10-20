// Simple countdown to Nov 29 20:00 KST (update to your year if needed)
(function(){
  const target = new Date(new Date().getFullYear(), 10, 29, 20, 0, 0); // month 10 = Nov
  const el = document.getElementById('countdown');
  function tick(){
    const now = new Date();
    const diff = target - now;
    if(diff <= 0){ el.textContent = '오늘 밤 만나요!'; return; }
    const d = Math.floor(diff/86400000);
    const h = Math.floor(diff%86400000/3600000);
    const m = Math.floor(diff%3600000/60000);
    el.textContent = `D-${d} · ${h}시간 ${m}분 남음`;
    requestAnimationFrame(()=>setTimeout(tick, 1000));
  }
  tick();
})();