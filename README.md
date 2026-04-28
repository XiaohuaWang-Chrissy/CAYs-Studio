# CAY's Studio — Official Website

Website for **CAY's Studio**, a New York-based creative content studio specializing in social media advertising video production (信息流视频制作) for Chinese brands entering global markets.

Built with [SvelteKit](https://kit.svelte.dev/) + SCSS.

---

## Features

- **Tab-based navigation** — Home, Work, About, Team, Contact each live in their own tab (no full-page scroll)
- **EN / 中文 toggle** — one-click language switch, all copy switches instantly
- **Black-and-white team photos** — with a subtle color reveal on hover
- **Video hero** — full-screen black placeholder ready to swap for a background video
- **Work samples** — embedded video player for client reels
- **Mobile-first layout** — horizontally scrollable tab bar, touch-friendly targets, responsive grids
- **Warm design system** — Cormorant Garamond (display) + Montserrat (UI), cream / dark / gold palette

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── app.scss                    # Global design tokens & base styles
├── lib/
│   └── stores/
│       └── lang.svelte.js      # Reactive EN/ZH language store
└── routes/
    └── +page.svelte            # Main single-page app (all tabs)

static/
├── Chrissy.JPG                 # Team photo
├── Yvonne.JPG                  # Team photo
├── secornd story - final draft.mp4   # Work sample video
└── Profile-Shuo Cai.mp4              # Work sample video
```

---

## Swapping the Hero Background Video

The hero section currently shows a plain black placeholder. To replace it with a video:

1. Copy your video file to `static/` (e.g. `hero.mp4`)
2. In `+page.svelte`, find the `.hero-bg` div and replace it:

```svelte
<!-- before -->
<div class="hero-bg"></div>

<!-- after -->
<video class="hero-bg" src="/hero.mp4" autoplay muted loop playsinline>
  <track kind="captions" />
</video>
```

3. Add CSS so the video fills the section:

```scss
.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## Adding Alexa's Photo

Once the photo is available:

1. Copy it to `static/Alexa.JPG`
2. In `+page.svelte`, update both translation objects (English and Chinese) in the `team.members` array:

```js
{ name: 'Alexa', role: 'Co-Founder · Strategist', photo: '/Alexa.JPG' }
```

---

## Adding Work Samples

Add a new video file to `static/`, then add an entry to the `work.items` array in both translation objects inside `+page.svelte`:

```js
{ src: '/your-video.mp4', caption: 'Campaign Title · Brand' }
```

---

## Founders

| Name    | Role                    |
|---------|-------------------------|
| Chrissy | Co-Founder · Creative Director |
| Yvonne  | Co-Founder · Producer   |
| Alexa   | Co-Founder · Strategist *(photo pending)* |

---

## Deployment

Push to `main` to auto-deploy via GitHub Actions to GitHub Pages.

1. Go to **Settings → Pages**
2. Under Source, select **GitHub Actions**

Live at `https://<your-username>.github.io/<repo-name>/`
