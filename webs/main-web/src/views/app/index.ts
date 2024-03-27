import { defineComponent, onMounted } from 'vue';

export default defineComponent({
	name: 'VApp',
	setup() {
		onMounted(() => {
			document.documentElement.setAttribute('theme-color', 'white');
		});
		return {};
	},
});
