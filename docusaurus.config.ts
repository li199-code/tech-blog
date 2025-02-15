import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'CodeWithJ',
  tagline: 'Jason Lee On Tech',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.jasonleehere.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

    plugins: [[ require.resolve('docusaurus-lunr-search'), {
      languages: ['en', 'zh'] // language codes
    }]],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'li199-code', // Usually your GitHub org/user name.
  // projectName: 'li199-code.github.io', // Usually your repo name.
  // deploymentBranch: 'main',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },


  presets: [
    [
      'classic',
      {
        blog: {
          routeBasePath: '/',
          // 控制侧边栏显示的文章数量
          blogSidebarCount: 10, // 设置为具体的数字，如 5
          // blogSidebarCount: 'ALL', // 如果要显示所有文章
          
          // 自定义侧边栏标题
          blogSidebarTitle: '最近的文章',
          
          // 是否显示阅读时间
          // showReadingTime: true,
          
          // 每页显示的文章数量（用于分页）
          postsPerPage: 10,
          
          // 其他配置项...
          onUntruncatedBlogPosts: 'ignore',

          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
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
              label: 'GitHub',
              href: 'https://github.com/li199-code',
            },
          ],
        },
      ],
      copyright: `Copyright © 2022-${new Date().getFullYear()} Jason Lee. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    future: {
      experimental_faster: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
