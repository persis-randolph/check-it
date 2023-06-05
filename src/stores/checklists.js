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
  }

  function editChecklistName(checklistId, newName) {
    checklists.value[checklistId].checklistName = newName
  }

  function addChecklistItem(checklistId, newItemName) {
    const checklist = checklists.value[checklistId]
    const newId = uuidv4()
    if (!checklist.items) {
      checklist.items = {}
    }
    checklist.items[newId] = {
      itemId: newId,
      itemName: newItemName
    }
  }

  return {
    addChecklistItem,
    addNewChecklist,
    checklists,
    editChecklistName
  }
})
