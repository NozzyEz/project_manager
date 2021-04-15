<template lang="">
  <div class="folders">
    <div class="title-bar">
      <h3>Folders</h3>
      <button>Create new</button>
    </div>
		<div class="container">
      <FolderItem />
      <FolderItem />
      <FolderItem />
      <FolderItem />
    </div>
  </div>
</template>

<script>
import FolderItem from "./FolderItem";
export default {
	name: "Folders",
	components: {
		FolderItem,
	},
};
</script>

<style lang="scss" scoped>
.folders {
	width: 100%;
	min-height: 30rem;
	.title-bar {
		display: flex;
		justify-content: space-between;
		button {
			border-radius: 0.6rem;
		}
	}
	.container {
		padding-top: 2rem;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
}
</style>