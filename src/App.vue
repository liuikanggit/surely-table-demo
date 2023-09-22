<template>
  <s-table
    :columns="columns"
    :scroll="{ y: 400 }"
    :loading="loading"
    :data-source="dataSource"
  ></s-table>
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
