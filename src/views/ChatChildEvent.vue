<template>
  <div>
    <h2>Child Chat</h2>

    <div class="mb-3">
      <h5>Messages from parent:</h5>
      <div v-for="msg in messageFromParent" :key="msg.id">
        <span>{{ msg.text }} ({{ msg.time }})</span>
      </div>
    </div>

    <div class="mb-3">
      <input type="text" class="form-control" placeholder="Send to parent" v-model="text">
      <button class="btn btn-outline-success mt-2" @click="sendToParent">Send</button>
    </div>
  </div>
</template>

<script lang="ts">
interface Message {
  id: number;
  text: string;
  time: string;
}

export default {
  props: ['messageFromParent'],
  data() {
    return {
      text: "",
      childMessages: [] as Message[]
    };
  },
  methods: {
    sendToParent() {
      if (this.text.trim()) {
        const newMessage: Message = {
          id: Math.floor(Math.random() * 100000),
          text: this.text,
          time: new Date().toLocaleString()
        };
        this.childMessages.push(newMessage);
        this.$emit('send-text', this.childMessages);
        this.text = '';
      }
    }
  }
};
</script>
