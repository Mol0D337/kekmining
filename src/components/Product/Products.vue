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
            min: "500 Gh/s",
            pay: "0.0010000000 / 1 Gh/s / 1h",
            equipment: "SHA-256",
            price: "$250",
            article: "T1",
          },
          {
            image: "17.png",
            name: "Dash",
            min: "1150 Mh/s",
            pay: "0.0010000000 / 1 Mh/s / 1h",
            equipment: "X11 (DASH)",
            price: "$450",
            article: "T2",
            available: true
          },
          {
            image: "16.png",
            name: "Ethereum",
            min: "50 Mh/s",
            pay: "0.0010000000 / 1 Mh/s / 1h",
            equipment: "ETHASH",
            price: "$20",
            article: "T3",
            available: true
          },
          {
            image: "19.png",
            name: "Litecoin",
            min: "2500 Mh/s",
            pay: "0.0010000000 / 1 Mh/s / 1h",
            equipment: "Scrypt",
            price: "$2500",
            article: "T4",
            available: true
          },
          {
            image: "20.png",
            name: "Zcash",
            min: "1000 H/s",
            pay: "0.0010000000 / 1 H/s / 1h",
            equipment: "EQUEHASH (ZEC)",
            price: "$60",
            article: "T5",
            available: true
          },
          {
            image: "21.png",
            name: "Monero",
            min: "25 H/s",
            pay: "0.0000571667 / 1 H/s / 1h",
            equipment: "Cryptonight (XMR)",
            price: "$13",
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
