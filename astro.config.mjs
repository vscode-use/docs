import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export const locales = {
	root: { label: 'English', lang: 'en' },
	'zh-cn': { label: '简体中文', lang: 'zh-CN' },
};
// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'vscode use',
			favicon: 'kv.png',
			social: {
				github: 'https://github.com/Simon-He95',
				"x.com": 'https://twitter.com/simon_he1995',
				discord: 'https://discord.com/invite/ZnjxzMKWNW'
			},
			locales,
			sidebar: [
				{
					label: 'Guide',
					translations: {
						'zh-cn': '指南',
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Quick Start ', link: '/guides/start/', translations: {
								'zh-cn': '快速上手',
							}
						},
						{
							label: 'Example', link: '/guides/example/', translations: {
								'zh-cn': '示例指南',
							}
						},
						{
							label: 'Api', link: '/guides/api/', translations: {
								'zh-cn': '接口',
							}
						},
					],
				},
			],
		}),
	],
});
