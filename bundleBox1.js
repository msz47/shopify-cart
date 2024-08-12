const header = document.querySelector('.header');
const bundleBoxBtn = document.getElementById('bundle-box-div');
if(header && !bundleBoxBtn){
    // Create a new div element with id 'bundle-box-div'
  const div = document.createElement('div');
  div.id = 'bundle-box-div';
  
  const button = document.createElement('a');
  button.id = 'bundle-box-btn';
  button.textContent = 'Bundle box';
  button.href = '/apps/myapp?routeAction=bundleBox';

  button.style.padding = '20px 30px';
  button.style.borderRadius = '5px';
  button.style.backgroundColor = '#008060';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.textDecoration = 'none';
  button.style.display = 'inline-block';
  
  button.addEventListener('mouseover', function() {
      button.style.backgroundColor = '#006c4f'; 
  });
  button.addEventListener('mouseout', function() {
      button.style.backgroundColor = '#008060'; 
  });
  div.appendChild(button);
  header.appendChild(div);
}
