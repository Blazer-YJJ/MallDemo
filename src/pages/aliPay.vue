<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from "../components/Loading";

export default {
  name: "aliPay",
  components: {Loading},
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true
    }
  },
  comments: {
    Loading
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      this.axios.post('/pay', {
        orderId: this.orderId,
        orderName: '杨继钧的商城',            //扫码支付时订单名称
        amount: 0.01,                        //单位元
        payType: 1                           //1支付宝，2微信
      }).then((res) => {
        this.content = res.content;
        setTimeout(() => {
          document.forms[0].submit();
        }, 100);
      })
    }
  }
}
</script>

<style scoped>

</style>
