// Diagnostics used only by serve-audit.cjs, exposed as UI for reproducible browser checks.
(() => {
  const stats = { lcpMs: null, cls: 0, maxEventMs: 0, eventSamples: 0, lcpElement: '' };
  let session = { first: 0, last: 0, value: 0 };
  const observe = (type, callback, extra = {}) => {
    if (PerformanceObserver.supportedEntryTypes.includes(type)) new PerformanceObserver(list => callback(list.getEntries())).observe({ type, buffered: true, ...extra });
  };
  observe('largest-contentful-paint', entries => {
    const last = entries.at(-1); stats.lcpMs = Math.round(last.startTime); stats.lcpElement = last.element?.className || last.element?.tagName || '';
  });
  observe('layout-shift', entries => entries.forEach(entry => {
    if (entry.hadRecentInput) return;
    if (entry.startTime - session.last > 1000 || entry.startTime - session.first > 5000) session = { first: entry.startTime, last: entry.startTime, value: 0 };
    session.value += entry.value; session.last = entry.startTime; stats.cls = Math.max(stats.cls, session.value);
  }));
  observe('event', entries => entries.forEach(entry => { if (entry.interactionId) { stats.maxEventMs = Math.max(stats.maxEventMs, entry.duration); stats.eventSamples++; } }), { durationThreshold: 16 });
  document.addEventListener('DOMContentLoaded', () => {
    const panel = document.createElement('details');
    panel.id = 'local-audit';
    panel.style.cssText = 'position:fixed;bottom:12px;left:12px;z-index:9999;max-width:calc(100vw - 24px);padding:12px;color:#fff;background:#1a1a1a;border-radius:8px;font:13px/1.5 monospace;';
    panel.innerHTML = '<summary style="cursor:pointer;min-height:28px">Auditoría local</summary><div><p>Build de producción · medición local sin limitación de red/CPU</p><label>Movimiento <select id="audit-motion" style="color:#111;background:white"><option value="normal">Normal</option><option value="reduced">Forzar CSS de movimiento reducido</option><option value="slow">Revisar a 5 veces la duración</option></select></label><button id="audit-refresh" style="display:block;min-height:44px">Actualizar medición</button><pre id="audit-results" style="white-space:pre-wrap;max-width:420px"></pre><p>maxEventMs es diagnóstico, no INP de campo.</p></div>';
    document.body.append(panel);
    const style = document.createElement('style');
    document.head.append(style);
    let slow = false;
    let frame;
    const slowFrame = () => {
      document.getAnimations().forEach(a => { a.playbackRate = slow ? .2 : 1; });
      if (slow) frame = requestAnimationFrame(slowFrame);
    };
    panel.querySelector('#audit-motion').addEventListener('change', event => {
      slow = event.target.value === 'slow';
      cancelAnimationFrame(frame);
      slowFrame();
      style.textContent = '';
      if (event.target.value === 'reduced') {
        const rules = [...document.styleSheets].flatMap(sheet => { try { return [...sheet.cssRules]; } catch { return []; } });
        style.textContent = rules.filter(rule => rule.conditionText === '(prefers-reduced-motion: reduce)').map(rule => [...rule.cssRules].map(r => r.cssText).join('\n')).join('\n');
      }
    });
    const update = () => {
      panel.querySelector('#audit-results').textContent = JSON.stringify({ ...stats, cls: Number(stats.cls.toFixed(5)), width: innerWidth, clientWidth: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth, resources: performance.getEntriesByType('resource').length }, null, 2);
    };
    panel.querySelector('#audit-refresh').addEventListener('click', update);
    panel.addEventListener('toggle', update);
  });
})();
