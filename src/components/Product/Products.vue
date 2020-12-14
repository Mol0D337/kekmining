<template>
  <div class="grid">
    <Product
      v-for="product in products"
      :key="product.article"
      :product_data="product"
    />
  </div>
</template>

<script>
  import Product from "./Product";
  export default {
    name: "Products",
    components: {Product},
    data () {
      return {
        products: [
          {
            image: "18.png",
            name: "Bitcoin",
            min: 500,
            minText: "Gh/s",
            pay: "0.0010000000 / 1 Gh/s / 1h",
            equipment: "SHA-256",
            price: 0.5,
            article: "T1",
          },
          {
            image: "17.png",
            name: "Dash",
            min: 1150,
            minText: "Mh/s",
            pay: "0.0010000000 / 1 Mh/s / 1h",
            equipment: "X11 (DASH)",
            price: 1,
            article: "T2",
            available: true
          },
          {
            image: "16.png",
            name: "Ethereum",
            min: 50,
            minText: "Mh/s",
            pay: "0.0010000000 / 1 Mh/s / 1h",
            equipment: "ETHASH",
            price: 2.5,
            article: "T3",
            available: true
          },
          {
            image: "19.png",
            name: "Litecoin",
            min: 2500,
            minText: "Mh/s",
            pay: "0.0010000000 / 1 Mh/s / 1h",
            equipment: "Scrypt",
            price: 1,
            article: "T4",
            available: true
          },
          {
            image: "20.png",
            name: "Zcash",
            min: 1000,
            minText: "H/s",
            pay: "0.0010000000 / 1 H/s / 1h",
            equipment: "EQUEHASH (ZEC)",
            price: 10,
            article: "T5",
            available: true
          },
          {
            image: "21.png",
            name: "Monero",
            min: 26,
            minText: "H/s",
            pay: "0.0000571667 / 1 H/s / 1h",
            equipment: "Cryptonight (XMR)",
            price: 13,
            article: "T6",
            available: true
          },
        ]
      }
    }
  }
</script>

<style scoped lang="sass">
  .grid
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-template-rows: 1fr 1fr
    margin-top: 20px

</style>
