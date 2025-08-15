import type { PageLoad } from './$types';
import type { BlogPost } from '$lib/types/blog';

export const load: PageLoad = async ({ fetch }) => {
	try {
		// Get all post modules
		const postModules = import.meta.glob('./posts/*.{md,svx}', { eager: true });

		const posts: BlogPost[] = [];

		// Process each post module
		for (const [path, module] of Object.entries(postModules)) {
			const postModule = module as any;

			// Extract slug from file path
			const slug =
				path
					.split('/')
					.pop()
					?.replace(/\.(md|svx)$/, '') || '';

			// Skip if no metadata or not published
			if (!postModule.metadata || postModule.metadata.published === false) {
				continue;
			}

			// Create preview from excerpt or fallback text
			const preview = postModule.metadata.excerpt || 'Read this blog post to learn more...';

			const post: BlogPost = {
				slug,
				title: postModule.metadata.title || 'Untitled',
				excerpt: postModule.metadata.excerpt,
				date: postModule.metadata.date || new Date().toISOString(),
				tags: postModule.metadata.tags || [],
				coverImage: postModule.metadata.coverImage,
				author: postModule.metadata.author,
				content: '', // Not needed for listing page
				preview,
				published: postModule.metadata.published !== false
			};

			posts.push(post);
		}

		// Sort posts by date (newest first)
		posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

		return {
			posts
		};
	} catch (error) {
		console.error('Error loading blog posts:', error);
		return {
			posts: []
		};
	}
};
