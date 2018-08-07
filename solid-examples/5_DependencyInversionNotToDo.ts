class HttpRequesterN {
    public get() { return 'get HttpRequestN'; }
    public post() { return 'post HttpRequestN'; }
    public put() { return 'put HttpRequestN'; }
    public delete() { return 'delete HttpRequestN'; }
}

class AjaxHttpRequest extends HttpRequesterN {
    public get() { return 'get AjaxHttpRequest'; }
    public post() { return 'post AjaxHttpRequest'; }
    public put() { return 'put AjaxHttpRequest'; }
    public delete() { return 'delete AjaxHttpRequest'; }
}

interface IApiN {
    get(); post(); put(); delete();
}

class ApiN implements IApiN {
    requester : HttpRequesterN;
    requesterWorstWayHttp : HttpRequesterN;
    requesterWorstWayAjax : AjaxHttpRequest;
    constructor(httpRequest: HttpRequesterN){ //You only can accept this class or class that extends from it
        this.requester = httpRequest;

        //Making it could be worst than make the line above, first you have to declare differents variables and you not be able to do unitTests
        this.requesterWorstWayHttp = new HttpRequesterN();
        this.requesterWorstWayAjax = new AjaxHttpRequest();
    }

    get() {
        return this.requester.get();
    }
    post() {
        return this.requester.post();
    }
    put() {
        return this.requester.put();
    }
    delete() {
        return this.requester.delete();
    }
}

let httpRequester = new ApiN(new HttpRequesterN());
console.log(httpRequester.get(), httpRequester.post(), httpRequester.put(), httpRequester.delete());

let ajaxHttpRequest = new ApiN(new AjaxHttpRequest());
console.log(ajaxHttpRequest.get(), ajaxHttpRequest.post(), ajaxHttpRequest.put(), ajaxHttpRequest.delete());