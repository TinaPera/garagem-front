import {
    defineAsyncComponent,
    onMounted,
    onUnmounted,
    ref,
    shallowRef,
  } from 'vue';
  
  export function useMonitor() {
    const breakpoint = ref('sm');
    const menu = shallowRef(
      defineAsyncComponent(() => import('../components/templates/small/HeaderSmall.vue')),
    );
  
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 768) {
        breakpoint.value = 'sm';
        menu.value = defineAsyncComponent(() =>
          import('../components/templates/small/HeaderSmall.vue'),
        );
      } else {
        breakpoint.value = 'lg';
        menu.value = defineAsyncComponent(() =>
          import('../components/templates/large/HeaderLarge.vue'),
        );
      }
    };
  
    onMounted(() => {
      updateBreakpoint();
      window.addEventListener('resize', updateBreakpoint);
    });
  
    onUnmounted(() => {
      window.removeEventListener('resize', updateBreakpoint);
    });
  
    return { breakpoint, menu }
  }  