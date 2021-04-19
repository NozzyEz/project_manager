<template>
  <div class="overlay">
    <div class="card dialogue">
      <div class="btn">
        <button @click="closeDialogue()"><i class="fas fa-times"></i></button>
      </div>
      <div class="content">
        <h3>Create new folder</h3>
        <form>
          <input type="text" placeholder="Folder name" v-model="folderName" />
          <button @click="createFolder">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CreateNewFolder",
  data() {
    return {
      folderName: ""
    };
  },
  methods: {
    ...mapActions(["addNewFolder"]),
    //* Emitter to App.vue to close the dialogue component and allow scrolling of main window
    closeDialogue() {
      this.$emit("toggle-create-new");
      document.body.style.overflow = "auto";
    },

    //* Create a new folder if folder name is not empty
    async createFolder(e) {
      e.preventDefault();

      if (this.folderName) {
        await this.addNewFolder(this.folderName);
        this.closeDialogue();
      }
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
      max-width: 70rem;
      height: 40%;

      background: rgba(255, 255, 255, 0.9);
      .btn {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
      }
      button {
        border: 1px solid white;

        &:hover {
          border: 1px solid rgb(0, 128, 113);
        }
      }
      .content {
        padding: 2rem 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow-y: scroll;
        h3 {
          align-self: start;
        }
        form {
          display: flex;
          flex-direction: column;
          width: 100%;
          input {
            margin: 2rem 0rem;
            font-size: 2.4rem;
          }
        }
      }
    }
  }
}
</style>