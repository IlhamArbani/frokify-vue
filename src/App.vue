<template>
  <Dashboard/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Dashboard from './pages/dashboard/Dashboard.vue'

export default defineComponent({
  name: 'App',
  components:{
    Dashboard
  }
});
</script>
