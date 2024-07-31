<script setup>
import { ref, nextTick } from 'vue';
const multipleTable = ref(null)
const multipleSelection = ref([])
const allSelected = ref(false)
const tableData = ref([])
tableData.value = [
  { name: 'Thiago', address: 'Sao Paulo' },
  { name: 'Douglas', address: 'Sao Paulo' }
]

const selectAll = (rows) => {
  multipleTable.value.clearSelection()
  if (!allSelected.value) {
    rows.forEach((row, index) => {
      if (row.name === 'Thiago') {
        multipleTable.value.toggleRowSelection([{ row: row, selected: true }])
      }
    })
  }
  allSelected.value = !allSelected.value
}

function handleSelectionChange(val) {
  multipleSelection.value = val;
}

</script>

<template>
  <div id="app">
    <u-table ref="multipleTable" :data="tableData" style="width: 100%" @select-all="selectAll"
      @selection-change="handleSelectionChange" key="index" empty-text="No data">
      <u-table-column type="selection" width="55">
      </u-table-column>

      <u-table-column property="name" label="Name" width="120">
      </u-table-column>
      <u-table-column property="address" label="Address" show-overflow-tooltip>
      </u-table-column>
    </u-table>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
