import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Jason Lee On Tech',
  tagline: 'Jason Lee On Tech',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.jasonleehere.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'li199-code', // Usually your GitHub org/user name.
  projectName: 'li199-code.github.io', // Usually your repo name.
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'zh-Hans',
  //   locales: ['zh-Hans'],
  // },


  presets: [
    [
      'classic',
      {
        blog: {
          routeBasePath: '/',
          // 控制侧边栏显示的文章数量
          blogSidebarCount: 50, // 设置为具体的数字，如 5
          // blogSidebarCount: 'ALL', // 如果要显示所有文章
          
          // 自定义侧边栏标题
          blogSidebarTitle: '最近的文章',
          
          // 是否显示阅读时间
          // showReadingTime: true,
          
          // 每页显示的文章数量（用于分页）
          postsPerPage: 10,
          
          // 其他配置项...
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Jason Lee On Tech',
      logo: {
        alt: 'Jason Lee On Tech',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/li199-code',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/li199-code',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jason Lee, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
