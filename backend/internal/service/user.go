// 用户处理相关服务函数
package service

import (
	"backend/internal/models"

	"gorm.io/gorm"
)

// 通过 ID 获取用户
func GetUserByID(db *gorm.DB, id string) (*models.User, error) {
	var user models.User
	if err := db.First(&user, id); err != nil {
		return nil, err.Error
	}
	return &user, nil
}

// 通过邮箱获取用户
func GetUserByEmail(db *gorm.DB, email string) (*models.User, error) {
	var user models.User
	if err := db.First(&user, email); err != nil {
		return nil, err.Error
	}
	return &user, nil
}
