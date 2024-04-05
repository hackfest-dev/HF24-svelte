import type { NavItem, SidebarNavItem } from '$lib/types/nav';

interface DocsConfig {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: 'Features',
			href: '/features'
		},
		{
			title: 'Docs',
			href: '/docs'
		},
		{
			title: 'Login',
			href: '/login'
		},
		{
			title: 'Signup',
			href: '/signup'
		}
	],
	sidebarNav: [
		// {
		// 	title: 'Features',
		// 	items: [
		// 		{
		// 			title: 'Signup',
		// 			href: '/signup',
		// 			items: []
		// 		},
		// 		{
		// 			title: 'Create Account',
		// 			href: '/create-account',
		// 			items: []
		// 		}
		// 	]
		// }
	]
};
