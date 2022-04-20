<template>
  <div class="container">
    <card-product></card-product>
    <card-list></card-list>
  </div>
</template>

<script>
import CardProduct from "@component/Module/CardProduct";
import CardList from "@component/Module/CardList";

export default {
  name: "MainPage",
  components: {
    CardProduct,
    CardList,
  },
};
</script>
