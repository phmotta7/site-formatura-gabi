import './style.css'
import { event } from './config.js'

const app = document.querySelector('#app')
app.innerHTML = `
  <div class="cover marbled" id="cover" aria-label="Capa do convite">
    <div class="cover-panel">
      <img class="cover-lamp" src="${event.lamp}" alt="">
      <p class="cover-kicker">Convite de formatura</p>
      <h1 class="cover-course script">${event.course}</h1>
      <p class="cover-name script">${event.graduate}</p>
    </div>
    <div class="cover-right">
      <div class="photo-slot" data-photo="cover" role="img" aria-label="Gabriela em retrato de formatura"><span>Foto da formanda</span></div>
    </div>
<p class="cover-hint">Toque no selo para abrir</p>
  </div>
  <button class="seal-button" id="open-invite" aria-label="Abrir convite"><img src="${event.seal}" alt="Selo dourado de formatura"></button>
  <main id="invitation">
    <nav class="site-nav" id="inicio" aria-label="Navegação do convite">
      <div class="nav-inner">
        <a class="nav-mark" href="#inicio" aria-label="Início"><img src="${event.lamp}" alt=""><span>G</span></a>
        <div class="nav-links">
          <a href="#historia">Minha história</a><a href="#baile">O grande dia</a><a href="#informacoes">Informações</a><a href="#rsvp">Presença</a>
        </div>
        <a class="btn nav-cta" href="#rsvp">Confirmar presença</a>
      </div>
    </nav>
    <section class="section" id="historia">
      <div class="wrap story-grid">
        <div class="story-copy reveal">
          <p class="eyebrow">Uma conquista que floresceu</p>
          <blockquote class="story-quote">“Até aqui nos ajudou o Senhor”<cite>1 Samuel 7:12</cite></blockquote>
          <p>Há sonhos que parecem distantes quando começam, mas que, pouco a pouco, encontram o seu caminho até se tornarem realidade. O meu me trouxe até aqui.</p>
          <p>Foram anos de estudo, dedicação, descobertas e desafios. Houve dias leves e outros nem tanto, mas cada um deles deixou sua marca e me trouxe até esse instante que, por tanto tempo imaginei.</p>
          <p>Hoje, olho para tudo o que vivi com o coração cheio de gratidão. A Deus, à minha família, aos meus amigos e a todos que estiveram ao meu lado, oferecendo apoio, carinho e força, quando precisei, deixo o meu mais sincero agradecimento.</p>
          <p>Depois de tantos passos, chegou a hora de viver aquilo que um dia foi apenas um sonho: a conclusão da minha graduação em Enfermagem.</p>
          <p>E eu não poderia viver essa conquista sem dividir essa alegria com quem, de alguma forma, faz parte da minha história.</p>
        </div>
        <div class="photo-slot photo-slot--wide reveal" data-photo="story" role="img" aria-label="Retrato de Gabriela na formatura"><span>Um retrato desta jornada</span></div>
      </div>
    </section>
    <section class="section event-section" id="baile">
      <div class="wrap event-grid">
        <div class="photo-slot photo-slot--wide reveal" data-photo="event" role="img" aria-label="Gabriela com capelo e canudo de formatura"><span>Uma nova etapa começa</span></div>
        <div class="invite-copy reveal">
          <p class="eyebrow">Com alegria e gratidão</p>
          <h2 class="invite-title">${event.graduate}</h2>
          <p>sente-se honrada em convidá-lo(a) para a solenidade de formatura.</p>
          <p>Será um prazer ter você comigo para brindar ao fim de um ciclo e celebrar o início de uma nova etapa!</p>
          <div class="date-card" aria-label="${event.dateLabel} às ${event.time}">
            <strong class="date-card-day">13</strong><span class="date-card-meta"><strong>Sábado · Fevereiro de 2027</strong><span>${event.time} · ${event.course}</span></span>
          </div>
          <div class="event-facts">
            <article class="fact-card"><span class="fact-icon" aria-hidden="true">✦</span><span><strong>Solenidade</strong><span>${event.dateLabel} · ${event.time}</span></span></article>
            <article class="fact-card"><span class="fact-icon" aria-hidden="true">✧</span><span><strong>${event.party}</strong><span>${event.dateLabel} · ${event.time}</span></span></article>
          </div>
          <p><strong>${event.venue}</strong></p>
          <a class="btn btn-quiet" href="${event.mapsUrl}" target="_blank" rel="noopener noreferrer">Saiba como chegar <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
    <section class="section" id="informacoes">
      <div class="wrap notes-grid">
        <div class="notes-copy reveal">
          <p class="eyebrow">Para celebrar juntos</p><h2 class="script-heading">Informações importantes</h2>
          <div class="attire-card"><span class="eyebrow">Dress code</span><strong>${event.attire}</strong><p>${event.attireNote}</p></div>
          <ul class="notes-list">
            <li>Chegue com antecedência para que possamos aproveitar cada momento com tranquilidade.</li>
            <li>Convite exclusivo e individual. Confirme somente a sua presença.</li>
            <li>Tire muitas fotos, me marque e me ajude a eternizar esse momento.</li>
            <li>Não esqueça de confirmar sua presença até o dia ${event.rsvpDeadline}.</li>
            <li>É proibido ir embora no meio da festa. Fique até o final!</li>
          </ul>
        </div>
        <div class="photo-slot photo-slot--wide reveal" data-photo="details" role="img" aria-label="Retrato de Gabriela na formatura"><span>Memórias para guardar</span></div>
      </div>
    </section>
    <section class="section countdown-section marbled" id="contagem">
      <div class="wrap countdown-inner reveal">
        <img class="cover-lamp" src="${event.lamp}" alt="">
        <div class="divider" aria-hidden="true"><img src="./img/divisor.svg" alt=""></div>
        <p class="eyebrow">Um dia especial está chegando</p><h2 class="script-heading">Contagem regressiva</h2>
        <p class="countdown-intro">Falta pouco para esse dia tão especial!</p>
        <div class="timer" role="timer" aria-label="Tempo restante até a formatura">
          <div class="timer-unit"><b id="cd-d">00</b><small>dias</small></div><div class="timer-unit"><b id="cd-h">00</b><small>horas</small></div><div class="timer-unit"><b id="cd-m">00</b><small>minutos</small></div><div class="timer-unit"><b id="cd-s">00</b><small>segundos</small></div>
        </div>
        <p class="countdown-note">Conto com a sua presença para tornar esse momento ainda mais inesquecível e especial!</p>
      </div>
    </section>
    <section class="section rsvp-section" id="rsvp">
      <div class="wrap rsvp-grid">
        <div class="rsvp-panel reveal">
          <p class="eyebrow">Até o dia ${event.rsvpDeadline}</p><h2 class="script-heading">Confirme sua presença</h2>
          <p>Este convite é individual. Preencha seu nome e informe se levará acompanhante.</p>
          <form class="rsvp-form" id="rsvp-form">
            <div class="field"><label for="guest-name">Nome completo</label><input id="guest-name" name="name" autocomplete="name" required placeholder="Como podemos chamar você?"></div>
            <div class="field"><label for="guest-companion">Vai levar acompanhante?</label><select id="guest-companion" name="companion"><option value="Não">Não</option><option value="Sim">Sim</option></select></div>
            <button class="btn" type="submit">Confirmar presença <span aria-hidden="true">→</span></button>
          </form>
          <p class="form-note" id="form-note" aria-live="polite"></p>
        </div>
        <div class="photo-slot photo-slot--wide reveal" data-photo="rsvp" role="img" aria-label="Retrato de Gabriela na formatura"><span>Espero celebrar com você</span></div>
      </div>
    </section>
    <footer class="footer marbled"><p class="footer-thanks">Obrigada por fazer parte da minha história.</p><p>Com carinho, ${event.graduate} · ${event.course} ${event.class}</p></footer>
  </main>
  <button class="audio-control" id="audio-toggle" type="button" aria-label="Tocar música" aria-pressed="false" title="Música opcional">♪</button>
  <audio id="background-audio" src="${event.audioSrc}" preload="none" loop></audio>
`

document.documentElement.classList.add('js')
document.body.classList.add('is-locked')
for (const [key, source] of Object.entries(event.photos)) {
  if (!source) continue
  const slot = document.querySelector(`[data-photo="${key}"]`)
  if (!slot) continue
  const photo = document.createElement('img')
  photo.src = source
  photo.alt = ''
  slot.append(photo)
  slot.classList.add('has-photo')
}

const cover = document.querySelector('#cover')
const openButton = document.querySelector('#open-invite')
openButton.addEventListener('click', () => {
  cover.classList.add('open')
  openButton.classList.add('is-opening')
  document.body.classList.remove('is-locked')
  document.querySelector('#invitation').setAttribute('tabindex', '-1')
  document.querySelector('#invitation').focus({ preventScroll: true })
  window.scrollTo({ top: 0, behavior: 'smooth' })
  window.setTimeout(() => { cover.remove(); openButton.remove() }, 1200)
})

const audio = document.querySelector('#background-audio')
const audioButton = document.querySelector('#audio-toggle')
audioButton.addEventListener('click', async () => {
  if (audio.paused) {
    try { await audio.play(); audioButton.setAttribute('aria-pressed', 'true'); audioButton.setAttribute('aria-label', 'Pausar música') }
    catch { document.querySelector('#form-note').textContent = 'Não foi possível iniciar o áudio neste dispositivo.' }
  } else {
    audio.pause(); audioButton.setAttribute('aria-pressed', 'false'); audioButton.setAttribute('aria-label', 'Tocar música')
  }
})

const targetTime = new Date(event.eventDate).getTime()
const fields = { d: document.querySelector('#cd-d'), h: document.querySelector('#cd-h'), m: document.querySelector('#cd-m'), s: document.querySelector('#cd-s') }
const pad = (value) => String(value).padStart(2, '0')
function updateCountdown() {
  const remaining = Math.max(0, targetTime - Date.now())
  fields.d.textContent = pad(Math.floor(remaining / 86400000))
  fields.h.textContent = pad(Math.floor((remaining % 86400000) / 3600000))
  fields.m.textContent = pad(Math.floor((remaining % 3600000) / 60000))
  fields.s.textContent = pad(Math.floor((remaining % 60000) / 1000))
}
updateCountdown(); window.setInterval(updateCountdown, 1000)

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const revealItems = document.querySelectorAll('.reveal')
if ('IntersectionObserver' in window && !reducedMotion) {
  const observer = new IntersectionObserver((entries, currentObserver) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); currentObserver.unobserve(entry.target) }
  }), { threshold: 0.12 })
  revealItems.forEach((item) => observer.observe(item))
} else revealItems.forEach((item) => item.classList.add('visible'))

const form = document.querySelector('#rsvp-form')
form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  const guest = String(formData.get('name') || '').trim()
  const companion = String(formData.get('companion') || 'Não')
  if (event.formspreeEndpoint) {
    try {
      const response = await fetch(event.formspreeEndpoint, { method: 'POST', body: formData, headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error('RSVP failed')
      document.querySelector('#form-note').textContent = 'Presença confirmada. Obrigada!'
      form.reset()
    } catch { document.querySelector('#form-note').textContent = 'Não foi possível enviar agora. Tente novamente ou confirme pelo WhatsApp.' }
  } else {
    const text = `Olá! Sou ${guest} e confirmo presença na formatura de ${event.graduate}. Acompanhante: ${companion}.`
    window.open(`https://wa.me/${event.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }
})
