interface IHttpRequest {
    get(); post(); put(); delete();
}

class CallbackRequester implements IHttpRequest {
    public get() { return 'get CallbackRequester'; }
    public post() { return 'post CallbackRequester'; }
    public put() { return 'put CallbackRequester'; }
    public delete() { return 'delete CallbackRequester'; }
}

class PromisseRequester implements IHttpRequest {
    public get() { return 'get PromisseRequester'; }
    public post() { return 'post PromisseRequester'; }
    public put() { return 'put PromisseRequester'; }
    public delete() { return 'delete PromisseRequester'; }
}

class ObservableRequester implements IHttpRequest {
    public get() { return 'get ObservableRequester'; }
    public post() { return 'post ObservableRequester'; }
    public put() { return 'put ObservableRequester'; }
    public delete() { return 'delete ObservableRequester'; }
}

interface IApi {
    get(); post(); put(); delete();
}

class Api implements IApi{
    requester : IHttpRequest;
    constructor(httpRequest: IHttpRequest){ //You only can accept this class
        this.requester = httpRequest;
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

let callback = new Api(new CallbackRequester());
console.log(callback.get(), callback.post(), callback.put(), callback.delete());
let promisse = new Api(new PromisseRequester());
console.log(promisse.get(), promisse.post(), promisse.put(), promisse.delete());
let observable = new Api(new ObservableRequester());
console.log(observable.get(), observable.post(), observable.put(), observable.delete());