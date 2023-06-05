<script setup>
    import { ref } from 'vue'
    import { useChecklistStore } from '../stores/checklists';
    
    const props = defineProps({
        checklistId: String
    })

    const store = useChecklistStore()
    const checklist = store.checklists[props.checklistId]

    const newChecklistName = ref('')
    const showNameInput = ref(false)

    function toggleInput() {
        showNameInput.value = !showNameInput.value
    }

    function editChecklistName() {
        store.editChecklistName(props.checklistId, newChecklistName.value)
        toggleInput()
    }
</script>

<template>
    <div class="single-checklist">
        <div>Checklist Name: {{ checklist.checklistName || 'none' }}</div>
        <button @click="toggleInput">Edit Checklist Name</button>
        <div v-if="showNameInput">
            <input v-model="newChecklistName" />
            <button @click="editChecklistName">Submit</button>
        </div>
    </div>
</template>

<style scoped>
.single-checklist {
    border: 1px solid black;
    padding: 10px;
}
</style>