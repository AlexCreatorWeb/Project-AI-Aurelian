/* ============================================================
   AURELIAN PERFORMANCE — interactions
   Vanilla JS, no dependencies
   ============================================================ */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initReveal();
  initCounters();
  initBars();
  initSchedule();
  initNavSpy();
  initForm();
  initYear();
});

/* ---------- Header: background on scroll ---------- */
function initHeader() {
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Mobile menu ---------- */
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobile-menu');

  const close = () => {
    burger.classList.remove('open');
    menu.classList.remove('open');
    document.body.classList.remove('no-scroll');
    burger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
  };

  burger.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    burger.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    document.body.classList.toggle('no-scroll', open);
    burger.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
  });

  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px' });

  els.forEach(el => io.observe(el));
}

/* ---------- Animated counters ---------- */
function initCounters() {
  const nums = document.querySelectorAll('.stat__num[data-target]');
  const ease = t => 1 - Math.pow(1 - t, 3);

  const animate = el => {
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    let start = null;

    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      el.textContent = Math.round(ease(p) * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)) { nums.forEach(animate); return; }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.4 });

  nums.forEach(n => io.observe(n));
}

/* ---------- Progress bars ---------- */
function initBars() {
  const bars = document.querySelectorAll('.bar__fill[data-value]');

  const show = bar => {
    bar.style.width = bar.dataset.value + '%';
    const valueEl = bar.closest('.bar-row')?.querySelector('[data-bar-value]');
    if (!valueEl) return;
    const v = +bar.dataset.value;
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / 1400, 1);
      valueEl.textContent = Math.round(v * (1 - Math.pow(1 - p, 3))) + '%';
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) { bars.forEach(show); return; }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.5 });

  bars.forEach(b => io.observe(b));
}

/* ---------- Schedule tabs ---------- */
const SCHEDULE = [
  { day: 'Пн', time: '07:00', title: 'Силовая работа', coach: 'Александр Вольный', spots: 2 },
  { day: 'Пн', time: '12:00', title: 'Мобильность', coach: 'Мария Стрельцова', spots: 5 },
  { day: 'Пн', time: '19:30', title: 'Бокс · техника', coach: 'Дмитрий Кейн', spots: 0 },
  { day: 'Вт', time: '08:00', title: 'Кондиционирование', coach: 'Александр Вольный', spots: 3 },
  { day: 'Вт', time: '18:00', title: 'MMA · основы', coach: 'Дмитрий Кейн', spots: 1 },
  { day: 'Ср', time: '07:00', title: 'Силовая работа', coach: 'Александр Вольный', spots: 4 },
  { day: 'Ср', time: '13:00', title: 'ОФП · корпус', coach: 'Мария Стрельцова', spots: 6 },
  { day: 'Ср', time: '20:00', title: 'Спарринг-вечер', coach: 'Дмитрий Кейн', spots: 0 },
  { day: 'Чт', time: '09:00', title: 'Восстановление', coach: 'Елена Форс', spots: 4 },
  { day: 'Чт', time: '19:00', title: 'Кондиционирование', coach: 'Александр Вольный', spots: 2 },
  { day: 'Пт', time: '07:00', title: 'Силовая работа', coach: 'Александр Вольный', spots: 5 },
  { day: 'Пт', time: '19:30', title: 'Бокс · техника', coach: 'Дмитрий Кейн', spots: 3 },
  { day: 'Сб', time: '11:00', title: 'Групповая диагональ', coach: 'Мария Стрельцова', spots: 6 },
  { day: 'Сб', time: '16:00', title: 'Открытый ринг', coach: 'Дмитрий Кейн', spots: 0 },
  { day: 'Вс', time: '11:00', title: 'Мобильность и баня', coach: 'Елена Форс', spots: 4 },
];

const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function initSchedule() {
  const tabsBox = document.getElementById('day-tabs');
  const tableBox = document.getElementById('schedule-table');
  if (!tabsBox || !tableBox) return;

  // Текущий день недели (Пн=0 … Вс=6), по умолчанию — он
  const today = (new Date().getDay() + 6) % 7;

  DAYS.forEach((day, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab' + (i === today ? ' active' : '');
    btn.textContent = day.toUpperCase();
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', String(i === today));
    btn.addEventListener('click', () => {
      tabsBox.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      render(day);
    });
    tabsBox.appendChild(btn);
  });

  function render(day) {
    const rows = SCHEDULE.filter(s => s.day === day);
    if (!rows.length) {
      tableBox.innerHTML = '<p class="schedule__empty">В этот день сессий нет — зал в личном доступе членов клуба.</p>';
      return;
    }
    tableBox.innerHTML = rows.map(r => `
      <div class="schedule__row">
        <span class="schedule__time">${r.time}</span>
        <div>
          <div class="schedule__title">${r.title}</div>
          <div class="schedule__coach">${r.coach}</div>
        </div>
        <span class="chip">${r.day} · ${r.time}</span>
        ${r.spots > 0
          ? `<span class="schedule__spots">Осталось мест: ${r.spots}</span>`
          : '<span class="schedule__spots full">Fully booked</span>'}
      </div>`).join('');
  }

  render(DAYS[today]);
}

/* ---------- Nav spy: подсветка активного раздела ---------- */
function initNavSpy() {
  const links = [...document.querySelectorAll('.nav__link')];
  const sections = links
    .map(l => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);

  if (!('IntersectionObserver' in window) || !sections.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(l =>
        l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id)
      );
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => io.observe(s));
}

/* ---------- Booking form: валидация и «отправка» ---------- */
function initForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  const rules = {
    name:  v => v.trim().length >= 2 || 'Укажите имя (минимум 2 символа)',
    phone: v => /^\+?[\d\s()-]{7,18}$/.test(v.trim()) || 'Укажите корректный телефон',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Укажите корректный e-mail',
  };

  const setError = (input, message) => {
    const field = input.closest('.field');
    field.classList.toggle('invalid', Boolean(message));
    field.querySelector('.field__error').textContent = message || '';
  };

  const validateField = input => {
    const rule = rules[input.name];
    if (!rule) return true;
    const result = rule(input.value);
    const ok = result === true;
    setError(input, ok ? '' : result);
    return ok;
  };

  form.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.closest('.field').classList.contains('invalid')) validateField(input);
    });
    if (input.tagName === 'SELECT') {
      input.addEventListener('change', () => {
        input.classList.add('filled');
        validateField(input);
      });
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const inputs = [...form.querySelectorAll('input, select')];
    const allValid = inputs.map(validateField).every(Boolean);

    if (!allValid) {
      inputs.find(i => i.closest('.field').classList.contains('invalid'))?.focus();
      return;
    }

    // Здесь мог бы быть fetch() на бэкенд — пока имитация успешной записи
    form.querySelector('#form-success').hidden = false;
    form.querySelectorAll('input, select, button').forEach(el => (el.disabled = true));
  });
}

/* ---------- Footer year ---------- */
function initYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}
