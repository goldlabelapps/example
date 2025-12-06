// /Users/goldlabel/GitHub/example/app/tags/mockTags.ts
export const MOCK_CONTENT = [
  {
    title: 'Understanding React Server Components',
    slug: '/work/react/server-components',
    tags: ['react', 'frontend', 'architecture'],
  },
  {
    title: 'English for Software Developers',
    slug: '/work/tefl',
    tags: ['tefl', 'english', 'education'],
  },
  {
    title: 'GraphQL vs REST',
    slug: '/work/api/graphql-vs-rest',
    tags: ['api', 'architecture', 'backend'],
  },
];

export function getAllTags() {
  const set = new Set<string>();
  MOCK_CONTENT.forEach((item) => item.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export function getTaggedContent(tag: string) {
  return MOCK_CONTENT.filter((item) => item.tags.includes(tag));
}
