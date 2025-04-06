package main

import (
	"backend/internal/database"
	"backend/internal/handler"
	"log"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	config := cors.Config{
		AllowOrigins: []string{"http://localhost:3000"}, // 允许 localhost, 127.0.0.1 将被拦截
		AllowMethods: []string{"GET", "POST", "OPTIONS"},
		AllowHeaders: []string{"Authorization", "Content-Type", "Origin"},
		MaxAge:       12 * time.Hour,
	}

	// 设置跨域请求
	r.Use(cors.New(config))

	// 连接数据库
	db := database.Connect()

	// 处理路由
	handler.RegisterRoutes(r, db)

	log.Println("Server is running at 8080")

	// 监听 8080 端口
	r.Run(":8080")
}
