<template>
  <div id="app">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Gotu" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />

    <header>
      <h1 class="title">The Cheater Guide to Tabletops for stay at homers</h1>
      <nav class="nav">
        <router-link class="nav-links" to="/">Home</router-link>
        <router-link class="nav-links" to="/roller">Dice Roller</router-link>
        <router-link class="nav-links" to="/risk">Risk Simulator</router-link>
        <router-link class="nav-links" to="/clock">Chess Board Clocks</router-link>
      </nav>
    </header>
    <section class="main">
      <router-view />
    </section>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  margin: 0px;
  font-family: "Roboto", serif;
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

.main {
  padding: 0.5em;
}
</style>
