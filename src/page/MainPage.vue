<template>
  <div class="container">
    <h1>home</h1>
    <card-list></card-list>
  </div>
</template>

<script>
import CardList from "@component/Module/CardList";

export default {
  name: "MainPage",
  components: {
    CardList,
  },
};
</script>
