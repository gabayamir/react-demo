type EventCallback<TArgs> = (args: TArgs) => void;

class EventBinding<TArgs>
{
    _callbacksList : CallbacksList<TArgs>;
    _callback: EventCallback<TArgs>;

    constructor (callbacksList : CallbacksList<TArgs>, callback : EventCallback<TArgs>) {
        this._callbacksList = callbacksList;
        this._callback = callback;
    }

    unbind () : void {

    }
}

class CallbacksList<TArgs>
{
    private _listeners : Array<EventCallback<TArgs>>;

    push (callback : EventCallback<TArgs>) : void {

    }

    remove (callback: EventCallback<TArgs>) : void {

    }

    forEach (iterator : (callback : EventCallback<TArgs>) => void) : void {

        this._listeners.forEach(function (callback) {
            iterator(callback);
        })

    }
}

interface ISimpleEvent<TArgs>
{

}

export class SimpleEvent<TArgs> implements ISimpleEvent<TArgs>
{
    private _listeners : CallbacksList<TArgs>;

    bind (callback : EventCallback<TArgs>) : EventBinding<TArgs> {
        this._listeners.push(callback);

        return new EventBinding(this._listeners, callback);
    }

    fire (args : TArgs) : void {
        this._listeners.forEach(function (callback) {
            callback(args);
        })
    }

    static create<TArgs> () : ISimpleEvent<TArgs> {
        return new SimpleEvent<TArgs>()
    }
}