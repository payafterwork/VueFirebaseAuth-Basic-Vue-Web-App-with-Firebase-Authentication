<template>
  <div id="app">
    <Navbar />
    <GMap />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import GMap from '@/components/home/GMap'
export default {
  name: 'App',
  components: {
    Navbar, GMap
  }
}
</script>

<style>
</style>