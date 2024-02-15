<template>
  <div class="user-playlists">
    <h2>My Playlists</h2>
    <div v-if="playlists">
      <ListView :playlists="playlists" />
    </div>
    <router-link :to="{ name: 'CreatePlaylist' }" class="btn">Create a New Playlist</router-link>
  </div>
</template>

<script>
import ListView from '@/components/ListView.vue';
import getCollection from '@/composables/getCollection';
import getUser from '@/composables/getUser';

export default {
  components: { ListView },
  setup() {
    const { user } = getUser();
    const { documents: playlists } = getCollection('playlists', ['userId', '==', user.value.uid]);

    return { playlists };
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--secondary);
}
.btn {
  margin-top: 20px;
}
</style>
