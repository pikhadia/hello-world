
<template>
  <div class="card">
         <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Weather Search</div>
          <div class="md-subhead">...</div>
        </md-card-header-text>
        <input
            type="text"
            class="search-bar justify-center mb-6"
            placeholder="Search Places..."
            v-model="query"
            @keypress="fetchWeather"
          />
        <div class="search-box"></div>
      </md-card-header>

      <md-card-actions>
        <md-button>Submit Search</md-button>
      </md-card-actions>
    </md-card>
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Weather card</div>
          <br>
          <div class="md-subhead">Place             :</div>
          <div class="md-subhead">Temperature       :</div>
          <div class="md-subhead">Wind              :</div>
          <div class="md-subhead">Humidity          :</div>
          <div class="md-subhead">Rain              :</div>
        </md-card-header-text>
        
        <div class="search-box">
          
        </div>
        <md-card-media md-medium>
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Save Report</md-button>
      </md-card-actions>
    </md-card>

 
  </div>
</template>

<style scoped>
.md-card {
  width: 400px;
  margin: 10px;
  display: inline-block;
  vertical-align: top;
  background-color: rgb(161, 161, 209);
}

.md-card {
  width: 500px;
  margin: 10px;
  display: inline-block;
  vertical-align: top;
  background-color: rgb(161, 161, 209);
}
.card-header {
  text-align: center;
  padding: 5px 0px;
  background: #555;
  color: #f2f2f2;
}


.search-box .search-bar {
  display: block;
  width: 50%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  background: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
  
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}

/* 
@media screen and (max-width: 1000px) {
  .card {
    width: 75%;
  }
} */

</style>

