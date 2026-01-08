interface Alert{
    message:string,
    code:number,
    status:'success' | 'error' | 'warning' | 'info'
}

import {defineStore} from 'pinia';

export const useAlertStore = defineStore('alert',{
    state:() => ({
       alerts: [] as Alert[],
    }),

    actions:{
        setAlert(alert:any){
            this.messages = alert?.message;
            this.code = alert?.code;
            this.type = alert?.type;
        }
    }
});