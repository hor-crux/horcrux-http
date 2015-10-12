declare module "horcrux-http" {
export {	Http,	HttpOptions}
interface HttpOptions {
    contentType?: string;
}
 class Ajax {
    private url;
    private xhttp;
    private options;
    constructor(url: string, options?: HttpOptions);
    send(method: string, data?: any): Promise<any>;
    private payload(data);
    private response();
}
 let METHOD: {
    GET: string;
    POST: string;
    PUT: string;
    DELETE: string;
    PATCH: string;
};
 class Http {
    static get(url: string): Promise<any>;
    static post(url: string, data?: any, options?: HttpOptions): Promise<any>;
    static put(url: string, data?: any, options?: HttpOptions): Promise<any>;
    static delete(url: string, data?: any, options?: HttpOptions): Promise<any>;
    static patch(url: string, data?: any, options?: HttpOptions): Promise<any>;
}
}