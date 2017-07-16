import { Injectable} from '@angular/core';

import * as Ws from './phoenix.js';
import { Channel } from './channel.server';

@Injectable()
export class Socket {
    socket;

    constructor() {
    }

    public connect(url: string, options: any = {}): void {
        this.socket = new Ws.Socket(url, options);
        this.socket.connect();
    }

    public channel(topic: string, options: any = {}): Channel {
        return new Channel(topic, options, this.socket);
    }

}