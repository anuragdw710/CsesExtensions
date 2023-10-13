chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "runCode") {
        const div = document.querySelector('div.content');

        const ulElements = div.querySelectorAll('ul.task-list');
        ulElements.forEach(ul => {
        
          const liElements = Array.from(ul.querySelectorAll('li.task'));
          liElements.sort((a, b) => {
        
            const spanA = a.querySelector('span.detail');
        
            const spanB = b.querySelector('span.detail');
        
            const dataA = parseInt(spanA.textContent.trim().split(' / ')[0]);
        
            const dataB = parseInt(spanB.textContent.trim().split(' / ')[0]);
        
            return dataA - dataB;
        
          });
          liElements.forEach(li => ul.appendChild(li));
        
        });
    }
  });
  