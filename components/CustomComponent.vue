<template>
    <div class="home-wrapper">
      <div v-for="item in navList" :key="item" class="home-item">
            <div class="block-left">
                <img src="../static/logo.png" alt="" srcset="">
            </div>
            <div class="block-right">
                <p class="title">这是一个标题</p>
                <p class="sub-title">这是一个子标题</p>
                <p class="sub-title" style="color:rgba(57, 62, 217, 0.837)">查看详情 -></p>
            </div>
        </div>
    </div>
  </template>
  
  <script lang="ts" setup>
    defineProps<{
      navList?: Object
    }>()
  </script>
  
  <style scoped>
  
  .home-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 40px;
  }
  .home-item {
    width: 32%;
    min-height: 5rem;
    margin: 4px 4px 10px;
    padding: 4px 4px;
    font-weight: bolder;
    cursor: pointer;
    border-radius: 2px;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .block-left{
    width: 4.2rem;
    height: 4.2rem;
  }
  
  .block-right{
    width: 7.8rem;
    height: 4.2rem;
    font-weight: 500;
  }
  .title{
    height: 1.6rem;
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
  .sub-title{
    height: 1.3rem;
    font-size: 0.7rem;
    margin: 0;
    padding: 0;
  }
  </style>
  
  