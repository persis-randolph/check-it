<script setup>
  import { useChecklistStore } from '../stores/checklists';
  import SingleChecklist from '../components/SingleChecklist.vue';
  const store = useChecklistStore()

  function addNewChecklist() {
    store.addNewChecklist()
  }
</script>

<template>
  <main>
    <button @click="addNewChecklist">Add New Checklist</button>
    <SingleChecklist
      v-for="checklist of store.checklists" 
      :key="checklist.checklistId"
      :checklistId="checklist.checklistId"
    />
  </main>
</template>
