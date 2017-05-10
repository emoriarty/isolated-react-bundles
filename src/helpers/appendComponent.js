function appendComponent(tag) {
  const mountedComponents = tag.getElementsByClassName('mounted-component');
  const div = document.createElement('div');
  div.className = 'mounted-component';
  div.id = `component-${mountedComponents.length + 1}`;
  return tag.appendChild(div);
}

export default appendComponent;
