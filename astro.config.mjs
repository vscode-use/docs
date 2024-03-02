import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'vscode use 文档',
			favicon:'kv.png',
			social: {
				github: 'https://github.com/Simon-He95',
				"x.com":'https://twitter.com/simon_he1995',
				discord:'https://discord.com/invite/ZnjxzMKWNW'
			},
			sidebar: [
				{
					label: '指南',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '快速上手 ', link: '/guides/start/' },
						{ label: '示例指南', link: '/guides/example/' },
						{ label: '接口', link: '/guides/api/' },
					],
				},
			],
		}),
	],
});
