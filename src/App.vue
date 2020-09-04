<template>
  <div id="app">
      <div id="nav">
        <router-link to="/">ToDos List</router-link>
        <router-link to="/groups">ToDos Groups</router-link>
      </div>
      <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/scss/main";
</style>
