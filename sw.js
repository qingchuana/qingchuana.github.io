/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/17/Hexo-Github博客搭建教程（个人操作过程）/index.html","e63051fb08b8d79edd6bc5cc4bb6b3b9"],["/2023/07/20/php-include/index.html","ea8180dc70fb3375e609f72cce3ba397"],["/2023/07/21/HNCTF 2022 WEEK2  ez_SSTI/index.html","9250d0f824ea04593f063f5dfa9a4f67"],["/2023/07/22/SSRF  web351-/index.html","5c5313c8d1f923edc9d7b9a456d273a0"],["/2023/07/29/jwtstruts/index.html","5c171d1b00e4e3b0f66a65e95c9c8800"],["/2023/08/03/PHP反序列化字符串逃逸/index.html","59fd822c5233aa1e5ca7e40c35ff3780"],["/2023/08/10/2023巅峰极客 unserialize  wp/index.html","72c9b2eb84fddd683221ec61d7af4cc4"],["/2023/08/17/XSS跨站脚本注入攻击/index.html","e3c3cd319dd4ac648beaad7afae29070"],["/2023/08/20/Xml实体注入漏洞/index.html","c0b3b11ce19bfe265d0f7de3fd877115"],["/2023/08/24/NepCTF2023--部分wp/index.html","e4d9a43fd1b56dbeb447d66fbeb9444b"],["/2023/08/24/[HDCTF 2023]YamiYami/index.html","e7441a418aae92727c3e0b460855be97"],["/2023/08/24/java学习/index.html","126c14a7c562e0781a75d9e533d68688"],["/2023/08/24/我爱学ctf/index.html","5fbe54fd6c2a0a2dce789dfd1b7955ce"],["/2023/08/31/[BJDCTF2020]Mark loves cat/index.html","4e2cb66b07a4d5f4bb82c1f34a96edfd"],["/2023/08/31/[天翼杯 2021]esay_eval /index.html","d5b4beb56aadd92e03082253986a6a45"],["/2023/09/01/结营赛wp/index.html","c4cc1ea447546ce61db3dd09646dc699"],["/2023/09/02/2023蓝帽杯  初赛web题解之LovePHP/index.html","372c2b8db4cf9a1e1b00e708a5169b7a"],["/2023/09/10/SICTF-2nd/index.html","b2201002ec6c4d3edf939ae9591ec5f5"],["/2023/09/18/ctfshow XSS跨站脚本注入漏洞 web316-/index.html","46f4608ba8332bf0476e8a3bd8ebf3d2"],["/2023/09/20/Docker file 的基本操作/index.html","9f30179a77ee61663be6dd6e0935f343"],["/2023/09/22/Java序列化和反序列化学习/index.html","18535bfc7cdbc16312ec19ec778672d3"],["/2023/09/24/Web259/index.html","9420d1c0b11e3fdf18d7a1fbfeec7493"],["/2023/09/28/日常题目练习（一）/index.html","dc1a7a109335590a6d4185ea0e4b85d1"],["/2023/10/01/宏/index.html","ba24db6a946c4c53ee59838dde45e610"],["/2023/10/07/校赛wp/index.html","1d78b0ca7bcbf83064a93888c01ab3a6"],["/2023/10/16/无参RCE/index.html","efaa46c5c4c81ad3d0f70996018d6c1d"],["/2023/10/17/命令注入盲注读取文件/index.html","32dec0216b1f19bbe93cdd56c9adb170"],["/2023/10/18/Pear命令读文件/index.html","7bab683f9c4ef033d8b356d62a778b98"],["/2023/10/18/香山杯/index.html","87de3eab44470570ef40219f8c7acd73"],["/2023/10/19/2023年SWPU NSS 秋季招新赛 (校外赛道)/index.html","41658fc39b7ae81e390b62eee00f02d0"],["/2023/10/19/file_put_contents利用技巧(phpfilter协议）/index.html","c518c04a4ffbfd13bbe3e41cd73c04bb"],["/2023/10/24/小迪安全知识积累/index.html","0b9f3566fc62019337b1693003224ff9"],["/2023/10/25/new starweek 4/index.html","c7acdecb8b9e1051bc24ffa40a5b47a6"],["/2023/10/25/流量包分析/index.html","8f5a31cf5f7a71615cf7afab382603d8"],["/2023/11/07/新型车联网安全网络协议破解（阶段一）/index.html","cc191fd5d70a3708e1552508b3924cad"],["/2023/11/15/[羊城杯 2020]easycon/index.html","4d328577949b6cf494378dd3bc0f4995"],["/404.html","e7960e942b7cebe471efabdecfaf96c5"],["/404/index.html","81518edd78fa79f6b39370d14682d497"],["/about/index.html","6f6d962058b008472f9b23a056ceb744"],["/archives/2023/07/index.html","552f45f74d4c043ba816e7485893a173"],["/archives/2023/08/index.html","e9b5f7e411a8c8ae90fe0df892f27a48"],["/archives/2023/09/index.html","df85763444ff71c8c2e1d86b624866b5"],["/archives/2023/10/index.html","b0cf4b8eeaad613114a349c1fd90e1b1"],["/archives/2023/10/page/2/index.html","58df3ea30215c85fb8ed2bae87d3d1a6"],["/archives/2023/11/index.html","930bf43c9a8f42abac7ab59c814ef721"],["/archives/2023/index.html","60b6d19fe350f9645586ba9fc4955048"],["/archives/2023/page/2/index.html","8649dd553e6d46668eb01a175638d238"],["/archives/2023/page/3/index.html","c7e01a048e6d27101960aaa514deef3d"],["/archives/2023/page/4/index.html","fd9398b3d970531378538bc08d518b2c"],["/archives/index.html","3001c1fe136e5acadac57b5e796641ef"],["/archives/page/2/index.html","3821cebf1ca573b4133e46ed4125475d"],["/archives/page/3/index.html","fa1e964f1676af10efe31ac0d5c3d2e5"],["/archives/page/4/index.html","b73670beb3dbeb0aa44888368145e5d0"],["/categories/CTF/index.html","da49053a08e3b7c7ee86f60c0ca5a98f"],["/categories/CTF/page/2/index.html","dfba38ffa4add72cbd44836cd12e631f"],["/categories/CTF/page/3/index.html","ec76acc41aaeaa5867a1385ac863754f"],["/categories/CTF/wp/index.html","1f68c7de1190127509d7a7b5d9656327"],["/categories/CTF/wp/page/2/index.html","681fc64364d3552504d5598f515a3f3c"],["/categories/CTF/笔记/index.html","e31524a8cad48464e82bd1cefb6c4617"],["/categories/CTF/赛事/index.html","b602f2552544c4e0089053eec3cb148d"],["/categories/index.html","d66d1ab23a0f30e8a1f5be93f35f5e88"],["/contact/index.html","a2ad81b9e81679b15f859bbdc95da6f1"],["/css/index.css","81bf06aa6f8f4d870300c06eb78717dd"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","b9f641e4b3917c00ad3f3d51cf99aed5"],["/image/12da9e9234fe43ac8601092b9b0a8d2f.png","78041a839c6ef1f9f1400aa18e2714e8"],["/image/1964477-20200406234627327-1601681134-1700990340346-130.png","dca1d2ca6e14853b33fb409ad087fa15"],["/image/1964477-20200406234831984-1876664653-1700990340346-131.png","50fc438c13c33235d4621b45e851dc15"],["/image/1964477-20200406235335043-1930261389-1700990340346-129.png","e3b37633f21db1dcdeb8ecb3c1e93364"],["/image/1964477-20200407000202377-1581427195-1700990340346-132.png","30d1401944a53be1268e6160ea89cd77"],["/image/1964477-20200407103428847-745843372-1700990340346-133.png","0ae411f1fdb92ea615d790319572fcb6"],["/image/1964477-20200407103501626-1447360416-1700990340346-134.png","bf1bcfd07947771c7e02787357c45676"],["/image/1964477-20200407105517997-451500709-1700990340346-135.png","84d27280b7e6d9f6c571f2f0648cdb3f"],["/image/1964477-20200407111602416-1849632067-1700990340346-136.png","6acc506fadb36577a305d8d3cc5561d7"],["/image/20200331230142753-1700990345403-159.png","c6de8d5922905a20dabbcb982b8f0b46"],["/image/20200904173922834-1700990484762-303.png","7511a4ae834aed3e96bb2e2fc9a91b2f"],["/image/20210605082433-1700990443387-226.png","51dda5fe8d7cfa5bae7df5bf29619821"],["/image/20210605082507-1700990443387-227.png","ee9597b02d7c407f0f0ce91487efc800"],["/image/20210605082516-1700990443387-228.png","9394f4b918d8394beff5bec337424dd1"],["/image/20210605082551-1700990443387-229.png","1da26986702eb4b501634a6655c68530"],["/image/20210605082610-1700990443387-233.png","aa9492801f60e52326c4e67bac41373a"],["/image/20210605082631-1700990443387-230.png","d245156d6cb94f74e56a245f855ae6ae"],["/image/20210605082702-1700990443387-234.png","5ef619331687eeb3c9f30a01d4f8d773"],["/image/20210605082751-1700990443387-232.png","425895f19a7c0183e15ef011889f063b"],["/image/20210605082843-1700990443387-231.png","cc12334a6b19b47e202331b9e312b45d"],["/image/20210605082904-1700990443387-235.png","f177802de173bbf8066b19a5e51e910e"],["/image/20210605082919-1700990443387-236.png","3032e2e608fba51db433c853d3288193"],["/image/20210605082954-1700990443387-237.png","dbc8968a528b59e030f55cca2ed2323d"],["/image/37853e892a9643ac805787746756841c.png","17f455cc5e42af1c860f07dd7ccb05d8"],["/image/7bbcda92852545ce97dbd2d22b130783.png","b28e91a4480214ec2a32edd9bb99915a"],["/image/96dcc086cb314c4c9a6f2503450c2089.png","2534406b5e88b5d420710feaa8a894b3"],["/image/QQ图片20230818231436-1700989357412-27.png","92119735c2287c1615b8d6b199bb3d89"],["/image/fc6729792a6c44d68b05e5e91c2b82a7.png","5d046c1ca90f378bad3267b7fc790637"],["/image/image-20230716091944628-1700990345403-145.png","99585470c4b560f678ada3dd0d3ced7a"],["/image/image-20230716092108512-1700990345403-147.png","2489e60f98ddcf4d8f1f5a088bcbf31a"],["/image/image-20230716092323573-1700990345403-146.png","8054dc7543c47566a73a3e23e9a3ff81"],["/image/image-20230716092359590-1700990345403-148.png","95d7eaa10931aa51ed4e7d944317b70a"],["/image/image-20230716092518819-1700990345403-149.png","80bd4bf0ae796360f7a6c71e0e6f299a"],["/image/image-20230716092548657-1700990345403-150.png","d6967a9d768ec793f11dcb86d2a141fc"],["/image/image-20230716092739503-1700990345403-152.png","a0994ab9dfb11941db1686bd0cd12b5f"],["/image/image-20230716092810228-1700990345403-153.png","1a7bc62233cfeabaef2e1b4a078890ad"],["/image/image-20230716093006803-1700990345403-155.png","8ae484ca956a5fe3111bc47c337864f3"],["/image/image-20230716093119089-1700990345403-154.png","5104995974ba4a855136e4c4ce655870"],["/image/image-20230716093403459-1700990345403-151.png","41fe6814d9c07c7062dd0203c70228cf"],["/image/image-20230716093550811-1700990345403-156.png","c421c825ae15d7e5cfe75fa848aa86ab"],["/image/image-20230716094542664-1700990345403-157.png","cf98a98a9385ec86eb708ea258d53685"],["/image/image-20230716094611137-1700990345403-158.png","92e531d91a7e6a57c841a2898439ba0b"],["/image/image-20230716094741275-1700990345404-161.png","f98301846990b60499449cf598d6b7cb"],["/image/image-20230716095642961-1700990345404-160.png","46cc9985f83aa0e928bc40877124f556"],["/image/image-20230720200207233-1700990453114-251.png","91c7f41f089b73fa51965bd080711bc0"],["/image/image-20230720200246031-1700990453114-252.png","0d045d1eb180f35bf87aff3e86a7d9a6"],["/image/image-20230720201155971-1700990453116-255.png","345e9360289c6b2be601e3aaa2b05983"],["/image/image-20230720201235539-1700990453114-253.png","4e76b54f866f715e43d58b67eeade02b"],["/image/image-20230720201719427-1700990453116-254.png","931d05f54d3e27654bdd7189e4cedfae"],["/image/image-20230720203539785-1700990453116-256.png","3dff68be84c646dfbb14f1f1cd37034d"],["/image/image-20230721095059045-1700990353927-179.png","8bb6d5a7ef0d211c59430e338df0e7cb"],["/image/image-20230721095310676-1700990353927-180.png","fbe2a9c6df56dcf34408c2233d9e9254"],["/image/image-20230721100029882-1700990353927-182.png","5ef6d2121fcd628b61fd15e3f53fb335"],["/image/image-20230721100049475-1700990353927-181.png","18eac6cf72e0798cb4f19f3a64ae0553"],["/image/image-20230721101047957-1700990353927-183.png","b5fe0706de4db017f5cbfa6c61cee39e"],["/image/image-20230721101152276-1700990353927-184.png","feec2089399b886aa5d202ff56784113"],["/image/image-20230729210104769-1700990370543-206.png","7305fca6ca6bbd3c27117845e2bf08aa"],["/image/image-20230729210132220-1700990370543-204.png","05691691c249973735e8f4d99bda42b2"],["/image/image-20230729210217434-1700990370543-205.png","d673dbf3bffe14dbb28fc3e5ed03812a"],["/image/image-20230729211158878-1700990370543-203.png","3afa5a8fd2a2cd038f7d14a2c08b37f2"],["/image/image-20230801115227872-1700990458631-263.png","d6404182dd95204352dabfb2896cb13d"],["/image/image-20230801115556904-1700990458631-264.png","fc709d4df695e90bc22c691d4a724bb1"],["/image/image-20230804134635993-1700990458631-266.png","75c7e9e381a99c9b0a7340a37a103ce0"],["/image/image-20230804203006691-1700990458631-265.png","afaabb726062aa467c5e10006c9eab43"],["/image/image-20230810173524265-1700990497600-315.png","815ab4e3e330fa0ee047411997f56a77"],["/image/image-20230810174134098-1700990497600-317.png","e8c46a2717cd40addeb6a4239bc1136a"],["/image/image-20230810174205139-1700990497600-316.png","0b7c7c54b984fca645064d9f2f26343b"],["/image/image-20230810175712493-1700990497600-320.png","02d1b777bb147e09226649bd61f18c0a"],["/image/image-20230810191408215-1700990497600-318.png","be559690b5b71ce21cc4f57cd699371e"],["/image/image-20230810191445372-1700990497600-319.png","b0a58369d9119bcda75c9fde16c730ce"],["/image/image-20230813164252615-1700990408076-211.png","b9ecde3928d7640885f39d4ae38d18b5"],["/image/image-20230813164322711-1700990408076-212.png","2cbd09dd268cfc47621e21d0a5e7ce7f"],["/image/image-20230813164337799-1700990408076-213.png","d70f93506210e5d5abb9fee95ab001a3"],["/image/image-20230814152239315-1700990408077-214.png","d1625c01fa5598e86df1d1a2308844e1"],["/image/image-20230814153345494-1700990408077-215.png","ddf3d1ef544cecc17860a5250a645e78"],["/image/image-20230818225755467-1700989357412-28.png","27f9ec6a189276f3b8bfca54c58c9f3a"],["/image/image-20230818231358283-1700989357412-26.png","a466794aa69e858d25d7e61f819ea9a4"],["/image/image-20230820163325149-1700989334020-17.png","dcb5a132fc5e679ccdcf4e2849728220"],["/image/image-20230820165620201-1700989334020-18.png","3bf7bd09a7257883499a4eca73e2d153"],["/image/image-20230821132029953-1698627034978-1-1700990364418-195.png","817843ab602328280754c8fb60b6657f"],["/image/image-20230821133215837-1692596095569-1-1693831300400-56-1698627034979-3-1700990364418-197.png","247de5efad2ef2abbd70a639f062e0a7"],["/image/image-20230821135115539-1698627034979-5-1700990364418-198.png","92c6a71ba9002958c3c81fdce23a0923"],["/image/image-20230822160255214-1698627034979-7-1700990364418-196.png","e9fb5dcd77a52b04de34f8badec81441"],["/image/image-20230913194808039-1700990465940-271.png","a80aae9fa83e5b27fc15bf2c25286c02"],["/image/image-20230913194824995-1700990465940-272.png","a3df1727e8cd87b7a524f2f55a99bcdc"],["/image/image-20230913194834595-1700990465940-274.png","deb813b4124515ad96696defbd5ac295"],["/image/image-20230913194844075-1700990465940-273.png","518d5a8f513106e42c2ea72c17449a86"],["/image/image-20230913194855104-1700990465940-275.png","ca97f0a0e16171b2df35b7d6e01a90a7"],["/image/image-20230913194905075-1700990465940-277.png","5f9b3e30d3555df8e449dfc797334c12"],["/image/image-20230913194924480-1700990465940-276.png","8aad47633251d1a8a1d8743fb0cc1069"],["/image/image-20230913194932339-1700990465940-278.png","99625a3b6d43564ba5b1f5cbcc72f3b8"],["/image/image-20230913194940735-1700990465940-280.png","13a090d0098ed9aa98f7d60e0ae1c5d4"],["/image/image-20230913194948225-1700990465940-279.png","df7fc673b90d8b77df650769b3902210"],["/image/image-20230913194958542-1700990465940-282.png","50961d06f09d267e3b37c18735b3b66c"],["/image/image-20230913195011641-1700990465940-281.png","39ed08b83cfc198b596c85793d9de2c4"],["/image/image-20230913195022559-1700990465940-283.png","dd9f57049fb06b1ea496e13a20510446"],["/image/image-20230913195033374-1700990465941-284.png","69c748233a49813b0693f681c09b5a43"],["/image/image-20230913195045944-1700990465941-286.png","174099047876fbe4da1a0207ff8b4a15"],["/image/image-20230913195057189-1700990465941-285.png","a937f8e6843b95c361e81045f4a45af7"],["/image/image-20230915195201845-1700990490828-305.png","a1148a792411b604dc58dc02b6371058"],["/image/image-20230916112206026-1700990490828-307.png","8cbd44353279bcd5b72fe8ab012cff07"],["/image/image-20230916112226123-1700990490828-306.png","34171eedf6425c0af26afe7306787b1e"],["/image/image-20230916142202534-1700990490828-308.png","e9ee7436da2bd81c5d2046785d474d37"],["/image/image-20230916142627972-1700990490828-309.png","8f12fe977c588bbf4d1b10e3fcaa4800"],["/image/image-20230916150656330-1700990328435-117.png","68e6f0787cf1a0975998c1a81b58207e"],["/image/image-20230916171228602-1700990328435-119.png","aa56057ea669c235b54e78ff515e70ff"],["/image/image-20230916171325595-1700990328435-118.png","56488661e5bd3eb08f4006b771d941b0"],["/image/image-20230917120408654-1700014518989-3-1700014609953-9-1700015416328-19-1700989325379-1.png","a8fe1c9e49b4746b5715dda202d7627d"],["/image/image-20230917120408654.png","a8fe1c9e49b4746b5715dda202d7627d"],["/image/image-20230917120504348-1700014609945-8-1700989325380-3.png","681a2ec45f88cdbde9570153ab785e12"],["/image/image-20230917120504348.png","681a2ec45f88cdbde9570153ab785e12"],["/image/image-20230917120610438-1700014609945-7-1700989325380-2.png","f5fa50eefe7dccf057fbb19b2d653595"],["/image/image-20230917120610438.png","f5fa50eefe7dccf057fbb19b2d653595"],["/image/image-20230917120721712-1700989325380-4.png","7ecdd1beda28f3fcc678ecf538554b39"],["/image/image-20230917120911281-1700989325380-6.png","3f74b9f22458ca5f2586dea0c5724d52"],["/image/image-20230917121422892-1700989325380-5.png","9a13861433999a6586408effab1a111a"],["/image/image-20230917121538182-1700989325380-7.png","e0477b2875b615981ac2e2fe6a864ba2"],["/image/image-20230917135439689-1700989325380-8.png","d6dc94a6400e6be0d97ecdf785efbdc2"],["/image/image-20230919184844700-1700990334962-123.png","657907261b9ee5d87fb5dede6a9a5b61"],["/image/image-20230919191443576-1700990334962-124.png","bb00a5ad7132fd41e341827b0cdc9af8"],["/image/image-20230919194210103-1700990334962-125.png","2bf22ef025c544458b153a15f6003e97"],["/image/image-20230922112645214-1700990359045-192.png","780a5bcf72d5f0e25d533366aaf1cd0c"],["/image/image-20230922112902823-1700990359045-191.png","d3edb19012805140bda64f0534d63958"],["/image/image-20231007092105405.png","c793190cffd5c2ab3fabf568f02d9249"],["/image/image-20231007144755630.png","d6f0ddd3b8c0776ab4339a261180606b"],["/image/image-20231007151052327.png","6b19e45183ac1589c6359a73d16d5a2f"],["/image/image-20231008183430859.png","da904a745e2ad6d62e9ffe7b4a25028d"],["/image/image-20231008183939747.png","3bf4bde2b0ee671ffe0ddfc2474422ee"],["/image/image-20231008184041682.png","4238ce57be28b4ed0ee064e28808d07c"],["/image/image-20231008184157673.png","ce55e596a3738fbf931b32f828567f9b"],["/image/image-20231008185921131.png","407b369b687a0ae580a068db70f6776a"],["/image/image-20231008190015859.png","80a4ba6c99598f64bc9a22be87134363"],["/image/image-20231008191215353.png","a5e73f42f9130f862a731eb38b2844a0"],["/image/image-20231008194559328.png","b03b76d9756cea159c80005ce5ab9a11"],["/image/image-20231008194648446.png","0431b797ea765f93521835aa0f237b4c"],["/image/image-20231008194728150.png","ddbacaa5e41e97a8e7a629e8145a4632"],["/image/image-20231008195429292.png","c97f9aa30a5b00d0d06282a2be2d7a94"],["/image/image-20231008195603850.png","da62b36ed0e4b6ea4c88acef274ccb31"],["/image/image-20231008195942763.png","b9b56d617fa9f612204fce5c4c320dc2"],["/image/image-20231008200011224.png","8dfb6fdcad037037371d016c939c9167"],["/image/image-20231008200158766.png","53a99537de322048af7188b33b3b1585"],["/image/image-20231008200232881.png","3cb1524245f580154710b9d9618ea34b"],["/image/image-20231008200323977.png","7277dc61016ed40abc7eaf76fab623c3"],["/image/image-20231013154315987-1700990134691-53.png","547c1d8576285ba31a24a0baf62eb039"],["/image/image-20231013154330409-1700990134690-51.png","7a286448957cb365ca498c2b389c098c"],["/image/image-20231013154343786-1700990134690-52.png","b45b6d9809d5a383f9189bfd533e264d"],["/image/image-20231013154359144-1700990134691-54.png","1a91ffc3254096ccf39306dc88adf545"],["/image/image-20231013154409805-1700990134691-55.png","d83c454776eb68c2b12b26e7aad490b7"],["/image/image-20231013154420985-1700990134691-56.png","c9915e69cedddecc98f41f3b375c1f2f"],["/image/image-20231013154438342-1700990134691-57.png","5fef9b9010bfd0fa92b8a3025fd7507c"],["/image/image-20231013154457471-1700990134691-58.png","170939f2099dd54e310ef4a8658ad4eb"],["/image/image-20231013154506994-1700990134691-59.png","46823712dd48ae716a31039e0f3f2d98"],["/image/image-20231017185626227-1700990443387-225.png","5055d436980c9f59d070cc9b51877914"],["/image/image-20231025095940311-1700990426090-221.png","f0d3bca2f79fae9d1d541e68041afd69"],["/image/image-20231025100216201-1700990426090-222.png","dbf12925ab57aeb0f9cea0f52b55a26f"],["/image/image-20231029204949806-1700015833096-28-1700989374410-38.png","354a8a05fc1018c7188b0d0f12beb75b"],["/image/image-20231029205130112-1700015833096-30-1700989374410-39.png","861403a241226ac55a0eb844244cff4f"],["/image/image-20231029211044492-1700015833096-32-1700989374411-41.png","9d874f9dc6ee3fb042ba39e6f9038c6a"],["/image/image-20231029211738989-1700015833096-29-1700989374410-40.png","3eab16f8773eca100098d4781e384985"],["/image/image-20231029212838216-1700015833096-31-1700989374411-42.png","946c9a34f8b24c6a41986d066edd17da"],["/image/image-20231111175609407-1699697773720-4-1699698037625-91-1700990318584-109.png","3615808102b883293f457e5b88c4b2cb"],["/image/image-20231111175746684-1699698037624-88-1700990318584-112.png","7c5c2b50fd459ffd8f6fb263d4111cab"],["/image/image-20231111175940503-1699698037625-89-1700990318584-110.png","441823dd6e3e13a0d9777bbcd0ba58e9"],["/image/image-20231111180232257-1699698037625-90-1700990318584-111.png","1bf9829d540535ace3ca5b3c20ab5774"],["/image/image-20231112171854941.png","b0c1cdd283f094d044a9d2023dd68290"],["/image/image-20231126172215323-1700990592297-327.png","2950c615dac4024b3de94111ae8ecaef"],["/image/image-20231126172304494-1700990592297-328.png","eda131d8dba27909ae9b5639828ace23"],["/image/v2-ed00ce07244a6e17948b0f713e880e82_r-1700990118619-49.jpg","ee972c2d7f18a83c6d25df315ca7c5aa"],["/img/1.png","dac4b40babc645137b48055d66a46849"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/QQ图片20230813163223.jpg","b986b63085372c8bb27575bfe6b341a2"],["/img/QQ图片20230813163230.jpg","f25caff0729c1e7868f8bd717c09ec15"],["/img/a.jpg","9e12cd9b419a5fd837fc1b28ea40b3d0"],["/img/a.png","1227f888452372bfe702347cd1285327"],["/img/archive.jpg","923dff77c07e2a95c0cfb9986ef94d28"],["/img/b.jpg","7cf5be90bb95f9b314174589752090bb"],["/img/c.jpg","a2be10a880803df081570b337851438d"],["/img/chen.png","1236b7924a615c48d9adc2fb07b8dac3"],["/img/d.jpg","5093361914e09323d23630f4b2b8a6b1"],["/img/e.jpg","1679d62bd8271da0793a058dda35faa4"],["/img/f.png","b88270899f0e591db27d7282aabcde08"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/image-20230812145240478.png","b1502de6cc34145955aad1328df45d2e"],["/img/image-20230813164252615.png","b9ecde3928d7640885f39d4ae38d18b5"],["/img/image-20230813164322711.png","2cbd09dd268cfc47621e21d0a5e7ce7f"],["/img/image-20230813164337799-1692596330986-15.png","d70f93506210e5d5abb9fee95ab001a3"],["/img/image-20230814152239315-1692596334373-17.png","d1625c01fa5598e86df1d1a2308844e1"],["/img/image-20230814153345494-1692596335955-18.png","ddf3d1ef544cecc17860a5250a645e78"],["/img/image-20230814153634163.png","94dc4399cbfab83e1783f9a1dabc5718"],["/img/image-20230814161353554.png","16f0efbf44d1647fdd961f14ab8b8ffa"],["/img/image-20230821134831928.png","d5adbd84cc6603b77dd4c7b02b14aad5"],["/img/image-20230821135115539.png","92c6a71ba9002958c3c81fdce23a0923"],["/img/image-20230822160255214.png","e9fb5dcd77a52b04de34f8badec81441"],["/img/image-20230822164523717.png","0cb1fbfac78af2b17ed6d6cd0d442950"],["/img/image-20230822164535066.png","31b15709afd415c600d1d9cb759b97d7"],["/img/image-20230822164554989.png","873449ab08e9925164aae3f714626849"],["/img/image-20230822192435394.png","3e55c3c7f2d198243ffd6b675356a4c4"],["/img/image-20230822192453952.png","285e0a7b52937f9fe4022100018fffc6"],["/img/image-20230823092226066.png","d9efb5ceedca2c4e1627f3cd1077a4f4"],["/img/image-20230824115453376.png","e14bb6f426afd70836141e15622a4c31"],["/img/image-20230824163338365.png","1ca978ef9345e28c233fc8fcdd245eea"],["/img/image-20230824172553805.png","04c1d43ad5f82a9e76b9c871331ce79b"],["/img/shagou.png","449b9141e8355de50e5c51a5b3d42f38"],["/img/shamao.png","a9af2e5fad01d7c6a635f1260f14176e"],["/img/tag.jpg","598f62b1bf08f95737ce71507346513e"],["/img/xin.png","0ab955f4337f08dd0c8d4eb53495f2f7"],["/img/我的头像.jpg","b3e3bd109791f2e3032389094db7cfce"],["/index.html","66ea83d3297fac2e1f07b32f7a42f0a5"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/link/index-1.html","2ec610d20db10df79f3d2025e057065d"],["/link/index.html","4a08a60d5d8a48aa604128c8af5feb6d"],["/page/2/index.html","01d9b80da9b0eb0fc7b694b0c7d8a2f4"],["/page/3/index.html","9a7049986093bbecd1d7e2158b81dbd7"],["/sw-register.js","8d07fddec09f119d7abfd85302a4f429"],["/tags/CTF/index.html","a350104df5c3e6354d7900ef1cf4b7c4"],["/tags/CTF/page/2/index.html","b10d5c82ff1e29d7d00890675e9430ff"],["/tags/index.html","a621a0f34397dd9126a6636f215f3364"],["/tags/unserialize/index.html","cd8f1b886ae6a96768f9c6f8e31ed165"],["/tags/wp/index.html","98b7d5febdea51f649ff38cc8a9cc78a"],["/tags/侧信道/index.html","455c22ddcb096d7cdac06642bdb8b34d"],["/tags/学习笔记/index.html","822e00cb61bdac0e2e1e650bfc58733c"],["/tags/笔记/index.html","629d7d48715252a12c90eaa15d2518bc"]];
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
