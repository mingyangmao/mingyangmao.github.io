/* Classic academic website renderer. No libraries or build step. */
(() => {
  'use strict';
  const d = window.ACADEMIC_DATA;
  if (!d) return;
  const $ = id => document.getElementById(id);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const attribute = esc;
  const safeUrl = u => /^(https?:\/\/|mailto:|assets\/|index\.html|publications\.html|projects\.html)/.test(u || '') ? u : '#';
  const external = url => /^https?:\/\//.test(url) ? ' target="_blank" rel="noopener noreferrer"' : '';
  const anchor = (url, label, className = '') => `<a href="${attribute(safeUrl(url))}"${external(url)}${className ? ` class="${className}"`:''}>${esc(label)}</a>`;
  function authorsMarked(authors) {
    return esc(authors).replace(/Mingyang Mao/g, '<strong>Mingyang Mao</strong>');
  }
  function renderSidebar() {
    const p = d.profile;
    /* Inline SVG icons (Font Awesome Free paths, CC BY 4.0) */
    const svg = (vb, path) => `<svg viewBox="${vb}" fill="currentColor" aria-hidden="true" focusable="false"><path d="${path}"/></svg>`;
    const ICONS = {
      email: svg('0 0 512 512','M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'),
      scholar: svg('0 0 640 512','M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z'),
      github: svg('0 0 496 512','M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z'),
      lab: '<img src="assets/images/era_logo.png" alt="">',
      linkedin: svg('0 0 448 512','M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3z'),
      cv: svg('0 0 384 512','M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z'),
      location: svg('0 0 384 512','M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z')
    };
    const links = [
      p.email ? {label:'Email', icon:ICONS.email, url:'mailto:'+p.email} : null,
      p.scholar ? {label:'Google Scholar', icon:ICONS.scholar, url:p.scholar} : null,
      p.github ? {label:'GitHub', icon:ICONS.github, url:p.github} : null,
      p.linkedin ? {label:'LinkedIn', icon:ICONS.linkedin, url:p.linkedin} : null,
      p.lab ? {label:'Research Lab', icon:ICONS.lab, url:p.lab} : null,
      p.cv ? {label:'Curriculum Vitae', icon:ICONS.cv, url:p.cv} : null
    ].filter(Boolean);
    $('profile').innerHTML = `
      <img class="portrait" src="${attribute(safeUrl(p.photo))}" alt="${attribute(p.photoAlt || 'Profile photo')}" width="226" height="261">
      <div class="sidebar-identity"><div class="profile-name">${esc(p.name)}</div><div class="profile-role">${esc(p.role)}</div><div class="profile-institution">${esc(p.department)}<br>${esc(p.university)}</div></div>
      <div class="profile-links">${links.map(l => `<a href="${attribute(safeUrl(l.url))}"${external(l.url)}><span class="symbol" aria-hidden="true">${l.icon}</span>${esc(l.label)}</a>`).join('')}</div>
      <div class="sidebar-location"><span class="symbol" aria-hidden="true">${ICONS.location}</span>${esc(p.location)}</div>
      <div class="sidebar-heading">Research keywords</div><div class="sidebar-interests">${p.interests.map(i => `<span>${esc(i)}</span>`).join('')}</div>`;
  }
  function setupMenu() {
    const b = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');
    b?.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      b.setAttribute('aria-expanded', String(isOpen));
    });
    nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      b?.setAttribute('aria-expanded', 'false');
    }));
    document.querySelectorAll('[data-cv-link]').forEach(a => {
      if (d.profile.cv) { a.href = safeUrl(d.profile.cv); } else { a.remove(); }
    });
  }
  function paperMarkup(p) {
    const mainLink = (p.links || [])[0]?.url || '#';
    return `<article class="pub-entry" id="pub-${attribute(p.id)}">
      <a class="pub-thumb" href="${attribute(safeUrl(mainLink))}"${external(mainLink)} aria-label="Open paper: ${attribute(p.title)}"><img src="${attribute(safeUrl(p.image))}" alt="Abstract illustration for ${attribute(p.title)}" loading="lazy"></a>
      <div><h3 class="pub-title">${anchor(mainLink, p.title)}</h3>
      <div class="pub-authors">${authorsMarked(p.authors)}</div>
      <div class="pub-venue">${esc(p.venue)} <span class="pub-note">${esc(p.note)}</span></div>
      ${p.summary ? `<div class="pub-summary">${esc(p.summary)}</div>` : ''}
      <div class="pub-links">${(p.links || []).map(l => anchor(l.url, l.name)).join('')}</div></div></article>`;
  }
  function renderHome() {
    /* Bio paragraphs support [label](https://url) markdown links */
    const bioMarkup = text => esc(text).replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (m, label, url) => `<a href="${attribute(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`);
    $('biography').innerHTML = d.profile.bio.map(p => `<p>${bioMarkup(p)}</p>`).join('');
    $('interest-tags').innerHTML = d.profile.interests.map(i => `<span>${esc(i)}</span>`).join('');
    $('news-list').innerHTML = d.news.map(n => `<div class="news-item"><div class="news-date">${esc(n.date)}</div><div class="news-text">${n.url ? anchor(n.url,n.text) : esc(n.text)}</div></div>`).join('');
    $('research-list').innerHTML = d.research.map((r,i) => `<article class="research-item"><div class="research-index">${String(i+1).padStart(2,'0')}</div><div><h3>${esc(r.title)}</h3><p>${esc(r.details)}</p></div></article>`).join('');
    $('selected-publication-list').innerHTML = d.publications.filter(p => p.selected).map(paperMarkup).join('');
    $('teaching-list').innerHTML = d.teaching.map(t => `<div class="teaching-item"><div class="teaching-title">${esc(t.role)}</div><div class="teaching-meta">${esc(t.institution)} · ${esc(t.year)}</div></div>`).join('');
    $('education-list').innerHTML = d.profile.education.map(e => `<div class="teaching-item"><div class="teaching-title">${esc(e.degree)}</div><div class="teaching-meta">${esc(e.institution)} · ${esc(e.year)}</div></div>`).join('');
    const el = $('contact-email');
    el.innerHTML = d.profile.email ? `Academic email: <a href="mailto:${attribute(d.profile.email)}">${esc(d.profile.email)}</a>` : '';
  }
  function renderPublications() {
    const papers = [...d.publications].sort((a,b) => b.year - a.year);
    const input = $('pub-search'), select = $('pub-topic');
    function refresh() {
      const q = input.value.trim().toLowerCase();
      const topic = select.value;
      const kept = papers.filter(p => (topic === 'all' || topic === p.category) && (`${p.title} ${p.authors} ${p.venue} ${p.summary} ${p.category}`).toLowerCase().includes(q));
      const byYear = Map.groupBy ? Map.groupBy(kept,p => p.year) : kept.reduce((m,p) => m.set(p.year,[...(m.get(p.year)||[]),p]),new Map());
      $('all-publications').innerHTML = [...byYear].map(([year,entries]) => `<section aria-label="Publications from ${esc(year)}"><h2 class="year-heading">${esc(year)}</h2>${entries.map(paperMarkup).join('')}</section>`).join('');
      $('pub-count').textContent = `${kept.length} publication${kept.length !== 1 ? 's' : ''}`;
      $('pub-empty').hidden = kept.length !== 0;
    }
    input.addEventListener('input',refresh);select.addEventListener('change',refresh);
    const searchParams = new URLSearchParams(location.search);
    const initialTopic = searchParams.get('topic');
    const categoryMap = {systems:'Systems',robotics:'Robotics',multimodal:'Multimodal AI'};
    if (categoryMap[initialTopic]) select.value = categoryMap[initialTopic];
    refresh();
  }
  function renderProjects() {
    $('project-list').innerHTML = d.projects.map(p => `<article class="project-item">
    <div class="project-thumb"><img src="${attribute(safeUrl(p.image))}" alt="Abstract illustration for ${attribute(p.title)}" loading="lazy"></div>
    <div><div class="project-status">${esc(p.status)}</div><h2 class="project-title">${esc(p.title)}</h2><p class="project-description">${esc(p.description)}</p>
      <div class="project-tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
      ${p.links.length?`<div class="project-links">${p.links.map(l=>anchor(l.url,l.name)).join('')}</div>`:''}
    </div></article>`).join('');
  }
  renderSidebar();setupMenu();
  if ($('footer-year')) $('footer-year').textContent = new Date().getFullYear();
  const page = document.body.dataset.page;
  if (page === 'home') renderHome();
  if (page === 'publications') renderPublications();
  if (page === 'projects') renderProjects();
})();
