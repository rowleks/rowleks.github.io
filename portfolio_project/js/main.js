// hamburger menu

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  // Animated texts
  
  document.addEventListener('DOMContentLoaded', function() {
    const elementsToType = [
      { element: document.getElementById('intro'), content: 'Hello, I\'m' },
      { element: document.getElementById('name'), content: 'Rowland Momoh' },
      { element: document.getElementById('job-title'), content: '' }, // This will be updated dynamically
      // Add more elements as needed
    ];
  
    const jobTitles = [
      'Web Developer, ',
      'Front-End Engineer, ',
      'UI/UX Designer, ',
      'IT Support Specialist',
      // Add more job titles as needed
    ];
  
    function typeWriter(element, text, i, callback) {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
          typeWriter(element, text, i, callback);
        }, 50); // Adjust the speed by changing the timeout value
      } else {
        callback();
      }
    }
  
    function startTyping() {
      function animateTypewriter(index) {
        if (index < elementsToType.length) {
          const currentElement = elementsToType[index].element;
  
          if (currentElement.id === 'job-title') {
            // If the element is the job title, update the content dynamically
            for (let i = 0; i < jobTitles.length; i++) {
              setTimeout(function() {
                elementsToType[index].content = jobTitles[i];
                typeWriter(currentElement, jobTitles[i], 0, function() {
                  setTimeout(function() {
                    animateTypewriter(index + 1);
                  }, 1000); // Adjust the pause before typing the next job title
                });
              }, i * 2000); // Adjust the delay before typing each job title
            }
          } else {
            // If it's not the job title, proceed with typing
            const currentContent = elementsToType[index].content;
            typeWriter(currentElement, currentContent, 0, function() {
              setTimeout(function() {
                animateTypewriter(index + 1);
              }, 1000); // Adjust the pause before typing the next phrase
            });
          }
        }
      }
  
      animateTypewriter(0);
    }
  
    startTyping();
  });
  