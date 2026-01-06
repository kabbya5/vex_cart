import { defineStore } from "pinia";

export const useThemeStore = defineStore('theme',{
    actions:{
        async setTheme(theme:string){

            const themeCookie = useCookie<string | null>('theme');
            themeCookie.value = theme;
            
            const response :any = await useApiFetch('/get/theme/' + theme);

            if(response.data){

                const root = document.documentElement;
                Object.entries(response.data).forEach(([key, value]) => {
                    const cssVar = `--${key.replace('_color', '-color').replaceAll('_', '-')}`;
                    console.log('theme', cssVar);
                    root.style.setProperty(cssVar, value as string);
                });
            }
        },

        initTheme(){
            const storedTheme = useCookie<string|null>('theme').value ?? 'default';
            this.setTheme(storedTheme);
        },
    },
});