/* ─────────────────────────────────────────────
   MHS SCHEDULE — app.js
   ───────────────────────────────────────────── */

'use strict';

// ── SCHEDULE DATA ──────────────────────────────────────────────────────────

const SCHEDULE = {
  "Week A": {
    "Monday": {
      periods: [
        { name:"Period 1", time:"8:00-8:55" },
        { name:"Period 2", time:"9:00-10:00" },
        { name:"Period 3", time:"10:05-11:00" }
      ],
      lunch: {
        "1": { period4:"11:45-12:40", lunch:"11:00-11:40" },
        "2": { period4:["11:05-11:32","12:12-12:40"], lunch:"11:32-12:12" },
        "3": { period4:"11:05-12:00", lunch:"12:00-12:40" }
      },
      period5:"12:45-1:40", period6:"1:45-2:40", anchors:[]
    },
    "Tuesday": {
      periods: [
        { name:"Period 1",   time:"8:00-8:50" },
        { name:"Anchor Time",time:"8:50-9:20" },
        { name:"Period 2",   time:"9:25-10:20" },
        { name:"Period 3",   time:"10:25-11:15" }
      ],
      lunch: {
        "1": { period4:"12:00-12:50", lunch:"11:15-11:55" },
        "2": { period4:["11:20-11:45","12:25-12:50"], lunch:"11:45-12:25" },
        "3": { period4:"11:20-12:10", lunch:"12:10-12:50" }
      },
      period5:"12:55-1:45", period6:"1:50-2:40", anchors:[]
    },
    "Wednesday": {
      periods: [
        { name:"Period 1",   time:"8:00-8:50" },
        { name:"Period 2",   time:"8:55-9:50" },
        { name:"Period 3",   time:"9:55-10:45" },
        { name:"Anchor Time",time:"10:45-11:15" }
      ],
      lunch: {
        "1": { period4:"12:00-12:50", lunch:"11:15-11:55" },
        "2": { period4:["11:20-11:45","12:25-12:50"], lunch:"11:45-12:25" },
        "3": { period4:"11:20-12:10", lunch:"12:10-12:50" }
      },
      period5:"12:55-1:45", period6:"1:50-2:40", anchors:[]
    },
    "Thursday": {
      periods: [
        { name:"Period 1", time:"8:00-8:50" },
        { name:"Period 2", time:"8:55-9:50" },
        { name:"Period 3", time:"9:55-10:45" }
      ],
      lunch: {
        "1": { period4:"11:30-12:20", lunch:"10:45-11:25" },
        "2": { period4:["10:50-11:15","11:55-12:20"], lunch:"11:15-11:55" },
        "3": { period4:"10:50-11:40", lunch:"11:40-12:20" }
      },
      period5:"12:25-1:15", period6:"1:50-2:40", anchors:["1:15-1:45"]
    },
    "Friday": {
      periods: [
        { name:"Period 1", time:"8:00-8:55" },
        { name:"Period 2", time:"9:00-10:00" },
        { name:"Period 3", time:"10:05-11:00" }
      ],
      lunch: {
        "1": { period4:"11:45-12:40", lunch:"11:00-11:40" },
        "2": { period4:["11:05-11:32","12:12-12:40"], lunch:"11:32-12:12" },
        "3": { period4:"11:05-12:00", lunch:"12:00-12:40" }
      },
      period5:"12:45-1:40", period6:"1:45-2:40", anchors:[]
    }
  },
  "Week B": {
    "Monday": {
      periods: [
        { name:"Period 1", time:"8:00-8:55" },
        { name:"Period 2", time:"9:00-10:00" },
        { name:"Period 3", time:"10:05-11:00" }
      ],
      lunch: {
        "1": { period4:"11:45-12:40", lunch:"11:00-11:40" },
        "2": { period4:["11:05-11:32","12:12-12:40"], lunch:"11:32-12:12" },
        "3": { period4:"11:05-12:00", lunch:"12:00-12:40" }
      },
      period5:"12:45-1:40", period6:"1:45-2:40", anchors:[]
    },
    "Tuesday": {
      periods: [
        { name:"Period 1",   time:"8:00-8:50" },
        { name:"Period 2",   time:"8:55-9:50" },
        { name:"Anchor Time",time:"9:50-10:20" },
        { name:"Period 3",   time:"10:25-11:15" }
      ],
      lunch: {
        "1": { period4:"12:00-12:50", lunch:"11:15-11:55" },
        "2": { period4:["11:20-11:45","12:25-12:50"], lunch:"11:45-12:25" },
        "3": { period4:"11:20-12:10", lunch:"12:10-12:50" }
      },
      period5:"12:55-1:45", period6:"1:50-2:40", anchors:[]
    },
    "Wednesday": {
      periods: [
        { name:"Period 1", time:"8:00-8:50" },
        { name:"Period 2", time:"8:55-9:50" },
        { name:"Period 3", time:"9:55-10:45" }
      ],
      lunch: {
        "1": { period4:"11:30-12:20", lunch:"10:45-11:25" },
        "2": { period4:["10:50-11:15","11:55-12:20"], lunch:"11:15-11:55" },
        "3": { period4:"10:50-11:40", lunch:"11:40-12:20" }
      },
      period5:"12:55-1:45", period6:"1:50-2:40",
      anchors:["12:20-12:50"]
    },
    "Thursday": {
      periods: [
        { name:"Period 1", time:"8:00-8:50" },
        { name:"Period 2", time:"8:55-9:50" },
        { name:"Period 3", time:"9:55-10:45" }
      ],
      lunch: {
        "1": { period4:"11:30-12:20", lunch:"10:45-11:25" },
        "2": { period4:["10:50-11:15","11:55-12:20"], lunch:"11:15-11:55" },
        "3": { period4:"10:50-11:40", lunch:"11:40-12:20" }
      },
      period5:"12:25-1:15", period6:"1:20-2:10",
      anchors:["2:10-2:40"]
    },
    "Friday": {
      periods: [
        { name:"Period 1", time:"8:00-8:55" },
        { name:"Period 2", time:"9:00-10:00" },
        { name:"Period 3", time:"10:05-11:00" }
      ],
      lunch: {
        "1": { period4:"11:45-12:40", lunch:"11:00-11:40" },
        "2": { period4:["11:05-11:32","12:12-12:40"], lunch:"11:32-12:12" },
        "3": { period4:"11:05-12:00", lunch:"12:00-12:40" }
      },
      period5:"12:45-1:40", period6:"1:45-2:40", anchors:[]
    }
  }
};

// ── STATE ─────────────────────────────────────────────────────────────────

const S = {
  get lunch()     { return localStorage.getItem('mhs_lunch')    || '3'; },
  set lunch(v)    { localStorage.setItem('mhs_lunch', v); },
  get font()      { return localStorage.getItem('mhs_font')     || 'sans'; },
  set font(v)     { localStorage.setItem('mhs_font', v); },
  get theme()     { return localStorage.getItem('mhs_theme')    || 'dark'; },
  set theme(v)    { localStorage.setItem('mhs_theme', v); },
  get mode()      { return localStorage.getItem('mhs_mode')     || 'standard'; },
  set mode(v)     { localStorage.setItem('mhs_mode', v); },
  get celebrate() { return localStorage.getItem('mhs_celebrate') !== 'off'; },
  set celebrate(v){ localStorage.setItem('mhs_celebrate', v ? 'on' : 'off'); },
  get timefmt()   { return localStorage.getItem('mhs_timefmt')  || '12hr'; },
  set timefmt(v)  { localStorage.setItem('mhs_timefmt', v); },
  get bgfx()      { return localStorage.getItem('mhs_bgfx')     || 'none'; },
  set bgfx(v)     { localStorage.setItem('mhs_bgfx', v); },
  get week()      { return localStorage.getItem('mhs_week')     || 'Week B'; },
  set week(v)     { localStorage.setItem('mhs_week', v); },
  get manualWeek(){ return localStorage.getItem('mhs_manual_week') === 'true'; },
  set manualWeek(v){ localStorage.setItem('mhs_manual_week', v ? 'true' : 'false'); },
  get bookmarks() {
    try { return JSON.parse(localStorage.getItem('mhs_bookmarks')) || defaultBookmarks(); }
    catch { return defaultBookmarks(); }
  },
  set bookmarks(v){ localStorage.setItem('mhs_bookmarks', JSON.stringify(v)); },
  get customPrimary()   { return localStorage.getItem('mhs_c_primary')   || '#ededed'; },
  set customPrimary(v)  { localStorage.setItem('mhs_c_primary', v); },
  get customSecondary() { return localStorage.getItem('mhs_c_secondary') || '#a78bfa'; },
  set customSecondary(v){ localStorage.setItem('mhs_c_secondary', v); },
  get customBg()        { return localStorage.getItem('mhs_c_bg')        || '#0a0a0a'; },
  set customBg(v)       { localStorage.setItem('mhs_c_bg', v); },
  get pushEnabled()     { return localStorage.getItem('mhs_push') === 'on'; },
  set pushEnabled(v)    { localStorage.setItem('mhs_push', v ? 'on' : 'off'); },
};

function defaultBookmarks() {
  return [
    { name:"Gemini AI",   url:"https://gemini.google.com/app" },
    { name:"Schoology",   url:"https://minnetonka.schoology.com" },
    { name:"Gmail",       url:"https://mail.google.com" },
  ];
}

let viewingDate = new Date();
let lastCelebrated = '';
let isChatOpen = false;
let lastMinuteActive = false;
let tickInterval = null;
let notifTimeout = null;
let pushSubscription = null;

// ── UTILS ─────────────────────────────────────────────────────────────────

function parseTime(str) {
  // "8:00-8:55" → {start: mins, end: mins}
  const [s, e] = str.split('-').map(t => {
    let [h, m] = t.trim().split(':').map(Number);
    // afternoon times: 1-7 → 13-19
    if (h >= 1 && h <= 7) h += 12;
    return h * 60 + m;
  });
  return { start: s, end: e };
}

function minsToDisplay(mins) {
  const h24 = Math.floor(mins / 60);
  const m = mins % 60;
  if (S.timefmt === '24hr') {
    return `${String(h24).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
  }
  const ampm = h24 >= 12 ? 'PM' : 'AM';
  const h12 = h24 % 12 || 12;
  return `${h12}:${String(m).padStart(2,'0')} ${ampm}`;
}

function nowMins() {
  const n = new Date();
  return n.getHours() * 60 + n.getMinutes() + n.getSeconds() / 60;
}

function calcWeek(date) {
  const ref = new Date(2025, 8, 1); // Sep 1 2025
  const days = Math.floor((date - ref) / 86400000);
  return Math.floor(days / 7) % 2 === 0 ? 'Week A' : 'Week B';
}

function effectiveWeek() {
  return S.manualWeek ? S.week : calcWeek(new Date());
}

function toast(msg, dur = 2200) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), dur);
}

function isToday() {
  const n = new Date();
  return n.toDateString() === viewingDate.toDateString();
}

// ── BUILD TIMELINE ────────────────────────────────────────────────────────

function buildTimeline(week, dayName, lunchChoice) {
  const day = SCHEDULE[week]?.[dayName];
  if (!day) return null;

  const tl = [...day.periods];
  const ld = day.lunch[lunchChoice];

  if (lunchChoice === '1') {
    tl.push({ name:'4c — Lunch', time: ld.lunch, type:'lunch' });
    tl.push({ name:'Period 4',   time: ld.period4 });
  } else if (lunchChoice === '2') {
    tl.push({ name:'Period 4a',    time: ld.period4[0] });
    tl.push({ name:'4b — Lunch',   time: ld.lunch, type:'lunch' });
    tl.push({ name:'Period 4b',    time: ld.period4[1] });
  } else {
    tl.push({ name:'Period 4',   time: ld.period4 });
    tl.push({ name:'4a — Lunch', time: ld.lunch, type:'lunch' });
  }

  // Week B Wednesday special
  if (week === 'Week B' && dayName === 'Wednesday') {
    tl.push({ name:'Anchor Time', time:'12:20-12:50', type:'anchor' });
    tl.push({ name:'Period 5',    time:'12:55-1:45' });
    tl.push({ name:'Period 6',    time:'1:50-2:40' });
  } else {
    tl.push({ name:'Period 5', time: day.period5 });

    if (day.anchors && day.anchors.length > 0) {
      if (week === 'Week A' && dayName === 'Thursday') {
        tl.push({ name:'Anchor Time', time: day.anchors[0], type:'anchor' });
        tl.push({ name:'Period 6',    time: day.period6 });
      } else if (week === 'Week B' && dayName === 'Thursday') {
        tl.push({ name:'Period 6',    time: day.period6 });
        tl.push({ name:'Anchor Time', time: day.anchors[0], type:'anchor' });
      } else {
        tl.push({ name:'Anchor Time', time: day.anchors[0], type:'anchor' });
        tl.push({ name:'Period 6',    time: day.period6 });
      }
    } else {
      tl.push({ name:'Period 6', time: day.period6 });
    }
  }

  return tl.map(item => ({ ...item, ...parseTime(item.time) }));
}

// ── RENDER ────────────────────────────────────────────────────────────────

function render() {
  const week    = effectiveWeek();
  const dayName = viewingDate.toLocaleString('en-US', { weekday:'long' });
  const today   = isToday();
  const cur     = today ? nowMins() : -1;

  // Update week badge
  const badge = document.getElementById('week-badge');
  if (badge) {
    badge.textContent = week;
    badge.className = 'week-badge' + (S.manualWeek ? ' manual' : '');
    badge.querySelector('.week-badge-dot')?.remove();
    const dot = document.createElement('span');
    dot.className = 'week-badge-dot';
    badge.prepend(dot);
  }

  // Timer visibility
  const timerCard = document.getElementById('timer-card');
  if (timerCard) timerCard.classList.toggle('hidden', !today);

  // Viewing indicator
  const vi = document.getElementById('viewing-indicator');
  if (vi) vi.style.display = today ? 'none' : 'block';

  const daySchedule = SCHEDULE[week]?.[dayName];

  // Weekend / no schedule
  const noSchool = document.getElementById('no-school');
  const schedCard = document.getElementById('schedule-card');
  if (!daySchedule) {
    if (noSchool) noSchool.style.display = 'block';
    if (schedCard) schedCard.style.display = 'none';
    updateTimerCard(null, null, cur);
    return;
  }
  if (noSchool) noSchool.style.display = 'none';
  if (schedCard) schedCard.style.display = '';

  const tl = buildTimeline(week, dayName, S.lunch);
  if (!tl) return;

  // Find active period
  let active = null;
  if (today) {
    for (let i = 0; i < tl.length; i++) {
      const ev = tl[i];
      if (cur >= ev.start && cur < ev.end) { active = ev; break; }
      // Passing
      if (i < tl.length - 1 && cur >= ev.end && cur < tl[i+1].start) {
        active = { name:'Passing', start: ev.end, end: tl[i+1].start, type:'passing' };
        break;
      }
    }

    // Celebration check
    tl.forEach(ev => {
      const id = ev.name + ev.end;
      if (cur >= ev.end && cur < ev.end + 0.04 && lastCelebrated !== id) {
        lastCelebrated = id;
        if (S.celebrate) celebrate();
      }
    });
  }

  updateTimerCard(tl, active, cur);
  renderScheduleRows(tl, active);
}

function renderScheduleRows(tl, active) {
  const tbody = document.getElementById('schedule-rows');
  if (!tbody) return;

  const html = tl.map(ev => {
    const isNow = active && active.name === ev.name && active.start === ev.start;
    const isLunch  = ev.type === 'lunch';
    const isAnchor = ev.type === 'anchor' || ev.name.includes('Anchor');
    const dotClass = isNow ? 'active-dot' : isLunch ? 'lunch-dot' : isAnchor ? 'anchor-dot' : '';
    const nameClass = isLunch ? 'is-lunch' : isAnchor ? 'is-anchor' : '';

    return `<div class="schedule-row${isNow ? ' active' : ''}">
      <div class="row-left">
        <div class="row-dot ${dotClass}"></div>
        <span class="row-period ${nameClass}">${ev.name}${isNow ? '<span class="row-badge now">NOW</span>' : ''}</span>
      </div>
      <span class="row-time">${minsToDisplay(ev.start)} – ${minsToDisplay(ev.end)}</span>
    </div>`;
  }).join('');

  if (tbody.innerHTML !== html) tbody.innerHTML = html;
}

function updateTimerCard(tl, active, cur) {
  const valEl    = document.getElementById('timer-value');
  const periodEl = document.getElementById('timer-period');
  const fillEl   = document.getElementById('progress-fill');
  const endEl    = document.getElementById('timer-end-time');

  if (!valEl) return;

  if (!active) {
    const after = tl && tl.length > 0 && cur > tl[tl.length-1].end;
    valEl.textContent   = '—:——';
    periodEl.textContent = after ? 'End of day' : 'Before school';
    fillEl.style.width  = '0%';
    endEl.textContent   = '';
    valEl.classList.remove('urgent');
    fillEl.classList.remove('urgent');
    lastMinuteActive = false;
    return;
  }

  const remSecs = Math.max(0, (active.end - cur) * 60);
  const totalSecs = (active.end - active.start) * 60;
  const elapsed = totalSecs - remSecs;
  const pct = Math.min(100, (elapsed / totalSecs) * 100);

  const mins = Math.floor(remSecs / 60);
  const secs = Math.floor(remSecs % 60);
  const urgent = remSecs <= 60;

  valEl.textContent    = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
  periodEl.textContent = active.name;
  fillEl.style.width   = pct + '%';
  endEl.textContent    = `ends ${minsToDisplay(active.end)}`;

  valEl.classList.toggle('urgent', urgent);
  fillEl.classList.toggle('urgent', urgent);

  // Pulse effect on entering last minute
  if (urgent && !lastMinuteActive) {
    lastMinuteActive = true;
    scheduleNotif(active);
  } else if (!urgent) {
    lastMinuteActive = false;
  }
}

// ── DATE / TIME DISPLAY ───────────────────────────────────────────────────

function updateDateTime() {
  const now = new Date();
  const today = isToday();
  const dayName = viewingDate.toLocaleString('en-US', { weekday:'long' });
  const monthDay = viewingDate.toLocaleString('en-US', { month:'long', day:'numeric', year:'numeric' });

  document.getElementById('nav-day').textContent = today ? now.toLocaleString('en-US', { weekday:'long' }) : dayName;
  document.getElementById('nav-date').textContent = today
    ? now.toLocaleString('en-US', { month:'long', day:'numeric', year:'numeric' })
    : monthDay;

  if (today) {
    const h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
    const pad = n => String(n).padStart(2,'0');
    if (S.timefmt === '24hr') {
      document.getElementById('nav-time').textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
    } else {
      const ampm = h >= 12 ? 'PM' : 'AM';
      const h12 = h % 12 || 12;
      document.getElementById('nav-time').textContent = `${h12}:${pad(m)}:${pad(s)} ${ampm}`;
    }
  } else {
    document.getElementById('nav-time').textContent = 'viewing past/future';
  }
}

// ── SETTINGS ──────────────────────────────────────────────────────────────

function applyAll() {
  const body = document.body;

  // Remove old classes
  body.className = body.className
    .replace(/\btheme-\S+/g, '')
    .replace(/\bfont-\S+/g, '')
    .replace(/\bmode-\S+/g, '')
    .trim();

  body.classList.add(`theme-${S.theme}`, `font-${S.font}`, `mode-${S.mode}`);

  if (S.theme === 'custom') {
    document.documentElement.style.setProperty('--text', S.customPrimary);
    document.documentElement.style.setProperty('--accent', S.customPrimary);
    document.documentElement.style.setProperty('--bg', S.customBg);
  } else {
    document.documentElement.style.removeProperty('--text');
    document.documentElement.style.removeProperty('--accent');
    document.documentElement.style.removeProperty('--bg');
  }

  // Font
  const fontMap = {
    sans:  "'DM Sans', sans-serif",
    mono:  "'Space Mono', monospace",
    serif: "Georgia, serif",
    system:"system-ui, sans-serif",
  };
  document.documentElement.style.setProperty('--sans', fontMap[S.font] || fontMap.sans);

  highlightPills();
}

function highlightPills() {
  [
    ['pill-theme', S.theme],
    ['pill-font',  S.font],
    ['pill-mode',  S.mode],
    ['pill-timefmt', S.timefmt],
    ['pill-bgfx',  S.bgfx],
    ['pill-celebrate', S.celebrate ? 'on' : 'off'],
  ].forEach(([group, val]) => {
    document.querySelectorAll(`[data-group="${group}"]`).forEach(p => {
      p.classList.toggle('active', p.dataset.val === val);
    });
  });
}

function setSetting(key, val) {
  S[key] = val;
  applyAll();
  render();
}

// ── BOOKMARKS ─────────────────────────────────────────────────────────────

function renderBookmarks() {
  const list = document.getElementById('bookmark-list');
  if (!list) return;
  const bms = S.bookmarks;
  list.innerHTML = bms.length === 0
    ? '<p style="color:var(--muted);font-size:12px;padding:.25rem 0">No bookmarks yet.</p>'
    : bms.map((b, i) => `
      <div class="bookmark-item">
        <a href="${b.url}" target="_blank" rel="noopener" class="bookmark-link">
          <div>
            <div class="bookmark-name">${b.name}</div>
            <div class="bookmark-url">${b.url}</div>
          </div>
        </a>
        <button class="bookmark-delete" onclick="deleteBookmark(${i})" aria-label="Delete">✕</button>
      </div>`).join('');
}

function addBookmark() {
  const name = document.getElementById('bm-name').value.trim();
  let   url  = document.getElementById('bm-url').value.trim();
  if (!name || !url) return;
  if (!url.startsWith('http')) url = 'https://' + url;
  const bms = S.bookmarks;
  bms.push({ name, url });
  S.bookmarks = bms;
  renderBookmarks();
  document.getElementById('bm-name').value = '';
  document.getElementById('bm-url').value  = '';
  toast('Bookmark added');
}

function deleteBookmark(i) {
  const bms = S.bookmarks;
  bms.splice(i, 1);
  S.bookmarks = bms;
  renderBookmarks();
}

// ── WEEK TOGGLE ───────────────────────────────────────────────────────────

function toggleWeek() {
  S.week = S.week === 'Week A' ? 'Week B' : 'Week A';
  S.manualWeek = true;
  toast(`Switched to ${S.week}`);
  render();
}

function resetWeek() {
  S.manualWeek = false;
  const auto = calcWeek(new Date());
  S.week = auto;
  toast(`Auto: ${auto}`);
  render();
}

// ── DATE NAV ──────────────────────────────────────────────────────────────

function changeDate(days) {
  viewingDate = new Date(viewingDate);
  viewingDate.setDate(viewingDate.getDate() + days);
  render();
  updateDateTime();
}

function goToToday() {
  viewingDate = new Date();
  S.manualWeek = false;
  S.week = calcWeek(new Date());
  render();
  updateDateTime();
}

// ── CELEBRATION ───────────────────────────────────────────────────────────

function celebrate() {
  toast('🎉 Class over!', 5000);
  if (typeof confetti === 'function') {
    confetti({ particleCount:120, spread:70, origin:{ y:.6 },
      colors:['#ededed','#4ade80','#60a5fa','#a78bfa'] });
  }
}

// ── COLLAPSE TOGGLES ──────────────────────────────────────────────────────

function toggleCollapse(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const wasOpen = el.classList.contains('open');
  // Close all
  document.querySelectorAll('.collapse.open').forEach(c => {
    if (c !== el) c.classList.remove('open');
  });
  el.classList.toggle('open', !wasOpen);
}

// ── RESOURCE DROPDOWNS ────────────────────────────────────────────────────

function toggleResourceDropdown(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const wasOpen = el.classList.contains('open');
  document.querySelectorAll('.resource-dropdown.open').forEach(d => d.classList.remove('open'));
  if (!wasOpen) el.classList.add('open');
}

// ── AI CHAT ───────────────────────────────────────────────────────────────

function toggleChat() {
  isChatOpen = !isChatOpen;
  const btn  = document.getElementById('ai-chat-btn');
  const win  = document.getElementById('chat-window');
  win.classList.toggle('open', isChatOpen);
  btn.classList.toggle('open-chat', isChatOpen);
  btn.setAttribute('aria-label', isChatOpen ? 'Close chat' : 'Open AI chat');
  btn.innerHTML = isChatOpen
    ? `<svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>`
    : `<svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>`;
}

function chatLoaded() {
  const loader = document.getElementById('chat-loader');
  if (loader) { loader.style.opacity = '0'; setTimeout(() => loader.remove(), 300); }
}

// ── PUSH NOTIFICATIONS ────────────────────────────────────────────────────

async function requestPushPermission(enable) {
  if (!('Notification' in window) || !('serviceWorker' in navigator)) {
    toast('Push not supported on this device');
    return;
  }

  if (enable) {
    const perm = await Notification.requestPermission();
    if (perm === 'granted') {
      S.pushEnabled = true;
      toast('🔔 Notifications enabled');
      updateNotifToggle();
    } else {
      S.pushEnabled = false;
      toast('Permission denied');
      updateNotifToggle();
    }
  } else {
    S.pushEnabled = false;
    toast('Notifications disabled');
    updateNotifToggle();
  }
}

function updateNotifToggle() {
  const input = document.getElementById('notif-toggle-input');
  if (input) input.checked = S.pushEnabled;
}

function scheduleNotif(active) {
  if (!S.pushEnabled) return;
  if (!('Notification' in window)) return;
  if (Notification.permission !== 'granted') return;

  clearTimeout(notifTimeout);
  notifTimeout = setTimeout(() => {
    new Notification('MHS Schedule', {
      body: `${active.name} ends in 1 minute`,
      icon: '/icon.png',
      badge: '/icon.png',
      tag: 'period-end',
    });
  }, 100);
}

// Manual test notification
function sendTestNotif() {
  if (Notification.permission !== 'granted') {
    toast('Enable notifications first');
    return;
  }
  new Notification('MHS Schedule', {
    body: 'Push notifications are working! 🎉',
    icon: '/icon.png',
    tag: 'test',
  });
}

// ── HOME SCREEN PROMPT ────────────────────────────────────────────────────

function showHomePromptIfNeeded() {
  const dismissed = localStorage.getItem('mhs_home_dismissed');
  if (dismissed === 'perm') return;
  if (dismissed === 'temp') {
    const d = new Date(localStorage.getItem('mhs_home_dismiss_date') || 0);
    if (Date.now() - d.getTime() < 7 * 86400000) return;
  }
  // Only show if not already in standalone
  if (window.matchMedia('(display-mode: standalone)').matches) return;

  setTimeout(() => {
    document.getElementById('home-prompt')?.classList.add('show');
  }, 2500);
}

function dismissHome(permanent) {
  document.getElementById('home-prompt')?.classList.remove('show');
  localStorage.setItem('mhs_home_dismissed', permanent ? 'perm' : 'temp');
  if (!permanent) localStorage.setItem('mhs_home_dismiss_date', new Date().toISOString());
}

// ── CUSTOM THEME ──────────────────────────────────────────────────────────

function saveCustomTheme() {
  S.customPrimary   = document.getElementById('cp-primary')?.value || '#ededed';
  S.customSecondary = document.getElementById('cp-secondary')?.value || '#a78bfa';
  S.customBg        = document.getElementById('cp-bg')?.value || '#0a0a0a';
  S.theme = 'custom';
  applyAll();
  toast('Custom theme saved');
  document.getElementById('theme-builder')?.style && (document.getElementById('theme-builder').style.display = 'none');
}

// ── VISIT COUNTER / IP ────────────────────────────────────────────────────

function initVisits() {
  const v = parseInt(localStorage.getItem('mhs_visits') || '0') + 1;
  localStorage.setItem('mhs_visits', v);
  const el = document.getElementById('visit-count');
  if (el) el.textContent = v.toLocaleString();
}

async function fetchIP() {
  try {
    const r = await fetch('https://api.ipify.org?format=json');
    const d = await r.json();
    const el = document.getElementById('ip-addr');
    if (el) el.textContent = d.ip;
  } catch { /* silent */ }
}

// ── CREATOR BAR ───────────────────────────────────────────────────────────

function initCreatorBar() {
  const bar = document.querySelector('.creator-bar');
  if (!bar) return;
  let t;
  window.addEventListener('scroll', () => {
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
    bar.classList.toggle('visible', atBottom);
    if (atBottom) { clearTimeout(t); t = setTimeout(() => bar.classList.remove('visible'), 4000); }
  }, { passive: true });
}

// ── AI CHAT BUTTON VISIBILITY ─────────────────────────────────────────────

function checkChatBtnVisibility() {
  const btn = document.getElementById('ai-chat-btn');
  if (!btn) return;
  const show = window.innerWidth >= 600 && window.innerHeight >= 500;
  btn.classList.toggle('visible', show);
}

// ── EMAILJS VISITOR NOTIFY ────────────────────────────────────────────────

async function notifyVisitor() {
  const last = localStorage.getItem('mhs_visitor_notif');
  if (last && Date.now() - Number(last) < 86400000) return;
  try {
    if (typeof emailjs === 'undefined') return;
    const ip = document.getElementById('ip-addr')?.textContent || 'unknown';
    await emailjs.send('service_17usvk3', 'template_d7z6mac', {
      visit_time:  new Date().toLocaleString(),
      visitor_ip:  ip,
      page:        location.href,
      user_agent:  navigator.userAgent,
    });
    localStorage.setItem('mhs_visitor_notif', Date.now().toString());
  } catch { /* silent */ }
}

// ── SERVICE WORKER ────────────────────────────────────────────────────────

async function registerSW() {
  if (!('serviceWorker' in navigator)) return;
  try {
    const reg = await navigator.serviceWorker.register('/sw.js');
    console.log('SW registered:', reg.scope);
  } catch (e) {
    console.log('SW registration failed:', e);
  }
}

// ── INIT ──────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // Loading screen
  document.fonts.ready.then(() => {
    setTimeout(() => {
      const ls = document.getElementById('loading-screen');
      if (ls) {
        ls.classList.add('fade-out');
        setTimeout(() => ls.remove(), 450);
      }
    }, 900);
  });

  // Apply saved settings
  applyAll();

  // Lunch radio init
  const savedLunch = S.lunch;
  const radio = document.querySelector(`input[name="lunch"][value="${savedLunch}"]`);
  if (radio) radio.checked = true;

  document.querySelectorAll('input[name="lunch"]').forEach(r => {
    r.addEventListener('change', e => { S.lunch = e.target.value; render(); });
  });

  // Initial render + tick
  render();
  updateDateTime();

  tickInterval = setInterval(() => {
    render();
    updateDateTime();
  }, 1000);

  // Bookmarks
  renderBookmarks();

  // Visits + IP
  initVisits();
  fetchIP().then(() => setTimeout(notifyVisitor, 1500));

  // Creator bar scroll
  initCreatorBar();

  // Chat button visibility
  checkChatBtnVisibility();
  window.addEventListener('resize', checkChatBtnVisibility, { passive: true });

  // Home screen prompt
  showHomePromptIfNeeded();

  // Notif toggle sync
  updateNotifToggle();

  // Register service worker
  registerSW();

  // Close dropdowns on outside click
  document.addEventListener('click', e => {
    // Resource dropdowns
    if (!e.target.closest('.resource-btn') && !e.target.closest('.resource-dropdown')) {
      document.querySelectorAll('.resource-dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });

  // Custom theme color sync
  ['cp-primary','cp-secondary','cp-bg'].forEach(id => {
    const el = document.getElementById(id);
    const textEl = document.getElementById(id + '-text');
    if (el && textEl) {
      el.addEventListener('input', () => { textEl.value = el.value; });
      textEl.addEventListener('input', () => {
        if (/^#[0-9A-Fa-f]{6}$/.test(textEl.value)) el.value = textEl.value;
      });
    }
  });

  // Auto-hide chat iframe loader after 6s
  setTimeout(() => {
    const loader = document.getElementById('chat-loader');
    if (loader) chatLoaded();
  }, 6000);
});

// Expose globally for HTML onclick handlers
window.toggleCollapse      = toggleCollapse;
window.toggleResourceDropdown = toggleResourceDropdown;
window.toggleChat          = toggleChat;
window.chatLoaded          = chatLoaded;
window.changeDate          = changeDate;
window.goToToday           = goToToday;
window.toggleWeek          = toggleWeek;
window.resetWeek           = resetWeek;
window.addBookmark         = addBookmark;
window.deleteBookmark      = deleteBookmark;
window.setSetting          = setSetting;
window.saveCustomTheme     = saveCustomTheme;
window.dismissHome         = dismissHome;
window.requestPushPermission = requestPushPermission;
window.sendTestNotif       = sendTestNotif;
window.S                   = S;
