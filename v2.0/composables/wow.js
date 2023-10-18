import { onMounted } from 'vue'
import { WOW } from 'wowjs';

export function useWow() {
    onMounted(() => {
        const wow = new WOW.WOW({ live: false });
        wow.init();
    });
}