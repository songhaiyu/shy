<template>
	<div class="">
		<h2>一个人的信息</h2>
		<h3>姓名：{{ name }}</h3>
		<h3>年龄：{{ age }}</h3>
		<button @click="sayHello">12</button>
	</div>
</template>

<script>
	import { ref, reactive, toRefs } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter, useRoute } from 'vue-router';
	export default {
		setup(props, ctx) {
			let name = '张三';
			let age = 18;
			const store = useStore();
			const router = useRouter();
			const route = useRoute();
			const data = reactive({});
			function sayHello() {
				alert(`我是${name}，我${age}岁了`);
			}
			return { ...toRefs(data), name, age, sayHello };
			// return () => h('h2', 'I am studying Vue3.');
		},
	};
</script>

<style lang="scss"></style>
