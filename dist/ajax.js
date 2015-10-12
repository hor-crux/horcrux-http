define(["require", "exports"], function (require, exports) {
    var Ajax = (function () {
        function Ajax(url, options) {
            this.url = url;
            this.options = {};
            this.xhttp = new XMLHttpRequest();
            if (!!options) {
                if (!!options.contentType)
                    this.options.contentType = options.contentType;
            }
        }
        Ajax.prototype.send = function (method, data) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.xhttp.onreadystatechange = function (_) {
                    if (_this.xhttp.readyState == 4) {
                        if (_this.xhttp.status == 200) {
                            resolve(_this.response());
                        }
                        else {
                            reject(_this.response());
                        }
                    }
                };
                if (!!data) {
                    if (!_this.options.contentType) {
                        if (typeof data === "object") {
                            _this.options.contentType = "application/json";
                        }
                        else if (typeof data === "string") {
                            _this.options.contentType = "text/plain";
                        }
                    }
                }
                if (_this.options.contentType)
                    _this.xhttp.setRequestHeader("Content-type", _this.options.contentType);
                _this.xhttp.open(method, _this.url, true);
                !!data ? _this.xhttp.send(data) : _this.xhttp.send();
            });
        };
        Ajax.prototype.response = function () {
            try {
                return JSON.parse(this.xhttp.response);
            }
            catch (e) {
                return this.xhttp.response;
            }
        };
        return Ajax;
    })();
    exports.Ajax = Ajax;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOlsiQWpheCIsIkFqYXguY29uc3RydWN0b3IiLCJBamF4LnNlbmQiLCJBamF4LnJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiO0lBRUE7UUFLQ0EsY0FBb0JBLEdBQVVBLEVBQUVBLE9BQW9CQTtZQUFoQ0MsUUFBR0EsR0FBSEEsR0FBR0EsQ0FBT0E7WUFGdEJBLFlBQU9BLEdBQWdCQSxFQUFFQSxDQUFDQTtZQUdqQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsY0FBY0EsRUFBRUEsQ0FBQ0E7WUFDbENBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO2dCQUNkQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxXQUFXQSxDQUFDQTtvQkFDeEJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFdBQVdBLEdBQUdBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBO1lBQ2pEQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUVNRCxtQkFBSUEsR0FBWEEsVUFBWUEsTUFBYUEsRUFBRUEsSUFBU0E7WUFBcENFLGlCQStCQ0E7WUE5QkFBLE1BQU1BLENBQUNBLElBQUlBLE9BQU9BLENBQUNBLFVBQUNBLE9BQU9BLEVBQUVBLE1BQU1BO2dCQUVsQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxVQUFBQSxDQUFDQTtvQkFDaENBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNoQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQzdCQSxPQUFPQSxDQUFDQSxLQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxDQUFDQTt3QkFDMUJBLENBQUNBO3dCQUNEQSxJQUFJQSxDQUFDQSxDQUFDQTs0QkFDTEEsTUFBTUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7d0JBQ3pCQSxDQUFDQTtvQkFDRkEsQ0FBQ0E7Z0JBQ0ZBLENBQUNBLENBQUFBO2dCQUVEQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDWEEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQzlCQSxFQUFFQSxDQUFBQSxDQUFDQSxPQUFPQSxJQUFJQSxLQUFLQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDN0JBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBLFdBQVdBLEdBQUdBLGtCQUFrQkEsQ0FBQ0E7d0JBQy9DQSxDQUFDQTt3QkFDREEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsT0FBT0EsSUFBSUEsS0FBS0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2xDQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxXQUFXQSxHQUFHQSxZQUFZQSxDQUFDQTt3QkFDekNBLENBQUNBO29CQUNGQSxDQUFDQTtnQkFDRkEsQ0FBQ0E7Z0JBRURBLEVBQUVBLENBQUFBLENBQUNBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBO29CQUMzQkEsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxjQUFjQSxFQUFFQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtnQkFFdkVBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLEtBQUlBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO2dCQUN4Q0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDcERBLENBQUNBLENBQUNBLENBQUNBO1FBQ0pBLENBQUNBO1FBRU9GLHVCQUFRQSxHQUFoQkE7WUFDQ0csSUFBSUEsQ0FBQ0E7Z0JBQ0pBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1lBQ3hDQSxDQUFFQTtZQUFBQSxLQUFLQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWEEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDNUJBLENBQUNBO1FBQ0ZBLENBQUNBO1FBRUZILFdBQUNBO0lBQURBLENBdERBLEFBc0RDQSxJQUFBO0lBRU8sWUFBSSxRQUZYO0lBRWEiLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zJztcclxuXHJcbmNsYXNzIEFqYXgge1xyXG5cdFxyXG5cdHByaXZhdGUgeGh0dHA6IFhNTEh0dHBSZXF1ZXN0O1xyXG5cdHByaXZhdGUgb3B0aW9uczogSHR0cE9wdGlvbnMgPSB7fTtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHVybDpzdHJpbmcsIG9wdGlvbnM/Okh0dHBPcHRpb25zKSB7XHJcblx0XHR0aGlzLnhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHRpZighIW9wdGlvbnMpIHtcclxuXHRcdFx0aWYoISFvcHRpb25zLmNvbnRlbnRUeXBlKVxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jb250ZW50VHlwZSA9IG9wdGlvbnMuY29udGVudFR5cGU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBzZW5kKG1ldGhvZDpzdHJpbmcsIGRhdGE/OmFueSk6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy54aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBfID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy54aHR0cC5yZWFkeVN0YXRlID09IDQpIHtcclxuXHRcdFx0XHRcdGlmKHRoaXMueGh0dHAuc3RhdHVzID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKHRoaXMucmVzcG9uc2UoKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KHRoaXMucmVzcG9uc2UoKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZighIWRhdGEpIHtcclxuXHRcdFx0XHRpZighdGhpcy5vcHRpb25zLmNvbnRlbnRUeXBlKSB7XHJcblx0XHRcdFx0XHRpZih0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm9wdGlvbnMuY29udGVudFR5cGUgPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zLmNvbnRlbnRUeXBlID0gXCJ0ZXh0L3BsYWluXCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IFxyXG5cdFx0XHRcclxuXHRcdFx0aWYodGhpcy5vcHRpb25zLmNvbnRlbnRUeXBlKVxyXG5cdFx0XHRcdHRoaXMueGh0dHAuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCB0aGlzLm9wdGlvbnMuY29udGVudFR5cGUpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy54aHR0cC5vcGVuKG1ldGhvZCwgdGhpcy51cmwsIHRydWUpO1xyXG5cdFx0XHQhIWRhdGEgPyB0aGlzLnhodHRwLnNlbmQoZGF0YSkgOiB0aGlzLnhodHRwLnNlbmQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHRwcml2YXRlIHJlc3BvbnNlKCk6IGFueSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnhodHRwLnJlc3BvbnNlKTtcclxuXHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy54aHR0cC5yZXNwb25zZTtcclxuXHRcdH1cclxuXHR9XHJcbiAgXHRcdFxyXG59XHJcblxyXG5leHBvcnQge0FqYXh9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
