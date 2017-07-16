import * as Rx from 'rxjs';

export class Channel {
    channel: any;

    constructor(private topic: string, private options: Object = {}, private socket: any) {
        this.channel = socket.channel(topic, options);
    }

    public join() {
        let join = this.channel.join();
        let observable = Rx.Observable.create((observer) => {
                join
                .receive("ok", ({messages}) => observer.next({status: "ok", payload: messages}))
                .receive("error", ({reason}) => observer.next({status: "error", payload: reason}))
                .receive("timeout", () => observer.next({status: "network problem, still waiting", payload: null}))
        });
        return observable.share();
    }

    public observe(event: string) {
        let observable = Rx.Observable.create((observer) => {
             this.channel.on(event, (data) => observer.next(data))                   
        });
        return observable.share();
    }

    public request(event: string, args = {}){
        let observable = Rx.Observable.create((observer) => {
            this.channel.push(event, {data: args})
                .receive("ok", ( {data} ) => observer.next( {status: "ok", payload: data} ))
                .receive("error", ( {reason} ) => observer.next( {status: "error", payload: reason} ))
                .receive("timeout", () => observer.next( {status: "network problem, still waiting", payload: null} ))
        });
        return observable.share();
    }

}