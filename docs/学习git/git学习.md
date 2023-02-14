# git学习

## 1. 前言

- 版本管理工具 源代码管理工具

- Git（读音为/gɪt/）是一个**开源的分布式版本控制系统**，可以有效、高速地处理从很小到非常大的项目版本管理 

- git是一个源代码管理工具,gitlab svn  sourcetree,

- svn 和 git的区别：git是基于分布式的
- Git分区：工作区—暂存区—Git仓库

### 需要用到的linux指令

1. cd xx 切换工作目录
2. rm xx 删除文件 
3. rm -rf  删库跑路
4. touch xxx.xx 创建文件
5. mkdir xxx 创建文件夹
6. ls 列出当前目录中的文件，隐藏文件查看不到
7. ls -a 列出所有文件，可以查看到隐藏文件
8. ls -l 显示文件操作权限
9. ls -al 列出所有文件 和 显示文件操作权限
10. pwd 查看当前所在目录

### 需要用到的Vim 命令

 **操作文件的写入**

1. vim file.xxx	需要加文件后缀
2. 输入a或i，之后就可以给文件写入了
3. 如果准备退出操作，先按esc键，在下方输入栏输入 :wq
   - w表示保存，q表示退出

### git常用命令速查表

![](/gitImgs/git速查表.png)



## 2. 全局设置用户名密码

**仅第一次下载git时需要设置**

在指定文件夹空白区域，右键鼠标，`git bash here`

```bash
# 设定
git config --global user.name "xx"
git config --global user.email "xxxx"
```

**查询是否已经设置**

```bash
git config user.name
git config user.email
```

## 3. 创建远程仓库

### 3.1 普通仓库

1.进入gitee页面,注册账号,登入,点击右上角"+"创建新仓库
![](/gitImgs/newck.png)


### 3.2 ssh方式

#### 1.检查是否已经生成密钥

```bash
ls -al ~/.ssh 
```

如果能进入到.ssh文件目录下 ，则证明，之前生成过.ssh秘钥，可以直接使用里面的秘钥



#### 2.生成密钥

```bash
ssh-keygen -t rsa -C 'git设置的邮箱'
```

代码参数含义：

> -t 指定密钥类型，默认是 rsa ，可以省略。
> -C 设置注释文字，比如邮箱。
> -f 指定密钥文件存储文件名

最后在.ssh目录下(C:\Users\dell\\.ssh)得到了两个文件：

- id_rsa（私有秘钥）
- 和id_rsa.pub（公有密钥）
- 把id_rsa.pub中的内容复制到ssh中
![](/gitImgs/1611713061523.png)

#### 3.将rsa.pub里的秘钥添加到远端

首先，打开`C:\Users\dell\\.ssh`目录下找到`id_rsa.pub`这个文件,用记事本打开复制全部内容,然后登入码云,`点击右上角头像`=>`设置`=>`ssh公钥`中进行添加

之后即可通过`git remote add origin ssh地址`把代码通过ssh密钥方式放到远程仓库



#### 在企业中ssh协作流程

1. 生成自己的公钥和私钥
2. 删除自己gitee账户中的公钥 一个公钥只能对应一个账户
3. 将自己的公钥发给相关负责人,让其添加到账户中



## 3.git常用指令

#### 1.新文件初始化

往往只需要第一次使用初始化

指令运行后目录下会多一个`.git`文件夹

```bash
git init
```



#### 2.**添加文件到暂存区域**

```bash
#添加指定文件
git add xxx

#添加目录下所有文件
git add .
```



#### 3.暂存区内容提交到本地仓库

```bash
git commit -m '描述内容'
```

##### 修改描述内容

```bash
git commit --amend

#如果需要提交新的说明
git commit --amend -m
```



#### 4.添加远程源

连接本地仓库与远程仓库

```bash
git remote add origin https://xxx
```

##### 查看远程仓库地址

```bash
git remote -v
```

##### 修改远程源

```bash
 #先移除原先的远程源
 git remote rm origin
 #再添加新的远程源
 git remote add origin...
```



#### 5.本地仓库代码推送到远程仓库

```bash
#第一次推送
#将本地的代码推送到远程仓库上的主（master）分支
git push -u origin master

#后续在提交代码的时候,不需要输入完整指令了
#只需要输入 git push指令就可以直接推送代码了
git push
```



------



#### 6.回退本地仓库版本

##### 1.查看提交日志

可查看每次提交的**版本号**

```bash
git log
```

##### 2.根据版本号回退版本

HEAD^即为版本号

```bash
git reset --hard HEAD^
```

| 参数          | 工作空间改动代码 | commit | add    | 备注                                                         |
| ------------- | ---------------- | ------ | ------ | ------------------------------------------------------------ |
| --mixed(默认) | 不删除           | 撤销   | 撤销   | 快照回滚到暂存区域                                           |
| --soft        | 不删除           | 撤销   | 不撤销 | 只移动head指向                                               |
| --hard        | 删除             | 撤销   | 撤销   | 不仅移动head，还把暂存区文件还原到工作目录, 即恢复到上次commit状态 |



## 4.远程操作

#### 1.克隆远程仓库代码到本地仓库

```bash
#url为远程仓库的地址，例如：http://gitee.com......
git clone url 
```

#### 2.拉取代码

**远程代码版本已经发生了变更,本地代码不同步的时候,需要使用git pull拉取最新的代码**

git pull指令在**本地有仓库的时候**才可以使用

相当于`git fetch+git merge`

```bash
git pull
```

##### 拉取指定分支

```bash
#branch 为指定的分支名称
git pull origin branch
```



## 5.其他操作

#### 1.查看变更内容

当有文件冲突的时候，可以查看冲突的内容

```bash
git diff
```



#### 2.删除文件

```bash
git rm xxx
```



#### 3.停止追踪但不删除

```bash
git rm --cached
```



#### 4.查看提交状态

```bash
git status
```



#### 5.重命名文件

```bash
git mv name1 name2
```



#### 6.还原暂存区文件

文件被删后，把暂存区文件还原到工作目录

```bash
git checkout -- xxx
```





## 6.分支操作

#### 1.创建并切换分支

基于远程**默认分支**创建xxx分支，并切换到xxx分支

```bash
git checkout -b xxx
```

checkout远程的test分支，在本地起名为test分支，并切换到本地的test分支 

```bash

git checkout -b test origin/test 
```



#### 2.切换分支

切换到xxx分支

```bash
git checkout xxx
```





#### 3.查看分支

**查看本地分支**

- 绿色代表当前所在分支
- 首次克隆默认分支就算自己创建的

```bash
git branch
```

**查看远程分支**

- 即查看本地创建的分支，又查看远程缓存到本地的分支
- 远程分支会用**红色**表示出来 

```bash
git branch -a
```

**将远程信息拉取到本地**

- 重新缓存所有信息
- 会存到`.git`目录中，不会自动合并代码

```bash
git fetch
```





#### 4.合并分支

将选定分支合并到HEAD所在分支

```bash
# b合并到a
a git merge b
```



#### 5.删除分支 ( 切换到master分支之后再删除 )

```bash
# 删除本地分支
git branch -d <branch>

# 删除远端分支
git push origin --delete <分支名>
```



##  7. gitignore文件配置

1. 忽略目录下的全部内容：`folder/*`
2. 忽略文件类型：`*.csv`
3. 反选模式：`!`





## 8.其他问题

### 第一次新建仓库，上传代码

```bash
#先在项目文件根目录下右键，git bash here
#初始化
git init
#添加所有文件到缓存区
git add .
#缓存区内容添加到本地仓库，并添加描述
git commit -m '描述'
#本地仓库连接到远程仓库
git remote add origin http://xxxxxxxxx
#本地仓库内容推送到远程仓库
git push -u origin master
```



### 若已有本地仓库

```bash
#建立连接
git remote add origin git@gitee.com:handsomeuncle18/test.git
#推送
git push -u origin master
```



### 克隆远程仓库代码，改动后再上传

```bash
#先克隆代码
git clone http://xxxxx
#经过改动后，将改动的文件添加到暂存区域
git add .
#若远程仓库内容有变动，需要拉取
git pull
#再推送
git push
```



### git代码冲突问题

##### 冲突产生原因：

**如果在远程的某一个文件内容发生修改了，而本地没有进行pull拉取，就会导致本地的分支落后，当修改完成之后push到远程的时候，就会产生冲突**

而本地如果进行pull拉取远程文件的话，相等于你现在本地的文件就是远程的文件，不会有分支落后，当修改完push的时候，就不会产生冲突，所以建议使用git的时候，先pull之后，再去修改，修改完成之后再去push。

##### **解决步骤：**

1. 用vscode进入冲突文件

   ```bash
   code xxx.xxx
   ```

2. 根据需要手动修改内容



### 分支合并 git merge 冲突

1. 按键盘上的`“i”`键可进入插入模式
2. 这时可以修改最上方的黄色部分，改成你想写的合并原因
3. 按键盘上的`“Esc”`键退出插入模式
4. 最后在最下面输入`“ :wq ”`后按回车键即可



