import { ref } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useChecklistStore = defineStore('checklists', () => {
  const checklists = ref({})

  function addNewChecklist() {
    const newId = uuidv4()
    checklists.value[newId] = {
      checklistId: newId,
      checklistName: ''
    }
    console.log('checklists:', checklists.value)
  }

  function editChecklistName(checklistId, newName) {
    checklists.value[checklistId].checklistName = newName
    console.log('checklists:', checklists.value)
  }

  return {
    addNewChecklist,
    checklists,
    editChecklistName
  }
})
