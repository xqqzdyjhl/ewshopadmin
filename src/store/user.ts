import {defineStore} from "pinia";
import {login, user} from "../api/auth.ts";

export interface IUserState{
    token:string,
    username:string,
    avatar:string,
    permissions:string[]
    info:Object
}

export const useUserStore = defineStore({
    id:'app-user',
    state:():IUserState=>({
        token:localStorage.getItem('token') || '',
        username:'',
        avatar:'',
        permissions:[],
        info:{},
    }),
    getters:{
        getToken():string{
            return  this.token
        },
        getAvatar():string{
            return  this.avatar
        },
        getNickname():string{
            return  this.username
        },
        getPermissions():string{
            return  this.permissions
        },
        getInfo():Object{
            return  this.info
        }
    },
    actions:{
        setToken(token:string){
            localStorage.setItem('token',token)
            this.token = token
        },
        setAvatar(avatar:string){
            this.avatar = avatar
        },
        setUserInfo(info:Object){
            this.info = info
        },
        setUsername(username:string){
          this.username = username
        },
        setPermissions(permissions:string[]){
            this.permissions = permissions
        },
        async login(userinfo:Object){
            try {
                const response = await login(userinfo)
                if (response.access_token){
                    this.setToken(response.access_token)
                    this.getUser()
                }
            }catch (error){
                console.log(error);
            }
        },
        async getUser(){
            try {
                const response = await user()
                console.log(response);
                this.setUserInfo(response)
                this.setAvatar(response.avatar)
                this.setUsername(response.name)

            } catch (error){
                console.log(error);
            }
        }


    }

})