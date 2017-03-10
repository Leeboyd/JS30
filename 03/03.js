const inputs = document.querySelectorAll('.controls input');
function updateStyle() {
  // #1 HTMLElement.dataset:
  // allow us to access custom data attributes (data-*) set on the element
  // It is a [object DOMStringMap], one entry for each custom data attribute.
  // Note that the dataset property itself can be read, but not directly written.

  // #2 with default value declaration
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach(input => input.addEventListener('change', updateStyle));
