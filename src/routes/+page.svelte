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
        homture: {
          category: 'Social Feed · AI Brand',
          year: '2024',
          title: 'Homture × iFlytek',
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
        brandLabel: 'BRAND CASES',
        brands: [
          {
            category: 'Brand Campaign · Beauty',
            year: '2022',
            title: 'Spring Campaign',
            desc: 'Full-cycle campaign production for a leading global beauty brand — concept, on-set direction, and post-production for a seasonal product launch.',
            link: 'https://www.youtube.com/watch?v=5YVKqj5TeQA',
            linkLabel: 'Watch Film',
          },
          {
            category: 'F&B · Social Campaign',
            year: '2023',
            title: 'Limited Edition Launch',
            desc: 'Campaign strategy and creative execution for a major F&B chain\'s limited-edition product, developed with a top youth entertainment group.',
          },
          {
            category: 'F&B · IP Collaboration',
            year: '2024',
            title: 'Cross-Brand IP Campaign',
            desc: 'Creative strategy and content production for a cross-brand IP collaboration across three national sales channels — sold out at launch.',
          },
          {
            category: 'DTC · Social Content',
            year: '2023',
            title: 'U.S. Market Entry Content',
            desc: 'Instagram content strategy and production for DTC brands in consumer electronics, beauty accessories, and outdoor sports entering the U.S. market.',
          },
        ],
        more: 'More projects coming soon',
      },
      team: {
        label: 'OUR TEAM',
        heading: 'The Team',
        intro: 'A team of filmmakers, journalists, documentary directors, and a visual art director.',
        members: [
          {
            name: 'Chrissy Wang',
            role: 'Co-Founder · Filmmaker & Creative Director',
            bio: 'Documentary producer and motion graphics designer with a background in data journalism. Leads creative direction and visual storytelling across social content production.',
            photo: '/Chrissy.JPG',
            website: 'https://xiaohuawang-chrissy.github.io/my-static-site-personal/',
          },
          {
            name: 'Alexa Ge',
            role: 'Co-Founder · Documentary Filmmaker',
            bio: 'Brand strategist and video producer with experience in FMCG campaigns, social content, and U.S. market entry for Chinese brands.',
            photo: '/Alexa.JPG',
            photoScale: 1.35,
            website: '/Alexa Portfolio 2026.pdf',
            websiteLabel: 'View Portfolio',
          },
          {
            name: 'Yvonne Liu',
            role: 'Co-Founder · Journalist & Producer',
            bio: 'Writer and designer with a background in journalism, photography, and visual storytelling. Handles scripting, content strategy, and production coordination.',
            photo: '/Yvonne.JPG',
            website: 'https://www.yv1-1onne.com/',
          },
          {
            name: 'Jade Sun',
            role: 'Art Director',
            bio: 'Visual artist working across photography, graphic design, and moving image. Shapes the visual identity and aesthetic direction of content.',
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
        body: 'Tell us about your project and we\'ll get back to you within 24 hours.',
        fields: { email: 'Your Email', msg: 'Tell Us About Your Project', cta: 'SEND MESSAGE' },
        success: {
          heading: 'Message Sent',
          body: 'We\'ll be in touch within 24 hours.',
          returning: 'Returning to site…',
        },
        error: {
          heading: 'Something Went Wrong',
          body: 'Your message could not be sent. Please try again or email us directly.',
          returning: 'Returning to site…',
        },
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
        homture: {
          category: '信息流 · AI品牌',
          year: '2024',
          title: 'Homture × 科大讯飞',
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
        brandLabel: '品牌案例',
        brands: [
          {
            category: '品牌大片 · 美妆',
            year: '2022',
            title: '春季营销大片',
            desc: '为全球头部美妆品牌提供春季新品大片全流程制作——创意概念、现场执导与后期合成。',
            link: 'https://www.youtube.com/watch?v=5YVKqj5TeQA',
            linkLabel: '观看影片',
          },
          {
            category: '餐饮 · 社交营销',
            year: '2023',
            title: '限定新品上市',
            desc: '为头部餐饮品牌策划并执行限定款新品上市全案，联合顶流青年音乐团体进行创意开发。',
          },
          {
            category: '餐饮 · IP联名',
            year: '2024',
            title: 'IP联名新品落地',
            desc: '跨品牌IP联名项目创意策略与内容制作，联动三大全国渠道同步上市，首批售罄。',
          },
          {
            category: 'DTC · 海外社媒',
            year: '2023',
            title: '品牌出海内容运营',
            desc: '消费电子、美妆及户外运动DTC品牌进入美国市场的Instagram内容策略与生产执行。',
          },
        ],
        more: '更多内容即将上线',
      },
      team: {
        label: '团队介绍',
        heading: '团队成员',
        intro: '团队由电影人、记者、纪录片导演与视觉艺术总监组成。',
        members: [
          {
            name: 'Chrissy Wang',
            role: '联合创始人 · 电影导演 & 创意总监',
            bio: '纪录片导演与动态图形设计师，具有数据新闻背景，负责社媒内容的创意方向与视觉叙事。',
            photo: '/Chrissy.JPG',
            website: 'https://xiaohuawang-chrissy.github.io/my-static-site-personal/',
          },
          {
            name: 'Alexa Ge',
            role: '联合创始人 · 纪录片导演',
            bio: '品牌策略与视频制作，有快消品牌营销、社媒内容及中国品牌美国市场落地的实战经验。',
            photo: '/Alexa.JPG',
            photoScale: true,
            website: '/Alexa Portfolio 2026.pdf',
            websiteLabel: '查看作品集',
          },
          {
            name: 'Yvonne Liu',
            role: '联合创始人 · 记者 & 制片人',
            bio: '写作者与设计师，具有新闻、摄影与视觉叙事背景，负责脚本创作、内容策略与项目统筹。',
            photo: '/Yvonne.JPG',
            website: 'https://www.yv1-1onne.com/',
          },
          {
            name: 'Jade Sun',
            role: '艺术总监',
            bio: '视觉艺术家，创作涵盖摄影、平面设计与影像，负责内容的视觉风格与美术方向。',
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
        tagline: '电影人 · 记者 · 纪录片导演 · 纽约',
        copy: '© 2025 CAY\'s Studio',
      },
    },
  };

  const t = $derived(translations[lang.current]);

  let active = $state('home');
  let formState = $state('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  function go(id) { active = id; }

  async function submitForm(e) {
    e.preventDefault();
    formState = 'submitting';
    try {
      const res = await fetch('https://formsubmit.co/ajax/xiaohuaw765@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target),
      });
      formState = res.ok ? 'success' : 'error';
    } catch {
      formState = 'error';
    }
    setTimeout(() => {
      window.location.href = 'https://xiaohuawang-chrissy.github.io/CAYs-Studio/';
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
      <video class="hero-bg" src="{base}/herovideo.mp4" autoplay muted loop playsinline>
        <track kind="captions" />
      </video>
      <div class="hero-overlay"></div>
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

        <!-- Homture featured project -->
        <div class="work-featured">
          <div class="work-meta-row">
            <span class="work-tag">{t.work.homture.category}</span>
            <span class="work-year">{t.work.homture.year}</span>
          </div>
          <h3 class="work-featured-title">{t.work.homture.title}</h3>
          <p class="work-featured-desc">{t.work.homture.desc}</p>
          <a class="work-link" href={t.work.homture.link} target="_blank" rel="noopener noreferrer">
            {t.work.homture.linkLabel}
          </a>
          <div class="homture-grid">
            {#each t.work.homture.videos as src}
              <video
                class="homture-video"
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

        <!-- Brand cases -->
        <div class="brand-section-label">
          <span class="label">{t.work.brandLabel}</span>
        </div>
        <div class="work-grid">
          {#each t.work.brands as item}
            <div class="work-card work-card--project">
              <div class="work-meta-row">
                <span class="work-tag">{item.category}</span>
                <span class="work-year">{item.year}</span>
              </div>
              <h3 class="work-card-title">{item.title}</h3>
              <p class="work-card-desc">{item.desc}</p>
              {#if item.link}
                <a class="work-link" href={item.link} target="_blank" rel="noopener noreferrer">{item.linkLabel}</a>
              {/if}
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
      <div class="panel-inner panel-inner--team">
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
                  <img src="{base}{m.photo}" alt={m.name} class="member-photo" class:member-photo--zoomed={m.photoScale} style={m.photoScale && typeof m.photoScale === 'number' ? `--base-scale: ${m.photoScale}` : ''} />
                {:else}
                  <div class="member-placeholder">
                    <span>{t.team.photoSoon}</span>
                  </div>
                {/if}
              </div>
              <h3 class="member-name">{m.name}</h3>
              <p class="member-role">{m.role}</p>
              <p class="member-bio">{m.bio}</p>
              {#if m.website}
                <a href={m.website.startsWith('/') ? `${base}${m.website}` : m.website} class="member-link" target="_blank" rel="noopener noreferrer">
                  {m.websiteLabel ?? t.team.visitSite} ↗
                </a>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- CONTACT -->
  {#if active === 'contact'}
    <div class="panel panel--dark scrollable">

      {#if formState === 'success' || formState === 'error'}
        <div class="form-result">
          <div class="form-result-card" class:result--error={formState === 'error'}>
            <p class="result-heading">
              {formState === 'success' ? t.contact.success.heading : t.contact.error.heading}
            </p>
            <p class="result-body">
              {formState === 'success' ? t.contact.success.body : t.contact.error.body}
            </p>
            <p class="result-returning">
              {formState === 'success' ? t.contact.success.returning : t.contact.error.returning}
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
            <input type="hidden" name="_subject" value="CAY's Studio — New Inquiry" />
            <div class="form-group">
              <label for="email">{t.contact.fields.email}</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="message">{t.contact.fields.msg}</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="form-submit" disabled={formState === 'submitting'}>
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

    &--team {
      max-width: 560px;

      @include mobile {
        max-width: 100%;
      }
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
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1;
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
    font-weight: var(--font-weight-medium);
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    letter-spacing: 0.32em;
    color: rgba(255,255,255,0.92);
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
  .work-featured {
    padding: 2rem 2.5rem;
    background: var(--color-black);
    color: var(--color-cream);
    margin-bottom: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    @include mobile {
      padding: 1.5rem;
    }
  }

  .work-meta-row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .work-tag {
    font-family: var(--font-sans);
    font-size: 0.55rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-gold);
  }

  .work-year {
    font-family: var(--font-sans);
    font-size: 0.55rem;
    letter-spacing: 0.15em;
    color: rgba(247, 242, 235, 0.4);
  }

  .work-featured-title {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 300;
    font-style: italic;
    color: var(--color-cream);
    margin: 0;
    line-height: 1.1;
  }

  .work-featured-desc {
    font-family: var(--font-sans);
    font-size: 0.78rem;
    line-height: 1.65;
    color: rgba(247, 242, 235, 0.65);
    margin: 0;
    max-width: 540px;
  }

  .work-link {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: 0.58rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-gold);
    text-decoration: none;
    border-bottom: 1px solid var(--color-gold);
    padding-bottom: 0.15rem;
    width: fit-content;
    margin-top: 0.25rem;

    &:hover { opacity: 0.7; }
  }

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
    background: var(--color-black);
  }

  .work-card--project {
    padding: 1.5rem;
    gap: 0.55rem;

    .work-year { color: rgba(247, 242, 235, 0.3); }
  }

  .homture-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.6rem;
    margin-top: 0.5rem;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mobile {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.4rem;
    }
  }

  .homture-video {
    width: 100%;
    aspect-ratio: 9 / 16;
    display: block;
    object-fit: cover;
    background: #1a1a1a;
  }

  .brand-section-label {
    margin-bottom: 1rem;
    padding-top: 0.25rem;
  }

  .work-card-title {
    font-family: var(--font-display);
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    font-weight: 300;
    font-style: italic;
    color: var(--color-cream);
    margin: 0;
    line-height: 1.2;
  }

  .work-card-desc {
    font-family: var(--font-sans);
    font-size: 0.72rem;
    line-height: 1.6;
    color: rgba(247, 242, 235, 0.6);
    margin: 0;
    flex: 1;
  }

  .work-more {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 2.5rem;

    @include mobile {
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem 1rem;
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

    &--zoomed {
      transform: scale(var(--base-scale, 1.18));
      object-position: center center;
    }

    .member:hover &--zoomed {
      transform: scale(calc(var(--base-scale, 1.18) + 0.05));
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
    margin: 0 0 0.75rem;
  }

  .member-link {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    color: var(--color-dark);
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid var(--color-dark);
    padding-bottom: 1px;
    transition: opacity 0.2s;

    &:hover { opacity: 0.45; }
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
  /* ===== FORM RESULT SCREEN ===== */
  .form-result {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: var(--color-dark);
  }

  .form-result-card {
    text-align: center;
    max-width: 420px;

    &.result--error .result-heading {
      color: #e07070;
    }
  }

  .result-heading {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: var(--font-weight-light);
    color: var(--color-white);
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  .result-body {
    font-size: 0.85rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.5);
    margin-bottom: 2rem;
  }

  .result-returning {
    font-family: var(--font-sans);
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    color: rgba(255,255,255,0.2);
    text-transform: uppercase;
    margin: 0;
  }

  .contact-body {
    font-size: 0.9rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.4);
    margin: 1.5rem 0 1rem;
    max-width: 520px;
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
