import {defineStore} from 'pinia';

export const useErrorStore = defineStore('error',{
    state:() => ({
        message: null as string | null,
        errors:{} as Record<string,string[]>,
        statusCode: null as number | null,
    }),

    actions:{
        setError(err:any){
            this.statusCode = err?.response?.status ?? null;
            this.message = err?.response?.message || err.message || 'Unknown Error';
            this.errors = err?.response._data?.errors||{};
        },
        clearError(){
            this.statusCode = null;
            this.message = null;
            this.errors =  {};
        }
    }
})