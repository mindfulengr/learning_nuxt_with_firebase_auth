<template>
  <div class="col-lg-6 mx-auto">
    <h1 style="center">Login to your account</h1>
    <form @submit.prevent>
      <div class="form-group">
        <input
          id="nuxt-fire-email"
          v-model="account.email"
          type="email"
          class="form-control"
          placeholder="E-Mail"
        />
      </div>

      <div class="form-group">
        <input
          id="nuxt-fire-pass"
          v-model="account.password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
      </div>

      <div class="form-group">
        <input @click="login" type="submit" class="btn btn-primary" />
      </div>
    </form>
    <div v-if="isError" class="alert alert-danger">
      <p class="mb-0">{{ errorMsg }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    account: {
      email: "",
      password: ""
    },
    isError: false,
    errorMsg: ""
  }),
  methods: {
    login() {
      this.$store.dispatch("users/login", this.account).catch(err => {
        this.isError = true;
        this.errorMsg = err.code;

        setTimeout(() => {
          this.isError = false;
          this.errorMsg = "";
        }, 3000);
      });
      this.$router.push("/admin");
    }
  }
};
</script>