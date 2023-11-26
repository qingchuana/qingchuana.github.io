/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/17/Hexo-Github博客搭建教程（个人操作过程）/index.html","7b83ec3ee3ccb5b6ea13f29f2e808eb3"],["/2023/07/20/php-include/index.html","86d6b7887519e9fc0c6292832599bda3"],["/2023/07/21/HNCTF 2022 WEEK2  ez_SSTI/index.html","e7d9f7d1b33e77bec8177e8e37952729"],["/2023/07/22/SSRF  web351-/index.html","041adb6465b8d02b504c3796dea67dc1"],["/2023/07/29/jwtstruts/index.html","34d6a5e6da8eda45654e053e025dbbf4"],["/2023/08/03/PHP反序列化字符串逃逸/index.html","1735383d98d259e33993bb4303adff4a"],["/2023/08/10/2023巅峰极客 unserialize  wp/index.html","a30fa13e910eed25bf4b0ffdebb81a3a"],["/2023/08/17/XSS跨站脚本注入攻击/index.html","7a116e95e383bac377997c67de60b5b7"],["/2023/08/20/Xml实体注入漏洞/index.html","014c2b8e94b46044f2c05f9915344cc5"],["/2023/08/24/NepCTF2023--部分wp/index.html","b10a9ece6cd83ee6b7d2c16f59e7b69c"],["/2023/08/24/[HDCTF 2023]YamiYami/index.html","527beeed09134b99e62a727ff840c837"],["/2023/08/24/java学习/index.html","d909cdedbae77d9280724654a42f960c"],["/2023/08/24/我爱学ctf/index.html","5b711fb64295b6238a225a48f58b956b"],["/2023/08/31/[BJDCTF2020]Mark loves cat/index.html","633e492d3f392d8bcc96e3f0c8759a23"],["/2023/08/31/[天翼杯 2021]esay_eval /index.html","74de214a2e7e089db69332a067d8141a"],["/2023/09/01/结营赛wp/index.html","b75b38adc728efcc3dad5bf2ae1ef2b8"],["/2023/09/02/2023蓝帽杯  初赛web题解之LovePHP/index.html","e92b0bd348cec08c0aec0e43e59ed816"],["/2023/09/10/SICTF-2nd/index.html","3eabf83ef982a60942dccdd27d08bb57"],["/2023/09/18/ctfshow XSS跨站脚本注入漏洞 web316-/index.html","ab865f7d1ce3742208ae4b07b2437b46"],["/2023/09/20/Docker file 的基本操作/index.html","efc99b531302d6a03e4cb9f2457e3d66"],["/2023/09/22/Java序列化和反序列化学习/index.html","2fc8d63840ea919136ca702227358fd3"],["/2023/09/24/Web259/index.html","cb42f95433bca3e0878487a85afc2f6a"],["/2023/09/28/日常题目练习（一）/index.html","dfe96fc4716d14d778b6899d30c1d7ee"],["/2023/10/01/宏/index.html","920dd31f66f2b99845bcdfe759207def"],["/2023/10/07/校赛wp/index.html","1d8a77d52469e579e3dd37472b3e73a0"],["/2023/10/16/无参RCE/index.html","005b176224c2ea78804983ae05983b5e"],["/2023/10/17/命令注入盲注读取文件/index.html","058a6c55fc106d79b679766a330a06fa"],["/2023/10/18/Pear命令读文件/index.html","643b97eb104955a67f1e342e1080c38a"],["/2023/10/18/香山杯/index.html","63156242c95ef13d79e16deda00db038"],["/2023/10/19/2023年SWPU NSS 秋季招新赛 (校外赛道)/index.html","564c4ea3491168f6bbeb4a671ce2e9fc"],["/2023/10/19/file_put_contents利用技巧(phpfilter协议）/index.html","5ed9c995d57f3215d04c7b91f63d16ac"],["/2023/10/24/小迪安全知识积累/index.html","d15f1577bd1c1c8728e493e3a3928284"],["/2023/10/25/new starweek 4/index.html","90d7e3bf953e97c62e57865d0e141a1e"],["/2023/10/25/流量包分析/index.html","20bde88dfa848677da2568b3cf1aaf56"],["/2023/11/07/新型车联网安全网络协议破解（阶段一）/index.html","5e68fa21c1d23685244523ca43aacd98"],["/2023/11/15/[羊城杯 2020]easycon/index.html","360cd1035069b28b96b5d01d5d4b7830"],["/404.html","b992e3988594c93277fde4e3c3b923a2"],["/404/index.html","eb03b316232186941453d12ce51c0623"],["/about/index.html","31f2226140984db408297526edb39678"],["/archives/2023/07/index.html","05e0ba95b7adf85d72ae16adda456b5d"],["/archives/2023/08/index.html","033c915bb8a79f7a72b3331ae554f71d"],["/archives/2023/09/index.html","d320d3f8bd4f91c7a70fff7458313ef4"],["/archives/2023/10/index.html","736447d2561192ac5337788c8e3b1ab6"],["/archives/2023/10/page/2/index.html","05101c7b324c78843da55b475980cdbe"],["/archives/2023/11/index.html","173fc32578321b44c3c40a80aaa46867"],["/archives/2023/index.html","c9f25af55196fccd81a9a529630495b2"],["/archives/2023/page/2/index.html","24c04f9f832df6b9354bc99af7d5d999"],["/archives/2023/page/3/index.html","5dc6d0fb23852d3270a72cf3ff93b7d9"],["/archives/2023/page/4/index.html","4d7f748f5f1769f08ed601396b20c070"],["/archives/index.html","b31c91ecda1a9455f67c9ce1c945f6cc"],["/archives/page/2/index.html","7f9c0942f925dddf2636f32754eec7fd"],["/archives/page/3/index.html","9379064d963a142a304c3a472d83dc00"],["/archives/page/4/index.html","8cc6eda400ee7e693908bd9fbe0acd99"],["/categories/CTF/index.html","55e709388094d1754fb1d37840ce3486"],["/categories/CTF/page/2/index.html","31ff4be37d2522c86d90b9b444922ae7"],["/categories/CTF/page/3/index.html","670d812b81e54ecef18e531a5a0831ff"],["/categories/CTF/wp/index.html","7f9cc39b0a1506e9a4afcaaa1f108c23"],["/categories/CTF/wp/page/2/index.html","f953cc628fadd79307d932c80dc3604f"],["/categories/CTF/笔记/index.html","5a96b711a0cf4ec5038cda2bcab986d5"],["/categories/CTF/赛事/index.html","063747d40333d27952ed70a093f2ae6d"],["/categories/index.html","a075bcd2080030d341cf3931bfbf4001"],["/contact/index.html","9c7a139968cfa15f22bd80f33f22dd20"],["/css/index.css","81bf06aa6f8f4d870300c06eb78717dd"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","c1b8efa8354555b0b2b440b45ea7cf0c"],["/image/12da9e9234fe43ac8601092b9b0a8d2f-1700994174279-22.png","78041a839c6ef1f9f1400aa18e2714e8"],["/image/1964477-20200406234627327-1601681134-1700990340346-130-1700994531544-104.png","dca1d2ca6e14853b33fb409ad087fa15"],["/image/1964477-20200406234831984-1876664653-1700990340346-131-1700994531544-105.png","50fc438c13c33235d4621b45e851dc15"],["/image/1964477-20200406235335043-1930261389-1700990340346-129-1700994531544-103.png","e3b37633f21db1dcdeb8ecb3c1e93364"],["/image/1964477-20200407000202377-1581427195-1700990340346-132-1700994531544-106.png","30d1401944a53be1268e6160ea89cd77"],["/image/1964477-20200407103428847-745843372-1700990340346-133-1700994531544-107.png","0ae411f1fdb92ea615d790319572fcb6"],["/image/1964477-20200407103501626-1447360416-1700990340346-134-1700994531544-108.png","bf1bcfd07947771c7e02787357c45676"],["/image/1964477-20200407105517997-451500709-1700990340346-135-1700994531544-109.png","84d27280b7e6d9f6c571f2f0648cdb3f"],["/image/1964477-20200407111602416-1849632067-1700990340346-136-1700994531544-110.png","6acc506fadb36577a305d8d3cc5561d7"],["/image/20200331230142753-1700990345403-159-1700994540501-132.png","c6de8d5922905a20dabbcb982b8f0b46"],["/image/20200904173922834-1700990484762-303.png","7511a4ae834aed3e96bb2e2fc9a91b2f"],["/image/20210605082433-1700990443387-226.png","51dda5fe8d7cfa5bae7df5bf29619821"],["/image/20210605082507-1700990443387-227.png","ee9597b02d7c407f0f0ce91487efc800"],["/image/20210605082516-1700990443387-228.png","9394f4b918d8394beff5bec337424dd1"],["/image/20210605082551-1700990443387-229.png","1da26986702eb4b501634a6655c68530"],["/image/20210605082610-1700990443387-233.png","aa9492801f60e52326c4e67bac41373a"],["/image/20210605082631-1700990443387-230.png","d245156d6cb94f74e56a245f855ae6ae"],["/image/20210605082702-1700990443387-234.png","5ef619331687eeb3c9f30a01d4f8d773"],["/image/20210605082751-1700990443387-232.png","425895f19a7c0183e15ef011889f063b"],["/image/20210605082843-1700990443387-231.png","cc12334a6b19b47e202331b9e312b45d"],["/image/20210605082904-1700990443387-235.png","f177802de173bbf8066b19a5e51e910e"],["/image/20210605082919-1700990443387-236.png","3032e2e608fba51db433c853d3288193"],["/image/20210605082954-1700990443387-237.png","dbc8968a528b59e030f55cca2ed2323d"],["/image/37853e892a9643ac805787746756841c-1700994174279-21.png","17f455cc5e42af1c860f07dd7ccb05d8"],["/image/7bbcda92852545ce97dbd2d22b130783-1700994174280-24.png","b28e91a4480214ec2a32edd9bb99915a"],["/image/96dcc086cb314c4c9a6f2503450c2089-1700994174279-23.png","2534406b5e88b5d420710feaa8a894b3"],["/image/QQ图片20230818231436-1700989357412-27-1700994419702-2.png","92119735c2287c1615b8d6b199bb3d89"],["/image/fc6729792a6c44d68b05e5e91c2b82a7-1700994174280-25.png","5d046c1ca90f378bad3267b7fc790637"],["/image/image-20230716091944628-1700990345403-145-1700994540501-119.png","99585470c4b560f678ada3dd0d3ced7a"],["/image/image-20230716092108512-1700990345403-147-1700994540501-120.png","2489e60f98ddcf4d8f1f5a088bcbf31a"],["/image/image-20230716092323573-1700990345403-146-1700994540501-122.png","8054dc7543c47566a73a3e23e9a3ff81"],["/image/image-20230716092359590-1700990345403-148-1700994540501-121.png","95d7eaa10931aa51ed4e7d944317b70a"],["/image/image-20230716092518819-1700990345403-149-1700994540501-123.png","80bd4bf0ae796360f7a6c71e0e6f299a"],["/image/image-20230716092548657-1700990345403-150-1700994540501-124.png","d6967a9d768ec793f11dcb86d2a141fc"],["/image/image-20230716092739503-1700990345403-152-1700994540501-125.png","a0994ab9dfb11941db1686bd0cd12b5f"],["/image/image-20230716092810228-1700990345403-153-1700994540501-126.png","1a7bc62233cfeabaef2e1b4a078890ad"],["/image/image-20230716093006803-1700990345403-155-1700994540501-127.png","8ae484ca956a5fe3111bc47c337864f3"],["/image/image-20230716093119089-1700990345403-154-1700994540501-128.png","5104995974ba4a855136e4c4ce655870"],["/image/image-20230716093403459-1700990345403-151-1700994540501-129.png","41fe6814d9c07c7062dd0203c70228cf"],["/image/image-20230716093550811-1700990345403-156-1700994540501-130.png","c421c825ae15d7e5cfe75fa848aa86ab"],["/image/image-20230716094542664-1700990345403-157-1700994540501-131.png","cf98a98a9385ec86eb708ea258d53685"],["/image/image-20230716094611137-1700990345403-158-1700994540501-133.png","92e531d91a7e6a57c841a2898439ba0b"],["/image/image-20230716094741275-1700990345404-161-1700994540501-134.png","f98301846990b60499449cf598d6b7cb"],["/image/image-20230716095642961-1700990345404-160-1700994540501-135.png","46cc9985f83aa0e928bc40877124f556"],["/image/image-20230720200207233-1700990453114-251.png","91c7f41f089b73fa51965bd080711bc0"],["/image/image-20230720200246031-1700990453114-252.png","0d045d1eb180f35bf87aff3e86a7d9a6"],["/image/image-20230720201155971-1700990453116-255.png","345e9360289c6b2be601e3aaa2b05983"],["/image/image-20230720201235539-1700990453114-253.png","4e76b54f866f715e43d58b67eeade02b"],["/image/image-20230720201719427-1700990453116-254.png","931d05f54d3e27654bdd7189e4cedfae"],["/image/image-20230720203539785-1700990453116-256.png","3dff68be84c646dfbb14f1f1cd37034d"],["/image/image-20230721095059045-1700990353927-179-1700994545908-153.png","8bb6d5a7ef0d211c59430e338df0e7cb"],["/image/image-20230721095310676-1700990353927-180-1700994545908-155.png","fbe2a9c6df56dcf34408c2233d9e9254"],["/image/image-20230721100029882-1700990353927-182-1700994545908-156.png","5ef6d2121fcd628b61fd15e3f53fb335"],["/image/image-20230721100049475-1700990353927-181-1700994545908-154.png","18eac6cf72e0798cb4f19f3a64ae0553"],["/image/image-20230721101047957-1700990353927-183-1700994545908-158.png","b5fe0706de4db017f5cbfa6c61cee39e"],["/image/image-20230721101152276-1700990353927-184-1700994545908-157.png","feec2089399b886aa5d202ff56784113"],["/image/image-20230729210104769-1700990370543-206-1700994565105-178.png","7305fca6ca6bbd3c27117845e2bf08aa"],["/image/image-20230729210132220-1700990370543-204-1700994565106-180.png","05691691c249973735e8f4d99bda42b2"],["/image/image-20230729210217434-1700990370543-205-1700994565105-179.png","d673dbf3bffe14dbb28fc3e5ed03812a"],["/image/image-20230729211158878-1700990370543-203-1700994565105-177.png","3afa5a8fd2a2cd038f7d14a2c08b37f2"],["/image/image-20230801115227872-1700990458631-263.png","d6404182dd95204352dabfb2896cb13d"],["/image/image-20230801115556904-1700990458631-264.png","fc709d4df695e90bc22c691d4a724bb1"],["/image/image-20230804134635993-1700990458631-266.png","75c7e9e381a99c9b0a7340a37a103ce0"],["/image/image-20230804203006691-1700990458631-265.png","afaabb726062aa467c5e10006c9eab43"],["/image/image-20230810173524265-1700990497600-315.png","815ab4e3e330fa0ee047411997f56a77"],["/image/image-20230810174134098-1700990497600-317.png","e8c46a2717cd40addeb6a4239bc1136a"],["/image/image-20230810174205139-1700990497600-316.png","0b7c7c54b984fca645064d9f2f26343b"],["/image/image-20230810175712493-1700990497600-320.png","02d1b777bb147e09226649bd61f18c0a"],["/image/image-20230810191408215-1700990497600-318.png","be559690b5b71ce21cc4f57cd699371e"],["/image/image-20230810191445372-1700990497600-319.png","b0a58369d9119bcda75c9fde16c730ce"],["/image/image-20230813164252615-1700990408076-211-1700994582910-185.png","b9ecde3928d7640885f39d4ae38d18b5"],["/image/image-20230813164322711-1700990408076-212-1700994582910-186.png","2cbd09dd268cfc47621e21d0a5e7ce7f"],["/image/image-20230813164337799-1700990408076-213-1700994582910-187.png","d70f93506210e5d5abb9fee95ab001a3"],["/image/image-20230814152239315-1700990408077-214-1700994582910-188.png","d1625c01fa5598e86df1d1a2308844e1"],["/image/image-20230814153345494-1700990408077-215-1700994582910-189.png","ddf3d1ef544cecc17860a5250a645e78"],["/image/image-20230818225755467-1700989357412-28-1700994419702-3.png","27f9ec6a189276f3b8bfca54c58c9f3a"],["/image/image-20230818231358283-1700989357412-26-1700994419701-1.png","a466794aa69e858d25d7e61f819ea9a4"],["/image/image-20230820163325149-1700989334020-17-1700994164573-17.png","dcb5a132fc5e679ccdcf4e2849728220"],["/image/image-20230820165620201-1700989334020-18-1700994164574-18.png","3bf7bd09a7257883499a4eca73e2d153"],["/image/image-20230821132029953-1698627034978-1-1700990364418-195-1700994560237-169.png","817843ab602328280754c8fb60b6657f"],["/image/image-20230821133215837-1692596095569-1-1693831300400-56-1698627034979-3-1700990364418-197-1700994560237-172.png","247de5efad2ef2abbd70a639f062e0a7"],["/image/image-20230821135115539-1698627034979-5-1700990364418-198-1700994560237-170.png","92c6a71ba9002958c3c81fdce23a0923"],["/image/image-20230822160255214-1698627034979-7-1700990364418-196-1700994560237-171.png","e9fb5dcd77a52b04de34f8badec81441"],["/image/image-20230913194808039-1700990465940-271.png","a80aae9fa83e5b27fc15bf2c25286c02"],["/image/image-20230913194824995-1700990465940-272.png","a3df1727e8cd87b7a524f2f55a99bcdc"],["/image/image-20230913194834595-1700990465940-274.png","deb813b4124515ad96696defbd5ac295"],["/image/image-20230913194844075-1700990465940-273.png","518d5a8f513106e42c2ea72c17449a86"],["/image/image-20230913194855104-1700990465940-275.png","ca97f0a0e16171b2df35b7d6e01a90a7"],["/image/image-20230913194905075-1700990465940-277.png","5f9b3e30d3555df8e449dfc797334c12"],["/image/image-20230913194924480-1700990465940-276.png","8aad47633251d1a8a1d8743fb0cc1069"],["/image/image-20230913194932339-1700990465940-278.png","99625a3b6d43564ba5b1f5cbcc72f3b8"],["/image/image-20230913194940735-1700990465940-280.png","13a090d0098ed9aa98f7d60e0ae1c5d4"],["/image/image-20230913194948225-1700990465940-279.png","df7fc673b90d8b77df650769b3902210"],["/image/image-20230913194958542-1700990465940-282.png","50961d06f09d267e3b37c18735b3b66c"],["/image/image-20230913195011641-1700990465940-281.png","39ed08b83cfc198b596c85793d9de2c4"],["/image/image-20230913195022559-1700990465940-283.png","dd9f57049fb06b1ea496e13a20510446"],["/image/image-20230913195033374-1700990465941-284.png","69c748233a49813b0693f681c09b5a43"],["/image/image-20230913195045944-1700990465941-286.png","174099047876fbe4da1a0207ff8b4a15"],["/image/image-20230913195057189-1700990465941-285.png","a937f8e6843b95c361e81045f4a45af7"],["/image/image-20230915195201845-1700990490828-305.png","a1148a792411b604dc58dc02b6371058"],["/image/image-20230916112206026-1700990490828-307.png","8cbd44353279bcd5b72fe8ab012cff07"],["/image/image-20230916112226123-1700990490828-306.png","34171eedf6425c0af26afe7306787b1e"],["/image/image-20230916142202534-1700990490828-308.png","e9ee7436da2bd81c5d2046785d474d37"],["/image/image-20230916142627972-1700990490828-309.png","8f12fe977c588bbf4d1b10e3fcaa4800"],["/image/image-20230916150656330-1700990328435-117-1700994521524-91.png","68e6f0787cf1a0975998c1a81b58207e"],["/image/image-20230916171228602-1700990328435-119-1700994521525-92.png","aa56057ea669c235b54e78ff515e70ff"],["/image/image-20230916171325595-1700990328435-118-1700994521525-93.png","56488661e5bd3eb08f4006b771d941b0"],["/image/image-20230917120408654-1700014518989-3-1700014609953-9-1700015416328-19-1700989325379-1-1700994157322-1.png","a8fe1c9e49b4746b5715dda202d7627d"],["/image/image-20230917120408654.png","a8fe1c9e49b4746b5715dda202d7627d"],["/image/image-20230917120504348-1700014609945-8-1700989325380-3-1700994157323-3.png","681a2ec45f88cdbde9570153ab785e12"],["/image/image-20230917120504348.png","681a2ec45f88cdbde9570153ab785e12"],["/image/image-20230917120610438-1700014609945-7-1700989325380-2-1700994157323-2.png","f5fa50eefe7dccf057fbb19b2d653595"],["/image/image-20230917120610438.png","f5fa50eefe7dccf057fbb19b2d653595"],["/image/image-20230917120721712-1700989325380-4-1700994157323-5.png","7ecdd1beda28f3fcc678ecf538554b39"],["/image/image-20230917120911281-1700989325380-6-1700994157323-4.png","3f74b9f22458ca5f2586dea0c5724d52"],["/image/image-20230917121422892-1700989325380-5-1700994157323-6.png","9a13861433999a6586408effab1a111a"],["/image/image-20230917121538182-1700989325380-7-1700994157323-7.png","e0477b2875b615981ac2e2fe6a864ba2"],["/image/image-20230917135439689-1700989325380-8-1700994157323-8.png","d6dc94a6400e6be0d97ecdf785efbdc2"],["/image/image-20230919184844700-1700990334962-123-1700994526524-97.png","657907261b9ee5d87fb5dede6a9a5b61"],["/image/image-20230919191443576-1700990334962-124-1700994526524-99.png","bb00a5ad7132fd41e341827b0cdc9af8"],["/image/image-20230919194210103-1700990334962-125-1700994526524-98.png","2bf22ef025c544458b153a15f6003e97"],["/image/image-20230922112645214-1700990359045-192-1700994555769-165.png","780a5bcf72d5f0e25d533366aaf1cd0c"],["/image/image-20230922112902823-1700990359045-191-1700994555769-166.png","d3edb19012805140bda64f0534d63958"],["/image/image-20231007092105405-1700994510649-43.png","c793190cffd5c2ab3fabf568f02d9249"],["/image/image-20231007144755630-1700994510649-50.png","d6f0ddd3b8c0776ab4339a261180606b"],["/image/image-20231007151052327-1700994510649-49.png","6b19e45183ac1589c6359a73d16d5a2f"],["/image/image-20231008183430859-1700994510649-44.png","da904a745e2ad6d62e9ffe7b4a25028d"],["/image/image-20231008183939747-1700994510649-46.png","3bf4bde2b0ee671ffe0ddfc2474422ee"],["/image/image-20231008184041682-1700994510649-45.png","4238ce57be28b4ed0ee064e28808d07c"],["/image/image-20231008184157673-1700994510649-47.png","ce55e596a3738fbf931b32f828567f9b"],["/image/image-20231008185921131-1700994510649-48.png","407b369b687a0ae580a068db70f6776a"],["/image/image-20231008190015859-1700994510649-51.png","80a4ba6c99598f64bc9a22be87134363"],["/image/image-20231008191215353-1700994510650-53.png","a5e73f42f9130f862a731eb38b2844a0"],["/image/image-20231008194559328-1700994510650-52.png","b03b76d9756cea159c80005ce5ab9a11"],["/image/image-20231008194648446-1700994510650-54.png","0431b797ea765f93521835aa0f237b4c"],["/image/image-20231008194728150-1700994510650-57.png","ddbacaa5e41e97a8e7a629e8145a4632"],["/image/image-20231008195429292-1700994510650-62.png","c97f9aa30a5b00d0d06282a2be2d7a94"],["/image/image-20231008195603850-1700994510650-60.png","da62b36ed0e4b6ea4c88acef274ccb31"],["/image/image-20231008195942763-1700994510650-55.png","b9b56d617fa9f612204fce5c4c320dc2"],["/image/image-20231008200011224-1700994510650-56.png","8dfb6fdcad037037371d016c939c9167"],["/image/image-20231008200158766-1700994510650-59.png","53a99537de322048af7188b33b3b1585"],["/image/image-20231008200232881-1700994510650-58.png","3cb1524245f580154710b9d9618ea34b"],["/image/image-20231008200323977-1700994510650-61.png","7277dc61016ed40abc7eaf76fab623c3"],["/image/image-20231013154315987-1700990134691-53-1700994502483-26.png","547c1d8576285ba31a24a0baf62eb039"],["/image/image-20231013154330409-1700990134690-51-1700994502483-25.png","7a286448957cb365ca498c2b389c098c"],["/image/image-20231013154343786-1700990134690-52-1700994502483-27.png","b45b6d9809d5a383f9189bfd533e264d"],["/image/image-20231013154359144-1700990134691-54-1700994502483-28.png","1a91ffc3254096ccf39306dc88adf545"],["/image/image-20231013154409805-1700990134691-55-1700994502483-30.png","d83c454776eb68c2b12b26e7aad490b7"],["/image/image-20231013154420985-1700990134691-56-1700994502483-29.png","c9915e69cedddecc98f41f3b375c1f2f"],["/image/image-20231013154438342-1700990134691-57-1700994502483-31.png","5fef9b9010bfd0fa92b8a3025fd7507c"],["/image/image-20231013154457471-1700990134691-58-1700994502483-33.png","170939f2099dd54e310ef4a8658ad4eb"],["/image/image-20231013154506994-1700990134691-59-1700994502483-32.png","46823712dd48ae716a31039e0f3f2d98"],["/image/image-20231017185626227-1700990443387-225.png","5055d436980c9f59d070cc9b51877914"],["/image/image-20231025095940311-1700990426090-221-1700994600468-195.png","f0d3bca2f79fae9d1d541e68041afd69"],["/image/image-20231025100216201-1700990426090-222-1700994600468-196.png","dbf12925ab57aeb0f9cea0f52b55a26f"],["/image/image-20231026211232849-1700993943476-87.png","95d746d2ca4a1774e7825ccc4a5f80fa"],["/image/image-20231027142626076-1700993943478-115.png","8ff519595bfe72f7fca3e7aa58343b56"],["/image/image-20231027142702429-1700993943478-116.png","6b9c235e782707e52a612908213205b5"],["/image/image-20231027144001551-1700993943475-61.png","22f302f27e046a078d12747ca6235181"],["/image/image-20231028203627086-1700993943475-62.png","e517703a2144dc8ff6f3b8261880d5bc"],["/image/image-20231028203938275-1700993943475-63.png","db8b184cbe0595eed195a3e8b8a3b029"],["/image/image-20231028204046922-1700993943475-64.png","c5cd4cc5bf8e76ab02b01ab574408464"],["/image/image-20231028204121236-1700993943475-65.png","23dfb2c37799abf88d4fb3a4159a1825"],["/image/image-20231029204949806-1700015833096-28-1700989374410-38-1700994492324-13.png","354a8a05fc1018c7188b0d0f12beb75b"],["/image/image-20231029205130112-1700015833096-30-1700989374410-39-1700994492325-14.png","861403a241226ac55a0eb844244cff4f"],["/image/image-20231029211044492-1700015833096-32-1700989374411-41-1700994492325-17.png","9d874f9dc6ee3fb042ba39e6f9038c6a"],["/image/image-20231029211738989-1700015833096-29-1700989374410-40-1700994492325-16.png","3eab16f8773eca100098d4781e384985"],["/image/image-20231029212838216-1700015833096-31-1700989374411-42-1700994492325-15.png","946c9a34f8b24c6a41986d066edd17da"],["/image/image-20231101190636535-1700993943475-66.png","c2c9729024c53c180dbf9d3491b5cd05"],["/image/image-20231101191051471-1700993943475-67.png","d9ef890b2bcc5ca89542ce04c6271dc5"],["/image/image-20231101191451988-1700993943475-68.png","cd214f6ac0b52e07eaf0d36541d67884"],["/image/image-20231101191554264-1700993943475-69.png","1d1764653760f28a1bce2a2abdf541aa"],["/image/image-20231101191611122-1700993943475-70.png","11c12992bad2430ac9c507b54998537e"],["/image/image-20231102191550415-1700993943475-71.png","58f7943fa4b586c9e4449f267768956f"],["/image/image-20231102191629079-1700993943475-72.png","c0815c77984960c0ae4c7e214d1af8eb"],["/image/image-20231102191713057-1700993943475-73.png","4c8684f466c73929df5d814bb71ce39c"],["/image/image-20231102191832660-1700993943475-74.png","6bfda274fb622ef9e6e8dcbdf6fc87a3"],["/image/image-20231102191912232-1700993943475-75.png","9a7576c42b56407362f6d8e1e773b623"],["/image/image-20231102191926719-1700993943475-76.png","6cec23ac0f4da595388b3e496784e90d"],["/image/image-20231102192006355-1700993943475-77.png","635420d8d04d79e96e34a63002e236c5"],["/image/image-20231102192533599-1700993943476-88.png","a257228c7510e8921f064b2afe23dc1a"],["/image/image-20231102192553030-1700993943476-89.png","1a096b3844f208742447c25d9e84a87b"],["/image/image-20231102193251406-1700993943476-90.png","544d7b606a5bfd857602ae5effc30cc5"],["/image/image-20231102193417913-1700993943476-91.png","ff2d1d99f8aa66d96afe1f3bd968fc4e"],["/image/image-20231103154804015-1700993943476-92.png","a47191a1d71407b5fad5fc0d8afcacec"],["/image/image-20231103172910945-1700993943476-93.png","ee486f0369dad5375c49238317472893"],["/image/image-20231103172934296-1700993943476-94.png","904361fbdee22cd92fa7ddffe1eee19e"],["/image/image-20231103173110832-1700993943476-95.png","d7d4b0d49983085af70868bb3e08caff"],["/image/image-20231103211214945-1700993943476-97.png","22f816ee67d428b7e53f94632c6b91b1"],["/image/image-20231103211345423-1700993943476-96.png","11153b88832d566c4896a73d3bebe1f6"],["/image/image-20231103211753425-1700993943476-98.png","1aedaed262ea2f70c682fb069d933c54"],["/image/image-20231105154830496-1700993943475-78.png","f9dda861d757fbd22ccbd642f416a486"],["/image/image-20231105155551630-1700993943475-79.png","4774f63c0f81f014d19b6f75369830fc"],["/image/image-20231105155656965-1700993943475-80.png","a7f3c1c05a66ebb4a8e727910c3471a5"],["/image/image-20231105155752855-1700993943475-81.png","7fcbd4f5831df2a5f9e824e8c6fd860c"],["/image/image-20231105155906859-1700993943475-82.png","baa3beb8c1cdbb9955ed559c093e5b93"],["/image/image-20231105160049123-1700993943475-83.png","759875321f8b375ddd51a42dc9d04b80"],["/image/image-20231105160305675-1700993943475-84.png","b1635bb1a9880a0734668d0c17faebec"],["/image/image-20231105185238323-1700993943476-99.png","6d5da3bcd013a454c3486c9920dcf54a"],["/image/image-20231105185457402-1700993943476-100.png","58129e88165f24308b0d9273e4a2f2df"],["/image/image-20231105185528606-1700993943476-101.png","52efce175222c1803c0721b85372ecb8"],["/image/image-20231110124136939-1700993943476-102.png","6715ed5973a26877216f222b86e809e0"],["/image/image-20231111175609407-1699697773720-4-1699698037625-91-1700990318584-109-1700994516091-83.png","3615808102b883293f457e5b88c4b2cb"],["/image/image-20231111175746684-1699698037624-88-1700990318584-112-1700994516091-85.png","7c5c2b50fd459ffd8f6fb263d4111cab"],["/image/image-20231111175940503-1699698037625-89-1700990318584-110-1700994516091-84.png","441823dd6e3e13a0d9777bbcd0ba58e9"],["/image/image-20231111180232257-1699698037625-90-1700990318584-111-1700994516091-86.png","1bf9829d540535ace3ca5b3c20ab5774"],["/image/image-20231112171854941.png","b0c1cdd283f094d044a9d2023dd68290"],["/image/image-20231119162833115-1700613338389-1-1700993943476-103.png","fd2261eba83bc198e8efe1e04418f319"],["/image/image-20231119163510103-1700613338390-3-1700993943476-104.png","13698261f62b370916561c4c3c2569f6"],["/image/image-20231120111721348-1700613338390-2-1700993943476-105.png","2cc327c2a28c991a61d12f32bb2f3db2"],["/image/image-20231120200135268-1700613338390-4-1700993943476-106.png","d7ae94c530334126ed7d4f36367eb46e"],["/image/image-20231121184441123-1700613338390-5-1700993943476-109.png","b6e1ad8c78128b286360acd742791731"],["/image/image-20231121214639088-1700613338390-6-1700993943478-117.png","eb68343793b387920dae5a0bfd297154"],["/image/image-20231122090732539-1700993943478-118.png","6452d2d4f45d176c173bb96e65f5d142"],["/image/image-20231122091323513-1700993943476-85.png","7ef9e4ac2a4364f64adbab5f195652c8"],["/image/image-20231122092713811-1700993943474-60.png","771d0571fd55030ad98d46f25abc8b63"],["/image/image-20231125204728870-1700993943476-110.png","5ea4dc8560eba7c7436ff5b0347883c6"],["/image/image-20231125205505003-1700993943476-111.png","3a4924dd63fc5640a2d0799227e67198"],["/image/image-20231125205712270-1700993943477-112.png","9b3005d7cd0989e2af56287418af3e8a"],["/image/image-20231125205748272-1700993943477-113.png","5bd065ff9c1c496a3767904e51ae3ebb"],["/image/image-20231125210006094-1700993943477-114.png","c01f4cbb331480e7bb1c25525b85013a"],["/image/image-20231126103458770-1700993943476-86.png","b0adb8a280446121370212929fba0187"],["/image/image-20231126120649550-1700993943476-107.png","4b7ad1b6e28edef3738b1766f30f80bb"],["/image/image-20231126120914146-1700993943476-108.png","747831e31ac42a8589cd3f5e05eb9268"],["/image/image-20231126172215323-1700990592297-327.png","2950c615dac4024b3de94111ae8ecaef"],["/image/image-20231126172304494-1700990592297-328.png","eda131d8dba27909ae9b5639828ace23"],["/image/v2-ed00ce07244a6e17948b0f713e880e82_r-1700990118619-49-1700994497396-23.jpg","ee972c2d7f18a83c6d25df315ca7c5aa"],["/img/1.png","dac4b40babc645137b48055d66a46849"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/QQ图片20230813163223.jpg","b986b63085372c8bb27575bfe6b341a2"],["/img/QQ图片20230813163230.jpg","f25caff0729c1e7868f8bd717c09ec15"],["/img/a.jpg","9e12cd9b419a5fd837fc1b28ea40b3d0"],["/img/a.png","1227f888452372bfe702347cd1285327"],["/img/archive.jpg","923dff77c07e2a95c0cfb9986ef94d28"],["/img/b.jpg","7cf5be90bb95f9b314174589752090bb"],["/img/c.jpg","a2be10a880803df081570b337851438d"],["/img/chen.png","1236b7924a615c48d9adc2fb07b8dac3"],["/img/d.jpg","5093361914e09323d23630f4b2b8a6b1"],["/img/e.jpg","1679d62bd8271da0793a058dda35faa4"],["/img/f.png","b88270899f0e591db27d7282aabcde08"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/image-20230812145240478.png","b1502de6cc34145955aad1328df45d2e"],["/img/image-20230813164252615.png","b9ecde3928d7640885f39d4ae38d18b5"],["/img/image-20230813164322711.png","2cbd09dd268cfc47621e21d0a5e7ce7f"],["/img/image-20230813164337799-1692596330986-15.png","d70f93506210e5d5abb9fee95ab001a3"],["/img/image-20230814152239315-1692596334373-17.png","d1625c01fa5598e86df1d1a2308844e1"],["/img/image-20230814153345494-1692596335955-18.png","ddf3d1ef544cecc17860a5250a645e78"],["/img/image-20230814153634163.png","94dc4399cbfab83e1783f9a1dabc5718"],["/img/image-20230814161353554.png","16f0efbf44d1647fdd961f14ab8b8ffa"],["/img/image-20230821134831928.png","d5adbd84cc6603b77dd4c7b02b14aad5"],["/img/image-20230821135115539.png","92c6a71ba9002958c3c81fdce23a0923"],["/img/image-20230822160255214.png","e9fb5dcd77a52b04de34f8badec81441"],["/img/image-20230822164523717.png","0cb1fbfac78af2b17ed6d6cd0d442950"],["/img/image-20230822164535066.png","31b15709afd415c600d1d9cb759b97d7"],["/img/image-20230822164554989.png","873449ab08e9925164aae3f714626849"],["/img/image-20230822192435394.png","3e55c3c7f2d198243ffd6b675356a4c4"],["/img/image-20230822192453952.png","285e0a7b52937f9fe4022100018fffc6"],["/img/image-20230823092226066.png","d9efb5ceedca2c4e1627f3cd1077a4f4"],["/img/image-20230824115453376.png","e14bb6f426afd70836141e15622a4c31"],["/img/image-20230824163338365.png","1ca978ef9345e28c233fc8fcdd245eea"],["/img/image-20230824172553805.png","04c1d43ad5f82a9e76b9c871331ce79b"],["/img/shagou.png","449b9141e8355de50e5c51a5b3d42f38"],["/img/shamao.png","a9af2e5fad01d7c6a635f1260f14176e"],["/img/tag.jpg","598f62b1bf08f95737ce71507346513e"],["/img/xin.png","0ab955f4337f08dd0c8d4eb53495f2f7"],["/img/我的头像.jpg","b3e3bd109791f2e3032389094db7cfce"],["/index.html","3425272493019897eb0ab25850509694"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/link/index-1.html","3f3837fa46a381654b93a077f7bdd36f"],["/link/index.html","5c214c84d633326d40a1a3180f2c37ba"],["/page/2/index.html","e01ed9910a97bfe65069ad67b4e1870c"],["/page/3/index.html","d3a81c002bc0eabb25fb8375d706771e"],["/sw-register.js","6d4d7ab00c80223b7c5c505ffe7ec952"],["/tags/CTF/index.html","0cea01335a3f0b3d7cdf4e9ef6d509f8"],["/tags/CTF/page/2/index.html","7a017c018a95df8d3e7e17db2dce31d1"],["/tags/index.html","4bd71bccafdec2d4fc6b9c4da81942a5"],["/tags/unserialize/index.html","76a4e111039c048accd13d79dd855f69"],["/tags/wp/index.html","2b19c782e7c2b0916d593a32b229fc1a"],["/tags/侧信道/index.html","2c74be8161bc5cecc8ce2b8b64aee6e1"],["/tags/学习笔记/index.html","d6f399a578a26118b3732a8ecae67835"],["/tags/笔记/index.html","8d5350b9dbac2398967ee4167c5ece3d"]];
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
