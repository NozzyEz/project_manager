<template>
  <header>
    <h1>My Workspace</h1>
    <div class="btns">
      <button>+ Create New Project</button>
      <button @click="signOut()"><i class="fas fa-sign-out-alt"></i></button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    signOut() {
      this.$emit("sign-out");
    }
  }
};
</script>

<style lang="scss">
header {
  /* background-color: rgb(49, 49, 49); */
  min-height: 12vh;
  /* border-bottom: 1px solid grey; */
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #233b40;

  background: linear-gradient(90deg, #94a4aa, #e5f5f8);

  button {
    margin-left: 1rem;
    border: 1px solid #e5f5f8;
    &:hover {
      border: 1px solid rgb(0, 128, 113);
    }
  }
}
</style>