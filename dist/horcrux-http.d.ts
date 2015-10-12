declare module "horcrux-http" {
export {	Http}
 class Http {
    static get(url: string): Promise<any>;
    static post(url: string, data?: any): Promise<any>;
    static put(url: string, data?: any): Promise<any>;
    static delete(url: string, data?: any): Promise<any>;
    static patch(url: string, data?: any): Promise<any>;
}
}