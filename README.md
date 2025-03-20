# JY_Happy

## 环境
1. 初始环境
```bash
# backend
cd backend
go mod init github.com/J-shiro/JY_Happy
go version # go version go1.24.0 darwin/arm64

# frontend
cd frontend
brew install node
node -v # v23.9.0
npm install -g npm@11.1.0
npm -v # 11.1.0
cd appli/
npx create-react-app .
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
```