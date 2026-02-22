import axios, { AxiosInstance, AxiosRequestConfig } from "axios";


class ApiClient {
    private token?:string;
    private client:AxiosInstance;
    constructor(){
        this.client=axios.create({
            baseURL:"https://fakestoreapi.com",
            timeout:15000,
        })
        this.client.interceptors.request.use(config=>{
            if(this.token){
                config.headers.Authorization =`Bearer ${this.token}`
            }
            return config;
        })

    }
    setToken(token:string){
        this.token=token;
    }
    private async request<T>(config :AxiosRequestConfig):Promise<T>{
        const res =await this.client(config);
        return res.data;

    }

    get<T>(url:string,params?:any){
        return this.request<T>({url, method:"GET",params})
    }
    post<T>(url:string,data?:any){
        return this.request<T>({url,method:"POST",data})
    }

    put<T>(url:string,data?:any){
      return this.request<T>({url,method:"PUT",data})

    }
    patch<T>(url:string,data?:any){
        return this.request<T>({url,method:"PATCH",data})
    }
    delete<T>(url:string){
     return this.request<T>({url,method:"DELETE"})
    }
    upload<T>(url:string,formData:FormData){
        return this.request<T>({
            url,
            method:"POST",
            data:formData,
            headers:{"Content-Type":"multipart/form-data"}
        });
    }
}

export default new ApiClient();