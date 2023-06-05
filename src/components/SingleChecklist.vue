<script setup>
    import { ref } from 'vue'
    import { useChecklistStore } from '../stores/checklists';
    import ChecklistItem from './ChecklistItem.vue'
    
    const props = defineProps({
        checklistId: String
    })

    const store = useChecklistStore()
    const checklist = store.checklists[props.checklistId]

    const newChecklistName = ref('')
    const showNameInput = ref(false)
    function toggleNameInput() {
        showNameInput.value = !showNameInput.value
    }
    function editChecklistName() {
        store.editChecklistName(props.checklistId, newChecklistName.value)
        toggleNameInput()
    }

    const newItemName = ref('')
    function addChecklistItem() {
        store.addChecklistItem(props.checklistId, newItemName.value)
        newItemName.value = ''
    }
</script>

<template>
    <div class="single-checklist">
        <div>Checklist Name: {{ checklist.checklistName || 'none' }}</div>
        <button @click="toggleNameInput">Edit Checklist Name</button>
        <div v-if="showNameInput">
            <input v-model="newChecklistName" />
            <button class="submit-button" @click="editChecklistName">Submit</button>
        </div>
        <div>
            Items on List:
            <div v-if="!checklist.items"><em>No items.</em></div>
            <ul v-else>
                <ChecklistItem
                    v-for="item of checklist.items"
                    :key="item.itemId"
                    :itemId="item.itemId"
                    :itemName="item.itemName"
                />
            </ul>
            <div>
                <input v-model="newItemName" />
                <button class="submit-button" @click="addChecklistItem">Submit</button>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
input {
    padding: 5px;
    border: none;
}
.single-checklist {
    border: 1px solid black;
    background-color: rgb(215, 229, 233);
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
}
.submit-button {
    padding: 5px;
    margin-left: 5px;
    background-color: rgb(215, 229, 233);
    color: black;
}
</style>