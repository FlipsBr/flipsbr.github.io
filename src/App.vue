<script setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import { animationWriteText } from "./animations/textAnimation.js";

  const commandText = "systemctl start my-service";
  const currentText = ref("");
  let inputing = true;
  let animationRunning = false;

  onMounted(async () => {
    animationRunning = true;

    while (animationRunning) {
      const result = await animationWriteText(commandText, currentText.value, inputing);

      currentText.value = result.currentText;
      inputing = result.inputing;
    }
  });

  onUnmounted(() => {
    animationRunning = false;
  });

  const skills = [
    { area: "BACK-END", items: ["Node.js", "Typescript", "C#", ".Net Framework", "APIs REST", "SQL"] },
    { area: "ARQUITETURA", items: ["MVC", "REST", "Microservices", "Event-Driven Architecture"] },
    { area: "FRONT-END", items: ["JavaScript", "Vue.js", "React.js", "HTML", "CSS"] },
    { area: "FERRAMENTAS", items: ["Docker", "Kubernetes", "Git", "GitHub", "Figma"] },
  ];

  const experience = [
    {
      period: "Julho 2025 — Atualmente",
      role: "Desenvolvedor Back-end Sênior",
      company: "Likewater Soluções de Comunicação",
      description: "Integrações entre plataformas de comunicação e sistema de atendimento enterprise.",
    },
    {
      period: "Julho 2024 - Julho 2025",
      role: "Desenvolvedor Fullstack Sênior",
      company: "Solve4me Soluções de tecnologia",
      description: "Integrações entre plataformas de comunicação e sistema de atendimento enterprise.",
    },
    {
      period: "Janeiro 2022 — Julho 2024",
      role: "Desenvolvedor Back-end Pleno",
      company: "Likewater Soluções de Comunicação",
      description: "Integrações entre plataformas de comunicação e sistema de atendimento enterprise.",
    },
  ];

  const education = [
    {
      period: "2026-2027",
      course: "Pós Graduação em Arquitetura de Software",
      institution: "Instituto INFNET",
    },
    {
      period: "2021-2025",
      course: "Bacharelado em Ciências da Computação",
      institution: "Faculdades Metropolitanas Unidas",
    },
    {
      period: "2011-2017",
      course: "Bacharelado em Física",
      institution: "Universidade de São Paulo",
    },
  ];
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="Nome">README.md<span>.</span></a>
    <nav aria-label="Navegação principal">
      <a href="#competencias">Competências</a>
      <a href="#experiencia">Experiência</a>
      <a href="#formacao">Formação</a>
      <a class="nav-cta" href="#contato">Contato <span>↗</span></a>
    </nav>
  </header>

  <main>
    <section id="inicio" class="hero page-width">
      <div class="hero-content">
        <p class="eyebrow"><span class="availability-dot"></span> Sobre mim:</p>
        <h1>Felipe Pires<br /><span>Desenvolvedor</span></h1>
        <div class="hero-foot">
          <p>
            Desenvolvedor Fullstack Sênior com ampla experiência. Comecei minha carreira como mera curiosidade, hoje,
            desenvolver é minha paixão.
          </p>
        </div>
      </div>
      <div class="hero-picture"></div>
      <div class="hero-terminal">
        <div class="hero-art" aria-label="Resumo profissional em uma janela de terminal" role="img">
          <div class="terminal-bar">
            <span class="terminal-lights"><i></i><i></i><i></i></span>
            <span>~/about-me.sh — bash</span>
            <span>•••</span>
          </div>
          <div class="terminal-content" aria-hidden="true">
            <p><span class="code-muted">$</span> whoami</p>
            <p class="terminal-output">desenvolvedor fullstack</p>
            <p><span class="code-muted">$</span> cat foco.txt</p>
            <p class="terminal-output">sistemas distribuídos · código · soluções</p>
            <p>
              <span class="code-muted">$</span>
              {{ currentText }}<span class="cursor-block" aria-hidden="true"></span>
            </p>
          </div>
          <span class="hero-art-index">Status: <b>DISPONÍVEL</b></span>
        </div>
        <a class="scroll-link" href="#competencias" aria-label="Rolar até as competências">↓</a>
      </div>
      <!-- <span class="hero-side-note">Currículo · {{ new Date().getFullYear() }}</span> -->
    </section>

    <section id="competencias" class="resume-section page-width">
      <div class="section-topline">
        <p class="eyebrow">01 / Competências</p>
        <p class="section-note">Tecnologias e ferramentas <span>↘</span></p>
      </div>
      <div class="skill-grid">
        <article v-for="group in skills" :key="group.area" class="skill-card">
          <h2><span aria-hidden="true">&gt;_</span> {{ group.area }}</h2>
          <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section id="experiencia" class="experience-section">
      <div class="page-width">
        <div class="section-topline">
          <p class="eyebrow">02 / Experiência Profissional</p>
          <p class="section-note">Atuação <span>↘</span></p>
        </div>
        <div class="experience-list">
          <article v-for="item in experience" :key="`${item.period}-${item.role}`" class="experience-item">
            <span class="experience-years">{{ item.period }}</span>
            <div class="experience-description">
              <h2>{{ item.role }}</h2>
              <p class="experience-place">{{ item.company }}</p>
              <p class="experience-summary">{{ item.description }}</p>
            </div>
            <span class="experience-mark" aria-hidden="true">+</span>
          </article>
        </div>
      </div>
    </section>

    <section id="formacao" class="education-section page-width">
      <div class="section-topline">
        <p class="eyebrow">03 / Formação</p>
        <p class="section-note">Estudos <span>↘</span></p>
      </div>
      <div class="education-list">
        <article v-for="item in education" :key="`${item.period}-${item.course}`" class="education-item">
          <span class="experience-years">{{ item.period }}</span>
          <div>
            <h2>{{ item.course }}</h2>
            <p class="experience-place">{{ item.institution }}</p>
          </div>
        </article>
      </div>
    </section>

    <section id="contato" class="contact-section page-width">
      <p class="eyebrow">04 / Contato</p>
      <h2>Vamos conversar<span>?</span></h2>
      <div class="contact-bottom">
        <p>Disponível para oportunidades e projetos.</p>
        <div class="contact-actions">
          <!-- <a class="contact-link" href="mailto:oi@seunome.com"> -->
          <!-- <span>oi@seunome.com</span><span aria-hidden="true">↗</span> -->
          <!-- </a> -->
          <a
            class="linkedin-link"
            href="https://www.linkedin.com/in/felipedsp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>Felipe Pires · Desenvolvimento de Software · {{ new Date().getFullYear() }}</p>
    <a href="#inicio">Voltar ao topo ↑</a>
  </footer>
</template>
