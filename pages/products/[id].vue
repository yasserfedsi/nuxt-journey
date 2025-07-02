<!-- this will create a route like this /products/:id -->
<template>
  <div>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// Fetch the product data from the API
const { data: product } = await useFetch(uri, { key: id });

definePageMeta({
  layout: "products",
});
</script>

<style scoped>
p {
  margin: 20px 0;
}
</style>
