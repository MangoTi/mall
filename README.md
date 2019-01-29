# mall

  注意：上传的所有图片请用[压缩网站](https://tinypng.com/)压缩后使用！否则图片太大会导致加载过慢！
  
**1、logo**  
可以更改img/logo.png图片，名称不变  

**2、顶部图片**  
可以更改img/index.jpg图片，名称不变

**3、标签页小图标**  
可以更改img/favicon.ico图片，可以直接将图片后缀改成ico，名称不变 

**4、商品列表**  
js/json.js中是所有的数据来源，一共有几个部分：
  * cover：顶部图片，可以直接改掉"img/index.jpg"，这样改以上第二条的时候就可以用任意的名称了；
  * goodList:商品列表，每个图片用{}括起来，逗号结束，其中包括每个商品的图片imgs、名称title、详情details，imgs中的第一张就会显示在首页下方，details中的内容格式是这样做出来的：  
    首先将文本复制到[uEditor](https://ueditor.baidu.com/website/onlinedemo.html)；
    然后点击编辑框左上角的html，将代码全部复制后，到[在线压缩](http://tool.oschina.net/jscompress?type=2)进行压缩；
    最后将压缩后的内容用单引号括起来放在details中即可。
  * about:关于页面的内容，可以是任意个数的模块，title是标题，content是内容，每个模块同样用{}括起来，逗号结束
    
