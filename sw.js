/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/17/Hexo-Github博客搭建教程（个人操作过程）/index.html","bdcc4f5a2dd36c348453576a23a42324"],["/2023/07/20/php-include/index.html","1f88be8cb6b253babe47de4b7693e994"],["/2023/07/21/HNCTF 2022 WEEK2  ez_SSTI/index.html","67712d851764ee8ad01282abe7de2a74"],["/2023/07/22/SSRF  web351-/index.html","81f3c0cf58a6c723d0da94d97998b87f"],["/2023/07/29/jwtstruts/index.html","4f159a821c98bd8516633484bf5fceaa"],["/2023/08/03/PHP反序列化字符串逃逸/index.html","f53b65321e200af87c119c770a80b7be"],["/2023/08/10/2023巅峰极客 unserialize  wp/index.html","6275f806b4c2f7084982fbff742b7d8c"],["/2023/08/17/XSS跨站脚本注入攻击/index.html","0f3c4d762c4b4b01f0c808d69b690a40"],["/2023/08/20/Xml实体注入漏洞/index.html","868f0bd831d854ba8c0a588360ffbf38"],["/2023/08/24/NepCTF2023--部分wp/index.html","1496dc6bf72a6f6348286f2386ff52e5"],["/2023/08/24/[HDCTF 2023]YamiYami/index.html","3a14ef341f8a20c6f6c8f9f840a48ac9"],["/2023/08/24/java学习/index.html","4c284437a22f75434cdcf860c543528e"],["/2023/08/24/我爱学ctf/index.html","1833e62bb5b96705674149bc9786844c"],["/2023/08/31/[BJDCTF2020]Mark loves cat/index.html","69639bcda7537089b733b1d0c444fd3d"],["/2023/08/31/[天翼杯 2021]esay_eval /index.html","f86fc8180f0414f7e3f031b638741170"],["/2023/09/01/结营赛wp/index.html","a0e1b620a68a72bfd3787ff7529944d3"],["/2023/09/02/2023蓝帽杯  初赛web题解之LovePHP/index.html","579d7abbf25ee34885467ddc8fc1c40a"],["/2023/09/10/SICTF-2nd/index.html","9fb6a9572ca8be278bae35ac3a7bcabe"],["/2023/09/18/ctfshow XSS跨站脚本注入漏洞 web316-/index.html","3257bb4af27caa7b2f48482511173cb3"],["/2023/09/20/Docker file 的基本操作/index.html","fa88254d6348a51df0c5145a68762b1b"],["/2023/09/22/Java序列化和反序列化学习/index.html","4beb5452e29484c3e51e2f9cda4a9860"],["/2023/09/24/Web259/index.html","57564f3a3230daee57b2de02e5eec8eb"],["/2023/09/28/日常题目练习（一）/index.html","59d2111ebe848ba8c456cdaf84f2f7fa"],["/2023/10/01/宏/index.html","03e13ab4dfbc50b1f95552e4583f4517"],["/2023/10/07/校赛wp/index.html","74ed7da401dc9a6164c41fe1fd5a69b6"],["/2023/10/16/无参RCE/index.html","1a7316de959c723306a0f723bbddab97"],["/2023/10/17/命令注入盲注读取文件/index.html","abfdf45cbb326d1786bf3dac0c088df9"],["/2023/10/18/Pear命令读文件/index.html","bed02c60f2a1adc2730f9c51d474cb27"],["/2023/10/18/香山杯/index.html","8650aac8d88597355b5dd67060fa59d0"],["/2023/10/19/2023年SWPU NSS 秋季招新赛 (校外赛道)/index.html","118e5e70d2ea46caddb37675d4f955ad"],["/2023/10/19/file_put_contents利用技巧(phpfilter协议）/index.html","4d7b1b3ab71d60fd40604dd3a3ba1c65"],["/2023/10/24/小迪安全知识积累/index.html","f7d92037778d91feebfb3ad9e84cedbf"],["/2023/10/25/new starweek 4/index.html","f1992146b954035c1662ef2c147201ec"],["/2023/10/25/流量包分析/index.html","8f67e0d60ed4f07abd209695f747bb3c"],["/2023/11/11/新型车联网安全网络协议破解（阶段一）/index.html","eb00089cabc128371d12cf3ba27fc6a8"],["/2023/11/15/[羊城杯 2020]easycon/index.html","7792b6304d6c81ea6477aeced49fe038"],["/404/index.html","5354d1e67f7049532af1a0a2abd23eed"],["/about/index.html","9e4d84274920e5d8dc04a7796cc4a4fe"],["/archives/2023/07/index.html","f19927182c954e79bdb663b8d35fcd2f"],["/archives/2023/08/index.html","b9e89fde4b7df47c1f47feae32cfd140"],["/archives/2023/09/index.html","50ad7419f2a038bd9e19834b3438b050"],["/archives/2023/10/index.html","272ea609686504284a1ff5d1873b57cc"],["/archives/2023/10/page/2/index.html","92500efe58e4bba42ce9e0e2136f1472"],["/archives/2023/11/index.html","03c55179391b6c75c1f858451e0fee9c"],["/archives/2023/index.html","aa104ec2c7fb6ede90ca51edfba71f1d"],["/archives/2023/page/2/index.html","c0883cef9776eb8b66e324f637fcb772"],["/archives/2023/page/3/index.html","4293134ccd5c37564a95e1cd33de1d70"],["/archives/2023/page/4/index.html","d9518d198e49a7a25e82a7e8c917d7e7"],["/archives/index.html","9cc8b85fdcb110adab6a614d4dba7808"],["/archives/page/2/index.html","ad211fd2dba89b06b521810426383cb2"],["/archives/page/3/index.html","b29e33f079ff75754d1dc1b5591daa51"],["/archives/page/4/index.html","2f56207086934d55fc55908f58bb983f"],["/categories/CTF/index.html","8910801a1b7916633465ed9ed4ecb827"],["/categories/CTF/page/2/index.html","487c9e551b587c1726b5ae0a53ac0b7c"],["/categories/CTF/page/3/index.html","9083c755d6c25aa9347f9e55373f5e72"],["/categories/CTF/wp/index.html","41b9158480a27df4add4251b3107f124"],["/categories/CTF/wp/page/2/index.html","2c416775171fc4b1d262461c2d55231a"],["/categories/CTF/笔记/index.html","655dd83e2936086f5c6aa2aea6c8931e"],["/categories/CTF/赛事/index.html","aa303313d56a6166a021b737c9a0c41e"],["/categories/index.html","ba6b5cf4095bf044e93509fe4cb8321a"],["/contact/index.html","9a02992e3e36337bc8ed88ebff0c5233"],["/css/index.css","24b83a3bee75aa2316badb4d1b4976d0"],["/friends/index.html","c4d67c8e6b40d917bb5ed8713aac972a"],["/image/1964477-20200406234627327-1601681134.png","dca1d2ca6e14853b33fb409ad087fa15"],["/image/1964477-20200406234831984-1876664653.png","50fc438c13c33235d4621b45e851dc15"],["/image/1964477-20200406235335043-1930261389.png","e3b37633f21db1dcdeb8ecb3c1e93364"],["/image/1964477-20200407000202377-1581427195.png","30d1401944a53be1268e6160ea89cd77"],["/image/1964477-20200407103428847-745843372.png","0ae411f1fdb92ea615d790319572fcb6"],["/image/1964477-20200407103501626-1447360416.png","bf1bcfd07947771c7e02787357c45676"],["/image/1964477-20200407105517997-451500709.png","84d27280b7e6d9f6c571f2f0648cdb3f"],["/image/1964477-20200407111602416-1849632067.png","6acc506fadb36577a305d8d3cc5561d7"],["/image/20200331230142753.png","c6de8d5922905a20dabbcb982b8f0b46"],["/image/20200904173922834.png","7511a4ae834aed3e96bb2e2fc9a91b2f"],["/image/20210605082433.png","51dda5fe8d7cfa5bae7df5bf29619821"],["/image/20210605082507.png","ee9597b02d7c407f0f0ce91487efc800"],["/image/20210605082516.png","9394f4b918d8394beff5bec337424dd1"],["/image/20210605082551.png","1da26986702eb4b501634a6655c68530"],["/image/20210605082610.png","aa9492801f60e52326c4e67bac41373a"],["/image/20210605082631.png","d245156d6cb94f74e56a245f855ae6ae"],["/image/20210605082702.png","5ef619331687eeb3c9f30a01d4f8d773"],["/image/20210605082751.png","425895f19a7c0183e15ef011889f063b"],["/image/20210605082843.png","cc12334a6b19b47e202331b9e312b45d"],["/image/20210605082904.png","f177802de173bbf8066b19a5e51e910e"],["/image/20210605082919.png","3032e2e608fba51db433c853d3288193"],["/image/20210605082954.png","dbc8968a528b59e030f55cca2ed2323d"],["/image/QQ图片20230818231436.png","92119735c2287c1615b8d6b199bb3d89"],["/image/image-20230716091944628.png","99585470c4b560f678ada3dd0d3ced7a"],["/image/image-20230716092108512.png","2489e60f98ddcf4d8f1f5a088bcbf31a"],["/image/image-20230716092323573.png","8054dc7543c47566a73a3e23e9a3ff81"],["/image/image-20230716092359590.png","95d7eaa10931aa51ed4e7d944317b70a"],["/image/image-20230716092518819.png","80bd4bf0ae796360f7a6c71e0e6f299a"],["/image/image-20230716092548657.png","d6967a9d768ec793f11dcb86d2a141fc"],["/image/image-20230716092739503.png","a0994ab9dfb11941db1686bd0cd12b5f"],["/image/image-20230716092810228.png","1a7bc62233cfeabaef2e1b4a078890ad"],["/image/image-20230716093006803.png","8ae484ca956a5fe3111bc47c337864f3"],["/image/image-20230716093119089.png","5104995974ba4a855136e4c4ce655870"],["/image/image-20230716093403459.png","41fe6814d9c07c7062dd0203c70228cf"],["/image/image-20230716093550811.png","c421c825ae15d7e5cfe75fa848aa86ab"],["/image/image-20230716094542664.png","cf98a98a9385ec86eb708ea258d53685"],["/image/image-20230716094611137.png","92e531d91a7e6a57c841a2898439ba0b"],["/image/image-20230716094741275.png","f98301846990b60499449cf598d6b7cb"],["/image/image-20230716095642961.png","46cc9985f83aa0e928bc40877124f556"],["/image/image-20230720200207233.png","91c7f41f089b73fa51965bd080711bc0"],["/image/image-20230720200246031.png","0d045d1eb180f35bf87aff3e86a7d9a6"],["/image/image-20230720201155971.png","345e9360289c6b2be601e3aaa2b05983"],["/image/image-20230720201235539.png","4e76b54f866f715e43d58b67eeade02b"],["/image/image-20230720201719427.png","931d05f54d3e27654bdd7189e4cedfae"],["/image/image-20230720203539785.png","3dff68be84c646dfbb14f1f1cd37034d"],["/image/image-20230721095059045.png","8bb6d5a7ef0d211c59430e338df0e7cb"],["/image/image-20230721095310676.png","fbe2a9c6df56dcf34408c2233d9e9254"],["/image/image-20230721100029882.png","5ef6d2121fcd628b61fd15e3f53fb335"],["/image/image-20230721100049475.png","18eac6cf72e0798cb4f19f3a64ae0553"],["/image/image-20230721101047957.png","b5fe0706de4db017f5cbfa6c61cee39e"],["/image/image-20230721101152276.png","feec2089399b886aa5d202ff56784113"],["/image/image-20230729210104769.png","7305fca6ca6bbd3c27117845e2bf08aa"],["/image/image-20230729210132220.png","05691691c249973735e8f4d99bda42b2"],["/image/image-20230729210217434.png","d673dbf3bffe14dbb28fc3e5ed03812a"],["/image/image-20230729211158878.png","3afa5a8fd2a2cd038f7d14a2c08b37f2"],["/image/image-20230801115227872.png","d6404182dd95204352dabfb2896cb13d"],["/image/image-20230801115556904.png","fc709d4df695e90bc22c691d4a724bb1"],["/image/image-20230804134635993.png","75c7e9e381a99c9b0a7340a37a103ce0"],["/image/image-20230804203006691.png","afaabb726062aa467c5e10006c9eab43"],["/image/image-20230810173524265.png","815ab4e3e330fa0ee047411997f56a77"],["/image/image-20230810174134098.png","e8c46a2717cd40addeb6a4239bc1136a"],["/image/image-20230810174205139.png","0b7c7c54b984fca645064d9f2f26343b"],["/image/image-20230810175712493.png","02d1b777bb147e09226649bd61f18c0a"],["/image/image-20230810191408215.png","be559690b5b71ce21cc4f57cd699371e"],["/image/image-20230810191445372.png","b0a58369d9119bcda75c9fde16c730ce"],["/image/image-20230813164252615.png","b9ecde3928d7640885f39d4ae38d18b5"],["/image/image-20230813164322711.png","2cbd09dd268cfc47621e21d0a5e7ce7f"],["/image/image-20230813164337799.png","d70f93506210e5d5abb9fee95ab001a3"],["/image/image-20230814152239315.png","d1625c01fa5598e86df1d1a2308844e1"],["/image/image-20230814153345494.png","ddf3d1ef544cecc17860a5250a645e78"],["/image/image-20230818225755467.png","27f9ec6a189276f3b8bfca54c58c9f3a"],["/image/image-20230818231358283.png","a466794aa69e858d25d7e61f819ea9a4"],["/image/image-20230820163325149.png","dcb5a132fc5e679ccdcf4e2849728220"],["/image/image-20230820165620201.png","3bf7bd09a7257883499a4eca73e2d153"],["/image/image-20230821132029953-1698627034978-1.png","817843ab602328280754c8fb60b6657f"],["/image/image-20230821133215837-1692596095569-1-1693831300400-56-1698627034979-3.png","247de5efad2ef2abbd70a639f062e0a7"],["/image/image-20230821135115539-1698627034979-5.png","92c6a71ba9002958c3c81fdce23a0923"],["/image/image-20230822160255214-1698627034979-7.png","e9fb5dcd77a52b04de34f8badec81441"],["/image/image-20230913194808039.png","a80aae9fa83e5b27fc15bf2c25286c02"],["/image/image-20230913194824995.png","a3df1727e8cd87b7a524f2f55a99bcdc"],["/image/image-20230913194834595.png","deb813b4124515ad96696defbd5ac295"],["/image/image-20230913194844075.png","518d5a8f513106e42c2ea72c17449a86"],["/image/image-20230913194855104.png","ca97f0a0e16171b2df35b7d6e01a90a7"],["/image/image-20230913194905075.png","5f9b3e30d3555df8e449dfc797334c12"],["/image/image-20230913194924480.png","8aad47633251d1a8a1d8743fb0cc1069"],["/image/image-20230913194932339.png","99625a3b6d43564ba5b1f5cbcc72f3b8"],["/image/image-20230913194940735.png","13a090d0098ed9aa98f7d60e0ae1c5d4"],["/image/image-20230913194948225.png","df7fc673b90d8b77df650769b3902210"],["/image/image-20230913194958542.png","50961d06f09d267e3b37c18735b3b66c"],["/image/image-20230913195011641.png","39ed08b83cfc198b596c85793d9de2c4"],["/image/image-20230913195022559.png","dd9f57049fb06b1ea496e13a20510446"],["/image/image-20230913195033374.png","69c748233a49813b0693f681c09b5a43"],["/image/image-20230913195045944.png","174099047876fbe4da1a0207ff8b4a15"],["/image/image-20230913195057189.png","a937f8e6843b95c361e81045f4a45af7"],["/image/image-20230915195201845.png","a1148a792411b604dc58dc02b6371058"],["/image/image-20230916112206026.png","8cbd44353279bcd5b72fe8ab012cff07"],["/image/image-20230916112226123.png","34171eedf6425c0af26afe7306787b1e"],["/image/image-20230916142202534.png","e9ee7436da2bd81c5d2046785d474d37"],["/image/image-20230916142627972.png","8f12fe977c588bbf4d1b10e3fcaa4800"],["/image/image-20230916150656330.png","68e6f0787cf1a0975998c1a81b58207e"],["/image/image-20230916171228602.png","aa56057ea669c235b54e78ff515e70ff"],["/image/image-20230916171325595.png","56488661e5bd3eb08f4006b771d941b0"],["/image/image-20230917120408654-1700014518989-3-1700014609953-9-1700015416328-19.png","a8fe1c9e49b4746b5715dda202d7627d"],["/image/image-20230917120408654.png","a8fe1c9e49b4746b5715dda202d7627d"],["/image/image-20230917120504348-1700014609945-8.png","681a2ec45f88cdbde9570153ab785e12"],["/image/image-20230917120504348.png","681a2ec45f88cdbde9570153ab785e12"],["/image/image-20230917120610438-1700014609945-7.png","f5fa50eefe7dccf057fbb19b2d653595"],["/image/image-20230917120610438.png","f5fa50eefe7dccf057fbb19b2d653595"],["/image/image-20230917120721712.png","7ecdd1beda28f3fcc678ecf538554b39"],["/image/image-20230917120911281.png","3f74b9f22458ca5f2586dea0c5724d52"],["/image/image-20230917121422892.png","9a13861433999a6586408effab1a111a"],["/image/image-20230917121538182.png","e0477b2875b615981ac2e2fe6a864ba2"],["/image/image-20230917135439689.png","d6dc94a6400e6be0d97ecdf785efbdc2"],["/image/image-20230919184844700.png","657907261b9ee5d87fb5dede6a9a5b61"],["/image/image-20230919191443576.png","bb00a5ad7132fd41e341827b0cdc9af8"],["/image/image-20230919194210103.png","2bf22ef025c544458b153a15f6003e97"],["/image/image-20230922112645214.png","780a5bcf72d5f0e25d533366aaf1cd0c"],["/image/image-20230922112902823.png","d3edb19012805140bda64f0534d63958"],["/image/image-20231013154315987.png","547c1d8576285ba31a24a0baf62eb039"],["/image/image-20231013154330409.png","7a286448957cb365ca498c2b389c098c"],["/image/image-20231013154343786.png","b45b6d9809d5a383f9189bfd533e264d"],["/image/image-20231013154359144.png","1a91ffc3254096ccf39306dc88adf545"],["/image/image-20231013154409805.png","d83c454776eb68c2b12b26e7aad490b7"],["/image/image-20231013154420985.png","c9915e69cedddecc98f41f3b375c1f2f"],["/image/image-20231013154438342.png","5fef9b9010bfd0fa92b8a3025fd7507c"],["/image/image-20231013154457471.png","170939f2099dd54e310ef4a8658ad4eb"],["/image/image-20231013154506994.png","46823712dd48ae716a31039e0f3f2d98"],["/image/image-20231017185626227.png","5055d436980c9f59d070cc9b51877914"],["/image/image-20231025095940311.png","f0d3bca2f79fae9d1d541e68041afd69"],["/image/image-20231025100216201.png","dbf12925ab57aeb0f9cea0f52b55a26f"],["/image/image-20231029204949806-1700015833096-28.png","354a8a05fc1018c7188b0d0f12beb75b"],["/image/image-20231029205130112-1700015833096-30.png","861403a241226ac55a0eb844244cff4f"],["/image/image-20231029211044492-1700015833096-32.png","9d874f9dc6ee3fb042ba39e6f9038c6a"],["/image/image-20231029211738989-1700015833096-29.png","3eab16f8773eca100098d4781e384985"],["/image/image-20231029212838216-1700015833096-31.png","946c9a34f8b24c6a41986d066edd17da"],["/image/image-20231111175609407-1699697773720-4-1699698037625-91.png","3615808102b883293f457e5b88c4b2cb"],["/image/image-20231111175746684-1699698037624-88.png","7c5c2b50fd459ffd8f6fb263d4111cab"],["/image/image-20231111175940503-1699698037625-89.png","441823dd6e3e13a0d9777bbcd0ba58e9"],["/image/image-20231111180232257-1699698037625-90.png","1bf9829d540535ace3ca5b3c20ab5774"],["/image/image-20231112171854941.png","b0c1cdd283f094d044a9d2023dd68290"],["/images/algolia.svg","7f55a5eff525feb4fa927e617395323a"],["/images/cc-by-nc-nd.svg","5fcd1a5c962391d092c995d457fb3040"],["/images/cc-by-nc-sa.svg","2ec8ab6280fa7ada792bebed6f636d8b"],["/images/cc-by-nc.svg","cb04a42b5be6f93f0d2051bcbe1a828a"],["/images/cc-by-nd.svg","c8941a39e22284084c2ec0d2e09c7759"],["/images/cc-by-sa.svg","61380e86b4cec4af627e7228bb302a2b"],["/images/cc-by.svg","f614962aac0740852c7fb67225856be7"],["/images/icons/favicon-16x16.png","edf1afce2acf6b68ee38dc302591ad0d"],["/images/icons/favicon-32x32.png","445e33f3b5dd377fa49b2fbff15e40be"],["/images/icons/stun-logo.svg","7866794021fb9567e574c2ef7295bcae"],["/images/loading.svg","626a1afa3e60e3fbf6af9535e476434a"],["/index.html","fbb6be2ed5e5bd6597286c18e2cb6db1"],["/js/header.js","1f38556fb6b6f1071c636e9478c44d7c"],["/js/scroll.js","ba1c68c15a1094ef610c849835ee06ba"],["/js/sidebar.js","80945c0975fc9cbe619b0f82ce5f31cf"],["/js/stun-boot.js","0bf548eda18a96d5ee7bb68bea9f330f"],["/js/utils.js","6c01990edb6a03f853fe9e9c3d379615"],["/link/index-1.html","ff58a01b6097304df6f0f6b03612d767"],["/link/index.html","c4b98a2ba812895d0366714bffd11fb8"],["/page/2/index.html","cfdd8a63f5b5829ca28c74d5c6b20463"],["/page/3/index.html","b34ecd0a7e8f55b23febf3488bb3b31d"],["/sw-register.js","be21400dc8cbfa049e14dff9f890a851"],["/tags/CTF/index.html","fde02c7d0613eea14f4402d7055c0d88"],["/tags/CTF/page/2/index.html","e2845bf0fa0b127279404f9ea887bc69"],["/tags/index.html","4da6992b7ced470e1efeabf409b19330"],["/tags/unserialize/index.html","df75c09df2cb8a7fa42980e70241035d"],["/tags/wp/index.html","f0a8348f424dec8215294dc82df27d1f"],["/tags/侧信道/index.html","bb395e83e96f0ee9fe1e8a4bc6138ae9"],["/tags/学习笔记/index.html","8adb333722ecec6fafeda047d4f9c635"],["/tags/笔记/index.html","fa44b913015745f33d0e056f9215a58f"]];
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
