<template>
  <s-table
    :columns="columns"
    :scroll="{ y: 700 }"
    :loading="loading"
    :data-source="dataSource"
  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a>Action</a>
      </template>
    </template>
    <template #summary>
      <s-table-summary-row>
        <s-table-summary-cell :index="0">Balance</s-table-summary-cell>
        <s-table-summary-cell :index="1" :col-span="2">
          <a-typography-text type="danger"> 2222 </a-typography-text>
        </s-table-summary-cell>
      </s-table-summary-row>
    </template>
  </s-table>
</template>
<script setup lang="ts">
import { ref } from "vue";

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const columns = [
  {
    title: "Full Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Column 1",
    dataIndex: "address",
  },
  {
    title: "Column 2",
    dataIndex: "address",
  },
  {
    title: "Column 3",
    dataIndex: "address",
  },
  {
    title: "Column 4",
    dataIndex: "address",
  },
  { title: "Column 5", dataIndex: "address" },
  {
    key: "operation",
    title: "操作",
  },
];
const data: DataItem[] = [];
for (let i = 0; i < 1000; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: i + 1,
    address: `London Park no. ${i}`,
  });
}
const dataSource = ref<DataItem[]>([]);
const loading = ref(true);
const loadData = () => {
  setTimeout(() => {
    dataSource.value = data;
    loading.value = false;
  }, 1000);
};

loadData();
</script>
