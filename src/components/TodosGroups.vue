<template>
  <div class="groups">
    <div v-for="group in groups" :key="group.id" class="group">
      <group :group="group"/>  
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Group from "@/components/Group";
export default {
  components: {
    Group
  },
  computed: {
    ...mapState(["groups"]),
  },
};
</script>
