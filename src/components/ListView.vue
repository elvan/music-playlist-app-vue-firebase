<template>
  <div v-for="playlist in playlists" :key="playlist.id">
    <div class="single">
      <div class="thumbnail">
        <img :src="playlist.coverUrl" />
      </div>
      <div class="info">
        <h3>{{ playlist.title }}</h3>
        <p>created by {{ playlist.userName }}</p>
      </div>
      <div class="song-number">
        <p>{{ playlist.songs.length }} songs</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['playlists'],
};
</script>

<style scoped>
.single {
  display: flex;
  align-items: center;
  margin: 16px 0;
  padding: 20px;
  border-radius: 10px;
  background: white;
  transition: all ease 0.2s;
}
.single:hover {
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  transition: all ease 0.2s;
  transform: scale(1.02);
}
.thumbnail {
  max-width: 128px;
  max-height: 128px;
}
img {
  object-fit: cover;
  display: block;
  max-width: 128px;
  max-height: 128px;
  border-radius: 10px;
}
.info {
  margin: 0 30px;
}
.song-number {
  margin-left: auto;
}
</style>
