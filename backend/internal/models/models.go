// 数据库模型: 用于定义数据库表结构和关系
package models

import "time"

type User struct {
	ID            string    `gorm:"primaryKey;type:uuid;default:gen_random_uuid()" json:"id"`
	Name          string    `gorm:"type:varchar(255)" json:"name"`
	Email         string    `gorm:"unique;type:varchar(255)" json:"email"`
	EmailVerified time.Time `gorm:"type:timestamp" json:"emailVerified"`
	Image         string    `gorm:"type:varchar(255)" json:"image"`
	Password      string    `gorm:"type:varchar(255)" json:"password"`
	Accounts      []Account `gorm:"foreignKey:UserID;constraint:OnDelete:CASCADE" json:"accounts"`
}

type Account struct {
	ID                string `gorm:"primaryKey;type:uuid;default:gen_random_uuid()" json:"id"`
	UserID            string `gorm:"type:uuid" json:"userId"`
	Type              string `gorm:"type:varchar(255)" json:"type"`
	Provider          string `gorm:"type:varchar(255)" json:"provider"`
	ProviderAccountID string `gorm:"type:varchar(255)" json:"providerAccountId"`
	RefreshToken      string `gorm:"type:text" json:"refresh_token"`
	AccessToken       string `gorm:"type:text" json:"access_token"`
	ExpiresAt         int    `gorm:"type:int" json:"expires_at"`
	TokenType         string `gorm:"type:varchar(255)" json:"token_type"`
	Scope             string `gorm:"type:varchar(255)" json:"scope"`
	IDToken           string `gorm:"type:varchar(255)" json:"id_token"`
	SessionState      string `gorm:"type:varchar(255)" json:"session_state"`
	User              User   `gorm:"foreignKey:UserID;references:ID" json:"user"`
}
