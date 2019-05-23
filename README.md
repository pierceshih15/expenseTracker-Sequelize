# 皮皮記帳網

一個使用 Node.js + Express 搭配 Sequelize 資料庫打造的記帳網站，提供使用者註冊個人帳號，管理自己的餐廳清單，如新增、修改、刪除支出資料等功能，同時，可以依照月份或類別進行篩選。

## 專案畫面

![image](https://github.com/pierceshih15/expenseTracker-Sequelize-v1/blob/master/public/img/demoPage.png)

## Features - 產品功能

1. 使用者可以藉由第三方快速註冊登入(Facebook)
2. 使用者可以瀏覽全部所有支出
3. 使用者可以新增一筆支出
4. 使用者可以修改一筆支出的資訊
5. 使用者可以刪除一筆支出
6. 使用者可以依照月份或類別進行篩選

## Environment SetUp - 環境建置

1. [MongoDB v4.0 以上](https://www.mongodb.com/download-center/community)
2. [Node.js](https://nodejs.org/en/)
3. [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

## Installing - 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/pierceshih15/expenseTracker-Sequelize-v1.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd expenseTracker-Sequelize-v1
```

3. 安裝 npm 套件

```
在 Terminal 輸入 npm install 指令
```

4. 安裝 nodemon 套件

```
在 Terminal 輸入 nodemon app.js 指令
```

5. 透過 MySQL Workbench 建立本機資料庫

6. 產生使用者與支出的資料模板至 MySQL

```
在 Terminal 執行 npx sequelize-cli db:migrate

於本機資料庫建立 Users Table 和 Records Table

若成功執行，Terminal 會顯示如下圖的資訊
```

![image](https://github.com/pierceshih15/expenseTracker-Sequelize-v1/blob/master/public/img/migrate.png)

7. 建立種子檔案

```
在 Terminal 執行 npx sequelize-cli db:seed:all

於本機資料庫建立 Demo User 和 Demo Records 資料

若成功執行，Terminal 會顯示如下圖的資訊
```

![image](https://github.com/pierceshih15/expenseTracker-Sequelize-v1/blob/master/public/img/seeder.png)

8. 啟動應用程式，執行 app.js 檔案

```
在 Terminal 執行 npm run dev
```

現在，你可開啟任一瀏覽器瀏覽器輸入 [http://localhost:3000](http://localhost:3000)
開始使用皮皮記帳網囉，歡迎使用官方測試帳號操作。

```
帳號：ming@gmail.com
密碼：1234
```

## Contributor - 專案開發人員

> [Pierce Shih](https://github.com/pierceshih15)
