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
    <div class="customer-info">
      <h4>customer</h4>
      <p>
        <span>name:</span>
        {{ project.attributes.customer.attributes.first_name }}
        {{ project.attributes.customer.attributes.last_name }}
      </p>
      <p>
        <span>phone:</span>{{ project.attributes.customer.attributes.phone }}
      </p>
      <p>
        <span>email:</span> {{ project.attributes.customer.attributes.email }}
      </p>
    </div>
    <div class="info">
      <div>
        <p><span>Date of Order</span></p>
        <p>{{ getDate(project.attributes.created_at) }}</p>
        <p><span>Price</span></p>
        <p>
          {{ project.attributes.price.total }}
          {{ project.attributes.price.currency }}
        </p>
      </div>
      <div class="info-grp-2">
        <p><span>Workflow</span></p>
        <p>{{ project.attributes.workflow }}</p>
        <p><span>Payment</span></p>
        <p>
          {{ project.attributes.payment.amount }}
          {{ project.attributes.payment.currency }}
        </p>
      </div>
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
    <div class="status">
      <p><span>Status:</span> {{ project.attributes.status }}</p>
    </div>
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
      return moment(date).format("DD-MM-YYYY");
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  min-width: 35rem;
  max-width: 35rem;
  .header {
    margin-bottom: 2rem;
  }
  .customer-info {
    margin-bottom: 2rem;
  }
  .info {
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    .info-grp-2 {
      text-align: end;
    }
  }
  .lang {
    display: flex;
    justify-content: space-between;
    .lang-to {
      text-align: end;
    }
  }
  .status {
    text-align: center;
  }
}
</style>