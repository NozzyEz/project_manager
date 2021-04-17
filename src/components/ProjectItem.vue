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
</style>