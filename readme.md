<p align="center">
  <img src='http://img.souche.com/f2e/a1f933d9f7dea816176e40070f3738f2.png' width='300' alt="vue-meta">
</div>
<h5 align="center">
  基于Vue 2.0 的页面加载进度条.
</h5>

<p align="center">
<a href="https://www.npmjs.com/package/vue-meta-info"><img src="https://img.shields.io/badge/npm-0.1.1-brightgreen.svg" alt="npm version"></a> 
  <img src="https://img.shields.io/badge/codecov-95.83%25%20-brightgreen.svg">
  <img src="https://img.shields.io/badge/build-passing-brightgreen.svg">
  <a href="https://www.npmjs.com/package/vue-meta-info"><img src="https://img.shields.io/badge/licence-MIT-blue.svg"></a> 
</p>

<p align="center">
 <img src='https://github.com/monkeyWangs/vue-progress/blob/master/assets/img/exmple.gif'>
</p>

```js
Vue.use(VueProgress); // 注册实例

let instance = this.$vueProgress(); // 初始化vueProgress

instance.start(); // 开始显示

setTimeout(function () {
    instance.done(); // 结束
}, 3000);
```

- [Description](#description)
- [Installation](#installation)
    - [Yarn](#yarn)
    - [NPM](#npm)
- [Usage](#Usage)
- [Configuration](#Configuration)
- [Examples](#Examples)

# description
这是一种类似于Google, YouTube的ajax加载进度条插件，基于vue 2.0版本之上，可以自定义插件样式和效果。

# Installation
### Yarn
```sh
$ yarn add vue-progress
```

### NPM
```sh
$ npm install vue-progress --save
```

# Usage
### 1. 注册
```js
import Vue from 'vue'
import VueProgress from 'vue-progress'

Vue.use(VueProgress)
```
### 2. 快速使用
```js
let instance = this.$vueProgress(); // 初始化vueProgress

instance.start(); // 开始显示
instance.done(); // 结束
```

### 3. 设置初始进度

```js
instance.set(0.0);     // Sorta same as .start()
instance.set(0.4);
instance.set(1.0);     // Sorta same as .done()
```

# Configuration
> 初始化vueProgress 的时候，可以选择性传入参数进行控制

#### `color`
设置进度条颜色，默认是 blue
```js 
this.$vueProgress({color: '#ddd'});
```
#### `speed`
控制进度条速度，默认是 5

```js
this.$vueProgress({speed: 10});
```

#### `percentNum`
进度条每一步的跨度，取值0-1之前的小数。默认是0-1之间的随机数
```js
this.$vueProgress({percentNum: 0.1});
```

### `easing`
右侧loading图标动画的贝塞尔曲线，默认 'linear'
```js
this.$vueProgress({easing: 'ease'});
```

### `showSpinner`
是否展示右侧loading动画，默认 true
```js
this.$vueProgress({showSpinner: false});
```

# Examples
To run the examples; clone this repository & run `npm install` in the root directory, and then run `npm run dev`. Head to http://localhost:8080.




