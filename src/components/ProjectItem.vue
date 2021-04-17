<template>
  <div class="card">
    <div class="header">
      <h4>{{ project.attributes.name }}</h4>
      <p>
        <span>Source Content:</span
        ><a :href="project.attributes.source_content">{{
          project.attributes.file_name
        }}</a>
      </p>
    </div>
    <div class="info">
      <p><span>Date of Order</span></p>
      <p>{{ getDate(project.attributes.created_at) }}</p>
      <p><span>Price</span></p>
      <p>
        {{ project.attributes.price.total }}
        {{ project.attributes.price.currency }}
      </p>
    </div>
    <div class="lang">
      <div class="lang-from">
        <p><span>Translation From</span></p>
        <p>{{ project.attributes.source_language }}</p>
      </div>
      <div class="lang-to">
        <p><span>Translation To</span></p>
        <div v-for="lang in project.attributes.target_languages" :key="lang">
          <p>{{ lang }}</p>
        </div>
      </div>
    </div>
    <div class="status"></div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "ProjectItem",
  props: {
    project: Object
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
  height: 40rem;
  max-width: 40rem;
  flex: 1 1 50rem;
  margin: 2rem 3rem;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
  span {
    font-weight: bold;
  }
  .header {
    margin-bottom: 2rem;
  }
  .info {
    margin-bottom: 2rem;
    min-height: 50%;
  }
  .lang {
    display: flex;
    justify-content: space-between;
    .lang-to {
      text-align: end;
    }
  }
}
</style>