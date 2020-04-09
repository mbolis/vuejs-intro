<template>
  <div id="app">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Gotu" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />

    <div class="title">
      <h1>The Cheater Guide to Tabletops for stay at homers</h1>
    </div>
    <nav class="nav">
      <router-link class="nav-links" to="/">Home</router-link>
      <router-link class="nav-links" to="/roller">Dice Roller</router-link>
      <router-link class="nav-links" to="/risk">Risk Simulator</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  font-family: "Roboto", serif;
}

#app {
  margin-top: 30;
}

.title {
  margin-top: 0px;
  padding: 35px;
  background-color: #343b43;
  color: #d7d7d7;
  font-family: "Gotu", serif;
}

.nav {
  margin: 15px;
}

.nav-links {
  background-color: yellow;
  padding-left: 1em;
  padding-right: 1em;
  border: 1px solid red;
}
</style>
