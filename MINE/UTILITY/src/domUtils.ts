export function addGlobalEventListener(
  type: keyof DocumentEventMap,
  selector: string,
  callback: Function,
  options: boolean | AddEventListenerOptions,
  parent: Document = document
) {
  parent.addEventListener(
    type,
    (e) => {
      if ((<HTMLElement>e.target).matches(selector)) {
        callback(e);
      }
    },
    options
  );
}

export function qs(selector: string, parent: Document = document): Element {
  return parent.querySelector(selector);
}

export function qsa(selector: string, parent: Document = document): Element[] {
  let elements: NodeListOf<Element> = parent.querySelectorAll(selector);
  return Array.from(elements); // new syntax can be destructuring [...elements]
}

export function create() {
  console.log("create a new element, should be created...");
}
