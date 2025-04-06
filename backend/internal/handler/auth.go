package handler

import (
	"backend/internal/models"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type RegisterRequest struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func RegisterRoutes(r *gin.Engine, db *gorm.DB) {
	r.GET("/", func(c *gin.Context) {
		c.String(200, "Hello, Gin!")
	})

	auth := r.Group("api/auth")
	{
		auth.POST("/login", func(c *gin.Context) {
			var req LoginRequest
			err := c.ShouldBindJSON(&req)
			if err != nil {
				c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
				return
			}

			// 打印邮箱密码
			fmt.Println("email: ", req.Email)
			fmt.Println("password: ", req.Password)

			c.JSON(http.StatusOK, gin.H{
				"message": "login request get",
			})
		})

		auth.POST("/register", func(c *gin.Context) {
			var req RegisterRequest
			err := c.ShouldBindJSON(&req)
			if err != nil {
				c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
				return
			}

			// 打印用户名邮箱密码
			fmt.Println("name: ", req.Name)
			fmt.Println("email: ", req.Email)
			fmt.Println("password: ", req.Password)

			// bcrypt 计算密码哈希值
			hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
			if err != nil {
				fmt.Println("hash generating error: ", err)
				return
			}

			fmt.Println("hash: ", string(hashedPassword))

			// 通过邮箱获取角色
			var user models.User
			result := db.Where("email = ?", req.Email).First(&user)
			if result.Error != nil {
				if result.Error == gorm.ErrRecordNotFound {
					fmt.Println("email not used")
				} else {
					fmt.Println("other error: ", result.Error)
				}
			} else {
				fmt.Println("email already used")
				c.JSON(http.StatusOK, gin.H{"err_message": "email already used"})
				return
			}

			new_user := models.User{
				Name:     req.Name,
				Email:    req.Email,
				Password: string(hashedPassword),
			}

			// 添加用户数据
			result = db.Create(&new_user)
			if result.Error != nil {
				log.Fatalf("failed to create user: %v", result.Error)
			}
			log.Printf("User created successfully! ID: %s", new_user.ID)

			c.JSON(http.StatusOK, gin.H{
				"message": "register request get",
			})
		})
	}

}
