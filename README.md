# JY_Happy

## 环境
1. 初始环境
```bash
# backend
cd backend
go mod init backend # github.com/J-shiro/JY_Happy
go version # go version go1.24.0 darwin/arm64

# frontend
cd frontend
brew install node
node -v # v23.9.0
npm install -g npm@11.1.0
npm -v # 11.1.0
# Next.js
npx create-next-app@latest appli --typescript --eslint --app
cd appli
npm install tailwindcss @tailwindcss/postcss postcss autoprefixer # Tailwind CSS
```

2. mac docker desktop 设置
- settings -> Docker Engine
- 添加镜像源
```json
"registry-mirrors": [
    "https://docker.1ms.run",
    "https://docker.xuanyuan.me"
  ]
```
- restart

3. 后端 go 环境设置
```bash
go env -w GO111MODULE=on
export GOPROXY=https://mirrors.aliyun.com/goproxy/ # 阿里配置代理
cd backend && go mod tidy # 生成 go.sum
```

4. docker 起环境
```bash
docker-compose up # -d
docker-compose up --build # 重新构建镜像
docker-compose restart # 重启所有服务
docker-compose stop # 停止容器但不删除
docker-compose down # 关闭所有容器
# 查看
docker-compose ps
docker-compose logs -f # 日志

# 删除无用容器、网络、悬挂镜像和构建缓存
docker system prune -a --volumes
```

5. 数据库
```bash
# 安装
brew install postgresql
postgres --version 
# postgres (PostgreSQL) 14.17 (Homebrew)
brew services start postgresql # 开启
brew services stop postgresql # 关闭
brew services list # 查看服务启动状态
psql postgres # 连接 PostgreSQL


CREATE USER jy WITH PASSWORD '123456'; # 创建用户
CREATE DATABASE JY_HAPPY OWNER jy; # 创建数据库
GRANT ALL PRIVILEGES ON DATABASE JY_HAPPY to jy; # 授权
psql -U jy -d jy_happy # 本地连接数据库
\dt # 查看表
\d xxtable # 查看某个表的结构
# 使用 pgAdmin 来可视化数据库
```

## 记录
- 头部注释 `TODO` 表示暂时为示例 DEMO 且未加入注释，后续需要完善