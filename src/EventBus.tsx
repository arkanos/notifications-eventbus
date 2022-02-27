const eventBus = {
    on(event: any, callback: (arg0: any) => void) {
      document.addEventListener(event, (e: any) => callback(e.detail));
    },
    dispatch(event: any, data: any) {
      document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
    remove(event: string, callback: (arg0: any) => void) {
      document.removeEventListener(event, callback);
    },
  };
  
  export default eventBus;