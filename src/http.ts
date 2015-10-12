class Ajax {
	
	private xhttp: XMLHttpRequest;
	
	constructor(private url:string) {
		this.xhttp = new XMLHttpRequest();
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
			
			this.xhttp.open(method, this.url, true);
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

let METHOD = {
	GET: "GET",
	POST: "POST",
	PUT: "PUT",
	DELETE: "DELETE",
	PATCH: "PATCH"

}
class Http {
	
	static get(url:string): Promise<any> {
		return new Ajax(url).send(METHOD.GET);
	}
	
	static post(url:string, data?:any): Promise<any> {
		return new Ajax(url).send(METHOD.POST, data);
	}
	
	static put(url:string, data?:any): Promise<any> {
		return new Ajax(url).send(METHOD.PUT, data);
	}
	
	static delete(url:string, data?:any): Promise<any> {
		return new Ajax(url).send(METHOD.DELETE, data);
	}
	
	static patch(url:string, data?:any): Promise<any> {
		return new Ajax(url).send(METHOD.PATCH, data);
	}
	
	
	
}

export {Http}