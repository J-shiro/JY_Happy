package main

import (
  "fmt"
  "github.com/gin-gonic/gin"

)


func main(){
  r := gin.Default()

  // route
  r.GET("/", func(c *gin.Context){
    c.String(200, "Hello, Gin!")
  })

  fmt.Println("Server is running at 8080")

  // 监听 8080 端口
  r.Run(":8080")
}
