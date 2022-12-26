<template>
	<div class="home">
		<h1>姓名: {{ text }}</h1>
		<button @click="getAge">获取数据</button>
		<h1>{{ a }}</h1>
		<h2>{{ obj.name }}--{{ obj.sex }}</h2>
	</div>
</template>

<script>
	import { ref, reactive, toRefs } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter, useRoute } from 'vue-router';
	export default {
		beforeCreate() {
			console.log('beforeCreate');
		},
		created() {
			console.log('created');
		},
		beforeMount() {
			console.log('beforeMount');
		},
		mounted() {
			console.log('mounted');
		},
		setup(props, ctx) {
			console.log('setup');
			const store = useStore();
			const router = useRouter();
			const route = useRoute();
			const data = reactive({});
			const a = ref(12);
			const obj = ref({
				name: '6',
				sex: '0',
			});
			let person = reactive({
				name: '张三',
				age: 18,
				job: {
					type: '前端工程师',
					salary: '30K',
					a: {
						b: {
							c: 99,
						},
					},
				},
				hobby: ['抽烟', '喝酒', '烫头'],
			});

			let text = '张三';
			const getAge = () => {
				console.log('方法');
			};
			return { ...toRefs(data), text, getAge, a, obj, person };
		},
	};
</script>

<style lang="scss"></style>
