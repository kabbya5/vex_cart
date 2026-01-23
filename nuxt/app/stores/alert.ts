interface Alert{
    message:string,
    code:number,
    status:'success' | 'error' | 'warning' | 'info',
    id?:number,
}

import {defineStore} from 'pinia';

export const useAlertStore = defineStore('alert',{
    state: () => ({
        alerts: [
        {
            message: 'The product has been created',
            code: 200,
            status: 'success',
        },
        {
            message: 'Something went wrong',
            code: 500,
            status: 'info',
        },
        {
            message: 'Please check the input',
            code: 200,
            status: 'warning',
        },
        {
            message: 'Access denied',
            code: 401,
            status: 'error',
        },
        ] as Alert[],
    }),

    actions:{
        setAlert(alert:any){
            this.alerts.push(alert);
            setTimeout(() => {
                this.removeAlert(alert.id);
            },5000)

            console.log(alert);
        }, 

        removeAlert(id:number){
            const index = this.alerts.findIndex(alert => alert.id === id);
            if(index !== -1){
                this.alerts.splice(index,1);
            }
        }
    }
});