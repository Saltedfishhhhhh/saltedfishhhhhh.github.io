/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/11/Java传参是值传递还是引用传递/index.html","682e18598be2f967138d4e18aeae86a7"],["/2022/01/20/Java泛型/index.html","5fdc2ade931dd939bc192fd794a320ef"],["/2022/10/20/Java-BigDecimal/index.html","47e1f1e272ca9e86874d471596b3f71b"],["/2023/03/24/Automic原子类/index.html","65065bda9673a37352cb1b85f2d96d17"],["/2023/05/18/Untitled/index.html","30c184c857895584632806089f01589f"],["/2023/07/18/Git常用命令/index.html","908092ebd12a619d3d4ab91abe14e013"],["/2023/10/24/Docker-Rabbitmq/index.html","4a939628158592c2b15372964aac3413"],["/2023/10/24/Docker部署Rabbitmq-Bug/index.html","5629b33b2d359fbae5bc0d10afe5aba6"],["/2023/11/06/连接虚拟机MySQL报错/index.html","63cd3ba642df19cd0d82b3e20deba107"],["/2023/11/07/Mysql主从复制/index.html","dc34979031baa1138f6e66623bf010b7"],["/404.html","11aed041c224f3043c003c1c656d565e"],["/about/index.html","61a2be34754dafb1dec2cc8c6e98655b"],["/aboutme/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/11/index.html","48047eb588c9f0b6355454570b4a3a20"],["/archives/2021/index.html","35ac6e56c1487bff80fd381d9830190e"],["/archives/2022/01/index.html","1a939120111dbfcde7fef64ae99d3671"],["/archives/2022/10/index.html","2e368132ffbbc809aaf77b78dc379475"],["/archives/2022/index.html","27ec1eae06eebc57d97ef2c063702453"],["/archives/2023/03/index.html","e6ef705181be4fccac56c4d3ceefd61a"],["/archives/2023/05/index.html","27167b696bd450d5e638144347309c35"],["/archives/2023/07/index.html","86f2577e8d9c1b3e0d89d248d77529ed"],["/archives/2023/10/index.html","69e9fdacf96b8c36162bb888d5f612f6"],["/archives/2023/11/index.html","998a954fc8d3c67649678da93b76c3e6"],["/archives/2023/index.html","1838afecb932addf61d4e9de1cbb17f9"],["/archives/index.html","ca9cb5e946124ee74a038e9793b4e429"],["/categories/Bug/index.html","1fde7713d3fe723c4dad7f22b6996cd7"],["/categories/Java基础/index.html","e98d05e89a291aadc5b2d17745a2ebd5"],["/categories/index.html","d453032620640aabb2f84a45453a2ca3"],["/categories/java/index.html","97c07b71bfaea3672fa5aeef0a4e5417"],["/categories/java/多线程/index.html","48a054db5ccbb3f496ce4734c216b15f"],["/categories/linux/bug/index.html","7090589235f5c3ef0d6494807f7161fa"],["/categories/linux/index.html","b6d6de3123f68c97442d13d52c7d4fb2"],["/categories/优化/Bug/index.html","4e28f4f4340b0ab94dedcd4f76c7a7df"],["/categories/优化/index.html","3828697fa746186e677ffc42a539e377"],["/categories/工具/index.html","d885d3bdc0ccad64f319e24fe278a6d7"],["/categories/环境安装/index.html","2b18b2ae73b703403bf52abc34132d53"],["/contact/index.html","3f5dda9b1e9c2c92540159558d7ae96c"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","79eaa3783f9ed679de9a900a33061735"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/favicon.png","0008d5ef63252db44a6d03284f1197a5"],["/friends/index.html","238e833ac693489dbc5959d0a7c0e899"],["/images/pasted-0.png","8f241c2bec0c49e1ee3a5ad288e889f5"],["/images/pasted-1.png","3e09ae1cde28ae137edc20f93b578c6e"],["/images/pasted-10.png","ab232af5fecf80d142808760f7105815"],["/images/pasted-11.png","a0827cec8fd2d22a6bdd6e80670ecbdf"],["/images/pasted-12.png","d9d494fe520d3dd7f47949dfe861b830"],["/images/pasted-13.png","60a0f69fa18ec26c13d84f08b751481d"],["/images/pasted-14.png","8617b4eeb90e643fc8051af9859428bd"],["/images/pasted-15.png","48f7c1fc8a55c21e9d684556d9c28237"],["/images/pasted-16.png","a7cd89a6630a75b984c34890e3f8507c"],["/images/pasted-17.png","c7fc3a7828ebe655e8909b92c2e8bb31"],["/images/pasted-18.png","0ee61a54a96198284749c74c4bbcbf4a"],["/images/pasted-19.png","2e4a7657e22f927b94bda6cfa08c8286"],["/images/pasted-2.png","f25a20d6784ffc75ceb53b46636789f9"],["/images/pasted-3.png","c242d9a7af94575c56bdc9f131ba0bd7"],["/images/pasted-4.png","d28486392c0c888df3004247372a6696"],["/images/pasted-5.png","d047e2fc6fb8be0fa8ba2b0d83cce5e6"],["/images/pasted-6.png","d047e2fc6fb8be0fa8ba2b0d83cce5e6"],["/images/pasted-7.png","12d9dd85f5b0b3667f99d2a022407c40"],["/images/pasted-8.png","6c433aa125e3b4695bd5da09b238c85d"],["/images/pasted-9.png","f611e92f7b89b8e103c7a325123140f6"],["/index.html","0849913513875cb115b006ed4618b5c7"],["/js/matery.js","f6307f3a4b777b6349b3b84faef93089"],["/js/sakura.js","abdafbb0471a95535e5e703d174d387d"],["/js/search.js","23158886da44ec57f9d355b68ff1bac2"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/all.css","0e6a8d020eceb660ebe98adad8639825"],["/libs/awesome/webfonts/fa-brands-400.eot","451b51d8700fb035bcaaa9e8710b384a"],["/libs/awesome/webfonts/fa-brands-400.svg","8528edfd60e8bc4274c0eadf6b121a3c"],["/libs/awesome/webfonts/fa-brands-400.ttf","189c0326f75931886d5b60cde8b5628f"],["/libs/awesome/webfonts/fa-brands-400.woff","85b063debeb5d5f079776ac1a9c924cb"],["/libs/awesome/webfonts/fa-brands-400.woff2","0425d661f34ffa46604c9dfa344c03bb"],["/libs/awesome/webfonts/fa-regular-400.eot","b6579220162705be426ad4db0dc43f6b"],["/libs/awesome/webfonts/fa-regular-400.svg","ec9318dc8ba3ec3cbb379f2d40f300cb"],["/libs/awesome/webfonts/fa-regular-400.ttf","9230982faf6ed4d1dab07babfb813777"],["/libs/awesome/webfonts/fa-regular-400.woff","14f22fbed8146dbf3b497bb32d8491b0"],["/libs/awesome/webfonts/fa-regular-400.woff2","772a0f14c850c8b0dfe283a95857583e"],["/libs/awesome/webfonts/fa-solid-900.eot","1898ebd2e3162e7ca8627073d865b893"],["/libs/awesome/webfonts/fa-solid-900.svg","f331e75b803f42d96aaba8540f29d3b3"],["/libs/awesome/webfonts/fa-solid-900.ttf","b1161bce5381a5fa7aacc073e1a01dd3"],["/libs/awesome/webfonts/fa-solid-900.woff","db525089f5101b59a66184d109e6f917"],["/libs/awesome/webfonts/fa-solid-900.woff2","4cc04a31c42f2f9d951547bbce75960b"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","e4369194a22c7aaf65af93b2a04edb94"],["/libs/gitalk/gitalk.min.js","7526181d13660d1e4a2bbb3795d73120"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery.min.js","f832e36068ab203a3f89b1795480d0d7"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","4cf7d0890238750cf9fd18878fea096f"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/minivaline/MiniValine.js","e5daebb3b28977819ad51a62d38a52b9"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/prism/prism.css","dfc5c383c250dfccb7323337755760ba"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","a260895566c6a9f968a9101d5510f7d6"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","3c37a47598a8970c84db5591f01c483d"],["/libs/valine/av-min.js","df7538b359e7a7e904c430e8385b44da"],["/live2dw/assets/moc/haru01.1024/texture_00.png","4685fe8c12b19e64bf29cb81c0f01af1"],["/live2dw/assets/moc/haru01.1024/texture_01.png","49c7928d79f4bf012a203d0c4d6fa0b9"],["/live2dw/assets/moc/haru01.1024/texture_02.png","aeaefa34e3a53d542fde03907813db7d"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/avatar.jpg","0008d5ef63252db44a6d03284f1197a5"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/contact.png","05f80f75317895d4d6a5c0b39c18236e"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/logo.png","0008d5ef63252db44a6d03284f1197a5"],["/medias/niu.jpg","965e69e4dc1979dd6ed9f1dee235365b"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/sw-register.js","0e775db5f432855338d3e50704a2bada"],["/tags/BigDecimal/index.html","d12a7676bc935352aa19948271cc203b"],["/tags/Bug/index.html","8345c5b2a1b0ad2b23757eefe6b476f3"],["/tags/Docker/index.html","b079a67b74c14ee24a06c92e0c426e1a"],["/tags/Git/index.html","0c466e3b85d449096a35bcf01974fe95"],["/tags/Rabbitmq/index.html","d7847ca09fba663efdfe3440b4546f51"],["/tags/index.html","350a77d77fce244688bae52c119026ca"],["/tags/java/index.html","291735af2a298dcc71b77df8de061298"],["/tags/java基础/index.html","e7da01813791a1af0ebf24c349345660"],["/tags/linux/index.html","699d6e2fc3c430b73083098613e316ef"],["/tags/mysql/index.html","9ad39b8bf5273d57124409082e42a6ef"],["/tags/主从复制/index.html","c615a36370d7206e90f4081366894541"],["/tags/原子性/index.html","6ac34c54bc502e25cecbbaa2d0109336"],["/tags/多线程/index.html","9157a0710c353d3b60067ea069026eaf"],["/tags/安装/index.html","64fb79ce2395085594dd3101f083cd4f"],["/tags/工具/index.html","52a59ac5bcfbc711cd0e069df0a4c6cf"],["/tags/泛型/index.html","bccca358d3a976f7c96aee45dc55bc53"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
