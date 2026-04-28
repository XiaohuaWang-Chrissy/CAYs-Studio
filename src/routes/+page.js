import content from '$lib/data/content.yaml';

export const load = () => {
  return {
    showHeader: false,
    showFooter: false,
    content,
  };
};