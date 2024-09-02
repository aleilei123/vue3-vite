<script setup lang="ts"></script>

<template>
  <div>
    <div class="navbar">导航栏index</div>
    <div class="sidebar">侧边栏index</div>

    <div>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">about</router-link>
    </div>

    <router-view />
    <div class="footer">页脚</div>
  </div>
</template>

<style></style>
