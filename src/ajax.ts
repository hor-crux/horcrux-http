import { HttpOptions } from './options';

class Ajax {
	
	private xhttp: XMLHttpRequest;
	private options: HttpOptions = {};
	
	constructor(private url:string, options?:HttpOptions) {
		this.xhttp = new XMLHttpRequest();
		if(!!options) {
			if(!!options.contentType)
				this.options.contentType = options.contentType;
		}
	}
	
	public send(method:string, data?:any): Promise<any> {
		return new Promise((resolve, reject) => {
			
			this.xhttp.onreadystatechange = _ => {
				if (this.xhttp.readyState == 4) {
					if(this.xhttp.status == 200) {
						resolve(this.response());
					}
					else {
						reject(this.response());
					}
				}
			}
			
			//detect options based on data.
			if(!!data) {
				if(!this.options.contentType) {
					if(typeof data === "object") {
						this.options.contentType = "application/json";
					}
					else if(typeof data === "string") {
						this.options.contentType = "text/plain";
					}
				}
			} 
			
			this.xhttp.open(method, this.url, true);
			
			if(this.options.contentType)
				this.xhttp.setRequestHeader("Content-type", this.options.contentType);
			
			!!data ? this.xhttp.send(data) : this.xhttp.send();
		});
	}
	
	private response(): any {
		try {
			return JSON.parse(this.xhttp.response);
		} catch(e) {
			return this.xhttp.response;
		}
	}
  		
}

export {Ajax};