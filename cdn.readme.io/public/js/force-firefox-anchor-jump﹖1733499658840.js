/**
 * FORCE FIREFOX TO JUMP TO THE URL ANCHOR ELEMENT
 * ---
 * @todo This is a crap solution. We should figure
 *       out and fix the underlying cause, and get
 *       rid of this hack entirely...
 */
const isFirefox = navigator.userAgent.indexOf('Firefox') !== -1;
if (isFirefox) {
  window.addEventListener(
    'pageshow' /* after the page is loaded */,
    function () {
      const elId = window.location.hash;
      if (elId.length > 1) {
        const el = document.getElementById(elId.substr(1));
        if (el) el.scrollIntoView(true);
      }
    },
    { once: true },
  );
}
