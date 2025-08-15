# GUWE Blog System

This directory contains the blog functionality for the GUWE website, built with SvelteKit and MDsveX.

## Structure

```
blog/
├── +page.svelte          # Blog listing page
├── +page.ts              # Load function for blog posts
├── posts/                # Directory for blog posts
│   ├── [slug]/
│   │   ├── +page.svelte  # Individual post page
│   │   └── +page.ts      # Load function for individual posts
│   ├── welcome-to-guwe-blog.svx
│   └── sveltekit-best-practices.svx
└── README.md             # This file
```

## Writing Blog Posts

Blog posts are written in MDsveX format (`.svx` files) and placed in the `posts/` directory.

### Post Format

Each post should start with YAML frontmatter containing metadata:

```yaml
---
title: 'Your Post Title'
excerpt: 'A brief description of your post'
date: '2024-01-15'
tags: ['tag1', 'tag2', 'tag3']
coverImage: '/blog/your-image.jpg'
author:
  name: 'Author Name'
  avatar: '/team/author-avatar.jpg'
  bio: 'Author bio'
published: true
---
```

### Required Fields

- `title`: The post title
- `date`: Publication date in YYYY-MM-DD format
- `published`: Set to `true` to make the post visible

### Optional Fields

- `excerpt`: Brief description for the post listing
- `tags`: Array of tags for categorization
- `coverImage`: Path to cover image
- `author`: Author information object

### Content

After the frontmatter, write your content in Markdown. You can also use Svelte components:

```markdown
# Your Post Title

Regular markdown content here.

## Interactive Components

<script>
  let count = 0;
</script>

<button onclick={() => count++}>
Count: {count}
</button>
```

## Features

- **Automatic Post Discovery**: Posts are automatically discovered from the `posts/` directory
- **SEO Optimized**: Proper meta tags and Open Graph support
- **Responsive Design**: Mobile-friendly layout
- **Reading Time**: Automatic reading time calculation
- **Tag System**: Categorize posts with tags
- **Author Support**: Rich author information
- **Draft Support**: Use `published: false` to hide posts

## Adding New Posts

1. Create a new `.svx` file in the `posts/` directory
2. Add the required frontmatter
3. Write your content in Markdown
4. The post will automatically appear on the blog

## Styling

The blog uses Tailwind CSS with the `@tailwindcss/typography` plugin for beautiful prose styling. Posts are automatically styled with the `prose` classes.

## Development

To test your blog posts locally:

```bash
pnpm dev
```

Then navigate to `/blog` to see your posts.

## Deployment

Blog posts are statically generated at build time, so they'll be fast and SEO-friendly in production.
