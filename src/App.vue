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

/* Color palette: https://coolors.co/343b43-4b8f8c-ffc857-e9724c-c5283d */
:root{
--my-grey: rgba(52, 59, 67, 1);
--my-blue: rgba(75, 143, 140, 1);
--my-yellow: rgba(255, 200, 87, 1);
--my-orange: rgba(233, 114, 76, 1);
--my-red: rgba(197, 40, 61, 1);
}

body {
  margin: 0px;
  font-family: "Roboto", serif;
}

.title {
  margin-top: 0px;
  padding: 35px;
  background-color: var(--my-grey);
  color: var(--my-yellow);
  font-family: "Gotu", serif;
}

.nav {
  margin: 15px;
}

.nav-links {
  background-color: var(--my-yellow);
  padding-left: 1em;
  padding-right: 1em;
  border: 1px solid var(--my-red);
}

.main {
  padding: 0.5em;
}
</style>
