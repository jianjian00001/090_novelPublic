---
### 👉作者QQ ：1556708905 微信：zheng0123Long (支持修改、部署调试、定制毕设)

### 👉接网站建设、小程序、H5、APP、各种系统等

### 👉选题+开题报告+任务书+程序定制+安装调试+ppt 都可以做
---

**毕业设计所有选题地址 [https://github.com/zhengjianzhong0107/allProject](https://github.com/zhengjianzhong0107/allProject)**

**博客地址：
[https://blog.csdn.net/2303_76227485/article/details/131833938](https://blog.csdn.net/2303_76227485/article/details/131833938)**

**视频演示：
[https://www.bilibili.com/video/BV1xk4y157W2/](https://www.bilibili.com/video/BV1xk4y157W2/)**

 

## 基于Springboot的小说阅读网站系统(源代码+数据库)090

## 一、系统介绍

本系统分为管理员、作家、读者三种角色

读者角色包含以下功能：

- 登录、注册、小说推荐、作品检索、小说排行榜、小说阅读、小说评论、充值订阅、我的书架、个人中心、密码修改

作家角色包含以下功能：

- 包括读者的所有功能、小说发布、小说管理、章节管理

管理员角色包含以下功能：

- 登录、小说管理、评论管理、作家管理、邀请码管理、会员管理、会员反馈管理、小说推荐管理、网站信息管理、友情链接管理、
- 新闻管理、类别管理、订单管理、用户管理。角色管理、菜单管理、系统日志管理、个人中心、密码修改

## 二、所用技术

后端技术栈：

- Springboot
- Mybatis
- Mysql
- Jwt
- SpringSecurity
- Shiro
- Redis

前端技术栈：

- Thymeleaf
- Layui
- Html
- Ajax

## 三、环境介绍

基础环境 :IDEA/eclipse, JDK1.8, Mysql5.7及以上,Maven3.6, Redis5.0, 内网穿透工具ngrok

所有项目以及源代码本人均调试运行无问题 可支持远程调试运行

## 四、页面截图

### 1、前台页面

![contents](./picture/picture1.png)
![contents](./picture/picture2.png)
![contents](./picture/picture3.png)
![contents](./picture/picture4.png)
![contents](./picture/picture5.png)
![contents](./picture/picture6.png)
![contents](./picture/picture7.png)
![contents](./picture/picture8.png)
![contents](./picture/picture9.png)
![contents](./picture/picture10.png)
![contents](./picture/picture11.png)
![contents](./picture/picture12.png)
![contents](./picture/picture13.png)
![contents](./picture/picture14.png)
![contents](./picture/picture15.png)
![contents](./picture/picture16.png)
![contents](./picture/picture17.png)
![contents](./picture/picture18.png)
![contents](./picture/picture19.png)
![contents](./picture/picture20.png)

### 2、后台页面

![contents](./picture/picture21.png)
![contents](./picture/picture22.png)
![contents](./picture/picture23.png)
![contents](./picture/picture24.png)
![contents](./picture/picture25.png)
![contents](./picture/picture26.png)
![contents](./picture/picture27.png)
![contents](./picture/picture28.png)
![contents](./picture/picture29.png)
![contents](./picture/picture30.png)
![contents](./picture/picture31.png)
![contents](./picture/picture32.png)
![contents](./picture/picture33.png)
![contents](./picture/picture34.png)
![contents](./picture/picture35.png)

## 五、浏览地址

前台访问地址：http://127.0.0.1:8090/

- 读者/作家的账号/密码：13560421324/123456

后台访问地址：http://127.0.0.1/

- 管理员账号/密码：admin/admin

## 六、部署教程

1. 使用Navicat或者其它工具，在mysql中创建对应名称的数据库，并执行项目的sql文件；

2. 使用IDEA/Eclipse导入novel-plus项目，若为maven项目请选择maven，等待依赖下载完成；

3. 进入novel-common/src/main/resources/application-common-dev.yml 里面的数据库配置和redis配置,
   
   修改novel-front/src/main/resources/application-dev.yml里面的文件路径配置和application-alipay.yml里面的支付宝沙箱配置,
   
   修改novel-admin/src/main/resources/application-dev.yml里面的数据库配置和redis配置

4. novel-front/src/main/java/com/java2nb/novel/FrontNovelApplication.java 启动前台项目
   
   novel-admin/src/main/java/com/java2nb/AdminApplication.java启动后台项目

## 七、项目结构

```
novel-plus -- 父工程
├── novel-common -- 通用模块
├── novel-front -- 前台门户&作家后台
├── novel-crawl -- 爬虫
├── novel-admin -- 管理后台
└── templates -- 前端模版
```

 
