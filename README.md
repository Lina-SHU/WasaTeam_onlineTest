# WasaTeam test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Program Structure
1. 頁面內各區塊以元件方式讀取(如 Form.vue 或 Navbar.vue)，後續維護可針對各元件進行調整。
2. SCSS 結構也以元件方式拆分(如 _card.scss)，以利後續維護調整。
3. 元件化方式可客製設計，若其他專案使用到，可將該元件沿用到其他專案上。
4. 方法拆分，函式以處理單一用途為主(如 Form.vue 內的 checkEmail、checkEmailtype 方法)。
5. 加上註解標示。