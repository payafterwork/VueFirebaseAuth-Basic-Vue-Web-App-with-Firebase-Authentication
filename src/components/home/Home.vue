<template>
  <div class="map">
  	<div class="google-map" id="map"></div>
    <h2>Home sdcdcds</h2>
  </div>
</template>

<script>
import firebase from 'firebase'
 
export default {
   name: 'Home',
  data(){
    return{
    }
  },
  mounted(){
  	console.log(firebase.auth().currentUser)
  	
  }
}
</script>

<style>

</style>