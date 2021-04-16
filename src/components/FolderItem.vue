<template lang="">
  <div class="card">
    <div class="header">
      <img :src="folderIcon" alt="">
      <div class="title">
        <h4>{{folder.attributes.name}}</h4>
				<p>{{folder.type}}</p>
      </div>
    </div>
		<div class="info">
			<div>
				<p><span>total projects</span></p>
				<p>{{folder.attributes.total_projects}}</p>
			</div>
			<div>
				<p><span>Last updated at</span></p>
				<p>{{getDate(folder.attributes.updated_at)}}</p>
			</div>
		</div>
  </div>
</template>

<script>
import moment from "moment";
export default {
	name: "FolderItem",
	data() {
		return {
			folderIcon: require("../assets/folder-green.svg")
		};
	},
	props: {
		folder: Object
	},
	methods: {
		getDate(date) {
			return moment(date).format("DD-MM-YYYY HH:mm");
		}
	}
};
</script>

<style lang="scss" scoped>
.card {
	background: rgba(255, 255, 255, 0.8);
	color: #233b40;
	height: 25rem;
	max-width: 29rem;
	flex: 1 1 30rem;
	margin: 2rem 3rem;
	padding: 2rem 2.5rem;
	border-radius: 2rem;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: end;
	}

	.info {
		height: 15rem;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		text-align: end;
		span {
			font-weight: bold;
		}
	}
}
</style>