<template>
  <div class="hello">
    testImage
    <Apple />
    <br />
    <div v-for="picture in pictures" :key="picture" class="polaroid2">
      <img :src="picture" />
      <div class="container2">a</div>
    </div>

    <div class="container">
      <img
        src="http://lorempixel.com/200/200?3"
        alt="Avatar"
        class="image"
        style="width: 100%"
      />
      <div class="middle">
        <div class="text">Coooool</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pictures: [
        "http://lorempixel.com/200/200?0",
        "http://lorempixel.com/200/200?1",
        "http://lorempixel.com/200/200?2",
      ],
    };
  },
  created: function () {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.polaroid2 {
  width: 80%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

img {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

div.container2 {
  text-align: center;
  padding: 10px 20px;
}

.container {
  position: relative;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: 1s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>

