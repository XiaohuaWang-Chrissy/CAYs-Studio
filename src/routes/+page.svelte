<script>
  import { lang } from '$lib/stores/lang.svelte.js';

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
        heading: 'Cinematic Eye.\nJournalistic Soul.',
        body: 'CAY\'s Studio is built by professional filmmakers, award-winning journalists, and documentary directors — united by one conviction: that great content doesn\'t just capture attention, it earns trust.\n\nBased in New York City, we bring cinematic precision, editorial-sharp copy, and genuine social media instinct to every project. We know what stops the scroll, what keeps viewers watching, and what moves them to act. Our aesthetic travels. Our stories land.',
        statsLabel: ['Projects Delivered', 'Years of Craft', 'Response Time'],
        statsVal: ['100+', '10+', '24h'],
        servLabel: 'WHAT WE DO',
        servHeading: 'Where Film Meets\nthe Feed',
        items: [
          { num: '01', title: 'Cinematic Production', desc: 'Professional filmmakers and documentary directors behind every frame — from concept and scripting to final cut and color grade.' },
          { num: '02', title: 'Copywriting & Scripting', desc: 'Journalists who write. Copy that hooks in the first second, holds through the last, and converts without feeling like an ad.' },
          { num: '03', title: 'Documentary Storytelling', desc: 'Authentic narratives rooted in real people and real moments. Because today\'s audiences can spot a sales pitch from a mile away.' },
          { num: '04', title: 'Platform-Native Strategy', desc: 'Deep instinct across TikTok, Instagram Reels, and YouTube Shorts. We know the algorithm — and how to make content that outlasts it.' },
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
        heading: 'Filmmakers,\nJournalists,\nStorytellers.',
        intro: 'Three founders. Three disciplines. One shared obsession with stories that actually work.',
        members: [
          {
            name: 'Chrissy Wang',
            role: 'Co-Founder · Filmmaker & Creative Director',
            bio: 'Professional filmmaker with a cinematic eye honed across brand films, documentaries, and narrative projects. Chrissy leads creative vision and brings every story to life on screen.',
            photo: '/Chrissy.JPG',
          },
          {
            name: 'Yvonne Liu',
            role: 'Co-Founder · Journalist & Producer',
            bio: 'Journalist turned producer with a reporter\'s instinct for finding the angle that matters. Yvonne drives editorial strategy, keeps production tight, and makes sure every frame earns its place.',
            photo: '/Yvonne.JPG',
          },
          {
            name: 'Alexa Ge',
            role: 'Co-Founder · Documentary Filmmaker',
            bio: 'Documentary filmmaker who believes authenticity is the most powerful conversion tool. Alexa specializes in real stories — the kind that build brands people actually believe in.',
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
        heading: '电影的眼睛\n记者的本能',
        body: 'CAY\'s Studio 由专业电影制作人、优秀记者与纪录片导演联合创立——我们相信，真正好的内容不只是抢眼，更是赢得信任。\n\n我们以电影级的视觉审美、记者的文案功底和对社交媒体的深度理解为出发点，为每一个项目注入真正的网感与创作力。我们知道什么能让用户停住手指、什么让他们看到最后、什么让他们付诸行动。',
        statsLabel: ['项目经验', '创作年限', '响应时间'],
        statsVal: ['100+', '10+', '24h'],
        servLabel: '服务内容',
        servHeading: '电影的质感\n信息流的语言',
        items: [
          { num: '01', title: '影视级视频制作', desc: '专业电影制作人与纪录片导演主导每一帧——从脚本策划、实景拍摄到剪辑调色，全程掌控。' },
          { num: '02', title: '文案与脚本创作', desc: '记者出身的文案团队。第一秒就能钩住人，最后一帧还在发力——广告感全无，转化效果一流。' },
          { num: '03', title: '纪录片式品牌叙事', desc: '扎根真实人物与真实故事的叙事方式。因为今天的受众，对套路一眼就能看穿。' },
          { num: '04', title: '平台原生内容策略', desc: '深度理解TikTok、Instagram Reels、YouTube Shorts的算法逻辑与用户心理。我们不只追算法，我们让内容超越算法。' },
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
        heading: '电影人、记者\n纪录片导演。',
        intro: '三位创始人，三种专业背景，同一个对好故事的执念。',
        members: [
          {
            name: 'Chrissy Wang',
            role: '联合创始人 · 电影导演 & 创意总监',
            bio: '专业电影制作人，视觉审美锐利，在品牌影片、纪录片与叙事影像领域拥有丰富经验。Chrissy 主导创意方向，将每一个品牌故事化作真正打动人心的银幕语言。',
            photo: '/Chrissy.JPG',
          },
          {
            name: 'Yvonne Liu',
            role: '联合创始人 · 记者 & 制片人',
            bio: '记者出身的制片人，拥有找准故事角度的本能直觉。Yvonne 负责统筹创作策略与制作流程，确保每一帧画面都物尽其用。',
            photo: '/Yvonne.JPG',
          },
          {
            name: 'Alexa Ge',
            role: '联合创始人 · 纪录片导演',
            bio: '纪录片导演，相信真实感是最有力的转化工具。Alexa 专注于讲述真实故事——那种能让品牌真正被人信任的故事。',
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
                  <img src={m.photo} alt={m.name} class="member-photo" />
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
      filter: grayscale(80%) contrast(1.05);
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
