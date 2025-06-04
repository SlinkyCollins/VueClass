<template>
  <div class="container mt-4">
    <h2>Parent Chat</h2>
    
    <div class="mb-3">
      <input v-model="pendingReply" class="form-control" type="text" placeholder="Type your reply..." />
      <button @click="sendReply" class="btn btn-outline-success mt-2">Send</button>
    </div>

    <div class="mb-3">
      <h5>Text from child:</h5>
      <div v-for="msg in childMessages" :key="msg.id">
        <span>{{ msg.text }} ({{ msg.time }})</span>
      </div>
    </div>

    <ChatChildEvent @send-text="receiveFromChild" :messageFromParent="parentMessages" />
  </div>
</template>

<script lang="ts">
import ChatChildEvent from './ChatChildEvent.vue';

interface Message {
  id: number;
  text: string;
  time: string;
}

export default {
  components: {
    ChatChildEvent
  },
  data() {
    return {
      pendingReply: '',
      parentMessages: [] as Message[],
      childMessages: [] as Message[]
    };
  },
  methods: {
    sendReply() {
      if (this.pendingReply.trim()) {
        const newMessage: Message = {
          id: Math.floor(Math.random() * 100000),
          text: this.pendingReply,
          time: new Date().toLocaleString()
        };
        this.parentMessages.push(newMessage);
        this.pendingReply = '';
      }
    },
    receiveFromChild(data: Message[]) {
      this.childMessages = [...data];
    }
  }
};
</script>
