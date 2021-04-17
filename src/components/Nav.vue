<template>
  <header>
    <h1>My Workspace</h1>
    <button>+ Create New Project</button>
  </header>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss">
header {
  /* background-color: rgb(49, 49, 49); */
  min-height: 12vh;
  border-bottom: 1px solid grey;
  box-shadow: 0px 0px 10px #000;
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #233b40;
  button:hover {
    border: 1px solid rgb(0, 128, 113);
  }
}
</style>