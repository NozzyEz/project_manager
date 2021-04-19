<template>
  <div class="overlay">
    <div class="card dialogue">
      <div class="content">
        <h3>Please log in</h3>
        <form>
          <label>email</label>
          <input v-model="userEmail" type="email" />
          <label>password</label>
          <input v-model="password" type="password" placeholder="Folder name" />
          <button @click="signIn">Submit</button>
        </form>
      </div>
      <p>
        For the purposes of this demo, these fields are hardcoded with the
        authentication details to fetch the access token from the server
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateNewFolder",
  data() {
    return {
      userEmail: "developer+sbk@easytranslate.com",
      password: "easytranslate2020"
    };
  },
  methods: {
    //* Emitter to App.vue to sign user in
    signIn(e) {
      e.preventDefault();
      this.$emit("sign-in", this.userEmail, this.password);
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba($color: #000000, $alpha: 0.7);
  .card {
    &.dialogue {
      max-width: 30%;
      /* height: 40%; */
      background: rgba(255, 255, 255, 0.9);
      button {
        border: 1px solid white;
        width: 10em;

        &:hover {
          border: 1px solid rgb(0, 128, 113);
          /* font-size: 2rem; */
        }
      }
      .content {
        padding: 2rem 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow-y: scroll;
        h3 {
          align-self: start;
          margin-bottom: 2rem;
        }
        form {
          display: flex;
          flex-direction: column;
          width: 100%;
          label {
            font-size: 2.2rem;
          }
          input {
            border: 1px solid black;
            padding: 0.2rem 0.5rem;
            font-size: 2rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
}
</style>