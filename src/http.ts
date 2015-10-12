import { HttpOptions } from './options';
import { Ajax } from './ajax';
import { METHOD } from './methods';

class Http {
	
	static get(url:string): Promise<any> {
		return new Ajax(url).send(METHOD.GET);
	}
	
	static post(url:string, data?:any, options?:HttpOptions): Promise<any> {
		return new Ajax(url).send(METHOD.POST, data);
	}
	
	static put(url:string, data?:any, options?:HttpOptions): Promise<any> {
		return new Ajax(url).send(METHOD.PUT, data);
	}
	
	static delete(url:string, data?:any, options?:HttpOptions): Promise<any> {
		return new Ajax(url).send(METHOD.DELETE, data);
	}
	
	static patch(url:string, data?:any, options?:HttpOptions): Promise<any> {
		return new Ajax(url).send(METHOD.PATCH, data);
	}
	
}

export {Http, HttpOptions}