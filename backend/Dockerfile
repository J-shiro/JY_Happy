FROM golang:1.24.0-bookworm

# 容器内创建 /app/backend 目录并进入，后续命令该目录下执行
WORKDIR /app/backend

COPY go.mod go.sum ./

# 下载 go 依赖
RUN go mod download

# 当前目录文件复制到 /app/backend
COPY . .

RUN go build -o main ./cmd/server/main.go

EXPOSE 8080

CMD ["./main"]
