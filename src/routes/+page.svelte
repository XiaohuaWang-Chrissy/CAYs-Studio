<script>
  import { lang } from '$lib/stores/lang.svelte.js';
  import { base } from '$app/paths';

  const translations = {
    en: {
      tabs: [
        { id: 'home',    label: 'HOME' },
        { id: 'work',    label: 'WORK' },
        { id: 'about',   label: 'ABOUT' },
        { id: 'team',    label: 'TEAM' },
        { id: 'contact', label: 'CONTACT' },
      ],
      hero: {
        location: 'BASE IN NYC',
        sub: 'Filmmakers · Journalists · Documentarians',
        cta1: 'SEE OUR WORK',
        cta2: 'GET A QUOTE',
      },
      about: {
        label: 'WHO WE ARE',
        heading: 'Film. Journalism.\nDocumentary.',
        body: 'CAY\'s Studio is a New York-based content studio founded by professional filmmakers, journalists, and documentary directors. We produce social media video content for Chinese brands in global markets.\n\nOur background shapes how we work — with attention to visual quality, clear and considered writing, and an understanding of how stories move on social platforms.',
        statsLabel: ['Years of Experience', 'Response Time'],
        statsVal: ['5+', '24h'],
        servLabel: 'WHAT WE DO',
        servHeading: 'What We\nOffer',
        items: [
          { num: '01', title: 'Video Production', desc: 'Full-service production from scripting and pre-production through shoot, edit, and delivery. Handled by a professional film crew.' },
          { num: '02', title: 'Copywriting & Scripting', desc: 'Scripts and copy written by journalists — clear, direct, and suited to how people actually watch video online.' },
          { num: '03', title: 'Documentary-Style Content', desc: 'Story-led content grounded in real people and situations, for brands that want to communicate authentically.' },
          { num: '04', title: 'Platform Strategy', desc: 'Content formatted and tailored for TikTok, Instagram Reels, and YouTube Shorts, with an understanding of each platform\'s audience.' },
        ],
      },
      work: {
        label: 'OUR WORK',
        heading: 'Selected Projects',
        items: [
          { src: '/secornd story - final draft.mp4', caption: 'Brand Story · NYC' },
          { src: '/Profile-Shuo Cai.mp4', caption: 'Profile · Studio' },
        ],
        more: 'More projects coming soon',
      },
      team: {
        label: 'OUR TEAM',
        heading: 'The Team',
        intro: 'Three co-founders with backgrounds in film, journalism, and documentary.',
        members: [
          {
            name: 'Chrissy Wang',
            role: 'Co-Founder · Filmmaker & Creative Director',
            bio: 'Filmmaker with experience across brand films, documentaries, and narrative projects. Leads creative direction and production.',
            photo: '/Chrissy.JPG',
          },
          {
            name: 'Yvonne Liu',
            role: 'Co-Founder · Journalist & Producer',
            bio: 'Journalist and producer. Brings an editorial approach to content strategy, scripting, and project management.',
            photo: '/Yvonne.JPG',
          },
          {
            name: 'Alexa Ge',
            role: 'Co-Founder · Documentary Filmmaker',
            bio: 'Documentary filmmaker with a focus on character-driven storytelling and observational style.',
            photo: null,
          },
        ],
        photoSoon: 'Photo coming soon',
      },
      contact: {
        label: 'GET IN TOUCH',
        heading: 'Start a Project\nWith Us',
        body: 'Tell us about your project and we\'ll get back to you within 24 hours.',
        fields: { email: 'Your Email', msg: 'Tell Us About Your Project', cta: 'SEND MESSAGE' },
        email: 'hello@caysstudio.com',
      },
      footer: {
        tagline: 'Filmmakers · Journalists · Documentarians · New York City',
        copy: '© 2025 CAY\'s Studio',
      },
    },
    zh: {
      tabs: [
        { id: 'home',    label: '首页' },
        { id: 'work',    label: '作品' },
        { id: 'about',   label: '关于' },
        { id: 'team',    label: '团队' },
        { id: 'contact', label: '联系' },
      ],
      hero: {
        location: '纽约工作室',
        sub: '电影人 · 记者 · 纪录片导演',
        cta1: '查看作品',
        cta2: '免费报价',
      },
      about: {
        label: '关于我们',
        heading: '电影、新闻\n与纪录片',
        body: 'CAY\'s Studio 由电影制作人、记者与纪录片导演共同创立，工作室总部位于纽约。我们专注于为中国品牌出海提供信息流视频内容制作。\n\n我们的创作背景体现在工作方式上：注重视觉质量，文案清晰有逻辑，对内容在社交平台上的传播方式有实际的理解和经验。',
        statsLabel: ['从业年限', '响应时间'],
        statsVal: ['5+', '24h'],
        servLabel: '服务内容',
        servHeading: '我们提供\n什么',
        items: [
          { num: '01', title: '视频制作', desc: '从脚本、拍摄到剪辑交付的全流程制作，由专业影视团队执行。' },
          { num: '02', title: '文案与脚本', desc: '由记者背景的团队负责撰写，文字清晰、直接，符合视频内容的实际观看习惯。' },
          { num: '03', title: '纪录片风格内容', desc: '以真实人物和场景为基础的故事型内容，适合希望以真实感进行品牌沟通的客户。' },
          { num: '04', title: '平台内容策略', desc: '针对TikTok、Instagram Reels、YouTube Shorts进行内容适配，结合对各平台用户习惯的理解。' },
        ],
      },
      work: {
        label: '作品展示',
        heading: '精选案例',
        items: [
          { src: '/secornd story - final draft.mp4', caption: '品牌故事 · 纽约' },
          { src: '/Profile-Shuo Cai.mp4',            caption: '人物介绍 · 工作室' },
        ],
        more: '更多内容即将上线',
      },
      team: {
        label: '团队介绍',
        heading: '团队成员',
        intro: '三位联合创始人，分别来自电影、新闻与纪录片领域。',
        members: [
          {
            name: 'Chrissy Wang',
            role: '联合创始人 · 电影导演 & 创意总监',
            bio: '电影制作人，有品牌影片、纪录片和叙事影像方面的工作经验，负责项目的创意方向与制作执行。',
            photo: '/Chrissy.JPG',
          },
          {
            name: 'Yvonne Liu',
            role: '联合创始人 · 记者 & 制片人',
            bio: '记者与制片人，负责内容策略、脚本撰写和项目统筹，具有新闻写作和编辑背景。',
            photo: '/Yvonne.JPG',
          },
          {
            name: 'Alexa Ge',
            role: '联合创始人 · 纪录片导演',
            bio: '纪录片导演，专注于人物驱动的叙事内容和纪实风格的拍摄方式。',
            photo: null,
          },
        ],
        photoSoon: '照片即将更新',
      },
      contact: {
        label: '联系我们',
        heading: '开启您的\n下一个项目',
        body: '告诉我们您的需求，我们将在24小时内回复。',
        fields: { email: '您的邮箱', msg: '项目描述', cta: '发送消息' },
        email: 'hello@caysstudio.com',
      },
      footer: {
        tagline: '电影人 · 记者 · 纪录片导演 · 纽约',
        copy: '© 2025 CAY\'s Studio',
      },
    },
  };

  const t = $derived(translations[lang.current]);

  let active = $state('home');

  function go(id) { active = id; }
</script>

<!-- ===== HEADER ===== -->
<header class="site-header">
  <div class="header-inner">
    <button class="logo" onclick={() => go('home')}>CAY'S STUDIO</button>
    <button class="lang-btn" onclick={() => lang.toggle()}>
      {lang.current === 'en' ? '中文' : 'EN'}
    </button>
  </div>

  <!-- Tab bar -->
  <div class="tab-bar" role="tablist">
    {#each t.tabs as tab}
      <button
        class="tab-btn"
        class:active={active === tab.id}
        role="tab"
        aria-selected={active === tab.id}
        onclick={() => go(tab.id)}
      >{tab.label}</button>
    {/each}
  </div>
</header>

<!-- ===== CONTENT PANELS ===== -->
<main class="panels">

  <!-- HOME -->
  {#if active === 'home'}
    <div class="panel panel--hero">
      <div class="hero-bg"></div>
      <div class="hero-body">
        <p class="hero-loc">{t.hero.location}</p>
        <div class="hero-center">
          <h1 class="hero-title">CAY'S STUDIO</h1>
          <div class="hero-rule"></div>
          <p class="hero-sub">{t.hero.sub}</p>
        </div>
        <div class="hero-ctas">
          <button class="hero-cta" onclick={() => go('work')}>{t.hero.cta1}</button>
          <button class="hero-cta" onclick={() => go('contact')}>{t.hero.cta2}</button>
        </div>
      </div>
    </div>
  {/if}

  <!-- WORK -->
  {#if active === 'work'}
    <div class="panel panel--light scrollable">
      <div class="panel-inner">
        <div class="section-intro">
          <span class="label">{t.work.label}</span>
          <h2 class="panel-heading">{t.work.heading}</h2>
        </div>
        <div class="work-grid">
          {#each t.work.items as item}
            <div class="work-card">
              <video
                class="work-video"
                src={item.src}
                controls
                playsinline
                preload="metadata"
              >
                <track kind="captions" />
              </video>
              <p class="work-caption">{item.caption}</p>
            </div>
          {/each}
          <div class="work-more">
            <span>{t.work.more}</span>
          </div>
        </div>
      </div>
    </div>
  {/if}

  <!-- ABOUT -->
  {#if active === 'about'}
    <div class="panel panel--light scrollable">
      <div class="panel-inner">

        <!-- About -->
        <div class="section-intro">
          <span class="label">{t.about.label}</span>
          <h2 class="panel-heading">{t.about.heading}</h2>
        </div>
        <div class="about-body">
          {#each t.about.body.split('\n\n') as para}
            <p>{para}</p>
          {/each}
        </div>
        <div class="stats-row">
          {#each t.about.statsVal as val, i}
            <div class="stat">
              <span class="stat-num">{val}</span>
              <span class="stat-label">{t.about.statsLabel[i]}</span>
            </div>
          {/each}
        </div>

        <div class="divider"></div>

        <!-- Services -->
        <div class="section-intro">
          <span class="label">{t.about.servLabel}</span>
          <h2 class="panel-heading">{t.about.servHeading}</h2>
        </div>
        <div class="services-grid">
          {#each t.about.items as item}
            <div class="service-card">
              <span class="service-num">{item.num}</span>
              <h3 class="service-title">{item.title}</h3>
              <p class="service-desc">{item.desc}</p>
            </div>
          {/each}
        </div>

      </div>
    </div>
  {/if}

  <!-- TEAM -->
  {#if active === 'team'}
    <div class="panel panel--light scrollable">
      <div class="panel-inner">
        <div class="section-intro">
          <span class="label">{t.team.label}</span>
          <h2 class="panel-heading">{t.team.heading}</h2>
        </div>
        <p class="team-intro">{t.team.intro}</p>
        <div class="team-grid">
          {#each t.team.members as m}
            <div class="member">
              <div class="member-photo-wrap">
                {#if m.photo}
                  <img src="{base}{m.photo}" alt={m.name} class="member-photo" />
                {:else}
                  <div class="member-placeholder">
                    <span>{t.team.photoSoon}</span>
                  </div>
                {/if}
              </div>
              <h3 class="member-name">{m.name}</h3>
              <p class="member-role">{m.role}</p>
              <p class="member-bio">{m.bio}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- CONTACT -->
  {#if active === 'contact'}
    <div class="panel panel--dark scrollable">
      <div class="panel-inner">
        <div class="section-intro">
          <span class="label light">{t.contact.label}</span>
          <h2 class="panel-heading light">{t.contact.heading}</h2>
        </div>
        <p class="contact-body">{t.contact.body}</p>
        <a href="mailto:{t.contact.email}" class="contact-email">{t.contact.email}</a>

        <form class="contact-form" onsubmit={(e) => e.preventDefault()}>
          <div class="form-group">
            <label for="email">{t.contact.fields.email}</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="message">{t.contact.fields.msg}</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="form-submit">{t.contact.fields.cta}</button>
        </form>
      </div>

      <footer class="panel-footer">
        <p class="footer-tagline">{t.footer.tagline}</p>
        <p class="footer-copy">{t.footer.copy}</p>
      </footer>
    </div>
  {/if}

</main>

<style lang="scss">
  @use '../lib/styles' as *;

  /* ===== LAYOUT ===== */
  :global(html, body) {
    height: 100%;
    overflow: hidden;
  }

  /* Header height tokens */
  $header-h: 104px;
  $header-h-mobile: 96px;

  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    background: var(--color-black);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    height: 52px;

    @include mobile {
      height: 48px;
      padding: 0 1rem;
    }
  }

  .logo {
    font-family: var(--font-sans);
    font-weight: var(--font-weight-medium);
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: var(--color-white);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    text-transform: uppercase;
  }

  .lang-btn {
    font-family: var(--font-sans);
    font-size: 0.65rem;
    font-weight: var(--font-weight-medium);
    letter-spacing: 0.12em;
    color: var(--color-white);
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.25);
    padding: 0.35rem 0.8rem;
    cursor: pointer;
    text-transform: uppercase;
    transition: background 0.2s;
    min-height: 32px;
    min-width: 52px;

    &:hover { background: rgba(255,255,255,0.18); }
  }

  /* Tab bar */
  .tab-bar {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    border-top: 1px solid rgba(255,255,255,0.07);
    height: 52px;

    &::-webkit-scrollbar { display: none; }

    @include mobile {
      height: 48px;
    }
  }

  .tab-btn {
    flex: 1;
    min-width: 72px;
    height: 100%;
    font-family: var(--font-sans);
    font-size: 0.6rem;
    font-weight: var(--font-weight-medium);
    letter-spacing: 0.18em;
    color: rgba(255,255,255,0.4);
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    text-transform: uppercase;
    transition: color 0.2s, border-color 0.2s;
    white-space: nowrap;
    padding: 0 0.75rem;

    &.active {
      color: var(--color-white);
      border-bottom-color: var(--color-gold);
    }

    &:hover:not(.active) {
      color: rgba(255,255,255,0.7);
    }

    @include mobile {
      font-size: 0.58rem;
      min-width: 60px;
      padding: 0 0.6rem;
    }
  }

  /* ===== PANELS ===== */
  .panels {
    position: fixed;
    top: $header-h;
    left: 0;
    right: 0;
    bottom: 0;

    @include mobile {
      top: $header-h-mobile;
    }
  }

  .panel {
    position: absolute;
    inset: 0;
  }

  .panel--light { background: var(--color-cream); }
  .panel--dark  { background: var(--color-dark); }

  .scrollable {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .panel-inner {
    max-width: 960px;
    margin: 0 auto;
    padding: 3rem 2rem 4rem;

    @include mobile {
      padding: 2rem 1.25rem 3rem;
    }
  }

  /* ===== HERO ===== */
  .panel--hero {
    display: flex;
    align-items: stretch;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background: var(--color-black);
  }

  .hero-body {
    position: relative;
    z-index: 2;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    grid-template-columns: 1fr 1fr;
    padding: 3rem 2.5rem 2.5rem;

    @include mobile {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      padding: 2rem 1.5rem 2rem;
      gap: 1.5rem;
    }
  }

  .hero-loc {
    grid-row: 1;
    grid-column: 1;
    align-self: start;
    font-family: var(--font-sans);
    font-weight: var(--font-weight-light);
    font-size: clamp(0.85rem, 2vw, 1.1rem);
    letter-spacing: 0.28em;
    color: rgba(255,255,255,0.75);
    text-transform: uppercase;
    margin: 0;
  }

  .hero-center {
    grid-row: 2;
    grid-column: 1 / 3;
    text-align: center;

    @include mobile {
      grid-column: 1;
      grid-row: 2;
    }
  }

  .hero-title {
    font-family: var(--font-display);
    font-weight: var(--font-weight-light);
    font-size: clamp(2.6rem, 9vw, 7rem);
    letter-spacing: 0.22em;
    color: var(--color-white);
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 1.25rem;
  }

  .hero-rule {
    width: 38%;
    max-width: 400px;
    height: 1px;
    background: rgba(255,255,255,0.3);
    margin: 0 auto 1.25rem;
  }

  .hero-sub {
    font-family: var(--font-sans);
    font-weight: var(--font-weight-light);
    font-size: 0.65rem;
    letter-spacing: 0.25em;
    color: rgba(255,255,255,0.45);
    text-transform: uppercase;
    margin: 0;
  }

  .hero-ctas {
    grid-row: 3;
    grid-column: 2;
    align-self: end;
    justify-self: end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.4rem;

    @include mobile {
      grid-row: 3;
      grid-column: 1;
      align-items: flex-start;
      justify-self: start;
    }
  }

  .hero-cta {
    font-family: var(--font-sans);
    font-weight: var(--font-weight-medium);
    font-size: clamp(1rem, 3.5vw, 1.6rem);
    letter-spacing: 0.18em;
    color: var(--color-white);
    background: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    line-height: 1.4;
    padding: 0.25rem 0;
    transition: opacity 0.2s;
    text-align: right;
    min-height: 44px;
    display: flex;
    align-items: center;

    &:hover { opacity: 0.55; }

    @include mobile {
      text-align: left;
    }
  }

  /* ===== SECTION INTRO ===== */
  .section-intro {
    margin-bottom: 2rem;
  }

  .label {
    display: block;
    font-family: var(--font-sans);
    font-size: 0.6rem;
    font-weight: var(--font-weight-medium);
    letter-spacing: 0.28em;
    color: var(--color-warm-gray);
    text-transform: uppercase;
    margin-bottom: 0.75rem;

    &.light { color: rgba(255,255,255,0.38); }
  }

  .panel-heading {
    font-family: var(--font-display);
    font-weight: var(--font-weight-light);
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 1.1;
    white-space: pre-line;
    color: var(--color-dark);

    &.light { color: var(--color-white); }
  }

  /* ===== WORK ===== */
  .work-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;

    @include mobile {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  .work-card {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    background: var(--color-black);
  }

  .work-video {
    width: 100%;
    aspect-ratio: 16 / 9;
    display: block;
    object-fit: cover;
    background: var(--color-dark-mid);
  }

  .work-caption {
    font-family: var(--font-sans);
    font-size: 0.6rem;
    letter-spacing: 0.18em;
    color: var(--color-warm-gray);
    text-transform: uppercase;
    margin: 0;
    padding: 0 0.25rem 0.5rem;
  }

  .work-more {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    border: 1px dashed rgba(0,0,0,0.12);
    background: rgba(0,0,0,0.03);

    span {
      font-family: var(--font-sans);
      font-size: 0.6rem;
      letter-spacing: 0.18em;
      color: var(--color-warm-gray);
      text-transform: uppercase;
    }
  }

  /* ===== ABOUT ===== */
  .about-body {
    font-size: 1rem;
    line-height: 1.85;
    color: var(--color-text-muted);
    margin-bottom: 2rem;
    max-width: 680px;
  }

  .stats-row {
    display: flex;
    gap: 2.5rem;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(0,0,0,0.08);
    border-bottom: 1px solid rgba(0,0,0,0.08);
    flex-wrap: wrap;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .stat-num {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: var(--font-weight-light);
    color: var(--color-dark);
    line-height: 1;
  }

  .stat-label {
    font-family: var(--font-sans);
    font-size: 0.58rem;
    letter-spacing: 0.2em;
    color: var(--color-warm-gray);
    text-transform: uppercase;
  }

  .divider {
    height: 1px;
    background: rgba(0,0,0,0.07);
    margin: 3rem 0;
  }

  .services-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: rgba(0,0,0,0.06);

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  .service-card {
    background: var(--color-cream);
    padding: 2rem 1.5rem;
    transition: background 0.25s;

    &:hover { background: var(--color-cream-dark); }
  }

  .service-num {
    display: block;
    font-family: var(--font-display);
    font-size: 0.75rem;
    color: var(--color-gold);
    margin-bottom: 1rem;
    letter-spacing: 0.12em;
  }

  .service-title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: var(--font-weight-normal);
    color: var(--color-dark);
    margin-bottom: 0.6rem;
  }

  .service-desc {
    font-size: 0.82rem;
    line-height: 1.7;
    color: var(--color-text-muted);
    margin: 0;
  }

  /* ===== TEAM ===== */
  .team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @include mobile {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }

  .member {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .member-photo-wrap {
    aspect-ratio: 3 / 4;
    overflow: hidden;
    background: var(--color-cream-dark);
  }

  .member-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    /* Black and white */
    filter: grayscale(100%) contrast(1.05);
    transition: filter 0.4s ease, transform 0.5s ease;

    .member:hover & {
      filter: grayscale(0%) contrast(1);
      transform: scale(1.03);
    }
  }

  .member-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed rgba(0,0,0,0.12);

    span {
      font-family: var(--font-sans);
      font-size: 0.58rem;
      letter-spacing: 0.15em;
      color: var(--color-warm-gray);
      text-transform: uppercase;
      text-align: center;
      padding: 0.5rem;
    }
  }

  .member-name {
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: var(--font-weight-normal);
    color: var(--color-dark);
    margin: 0;
  }

  .member-role {
    font-family: var(--font-sans);
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    color: var(--color-warm-gray);
    text-transform: uppercase;
    margin: 0 0 0.75rem;
  }

  .member-bio {
    font-size: 0.8rem;
    line-height: 1.75;
    color: var(--color-text-muted);
    margin: 0;
  }

  .team-intro {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: var(--font-weight-light);
    color: var(--color-warm-gray);
    margin-bottom: 2.5rem;
    font-style: italic;
  }

  /* ===== CONTACT ===== */
  .contact-body {
    font-size: 0.9rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.4);
    margin: 1.5rem 0 1rem;
    max-width: 520px;
  }

  .contact-email {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    color: var(--color-gold-light);
    text-decoration: none;
    border-bottom: 1px solid rgba(212,184,150,0.3);
    padding-bottom: 2px;
    margin-bottom: 2.5rem;
    transition: border-color 0.2s;

    &:hover {
      border-color: var(--color-gold-light);
      opacity: 1;
    }
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 560px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;

    label {
      font-family: var(--font-sans);
      font-size: 0.58rem;
      letter-spacing: 0.22em;
      color: rgba(255,255,255,0.38);
      text-transform: uppercase;
    }

    input, textarea {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.09);
      color: var(--color-white);
      font-family: var(--font-sans);
      font-size: 0.85rem;
      font-weight: var(--font-weight-light);
      padding: 0.9rem 1rem;
      transition: border-color 0.2s;
      resize: none;
      -webkit-appearance: none;
      appearance: none;
      border-radius: 0;
      min-height: 44px;

      &:focus {
        outline: none;
        border-color: rgba(255,255,255,0.28);
      }
    }
  }

  .form-submit {
    align-self: flex-start;
    font-family: var(--font-sans);
    font-weight: var(--font-weight-medium);
    font-size: 0.6rem;
    letter-spacing: 0.22em;
    color: var(--color-black);
    background: var(--color-gold-light);
    border: none;
    padding: 0.9rem 2.5rem;
    cursor: pointer;
    text-transform: uppercase;
    transition: background 0.2s;
    min-height: 44px;

    &:hover { background: var(--color-gold); }
  }

  /* ===== PANEL FOOTER ===== */
  .panel-footer {
    padding: 2rem;
    border-top: 1px solid rgba(255,255,255,0.06);
    text-align: center;
  }

  .footer-tagline {
    font-family: var(--font-sans);
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    color: rgba(255,255,255,0.2);
    text-transform: uppercase;
    margin-bottom: 0.3rem;
  }

  .footer-copy {
    font-family: var(--font-sans);
    font-size: 0.58rem;
    letter-spacing: 0.12em;
    color: rgba(255,255,255,0.12);
    margin: 0;
  }
</style>
