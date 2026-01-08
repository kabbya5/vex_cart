import {defineStore} from 'pinia';

interface User{
    id:number,
    name:string,
    email:string,
    phone_number:string,
}

export const useAuthStore = defineStore('auth',{
    state:() =>({
        user: null as User | null,
    }),

    actions:{
        async initAuth(){
            try{
                const res:any = await useApiFetch('/pssport/user');
                if(res.user){
                    this.user = res.user;
                }
            }catch{
                this.user = null;
            }
        },

        async register(formData :any){
            try{
                const res:any = await useApiFetch('/register',{
                    method:'POST',
                    body:formData,
                });

                if(res.user){
                    this.user = res.user;
                }
            }catch(error){
                throw error;
            }
        },

        async login(formData:any){
            try{
                const res:any = await useApiFetch('/login', {
                    method:'POST',
                    body:formData,
                });

                if(res.user){
                    this.user = res.user;
                }
            }catch(err){
                throw err; 
            }
        },

        async logout(){
            await useApiFetch('/logout',{
                method:'POST',
            })
            this.user = null;
        }
    },
});