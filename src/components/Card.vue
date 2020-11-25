
<template>
  <div class="card">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Weather card</div>
          <div class="md-subhead">Locate Globally</div>
        </md-card-header-text>
          <div class="search-box">
        <input 
          type="text" 
          class="search-bar" 
          placeholder="Search Places..."
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>
        <md-card-media md-medium>
          <!-- <img src="/assets/logo.png" alt="People"> -->
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Submit Location</md-button>
      </md-card-actions>
    </md-card> 
  </div>
</template>

<style scoped>
  .md-card {
    width: 600px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    background-color: blue;
  }
   .card-header {
   text-align: center;
   padding: 5px 0px;
   background: #555;
   color: #f2f2f2;

 }
 .search-box .search-bar {
  display: block;
  width: 60%;
  padding: 5px;
  color: #313131;
  font-size: 20px;
  background: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
 }
 .weather-box {
  text-align: left;
}
 
 @media screen and (max-width: 1000px) {
   .card {
     width: 75%;
   }
 }

 @media screen and (max-width: 620px) {
   .card {
     width: 80%;
   }
 }
</style>

