<script setup>
import { ref, nextTick, watch, onMounted } from 'vue';
const multipleTable = ref(null)
const multipleTable2 = ref(null)
const multipleSelection = ref([])
const allSelected = ref(false)
const tableData = ref([])
tableData.value = [
  { name: 'Thiago', address: 'Sao Paulo' },
  { name: 'Douglas', address: 'Sao Paulo' }
]

const selectSpecific = () => {
  multipleTable.value.clearSelection()
  tableData.value.forEach(row => {
    if (row.name === 'Thiago') {
      multipleTable.value.toggleRowSelection([{ row: row, selected: true }])
    }
  })
}

const selectAll = (rows) => {
  // console.log(multipleTable.value)
  // if (!allSelected.value) {
  //   multipleTable.value.clearSelection()
  //   rows.forEach((row, index) => {
  //     if (row.name === 'Thiago') {
  //       multipleTable.value.toggleRowSelection([{ row: row, selected: true }])
  //     }
  //   })
  // } else {

  //   multipleTable.value.clearSelection()

  // }
  // allSelected.value = !allSelected.value

  const dom = document.getElementById('multipleTable').querySelector('.el-table-column--selection .el-checkbox__input')
  
  if(dom.classList[1] === 'is-focus'){
    multipleTable.value.clearSelection()
    rows.forEach((row, index) => {
      if (row.name === 'Thiago') {
        multipleTable.value.toggleRowSelection([{ row: row, selected: true }])
      }
    })
  }
}

function handleSelectionChange(val) {
  multipleSelection.value = val;
  // console.log(multipleSelection.value.length)
  // console.log(multipleTable)
}

onMounted(() => {
  // document.getElementById('multipleTable2').querySelector('.el-checkbox__input')
  // nextTick(() => {
  //   document.getElementById('multipleTable2').querySelectorAll('.el-table-column--selection input[type="checkbox"]').forEach(item => item.addEventListener('click', () => {
  //     const dom = document.getElementById('multipleTable2').querySelector('.el-checkbox__input')
  //     console.log(dom.classList)
  //     if (dom.classList[1] == 'is-focus') {
  //       selectAll2()
  //     }
  //   }))
  // })

})

const selectAll2 = async (rows) => {

  console.log('Entered')
  multipleTable2.value.clearSelection()
  tableData.value.forEach((row, index) => {
    if (row.name === 'Thiago') {
      multipleTable2.value.toggleRowSelection([{ row: row, selected: false }])
    }
  })

}

</script>

<template>
  <div id="app" style="display: block;">
    <!-- ボタンで選択 -->
    <span> ボタンで選択</span>
    <div><button @click="selectSpecific">特定のみ選択</button></div>
    <div>
      <u-table ref="multipleTable" id="multipleTable" :data="tableData" style="width: 100%" @select-all="selectAll"
        @selection-change="handleSelectionChange" key="index" empty-text="No data">
        <u-table-column type="selection" width="55">
        </u-table-column>

        <u-table-column property="name" label="Name" width="120">
        </u-table-column>
        <u-table-column property="address" label="Address" show-overflow-tooltip>
        </u-table-column>
      </u-table>
    </div>
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
