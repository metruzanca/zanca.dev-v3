/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

export type Post = {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string;
};

export type Tag = {
  id: string;
  name: string;
  description: string;
}

export type TagList = Record<string, Tag>;