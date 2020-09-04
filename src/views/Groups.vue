<template>
  <div id="groups">
    <div class="container">
      <add-group />
      <todos-groups />
    </div>
    
  </div>
</template>

<script>
import TodosGroups from "@/components/TodosGroups";
import AddGroup from "@/components/AddGroup";
export default {
  name: "Groups",
  components: { TodosGroups, AddGroup }
};
</script>
