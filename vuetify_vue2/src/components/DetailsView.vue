<template>
<div> 
    <v-container>
    <v-row>

   <v-card class="d-flex justify-center ma-4"
    >
  <div>
    <video-player :options="videoOptions" />
  </div>
   </v-card>
   <v-card width="400">
     <v-text-field
      label="Title" v-model.lazy="tempTitle" v-on:change="modifyTitle($event)"
    ></v-text-field>
    <v-text-field
      label="Description"  v-model.lazy="tempDescription" v-on:change="modifyDescription($event)"
    >
    </v-text-field>
     <v-text-field label="Duration" v-model.lazy="tempDuration" readonly>
    </v-text-field >
    <v-text-field label="Format" v-model.lazy="tempFormat" readonly>
    </v-text-field >
    </v-card>
    </v-row>
    </v-container>
      <v-container dense>
    <v-row align-content="center">
       <v-card width="700" height="300" class="d-flex justify-center ma-15" >
    <v-card-title>
     Trailers
    </v-card-title>
      <v-card-subtitle>
      No trailers
  </v-card-subtitle>
    <v-btn large
              color="green"
             >Generate trailers</v-btn>
     </v-card>
      </v-row>
          <v-btn x-large
              color="blue"
              dark @click="$router.push('/')" >Back</v-btn>
    </v-container>
    
</div>
</template>
<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

export default {
   name:'detailsView',
   components: {
    videoPlayer
  },
    props: ['id','title', 'description', 'duration', 'format', 'thumbnail', 'media'],
    data() {
    return {
      tempTitle : this.title,
      tempDescription : this.description,
      tempId : this.id,
      tempThumbnail : this.thumbnail,
      tempDuration : this.duration,
      tempFormat : this.format,
      videoOptions: {
        controls: true,
        width: 500,
        sources: [
          {
            src:
              this.media,
              type: 'video/mp4'
          }
        ]
      }
    };
  },
   methods: {
     modifyTitle(event) {
      this.$root.$emit('modifyTitle',event, this.id);
    //  console.log(event.target.value);
    },
       modifyDescription(event){
      this.$root.$emit('modifyDescription', event, this.id);
      console.log(event.target.value);
    }

    }
}

</script>