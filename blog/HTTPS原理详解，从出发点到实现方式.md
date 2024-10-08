---
title: HTTPS原理详解，从出发点到实现方式
tags: [HTTPS]
abbrlink: 9657d1cd
date: 2024-03-20 23:15:29
categories:
summary: HTTPS的本质是客户端和服务器商量出一个加密数据的密钥。
---

这一篇文章，主要记录我在学习网络安全相关知识的一些体会。

## https

了解 https 之前，首先学习一下哈希算法。弄明白哈希算法的输入输出：输入一串不定长的数据，输出的字符串是定长的（比如 256bit）。

关于 https，首先在脑海中呈现的，应该是这样一个模型：

![17109479490611710947948667.png](https://cdn.jsdelivr.net/gh/li199-code/blog-imgs@main/17109479490611710947948667.png)

可以看出，https 就是在 http 的基础上，套了一层 SSL/TLS，而 SSL/TLS 的功能其实本质上是**如何协商出安全的对称加密密钥以利用此密钥进行后续通讯的过程**。

我们来解释一下上面这句话的意思。因为 http 是明文传输，所以应该想办法对传输数据进行加密，使得黑客拿到的数据都是一堆无意义的字符串。加密需要密钥，密钥就像一把箱子的钥匙，数据就被所在箱子里。看起来，明文传输的问题解决了。

然而，密钥也是通过互联网进行传输的，意味着黑客也可以获得密钥，这意味着数据还是裸奔。所以，有必要对密钥也进行加密！听起来是不是在套娃了呢？别急，非对称加密终结了这个死结。所谓的非对称加密，就是让客户端（浏览器）保存公钥（任何人可获得），服务器保存私钥（绝对不能让其他人知道）。客户端带着用公钥加密的对称加密密钥（这里别被绕晕了哈），传给服务器，只有服务器的私钥才能解密，获得对称加密密钥，到这里，我们是不是可以理解出上面加粗句子中的协商的意思呢。

然而，问题到这里还没有结束。客户端是如何获得真实的公钥呢？肯定是不能由服务器传来的啦！这时候就要引入一个可信的第三方（CA）的概念了！服务器会去向这个权威第三方申请一个证书，证书的签发如下图所示。证书内带了**站点的公钥**，**CA 的私钥**会加密这个证书，然后等到客户端获得证书时，再用**CA 的公钥**来解密证书，获得**站点的公钥**。而且，**CA 的公钥**是操作系统内置的，代表绝对可信。这样就能实现安全性的闭环了。

![17110787820041711078781120.png](https://cdn.jsdelivr.net/gh/li199-code/blog-imgs@main/17110787820041711078781120.png)

最后结合一点工作上的实际经验加深体会。常常听到别人说，某个项目网站的 https 证书过期了，要花钱续期（也不便宜了，一年几千）。这个证书就是上面的服务端证书，需要向 CA 申请！所以说，不能随便信任证书。

参考链接：

---

20 张图让你彻底弄懂 HTTPS 原理.md
https://github.com/allentofight/easy-cs/blob/main/%E7%BD%91%E7%BB%9C/20%E5%BC%A0%E5%9B%BE%E8%AE%A9%E4%BD%A0%E5%BD%BB%E5%BA%95%E5%BC%84%E6%87%82HTTPS%E5%8E%9F%E7%90%86.md

---
