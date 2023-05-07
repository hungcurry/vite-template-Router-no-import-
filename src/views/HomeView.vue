<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { ref, reactive, watch, computed } from "vue";
const msg = ref("curry lee");
// 監控ref純值
watch(msg, (newV, oldV) => {
  console.log("new:", newV, "old:", oldV);
});

const A = ref(1);
const B = ref(1);

const C = computed(() => {
  return A.value + B.value;
});

// 第ㄧ種 單個ref
watch(A, (newV, oldV) => {
  console.log("newA:", newV, "oldA:", oldV);
});
watch(C, (newV, oldV) => {
  console.log("newC:", newV, "oldC:", oldV);
});
//-----結果-----
// newA: 12 oldA: 1
// newC: 13 oldC: 2

// 第二種 getter 函数
watch(
  () => A.value + B.value,
  (newV, oldV) => {
    console.log("new:", newV, "old:", oldV);
  }
);
//-----結果-----
// new: 13 old: 2
// new: 24 old: 13

// 第三種 多個来源组成的数组
watch([A, B], (newV, oldV) => {
  console.log("new:", newV, "old:", oldV);
});
//-----結果-----
// new: (2) [12, 1] old: (2) [1, 1]
// new: (2) [12, 12] old: (2) [12, 1]

// ===================
// ... immediate ...
// ===================
const obj = reactive({ count: 0 });
watch(
  obj,
  (newValue, oldValue) => {
    // 立即执行，且当 `obj` 改变时再次执行
    console.log(`immediate`, newValue, oldValue);
  },
  { immediate: true }
);
//-----結果-----
// 只做第一次 所以只有newValue
// immediate Proxy(Object) {count: 0} undefined
</script>

<template>
  <main>
    <p>{{ msg }}</p>
    <input v-model="msg" />

    <input v-model.number="A" />+
    <input v-model.number="B" />
    {{ C }}
  </main>
</template>

<style scoped></style>
