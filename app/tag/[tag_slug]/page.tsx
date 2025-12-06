// app/tag/[tag_slug]/page.tsx
import Link from 'next/link';
import { getTaggedContent } from '../../tags/mockTags';

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag_slug: string }>;
}) {
  const { tag_slug } = await params;
  const items = getTaggedContent(tag_slug);

  return (
    <div>
      <h1>Tag: {tag_slug}</h1>

      {items.length === 0 && <p>No content found.</p>}

      <ul>
        {items.map((item) => (
          <li key={item.slug}>
            <Link href={item.slug}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
