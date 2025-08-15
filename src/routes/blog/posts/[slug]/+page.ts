import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { BlogPost } from '$lib/types/blog';

export const load: PageLoad = async ({ params }) => {
	try {
		// Get all post modules using glob pattern
		const postModules = import.meta.glob('../*.svx', { eager: true });
		// Find the specific post
		const postPath = `../${params.slug}.svx`;
		const postModule = postModules[postPath];

		// This is the one that is failing, which indicates is does not find the postModule
		if (!postModule) {
			throw error(404, 'Post not found');
		}

		const module = postModule as any;

		// Check if post exists and is published
		if (!module.metadata || module.metadata.published === false) {
			throw error(404, 'Post not found');
		}

		const post: BlogPost = {
			slug: params.slug,
			title: module.metadata.title || 'Untitled',
			excerpt: module.metadata.excerpt,
			date: module.metadata.date || new Date().toISOString(),
			tags: module.metadata.tags || [],
			coverImage: module.metadata.coverImage,
			author: module.metadata.author,
			content: '', // Will be rendered by the component
			preview: module.metadata.excerpt || 'Read this blog post to learn more...',
			published: module.metadata.published !== false
		};

		// Return the component along with the metadata
		const PostComponent = module.default;

		return {
			post,
			PostComponent
		};
	} catch (e) {
		console.error('Error loading blog post:', e);
		throw error(404, 'Post not found');
	}
};
