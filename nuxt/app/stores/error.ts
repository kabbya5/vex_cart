import {defineStore} from 'pinia';
import { useAlertStore } from '~/stores/alert';

interface Alert{
    message:string,
    code:number,
    status:'success' | 'error' | 'warning' | 'info',
    id?:number,
}

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
            this.errors = err?.response?._data?.errors||{};

            const alert : Alert = {
                status: 'error',
                code: this.statusCode ?? 401,
                message: this.message ?? 'Unknow Error',
                id:Math.floor(Math.random()*90000) + 10000,
            }

            const alertStore = useAlertStore();
            alertStore.setAlert(alert);
        },
        clearError(){
            this.statusCode = null;
            this.message = null;
            this.errors =  {};
        }
    }
})