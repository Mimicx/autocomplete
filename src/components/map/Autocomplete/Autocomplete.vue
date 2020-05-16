<template src="./template.html" />
<style src="./styles.scss" lang="scss"></style>

<script>


export default {
  name: 'Autocomplete',
  components: {
  },
  data() {
    return {
      search:'',
      place_name_selected: false,
      places:[],
      mapbox_api_places: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
      coordinates: null,
      
    };
  },

  props:['label', 'accessToken'],
  watch: {
            search: function (value) {
              
                  if(value.length == 0)
                    this.places = [];
                  else{

                    if(!this.place_name_selected)
                      this.callPlaces();
                    else
                      this.place_name_selected = false;
                    
                  }
                    
            },

       

        },

  methods:{

      placechanged(place){

     
          this.coordinates =  place.geometry.coordinates;
          this.place_name_selected = true,
          this.search = place.place_name;
          this.$emit('placechanged', this.coordinates);
      },

      callPlaces(){
       
       this.axios.get(this.mapbox_api_places+this.search+'.json?access_token='+this.accessToken).then((response) => {
                 
                 this.places = response.data.features;
            }); 
 
           
      }
  },

  mounted(){
      
     // this.callPlaces();

  },

  created() {

   
  }
};
</script>