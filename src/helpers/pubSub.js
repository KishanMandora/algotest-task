function pubSub() {
  let observer = new Map();

  const subscribe = (eventName, fn) => {
    observer.set(eventName, fn);
  };

  const publish = (eventName, data) => {
    const func = observer.get(eventName);
    func(data);
  };

  return { subscribe, publish };
}

export const toastPubSub = pubSub();
