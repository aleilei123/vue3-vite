<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <el-link href="https://element.eleme.io" target="_blank">default</el-link>
      <!-- <el-link type="primary">primary</el-link> -->
      <el-link type="success">success</el-link>
      <el-link type="warning">warning</el-link>
      <el-link type="danger">danger</el-link>
      <!-- <el-link type="info">info</el-link> -->
    </div>
    <img src="../assets/test.png" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
