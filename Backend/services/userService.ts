import * as fs from 'fs';
import * as path from 'path';

export default class Users{
        private email:string
        private accessToken:string
        private RefreshToken:string

        constructor(email:string, accessToken:string, RefreshToken:string){
            this.email = email,
            this.accessToken = accessToken,
            this.RefreshToken = RefreshToken
        }
    }  