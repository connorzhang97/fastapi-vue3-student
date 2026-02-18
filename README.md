# 🎓 FastAPI + Vue3 学生管理系统

<div align="center">

一个简洁高效的学生信息管理系统，前后端分离开发体验 🚀

[![Vue 3](https://img.shields.io/badge/Vue-3-4FC08D?style=for-the-badge&logo=vue.js)](https://vuejs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Element Plus](https://img.shields.io/badge/Element%20Plus-409EFF?style=for-the-badge&logo=element)](https://element-plus.org/)

</div>

---

## ✨ 功能特性

| 🔍 查询 | ➕ 操作 | 🎨 界面 | ⚡ 架构 |
|:---:|:---:|:---:|:---:|
| 分页查询与搜索 | 添加、编辑、删除 | Element Plus 组件 | 前后端分离 |

---

## 🛠️ 技术栈

<div align="center">

### 后端

| FastAPI ⚡ | Tortoise ORM 🐢 | MySQL 🐬 | uvicorn 🔥 |
|:---:|:---:|:---:|:---:|
| Web 框架 | 异步 ORM | 数据库 | ASGI 服务器 |

### 前端

| Vue 3 🎯 | Vite ⚡ | Element Plus 📦 | Axios 📡 |
|:---:|:---:|:---:|:---:|
| 前端框架 | 构建工具 | UI 组件库 | HTTP 客户端 |

</div>

---

## 🚀 快速开始

### 1️⃣ 数据库准备

```sql
-- 创建数据库
CREATE DATABASE fastapi_vue3 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

> 📝 默认配置：`root` / `123456` @ `localhost:3306`

### 2️⃣ 创建数据表

```sql
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stu_id` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` int DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `class_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
```

### 3️⃣ 启动后端

```bash
cd fastapi-app
pip install fastapi uvicorn tortoise-orm pymysql cryptography
python main.py
```

> 🌐 后端服务 → http://127.0.0.1:9090

### 4️⃣ 启动前端

```bash
cd vue3
npm install
npm run dev
```

> 🌐 前端服务 → http://localhost:5173

---

## 📡 API 接口

| 方法 | 端点 | 说明 |
|:---:|---|---|
| `GET` | `/student/selectPage` | 分页查询 + 搜索 |
| `GET` | `/student/selectAll` | 获取全部学生 |
| `POST` | `/student/add` | 新增学生 |
| `PUT` | `/student/update` | 更新信息 |
| `DELETE` | `/student/delete/{id}` | 删除学生 |

---

## 📁 项目结构

```
fastapi_vue3/
├── fastapi-app/              # 🎯 后端服务
│   ├── main.py               #   入口文件
│   ├── models.py             #   数据模型
│   ├── setting.py            #   配置
│   └── routers/
│       └── student.py        #   学生接口
│
└── vue3/                     # 🎨 前端应用
    ├── src/
    │   ├── App.vue           #   主组件
    │   └── main.js           #   入口
    └── vite.config.js        #   Vite 配置
```

---

</div>
