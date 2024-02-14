<template>
  <div class="error" v-if="error">{{ error }}</div>
  <div v-if="playlist" class="playlist-details">
    <!-- playlist information -->
    <div class="playlist-info">
      <div class="cover">
        <img :src="playlist.coverUrl" />
      </div>
      <h2>{{ playlist.title }}</h2>
      <p class="username">Created by {{ playlist.userName }}</p>
      <p class="description">{{ playlist.description }}</p>
      <button v-if="ownership" @click="handleDelete">Delete Playlist</button>
    </div>

    <!-- song list -->
    <div class="song-list">
      <p>song list here</p>
    </div>
  </div>
</template>

<script>
import getDocument from '@/composables/getDocument';
import getUser from '@/composables/getUser';
import useDocument from '@/composables/useDocument';
import useStorage from '@/composables/useStorage';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  props: ['id'],
  setup(props) {
    const { error, document: playlist } = getDocument('playlists', props.id);
    const { user } = getUser();
    const { deleteDoc } = useDocument('playlists', props.id);
    const { deleteImage } = useStorage();
    const router = useRouter();

    const ownership = computed(() => {
      return playlist.value && user.value && user.value.uid == playlist.value.userId;
    });

    const handleDelete = async () => {
      await deleteDoc();
      await deleteImage(playlist.value.filePath);
      router.push({ name: 'Home' });
    };

    return { error, playlist, ownership, handleDelete };
  },
};
</script>

<style>
.playlist-details {
  gap: 80px;
  grid-template-columns: 1fr 2fr;
  display: grid;
}
.cover {
  position: relative;
  padding: 160px;
  max-width: 320px;
  max-height: 320px;
}
.cover img {
  object-fit: cover;
  border-radius: 32px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 320px;
  max-height: 320px;
}
.playlist-info {
  text-align: center;
}
.playlist-info h2 {
  margin-top: 20px;
  font-size: 28px;
  text-transform: capitalize;
}
.playlist-info p {
  margin-bottom: 20px;
}
.username {
  color: #999;
}
.description {
  text-align: left;
}
</style>
