# git

## 一，配置姓名和邮箱

git config --global user.name ""

git config --global user.email ""

## 二，基本使用

git status : 查看当前文件夹/仓库状态

git init: 初始化git仓库（自己玩的时候用）

git add <filename>提交到暂存，没有进仓库

git commit -m "信息" 把暂存的文件存到仓库

所以就是改了代码后，就先暂存，暂存以后再commit就是提交了

git restore 重置到上一次暂存

git rm 删除 

git log 查看每次提交的节点信息 

## 三，分支

git branch查看分支

git branch 分支名 建立分支，此时建立的分支就是基于当前节点

git branch -d 分支名 删除分支

git switch 分支名 切换分支

git switch -c 分支名 连创建带切换分支

在主版本上打分支做更新，如果主版本上有bug也应该建立一个专门改bug的分支来改bug。不要混淆分支。

拉下来代码第一时间要建立自己的分支，在自己的分支上修改或更新

## 四，合并

修改完成后，要合并分支，

**切换到主分支**，合并分支

1. 普通合并merge

   git switch main

​	git merge 分支名

​	如果合并遇到冲突，就挨个解决就好，上面有选项

2. 变基合并rebase

   改变分支的基础节点。比如我从1号的版本上打的分支，现在是30号，那么我把这个分支的基础由1号版本，变成30号版本。

   变基操作本质上就是merge+接受两个文件的改变

   步骤：

   1. 在分支上，git rebase 主分支，并处理冲突
   2. 在主分支上，git merge 分支，此时为快速合并
   3. 可以删除分支了

## 五，远程仓库

 参考github即可。可以同时多个仓库。