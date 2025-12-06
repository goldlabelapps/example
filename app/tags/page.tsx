// /Users/goldlabel/GitHub/example/app/tags/page.tsx
import Link from 'next/link';
import { getAllTags } from '../tags/mockTags';

export default async function TagsIndexPage() {
  const tags = await getAllTags(); // return array of tag strings

  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag: any) => (
          <li key={tag}>
            <Link href={`/tag/${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
