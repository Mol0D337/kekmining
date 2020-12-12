<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0 auto;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { /* 1 - скроллбар */
    width: 0;
    height: 50px;
    background-color: #FFFFFF;
  }
  /*::-webkit-scrollbar-button { !* 2 - кнопка *!*/
  /*}*/
  /*::-webkit-scrollbar-track { !* 3 - трек *!*/
  /*}*/
  /*::-webkit-scrollbar-track-piece { !* 4 - видимая часть трека *!*/
  /*}*/
  ::-webkit-scrollbar-thumb { /* 5 - ползунок */
    border-radius: 2px;
    background-color: #d1d1d1;
  }
  /*::-webkit-scrollbar-corner { !* 6 - уголок *!*/
  /*}*/
  /*::-webkit-resizer { !* 7 - изменение размеров *!*/
  /*}*/
</style>
