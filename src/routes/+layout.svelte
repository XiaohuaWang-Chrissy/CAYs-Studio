<!--
@component
This is the LAYOUT file.
It wraps every page on your site.
Use it for headers, footers, and navigation that appear on all pages.
-->
<script>
  // Import global styles
  import '../app.scss';

  // Import site-wide components
  import SiteHeader from '$lib/components/Layout/SiteHeader.svelte';
  import SiteFooter from '$lib/components/Layout/SiteFooter.svelte';

  // Access page-level settings (from +page.js)
  import { page } from '$app/state';

  import { lang } from '$lib/stores/lang.svelte.js';

  // In Svelte 5, we use $props() to receive the page content
  let { children } = $props();

  $effect(() => {
    document.documentElement.lang = lang.current === 'zh' ? 'zh' : 'en';
  });
</script>

{#if page.data.showHeader !== false}
  <SiteHeader />
{/if}

<main>
  <!-- This renders the current page's content -->
  {@render children()}
</main>

{#if page.data.showFooter !== false}
  <SiteFooter />
{/if}

<style>
  /* Styles here only apply to this layout */
  main {
    min-height: 100vh;
  }
</style>
