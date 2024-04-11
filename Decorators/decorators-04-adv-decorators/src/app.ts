function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const p = new constructor();
    const htmlEl = document.getElementById(hookId);
    if (htmlEl) {
      htmlEl.innerHTML = template;
      htmlEl.querySelector('h2')!.textContent = p.name;
    }
  }
}

@WithTemplate('<h1>The template</h1>\n<h2>John</h2>', 'app')
class Person {
  name = 'Stan';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
