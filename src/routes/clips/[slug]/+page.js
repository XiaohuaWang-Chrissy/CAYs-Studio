import content from '$lib/data/content.yaml';

export const load = ({ params }) => {
  const clip = content.clips.find((c) => c.slug === params.slug);

  return {
    showHeader: false,
    showFooter: false,
    profile: content.profile,
    clip,
  };
};