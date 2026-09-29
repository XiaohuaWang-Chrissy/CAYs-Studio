<script>
  import { lang } from '$lib/stores/lang.svelte.js';
  import { base } from '$app/paths';

  const translations = {
    en: {
      tabs: [
        { id: 'home', label: 'HOME' },
        { id: 'work', label: 'WORK' },
        { id: 'team', label: 'TEAM' },
        { id: 'contact', label: 'CONTACT' },
      ],
      hero: {
        location: 'BASED IN NYC',
        sub: "Your product's first step from zero to viral",
        cta1: 'SEE OUR WORK',
        cta2: 'GET A QUOTE',
      },
      about: {
        label: 'WHO WE ARE',
        body: "CAY's Studio is a New York-based content studio founded by filmmakers, journalists, and documentary directors. We make social video for Chinese brands going global — with a filmmaker's eye for visuals, a journalist's ear for writing, and a clear sense of how stories travel on social platforms.",
        services: [
          'Video Production',
          'Copywriting & Scripting',
          'Documentary-Style Content',
          'Platform Strategy',
        ],
        stats: [
          { value: '5+', label: 'Years of Experience' },
          { value: '24h', label: 'Response Time' },
        ],
      },
      work: {
        label: 'OUR WORK',
        heading: 'Sample Projects',
        intro:
          'From script to screen, we handle it all — scripting, creator casting, filming, and editing.',
        videos: 'sample videos',
        open: 'View project',
        close: 'Close',
        projects: [
          {
            category: 'TikTok Promote · Creator 1',
            year: '2026',
            title: 'TikTok Promote — Creator 1',
            preview: 'tiktok-male',
            desc: "In-app ads for TikTok's Promote feature, fronted by a creator. Shot on the streets of New York, each video pairs talk-to-camera storytelling with motion graphics and in-app screen walkthroughs, breaking Promote down into three simple steps to grow views and followers. Four videos shown.",
            videos: [
              '/tiktok-male1.mp4',
              '/tiktok-male2.mp4',
              '/tiktok-male3.mp4',
              '/tiktok-male4.mp4',
            ],
          },
          {
            category: 'TikTok Promote · Creator 2',
            year: '2026',
            title: 'TikTok Promote — Creator 2',
            preview: 'tiktok-female',
            desc: "In-app ads for TikTok's Promote feature, fronted by a creator. A mix of street vlogs, short skits, and in-app screen walkthroughs, showing how anyone can boost a video and grow their audience with no big budget needed. Four videos shown.",
            videos: [
              '/tiktok-female1.mp4',
              '/tiktok-female2.mp4',
              '/tiktok-female3.mp4',
              '/tiktok-female4.mp4',
            ],
          },
          {
            category: 'Creator Ad · Smart Lighting',
            year: '2026',
            title: 'Lepro · Creator Ads',
            preview: 'lepro',
            desc: 'Creator-led product ads for Lepro, a smart lighting brand — the W1 AI Smart RGB Wall Lights and the LED pen flashlight. Each video is a hands-on, talk-to-camera review shot in a native creator format: unboxing, real-use scenarios at home, and a direct call to action. Two videos shown.',
            videos: ['/flashlight1.mp4', '/flashlight2.mp4'],
          },
          {
            category: 'Social Feed · AI Brand',
            year: '2025',
            title: 'Homture × iFlytek',
            preview: 'homture',
            desc: 'Social feed video production for Homture, a smart home brand developed with iFlytek. We handled scripting, shot all footage in a single day, and structured every clip to be reusable across at least two finished videos — delivering a total of ~50 videos within 10 days. Content spans product-only films with AI integration and actor-led narratives. Four selected videos shown.',
            link: 'https://homture.com/',
            linkLabel: 'Visit Homture',
            videos: [
              '/homture1.mp4',
              '/homture2.mp4',
              '/homture3.mp4',
              '/homture4.mp4',
            ],
          },
        ],
        more: {
          body: "Want to see work in your category? Tell us about your product and we'll send you a sample video matched to it.",
          cta: 'Request a sample video',
        },
      },
      team: {
        label: 'OUR TEAM',
        heading: 'The Team',
        intro:
          'A team of filmmakers, journalists, documentary directors, and a visual art director.',
        members: [
          {
            name: 'Chrissy Wang',
            role: 'Co-Founder · Filmmaker & Creative Director',
            photo: '/Chrissy.JPG',
            website:
              'https://xiaohuawang-chrissy.github.io/my-static-site-personal/',
          },
          {
            name: 'Alexa Ge',
            role: 'Co-Founder · Documentary Filmmaker',
            photo: '/Alexa.JPG',
            photoScale: 1.35,
            website: '/Alexa Portfolio 2026.pdf',
            websiteLabel: 'View Portfolio',
          },
          {
            name: 'Chloe Chi',
            role: 'Marketing Strategist',
            photo: '/Chloe.jpg',
            website: 'https://chcportfolio.cargo.site/',
          },
          {
            name: 'Jade Sun',
            role: 'Art Director',
            photo: '/Jade.jpg',
            photoScale: true,
            website: 'https://www.jadesun.art/',
          },
        ],
        photoSoon: 'Photo coming soon',
        visitSite: 'Visit Website',
      },
      contact: {
        label: 'GET IN TOUCH',
        heading: 'Start a Project\nWith Us',
        body: "Tell us about your project and we'll get back to you within 24 hours.",
        fields: {
          email: 'Your Email',
          msg: 'Tell Us About Your Project',
          cta: 'SEND MESSAGE',
        },
        success: {
          heading: 'Message Sent',
          body: "We'll be in touch within 24 hours.",
          returning: 'Returning to site…',
        },
        error: {
          heading: 'Something Went Wrong',
          body: 'Your message could not be sent. Please try again or email us directly.',
          returning: 'Returning to site…',
        },
      },
      footer: {
        tagline: 'New York City',
        copy: "© 2026 CAY's Studio",
      },
    },
    zh: {
      tabs: [
        { id: 'home', label: '首页' },
        { id: 'work', label: '作品' },
        { id: 'team', label: '团队' },
        { id: 'contact', label: '联系' },
      ],
      hero: {
        location: '纽约工作室',
        sub: '你的商品、品牌与功能，从 0 到 1 打造爆款的第一步',
        cta1: '查看作品',
        cta2: '免费报价',
      },
      about: {
        label: '关于我们',
        body: "CAY's Studio 由电影人、记者与纪录片导演在纽约共同创立，专注为中国品牌出海制作社媒视频内容——以电影人的视觉标准、记者的文字功底，以及对社交平台传播方式的实际理解来创作。",
        services: ['视频制作', '文案与脚本', '纪录片风格内容', '平台内容策略'],
        stats: [
          { value: '5+', label: '从业年限' },
          { value: '24h', label: '响应时间' },
        ],
      },
      work: {
        label: '作品展示',
        heading: '案例作品',
        intro: '从脚本撰写、达人对接，到拍摄与剪辑，我们全流程负责。',
        videos: '条样片',
        open: '查看项目',
        close: '关闭',
        projects: [
          {
            category: 'TikTok Promote · 达人 1',
            year: '2026',
            title: 'TikTok Promote · 达人 1',
            preview: 'tiktok-male',
            desc: '为 TikTok 站内 Promote 推广功能制作的广告，由达人出镜。在纽约街头拍摄，结合口播叙事、动态图形与 App 内操作演示，将 Promote 拆解为三个简单步骤，展示如何提升播放量与粉丝数。此处展示4条。',
            videos: [
              '/tiktok-male1.mp4',
              '/tiktok-male2.mp4',
              '/tiktok-male3.mp4',
              '/tiktok-male4.mp4',
            ],
          },
          {
            category: 'TikTok Promote · 达人 2',
            year: '2026',
            title: 'TikTok Promote · 达人 2',
            preview: 'tiktok-female',
            desc: '为 TikTok 站内 Promote 推广功能制作的广告，由达人出镜。融合街头 vlog、情景短剧与 App 内操作演示，展示无需高预算、人人都能一键推广视频、扩大受众。此处展示4条。',
            videos: [
              '/tiktok-female1.mp4',
              '/tiktok-female2.mp4',
              '/tiktok-female3.mp4',
              '/tiktok-female4.mp4',
            ],
          },
          {
            category: '达人广告 · 智能照明',
            year: '2026',
            title: 'Lepro · 达人广告',
            preview: 'lepro',
            desc: '为智能照明品牌 Lepro 制作的达人出镜产品广告，涵盖 W1 AI 智能 RGB 壁灯与 LED 笔形手电筒。每条视频以达人口播测评的原生形式呈现开箱上手、居家实用场景与直接的购买引导。此处展示2条。',
            videos: ['/flashlight1.mp4', '/flashlight2.mp4'],
          },
          {
            category: '信息流 · AI品牌',
            year: '2025',
            title: 'Homture × 科大讯飞',
            preview: 'homture',
            desc: '为科大讯飞联合开发的智能家居品牌 Homture 制作信息流视频内容。全程负责脚本撰写，一天内完成全部素材拍摄，每段素材可复用于至少两条成品视频，最终在10天内交付约50条视频。内容涵盖纯产品结合AI的影片与演员出镜叙事两种形式，此处展示4条精选。',
            link: 'https://homture.com/',
            linkLabel: '访问 Homture',
            videos: [
              '/homture1.mp4',
              '/homture2.mp4',
              '/homture3.mp4',
              '/homture4.mp4',
            ],
          },
        ],
        more: {
          body: '想看与你品类相关的作品？告诉我们你的产品，我们会为你发送一条匹配的样片。',
          cta: '索取样片',
        },
      },
      team: {
        label: '团队介绍',
        heading: '团队成员',
        intro: '团队由电影人、记者、纪录片导演与视觉艺术总监组成。',
        members: [
          {
            name: 'Chrissy Wang',
            role: '联合创始人 · 电影导演 & 创意总监',
            photo: '/Chrissy.JPG',
            website:
              'https://xiaohuawang-chrissy.github.io/my-static-site-personal/',
          },
          {
            name: 'Alexa Ge',
            role: '联合创始人 · 纪录片导演',
            photo: '/Alexa.JPG',
            photoScale: true,
            website: '/Alexa Portfolio 2026.pdf',
            websiteLabel: '查看作品集',
          },
          {
            name: 'Chloe Chi',
            role: '市场策略',
            photo: '/Chloe.jpg',
            website: 'https://chcportfolio.cargo.site/',
          },
          {
            name: 'Jade Sun',
            role: '艺术总监',
            photo: '/Jade.jpg',
            photoScale: true,
            website: 'https://www.jadesun.art/',
          },
        ],
        photoSoon: '照片即将更新',
        visitSite: '访问个人网站',
      },
      contact: {
        label: '联系我们',
        heading: '开启您的\n下一个项目',
        body: '告诉我们您的需求，我们将在24小时内回复。',
        fields: { email: '您的邮箱', msg: '项目描述', cta: '发送消息' },
        success: {
          heading: '消息已发送',
          body: '我们将在24小时内与您联系。',
          returning: '即将返回网站…',
        },
        error: {
          heading: '发送失败',
          body: '消息未能成功发送，请重试。',
          returning: '即将返回网站…',
        },
      },
      footer: {
        tagline: '纽约',
        copy: "© 2026 CAY's Studio",
      },
    },
  };

  const t = $derived(translations[lang.current]);

  let active = $state('home');
  let formState = $state('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  let selectedProject = $state(null);
  let projectDialog = $state();
  const project = $derived(
    selectedProject === null ? null : t.work.projects[selectedProject]
  );

  function openProject(i) {
    selectedProject = i;
    projectDialog.showModal();
  }

  function closeProject() {
    projectDialog.close();
  }

  // Preview clips play on hover (desktop). Devices without hover just loop them.
  function playPreview(e) {
    e.currentTarget
      .querySelector('video')
      ?.play()
      .catch(() => {});
  }

  function stopPreview(e) {
    const video = e.currentTarget.querySelector('video');
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }

  function autoplayWithoutHover(video) {
    if (!window.matchMedia('(hover: hover)').matches) {
      video.autoplay = true;
      video.play().catch(() => {});
    }
  }

  function go(id) {
    active = id;
  }

  async function submitForm(e) {
    e.preventDefault();
    formState = 'submitting';
    try {
      const res = await fetch(
        'https://formsubmit.co/ajax/xiaohuaw765@gmail.com',
        {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(e.target),
        }
      );
      formState = res.ok ? 'success' : 'error';
    } catch {
      formState = 'error';
    }
    setTimeout(() => {
      window.location.href =
        'https://xiaohuawang-chrissy.github.io/CAYs-Studio/';
    }, 3500);
  }
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
        onclick={() => go(tab.id)}>{tab.label}</button
      >
    {/each}
  </div>
</header>

<!-- ===== CONTENT PANELS ===== -->
<main class="panels">
  <!-- HOME -->
  {#if active === 'home'}
    <div class="panel panel--hero">
      <video
        class="hero-bg"
        src="{base}/hero-reel.mp4"
        poster="{base}/hero-reel.jpg"
        autoplay
        muted
        loop
        playsinline
      >
        <track kind="captions" />
      </video>
      <div class="hero-overlay"></div>
      <div class="hero-body">
        <p class="hero-loc">{t.hero.location}</p>
        <div class="hero-center">
          <h1 class="hero-title">CAY'S STUDIO</h1>
          <div class="hero-rule"></div>
          <p class="hero-sub">{t.hero.sub}</p>
          <div class="hero-ctas">
            <button
              class="hero-cta hero-cta--primary"
              onclick={() => go('work')}>{t.hero.cta1}</button
            >
            <button class="hero-cta" onclick={() => go('contact')}
              >{t.hero.cta2}</button
            >
          </div>
        </div>
      </div>
    </div>
  {/if}

  <!-- WORK -->
  {#if active === 'work'}
    <div class="panel panel--light scrollable">
      <div class="panel-inner panel-inner--wide">
        <div class="section-intro">
          <span class="label">{t.work.label}</span>
          <h2 class="panel-heading">{t.work.heading}</h2>
          <p class="work-intro">{t.work.intro}</p>
        </div>

        <div class="work-grid">
          {#each t.work.projects as item, i (item.preview)}
            <button
              class="work-card"
              onclick={() => openProject(i)}
              onmouseenter={playPreview}
              onmouseleave={stopPreview}
              onfocus={playPreview}
              onblur={stopPreview}
            >
              <div class="work-card-media">
                <video
                  class="work-card-preview"
                  src="{base}/previews/{item.preview}.mp4"
                  poster="{base}/previews/{item.preview}.jpg"
                  muted
                  loop
                  playsinline
                  preload="none"
                  use:autoplayWithoutHover
                ></video>
                <span class="work-card-count"
                  >▶ {item.videos.length} {t.work.videos}</span
                >
              </div>
              <span class="work-tag">{item.category} · {item.year}</span>
              <h3 class="work-card-title">{item.title}</h3>
              <span class="work-card-cta"
                >{t.work.open} <span aria-hidden="true">→</span></span
              >
            </button>
          {/each}
        </div>

        <div class="work-more">
          <div>
            <p class="work-more-body">{t.work.more.body}</p>
          </div>
          <button class="work-more-cta" onclick={() => go('contact')}>
            {t.work.more.cta} <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  {/if}

  <!-- Project detail (opens over any panel) -->
  <dialog
    class="work-modal"
    bind:this={projectDialog}
    onclose={() => (selectedProject = null)}
    onclick={(e) => e.target === projectDialog && closeProject()}
  >
    {#if project}
      <div class="work-modal-inner">
        <button
          class="work-modal-close"
          onclick={closeProject}
          aria-label={t.work.close}>×</button
        >
        <span class="work-tag">{project.category} · {project.year}</span>
        <h3 class="work-modal-title">{project.title}</h3>
        <p class="work-modal-desc">{project.desc}</p>
        {#if project.link}
          <a
            class="work-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.linkLabel} ↗
          </a>
        {/if}
        <div class="work-video-grid">
          {#each project.videos as src (src)}
            <video
              class="work-video"
              src="{base}{src}"
              controls
              playsinline
              preload="metadata"
            >
              <track kind="captions" />
            </video>
          {/each}
        </div>
      </div>
    {/if}
  </dialog>

  <!-- TEAM -->
  {#if active === 'team'}
    <div class="panel panel--light scrollable">
      <div class="panel-inner panel-inner--wide">
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
                  <img
                    src="{base}{m.photo}"
                    alt={m.name}
                    class="member-photo"
                    class:member-photo--zoomed={m.photoScale}
                    style={m.photoScale && typeof m.photoScale === 'number'
                      ? `--base-scale: ${m.photoScale}`
                      : ''}
                  />
                {:else}
                  <div class="member-placeholder">
                    <span>{t.team.photoSoon}</span>
                  </div>
                {/if}
              </div>
              <h3 class="member-name">{m.name}</h3>
              <p class="member-role">{m.role}</p>
              {#if m.website}
                <a
                  href={m.website.startsWith('/')
                    ? `${base}${m.website}`
                    : m.website}
                  class="member-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {m.websiteLabel ?? t.team.visitSite} ↗
                </a>
              {/if}
            </div>
          {/each}
        </div>

        <!-- About the studio -->
        <div class="team-about">
          <span class="label">{t.about.label}</span>
          <p class="team-about-body">{t.about.body}</p>
          <ul class="team-about-services">
            {#each t.about.services as service (service)}
              <li>{service}</li>
            {/each}
          </ul>
          <div class="team-about-stats">
            {#each t.about.stats as stat (stat.label)}
              <div class="stat">
                <span class="stat-num">{stat.value}</span>
                <span class="stat-label">{stat.label}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/if}

  <!-- CONTACT -->
  {#if active === 'contact'}
    <div class="panel panel--dark scrollable">
      {#if formState === 'success' || formState === 'error'}
        <div class="form-result">
          <div
            class="form-result-card"
            class:result--error={formState === 'error'}
          >
            <p class="result-heading">
              {formState === 'success'
                ? t.contact.success.heading
                : t.contact.error.heading}
            </p>
            <p class="result-body">
              {formState === 'success'
                ? t.contact.success.body
                : t.contact.error.body}
            </p>
            <p class="result-returning">
              {formState === 'success'
                ? t.contact.success.returning
                : t.contact.error.returning}
            </p>
          </div>
        </div>
      {:else}
        <div class="panel-inner">
          <div class="section-intro">
            <span class="label light">{t.contact.label}</span>
            <h2 class="panel-heading light">{t.contact.heading}</h2>
          </div>
          <p class="contact-body">{t.contact.body}</p>

          <form class="contact-form" onsubmit={submitForm}>
            <input
              type="hidden"
              name="_subject"
              value="CAY's Studio — New Inquiry"
            />
            <div class="form-group">
              <label for="email">{t.contact.fields.email}</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="message">{t.contact.fields.msg}</label>
              <textarea id="message" name="message" rows="5" required
              ></textarea>
            </div>
            <button
              type="submit"
              class="form-submit"
              disabled={formState === 'submitting'}
            >
              {formState === 'submitting' ? '…' : t.contact.fields.cta}
            </button>
          </form>
        </div>
      {/if}

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

  // Shared "terminal label" type: small mono caps
  @mixin mono-label {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: var(--font-weight-medium);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    background: var(--color-ink);
    border-bottom: 1px solid var(--color-ink-line);
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
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-family: var(--font-display);
    font-weight: var(--font-weight-semibold);
    font-size: 0.95rem;
    letter-spacing: 0.06em;
    color: var(--color-fg);
    padding: 0;

    // Neon block "cursor" in front of the wordmark
    &::before {
      content: '';
      width: 0.6rem;
      height: 0.6rem;
      background: var(--color-neon-pink);
    }
  }

  .lang-btn {
    @include mono-label;
    color: var(--color-neon-cyan);
    border: 1px solid var(--color-neon-cyan);
    padding: 0.35rem 0.8rem;
    min-height: 32px;
    min-width: 52px;
    transition:
      background var(--transition-fast),
      color var(--transition-fast);

    &:hover {
      background: var(--color-neon-cyan);
      color: var(--color-ink);
    }
  }

  /* Tab bar */
  .tab-bar {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    border-top: 1px solid var(--color-ink-line);
    height: 52px;

    &::-webkit-scrollbar {
      display: none;
    }

    @include mobile {
      height: 48px;
    }
  }

  .tab-btn {
    @include mono-label;
    flex: 1;
    min-width: 72px;
    height: 100%;
    color: var(--color-fg-muted);
    border-bottom: 3px solid transparent;
    transition:
      color var(--transition-fast),
      border-color var(--transition-fast);
    white-space: nowrap;
    padding: 0 0.75rem;

    &.active {
      color: var(--color-fg);
      border-bottom-color: var(--color-neon-pink);
    }

    &:hover:not(.active) {
      color: var(--color-neon-cyan);
    }

    @include mobile {
      font-size: 0.62rem;
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

  // Every content panel is dark, with a faint blueprint grid
  .panel--light,
  .panel--dark {
    background-color: var(--color-ink);
    background-image:
      linear-gradient(var(--color-ink-grid) 1px, transparent 1px),
      linear-gradient(90deg, var(--color-ink-grid) 1px, transparent 1px);
    background-size: 48px 48px;
    background-position: -1px -1px;
    color: var(--color-fg);
  }

  .scrollable {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  // Contact: keep the footer pinned to the bottom of the panel
  .panel--dark {
    display: flex;
    flex-direction: column;

    > .panel-inner {
      flex: 1 0 auto;
      width: 100%;
    }
  }

  .panel-inner {
    max-width: 960px;
    margin: 0 auto;
    padding: 3.5rem 2rem 4rem;

    @include mobile {
      padding: 2rem 1.25rem 3rem;
    }

    &--wide {
      max-width: var(--max-width-mid);
    }
  }

  /* ===== HERO ===== */
  .panel--hero {
    display: flex;
    align-items: stretch;
    background: var(--color-ink);
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    // Scanlines on top of a vignette that is darkest behind the title,
    // so burned-in captions in the reel don't compete with it
    background:
      repeating-linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.18) 0 1px,
        transparent 1px 3px
      ),
      radial-gradient(
        ellipse at center,
        rgba(11, 11, 16, 0.82) 0%,
        rgba(11, 11, 16, 0.55) 80%
      );
  }

  .hero-body {
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2.5rem;

    @include mobile {
      padding: 1.5rem 1.25rem 2rem;
    }
  }

  .hero-loc {
    @include mono-label;
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-fg);
    background: var(--color-ink);
    border: 1px solid var(--color-ink-line);
    padding: 0.4rem 0.75rem;
    margin: 0;

    // "Live" indicator dot
    &::before {
      content: '';
      width: 0.45rem;
      height: 0.45rem;
      border-radius: 50%;
      background: var(--color-neon-pink);
      box-shadow: 0 0 8px var(--color-neon-pink);
    }
  }

  .hero-center {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .hero-title {
    font-family: var(--font-display);
    font-weight: var(--font-weight-semibold);
    font-size: clamp(2.8rem, 10vw, 8rem);
    letter-spacing: -0.02em;
    line-height: 0.95;
    color: var(--color-fg);
    // Offset pink/cyan copies: a static "chromatic" pop, no animation
    text-shadow:
      -3px 0 var(--color-neon-cyan),
      3px 0 var(--color-neon-pink);
    margin-bottom: 1.5rem;
  }

  .hero-rule {
    width: 3.5rem;
    height: 4px;
    background: var(--color-acid);
    margin-bottom: 1.5rem;
  }

  .hero-sub {
    @include mono-label;
    font-size: clamp(0.72rem, 1.4vw, 0.9rem);
    color: var(--color-fg);
    background: var(--color-ink);
    padding: 0.5rem 0.9rem;
    margin: 0 0 2.25rem;
    text-wrap: balance;
  }

  .hero-ctas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem 1.25rem;
  }

  .hero-cta {
    @include mono-label;
    font-size: 0.8rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-fg);
    background: var(--color-ink);
    border: 2px solid var(--color-fg);
    padding: 0.9rem 1.6rem;
    min-height: 48px;
    transition:
      transform var(--transition-fast),
      box-shadow var(--transition-fast);

    &:hover {
      transform: translate(-3px, -3px);
      box-shadow: var(--shadow-pop-cyan);
    }

    &--primary {
      color: var(--color-ink);
      background: var(--color-acid);
      border-color: var(--color-acid);
      box-shadow: var(--shadow-pop-pink);

      &:hover {
        box-shadow: 9px 9px 0 var(--color-neon-pink);
      }
    }
  }

  /* ===== SECTION INTRO ===== */
  .section-intro {
    margin-bottom: 2.5rem;
  }

  .label {
    @include mono-label;
    display: block;
    color: var(--color-neon-pink);
    margin-bottom: 0.75rem;

    &::before {
      content: '// ';
      color: var(--color-fg-muted);
    }
  }

  .panel-heading {
    font-family: var(--font-display);
    font-weight: var(--font-weight-semibold);
    font-size: clamp(2.2rem, 5.5vw, 3.6rem);
    letter-spacing: -0.02em;
    line-height: 1.05;
    white-space: pre-line;
    color: var(--color-fg);
  }

  /* ===== WORK ===== */
  .work-intro {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-fg-muted);
    max-width: 560px;
    margin-top: 1rem;
  }

  .work-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.75rem;

    @include mobile {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem 1rem;
    }
  }

  .work-card {
    all: unset;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    cursor: pointer;

    &:focus-visible {
      outline: 2px solid var(--color-neon-cyan);
      outline-offset: 0.5rem;
    }
  }

  .work-card-media {
    position: relative;
    aspect-ratio: 9 / 16;
    overflow: hidden;
    background: var(--color-ink-raised);
    border: 2px solid var(--color-ink-line);
    margin-bottom: 0.5rem;
    transition:
      transform var(--transition-fast),
      box-shadow var(--transition-fast),
      border-color var(--transition-fast);
  }

  .work-card-preview {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .work-card-count {
    @include mono-label;
    font-size: 0.6rem;
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
    color: var(--color-acid);
    background: var(--color-ink);
    padding: 0.3rem 0.5rem;
  }

  .work-card:hover,
  .work-card:focus-visible {
    .work-card-media {
      transform: translate(-4px, -4px);
      border-color: var(--color-neon-pink);
      box-shadow: var(--shadow-pop-pink);
    }

    .work-card-cta {
      color: var(--color-acid);
    }
  }

  .work-tag {
    @include mono-label;
    font-size: 0.6rem;
    color: var(--color-neon-cyan);
  }

  .work-card-title {
    font-family: var(--font-display);
    font-size: clamp(1.05rem, 1.6vw, 1.25rem);
    font-weight: var(--font-weight-semibold);
    color: var(--color-fg);
    line-height: 1.25;
    margin: 0;
  }

  .work-card-cta {
    @include mono-label;
    width: fit-content;
    color: var(--color-neon-pink);
    margin-top: 0.25rem;
    transition: color var(--transition-fast);
  }

  .work-more {
    margin-top: 4rem;
    padding: 2rem 2.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    background: var(--color-ink-raised);
    border: 2px solid var(--color-ink-line);
    border-left: 6px solid var(--color-neon-pink);

    @include mobile {
      flex-direction: column;
      align-items: flex-start;
      padding: 1.5rem 1.25rem;
      gap: 1.25rem;
    }
  }

  .work-more-body {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--color-fg);
    max-width: 520px;
    margin: 0;
  }

  .work-more-cta {
    @include mono-label;
    font-size: 0.78rem;
    font-weight: var(--font-weight-semibold);
    flex-shrink: 0;
    color: var(--color-ink);
    background: var(--color-acid);
    padding: 0.9rem 1.5rem;
    min-height: 48px;
    box-shadow: var(--shadow-pop-pink);
    transition:
      transform var(--transition-fast),
      box-shadow var(--transition-fast);

    &:hover {
      transform: translate(-3px, -3px);
      box-shadow: 9px 9px 0 var(--color-neon-pink);
    }
  }

  /* Project detail dialog */
  .work-modal {
    width: min(1020px, calc(100vw - 2rem));
    max-height: calc(100vh - 2rem);
    margin: auto;
    padding: 0;
    outline: none;
    background: var(--color-ink-raised);
    color: var(--color-fg);
    border: 2px solid var(--color-neon-pink);
    box-shadow: 10px 10px 0 var(--color-neon-cyan);

    &::backdrop {
      background: rgba(11, 11, 16, 0.85);
    }
  }

  .work-modal-inner {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    padding: 2.5rem;

    @include mobile {
      padding: 1.5rem 1.25rem;
    }
  }

  .work-modal-close {
    @include mono-label;
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1.1rem;
    color: var(--color-fg);
    border: 1px solid var(--color-ink-line);
    transition:
      background var(--transition-fast),
      color var(--transition-fast);

    &:hover,
    &:focus-visible {
      background: var(--color-neon-pink);
      color: var(--color-ink);
    }
  }

  .work-modal-title {
    font-family: var(--font-display);
    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
    font-weight: var(--font-weight-semibold);
    letter-spacing: -0.01em;
    line-height: 1.2;
    margin: 0;
    padding-right: 3rem;
  }

  .work-modal-desc {
    font-size: 0.95rem;
    line-height: 1.75;
    color: var(--color-fg-muted);
    margin: 0;
    max-width: 640px;
  }

  .work-link {
    @include mono-label;
    width: fit-content;
    color: var(--color-acid);
    border-bottom: 2px solid var(--color-acid);
    padding-bottom: 0.15rem;
  }

  .work-video-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.75rem;
    margin-top: 1rem;

    @include mobile {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }
  }

  .work-video {
    width: 100%;
    aspect-ratio: 9 / 16;
    display: block;
    object-fit: cover;
    background: var(--color-ink);
    border: 1px solid var(--color-ink-line);
  }

  /* ===== TEAM ===== */
  .team-intro {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--color-fg-muted);
    margin-bottom: 2.5rem;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.75rem;

    @include mobile {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.75rem 1rem;
    }
  }

  .member {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .member-photo-wrap {
    aspect-ratio: 3 / 4;
    overflow: hidden;
    background: var(--color-ink-raised);
    border: 2px solid var(--color-ink-line);
    margin-bottom: 0.4rem;
    transition:
      transform var(--transition-fast),
      box-shadow var(--transition-fast),
      border-color var(--transition-fast);

    .member:hover & {
      transform: translate(-4px, -4px);
      border-color: var(--color-neon-cyan);
      box-shadow: var(--shadow-pop-cyan);
    }
  }

  .member-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    // Black and white until hovered
    filter: grayscale(100%) contrast(1.05);
    transition:
      filter 0.4s ease,
      transform 0.5s ease;

    .member:hover & {
      filter: grayscale(0%) contrast(1);
    }

    &--zoomed {
      transform: scale(var(--base-scale, 1.18));
      object-position: center center;
    }
  }

  .member-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      @include mono-label;
      color: var(--color-fg-muted);
      text-align: center;
      padding: 0.5rem;
    }
  }

  .member-name {
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-fg);
    margin: 0;
  }

  .member-role {
    @include mono-label;
    font-size: 0.62rem;
    line-height: 1.6;
    color: var(--color-neon-cyan);
    margin: 0 0 0.75rem;
  }

  .member-link {
    @include mono-label;
    width: fit-content;
    // Line links up along the bottom even when roles wrap to two lines
    margin-top: auto;
    color: var(--color-neon-pink);
    border-bottom: 1px solid currentColor;
    padding-bottom: 1px;

    &:hover {
      opacity: 1;
      color: var(--color-acid);
    }
  }

  .team-about {
    margin-top: 4rem;
    padding: 2rem;
    background: var(--color-ink-raised);
    border: 2px solid var(--color-ink-line);

    @include mobile {
      padding: 1.5rem 1.25rem;
    }
  }

  .team-about-body {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--color-fg);
    margin: 0 0 1.5rem;
  }

  .team-about-services {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    li {
      @include mono-label;
      font-size: 0.62rem;
      color: var(--color-neon-cyan);
      border: 1px solid var(--color-neon-cyan);
      padding: 0.45rem 0.7rem;
    }
  }

  .team-about-stats {
    display: flex;
    gap: 3rem;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .stat-num {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-acid);
    line-height: 1;
  }

  .stat-label {
    @include mono-label;
    font-size: 0.6rem;
    color: var(--color-fg-muted);
  }

  /* ===== CONTACT ===== */
  /* ===== FORM RESULT SCREEN ===== */
  .form-result {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: var(--color-ink);
  }

  .form-result-card {
    text-align: center;
    max-width: 420px;

    &.result--error .result-heading {
      color: var(--color-neon-pink);
    }
  }

  .result-heading {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: var(--font-weight-semibold);
    color: var(--color-acid);
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  .result-body {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--color-fg);
    margin-bottom: 2rem;
  }

  .result-returning {
    @include mono-label;
    color: var(--color-fg-muted);
    margin: 0;
  }

  .contact-body {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--color-fg-muted);
    margin: 0 0 2rem;
    max-width: 520px;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 560px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      @include mono-label;
      color: var(--color-neon-cyan);
    }

    input,
    textarea {
      background: var(--color-ink-raised);
      border: 2px solid var(--color-ink-line);
      color: var(--color-fg);
      font-family: var(--font-sans);
      font-size: 0.95rem;
      padding: 0.9rem 1rem;
      transition:
        border-color var(--transition-fast),
        box-shadow var(--transition-fast);
      resize: none;
      -webkit-appearance: none;
      appearance: none;
      border-radius: 0;
      min-height: 44px;

      &:focus {
        outline: none;
        border-color: var(--color-neon-cyan);
        box-shadow: 4px 4px 0 var(--color-neon-cyan);
      }
    }
  }

  .form-submit {
    @include mono-label;
    font-size: 0.8rem;
    font-weight: var(--font-weight-semibold);
    align-self: flex-start;
    color: var(--color-ink);
    background: var(--color-acid);
    padding: 0.9rem 2.5rem;
    min-height: 48px;
    box-shadow: var(--shadow-pop-pink);
    transition:
      transform var(--transition-fast),
      box-shadow var(--transition-fast);

    &:hover:not(:disabled) {
      transform: translate(-3px, -3px);
      box-shadow: 9px 9px 0 var(--color-neon-pink);
    }

    &:disabled {
      opacity: 0.6;
      cursor: wait;
    }
  }

  /* ===== PANEL FOOTER ===== */
  .panel-footer {
    padding: 2rem;
    border-top: 1px solid var(--color-ink-line);
    background: var(--color-ink);
    text-align: center;
  }

  .footer-tagline {
    @include mono-label;
    color: var(--color-fg-muted);
    margin-bottom: 0.3rem;
  }

  .footer-copy {
    @include mono-label;
    font-size: 0.6rem;
    color: var(--color-fg-muted);
    opacity: 0.6;
    margin: 0;
  }
</style>
