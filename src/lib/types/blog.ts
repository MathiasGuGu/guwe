export interface BlogPost {
	slug: string;
	title: string;
	excerpt?: string;
	date: string;
	tags?: string[];
	coverImage?: string;
	author?: BlogAuthor;
	content: string;
	preview: string;
	published: boolean;
}

export interface BlogAuthor {
	name: string;
	avatar?: string;
	bio?: string;
	email?: string;
	website?: string;
}

export interface BlogMetadata {
	title: string;
	excerpt?: string;
	date: string;
	tags?: string[];
	coverImage?: string;
	author?: BlogAuthor;
	published?: boolean;
}
