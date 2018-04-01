#test React

## webpack
+ 局部使用webpack `node_modules\.bin\webpack` or 在package.json 添加 `"start": "webpack"` 命令行用 npm run start （不同系统斜杠不同的！）

## ajax

HTTP/1.1 协议规定的 HTTP 请求方法有 OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE、CONNECT。
其中 POST 一般用来向服务端提交数据。

先要说一下 Content-Type 实体头部用于指示资源的MIME类型 media type 。

[MIME 类型寻常的两种，更多点解链接](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

+ multipart/form-data

    multipart/form-data 可用于HTML表单从浏览器发送信息给服务器。作为多部分文档格式，它由边界线（一个由'--'开始的字符串）划分出的不同部分组成。每一部分有自己的实体，以及自己的 HTTP 请求头，Content-Disposition和 Content-Type 用于文件上传领域，最常用的 (Content-Length 因为边界线作为分隔符而被忽略）。

+ text/plain

    文本文件默认值。意思是 未知的文本文件 ，浏览器认为是可以直接展示的。

[POST的常见Content-Type类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST)

+ application/x-www-form-urlencoded: 数据被编码成以 '&' 分隔的键-值对, 同时以 '=' 分隔键和值. 非字母或数字的字符会被 percent encoded: 这也就是为什么这种类型不支持二进制数据的原因 (应使用 multipart/form-data 代替).

+ multipart/form-data(详解在上面)

+ text/plain(详解在上面)

+ application/json (顾名思义不解释！AngularJS 中的 Ajax 功能，默认就是提交 JSON 字符串)

PS.并且不能出现任何自定义头;JQuery 的 Ajax，Content-Type 默认值都是「application/x-www-form-urlencoded;charset=utf-8」。