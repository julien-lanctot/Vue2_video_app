<template>
 <v-container fluid>
      <v-row dense>
<div v-for="video in videos" :key="video.index">

 <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="video.thumbnail"
      height="200px"
    ></v-img>

    <v-card-title>
      {{video.title}}
    </v-card-title>

  <v-card-subtitle>
      <div v-if="!video.trailers.length">No trailers availables</div>
  </v-card-subtitle>

    <v-card-subtitle>
        <router-link :to="{ name: 'detailsView', params: {
            id: video.id,
            title: video.title,
            description : video.description,
            duration : video.duration,
            format: video.mimetype,
            thumbnail : video.thumbnail,
            media: video.media} }" >
            Details
      </router-link>
    </v-card-subtitle>


  </v-card>
  </div>
  <v-card class="d-flex justify-center ma-4">
    <v-img
      src='http://clipart-library.com/img1/1919692.png'
      height="200px"
    ></v-img>
        <v-card-title>
Click to select a movie on your drive
or drag and drop a movie here    
</v-card-title>
  </v-card>
      </v-row>
 </v-container>
</template>

<script>
  export default {
    name: 'HomeView',

    data: () => ({
      videos : [
    {
    "id": "d6db6463-a5bf-48d5-8475-dde9739f12c4",
    "createdAt": "2022-06-13T22:24:46.791Z",
    "updatedAt": "2022-06-13T22:24:46.791Z",
    "owner": "92535540-f473-4490-8dee-458092d0e346",
    "status": "ready",
    "size": "5253880",
    "mimetype": "video/mp4",
    "parent": null,
    "description": "Standard video sample.",
    "title": "Rabbit",
    "duration": "29",
    "media": "https://oa-media-public-documents.s3.amazonaws.com/tmp_grok/1653e8c7-bc9f-4df7-8acd-19e7ff3f2efc.mp4",
    "thumbnail": "https://oa-media-public-documents.s3.amazonaws.com/tmp_grok/1653e8c7-bc9f-4df7-8acd-19e7ff3f2efc.png",
    "trailers": []
  },
  {
    "id": "d6db6463-a5bf-48d5-8475-dde9739f12c5",
    "createdAt": "2022-06-13T22:24:46.791Z",
    "updatedAt": "2022-06-13T22:24:46.791Z",
    "owner": "92535540-f473-4490-8dee-458092d0e346",
    "status": "ready",
    "size": "5253880",
    "mimetype": "video/mp4",
    "parent": null,
    "description": "Standard video sample.",
    "title": "Rabbit",
    "duration": "29",
    "media": "https://oa-media-public-documents.s3.amazonaws.com/tmp_grok/1653e8c7-bc9f-4df7-8acd-19e7ff3f2efc.mp4",
    "thumbnail": "https://oa-media-public-documents.s3.amazonaws.com/tmp_grok/1653e8c7-bc9f-4df7-8acd-19e7ff3f2efc.png",
    "trailers": []
  }]
    }),
  }
</script>
