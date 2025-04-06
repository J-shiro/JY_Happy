-- 数据库初始化, 更新表后`docker-compose down -v`以重新加载该文件
-- 或直接进入容器手动执行: docker exec -it <postgres-container-name> psql -U <username> -d <database> -f /docker-entrypoint-initdb.d/init.sql
-- 更新表中字段: 直接运行: ALTER TABLE users ADD COLUMN IF NOT EXISTS password VARCHAR(255);

CREATE USER jy WITH PASSWORD '123456';
CREATE DATABASE jy_happy OWNER jy;
GRANT ALL PRIVILEGES ON DATABASE jy_happy to jy; -- 给 jy 用户授予 jy_happy 数据库所有权限

-- Create User table
CREATE TABLE "users" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" VARCHAR(255),
    "email" VARCHAR(255) UNIQUE, -- 限制邮箱唯一
    "email_verified" TIMESTAMP,
    "image" VARCHAR(255),
    "password" VARCHAR(255)
);

-- Create Account table
CREATE TABLE "accounts" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID REFERENCES "users" ("id") ON DELETE CASCADE, -- UUID 唯一标识符，外键约束: user_id 必须引用 users 表中的 id
                                                                -- 若 users 表中用户被删除，引用该用户的 accounts 表中所有对应记录自动被删除
    "type" VARCHAR(255),
    "provider" VARCHAR(255),
    "provider_account_id" VARCHAR(255),
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INT,
    "token_type" VARCHAR(255),
    "scope" VARCHAR(255),
    "id_token" VARCHAR(255),
    "session_state" VARCHAR(255),
    UNIQUE ("provider", "provider_account_id") -- 限制两字段唯一，防止同一账号重复绑定
);
