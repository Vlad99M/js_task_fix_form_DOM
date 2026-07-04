"use strict";var inputs=document.querySelectorAll("input");inputs.forEach(function(e){var t=document.createElement("label");t.className="field-label",t.htmlFor=e.id;var r=e.name.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()});t.textContent=r,e.placeholder=r,e.parentElement.insertBefore(t,e)});
//# sourceMappingURL=js_task_fix_form_DOM.206ace1e.js.map
