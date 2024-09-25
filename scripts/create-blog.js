const fs = require('fs');
const path = require('path');
const pinyin = require('pinyin').default; // 引入pinyin库

// 获取命令行参数，如博客标题
const [title] = process.argv.slice(2);

// 检查是否提供了标题
if (!title) {
  console.error("请提供博客标题！");
  process.exit(1);
}

// 格式化当前日期为 YYYY-MM-DD
const date = new Date().toISOString().split('T')[0];

// 处理标题：将空格替换为短横线，并转换为小写
const formattedTitle = title.trim().replace(/\s+/g, '-').toLowerCase();

// 将中文标题转换为拼音，非中文字符保持不变，并转换为短横线连接的小写形式
const slug = pinyin(title, {
  style: pinyin.STYLE_NORMAL // 将拼音转换为普通风格，无声调
}).flat().join('-').toLowerCase();

// 定义frontmatter内容，添加slug字段
const frontmatter = `---
title: "${title}"
slug: "${slug}"
date: ${date}
description: "这里写描述"
tags: []
---


<!-- truncate -->
`;

// 文件名格式：YYYY-MM-DD-title.md
const fileName = `${date}-${formattedTitle}.md`;

// 目标路径：/blog 文件夹
const filePath = path.join(__dirname, '..', 'blog', fileName);

// 写入文件
fs.writeFile(filePath, frontmatter, (err) => {
  if (err) {
    console.error("无法创建博客文件：", err);
  } else {
    console.log(`博客文件已创建：${filePath}`);
  }
});
