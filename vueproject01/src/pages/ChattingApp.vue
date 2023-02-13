<template>
  <div class="container">
    <h1>채팅방</h1>
    <ul>
      <li v-for="(msg, index) in messages" :key="index">{{msg.message}}</li>
    </ul>
    <div class="chat">
      <input type="text" @keyup.enter="sendMessage()" v-model="message">
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  data() {
    return {
      messages: [],
      socket : io('http://3.39.184.23:5002')
    }
  },
  methods: {
    sendMessage(message) {
      this.socket.emit('SEND_MESSAGE', {message});
    }
  },
  mounted() {
    this.socket.on('MESSAGE', (data) => {
        this.messages = [...this.messages, data];
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container{
    padding: 3%;
}
h1 {
    display: block;
    text-align: center;
}
ul {
    width: 30%;
    min-height: 500px;
    overflow: hidden;
    overflow-y: auto;
    padding:10px;
    margin: 0 auto;
    background: rgb(180, 200, 207);
    list-style-type: none;
}
li {
  max-width: 200px;
  margin: 10px 0;
  padding:10px;
  border-radius: 5px;
  background: rgb(206, 206, 27);
}
a {
  color: #42b983;
}
.chat{
    width: 30%;
    margin: 0 auto;
    background: rgb(255, 255, 255);
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
    input{
        width: 80%;
        padding: 7px;
    }
    .v-btn{
       width: 20%; 
    }
}
</style>
