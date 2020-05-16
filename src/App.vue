<template>
  <v-app>
   

    <v-content>
      <Autocomplete label="Search address" :accessToken="accessToken" @placechanged="showAddressA"  />
    </v-content>
  </v-app>
</template>

<script>

import Autocomplete from './components/map/Autocomplete/Autocomplete';

export default {
  name: 'App',
  data(){
    return{
     accessToken: 'pk.eyJ1IjoibWltaWNvY2siLCJhIjoiY2syYTNsZHF2MThvZzNjbzZobngzajJlbiJ9.DNBCdXlAvw7rjIjFtwQxMg', // your access token. Needed if you using Mapbox maps
    }

  },

  components: {

    Autocomplete
  },

  methods:{

    showAddressA(value)
    {
        console.log('long ', value[0]);
         console.log('lat ', value[1]);
    }

  }


};
</script>
