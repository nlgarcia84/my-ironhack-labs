<template>
  <!-- ... -->
  <div class="tweet" v-for="(tweet, index) in props.tweets" :key="index" >

    <ProfileImage :image="tweet.user.image" />
    <div class="body">
      <div class="top">
        <User :userData="tweet.user" />
        <Timestamp :time="tweet.timestamp" />
      </div>
      <Message :message="tweet.message" />
      <Actions />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
import ProfileImage from './ProfileImage.vue'
import Message from './Message.vue'
import Actions from './Actions.vue'
import User from './User.vue'
import Timestamp from './Timestamp.vue'


const props = defineProps({
  tweets: Object,
});

// console.log(props.Tweet.user.image);
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
