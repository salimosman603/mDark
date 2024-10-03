document.addEventListener('DOMContentLoaded', function() {
  const donePaymentBtn = document.getElementById('done-payment-btn');
  const screenshotUpload = document.getElementById('screenshot-upload');
  const successMessage = document.getElementById('success-message');

  // Function to handle the done with payment action
donePaymentBtn.addEventListener('click', function() {
  if (screenshotUpload.files.length > 0) {
    // Change button color to green
    donePaymentBtn.style.backgroundColor = 'green';
    successMessage.style.display = 'block';

    // Update success message content
    successMessage.innerHTML = `
      <h3>Payment successful! ✔️</h3>
      <p>Upon verification of your payment, your account will be updated accordingly.</p>
      <p>Please note: If you encounter any issues, please contact us at kalibra0@gmail.com.</p>
    `;

    // Refresh the page after 10 seconds
    setTimeout(() => {
      location.reload();
    }, 10000);
  } else {
    alert('Please upload a screenshot to proceed.');
  }
});

  // Function to handle changes in the screenshot upload
  screenshotUpload.addEventListener('change', function() {
    if (screenshotUpload.files.length > 0) {
      donePaymentBtn.style.backgroundColor = 'green'; // Change color to green
      donePaymentBtn.disabled = false; // Enable the button
    } else {
      donePaymentBtn.style.backgroundColor = 'red'; // Reset color to red
      donePaymentBtn.disabled = true; // Disable the button
    }
  });

  // Initialize button state
  donePaymentBtn.disabled = true; // Disable initially

  // Show payment popup after making payment
  document.getElementById('make-payment-btn').addEventListener('click', function() {
    const amount = document.getElementById('funds-amount').value;
    if (amount) {
      document.getElementById('funds-popup').style.display = 'none'; // Hide funds popup
      document.getElementById('payment-popup').style.display = 'block'; // Show payment popup
    } else {
      alert('Please enter an amount.');
    }
  });

  // Hide payment popup when clicking outside
  window.addEventListener('click', function(event) {
    const popup = document.getElementById('payment-popup');
    if (!popup.contains(event.target) && event.target !== document.getElementById('make-payment-btn')) {
      popup.style.display = 'none';
    }
  });

  // Function to show funds popup
  function showFundsPopup() {
    document.getElementById('funds-popup').style.display = 'block';
  }

  // Event listener for Add Funds button
  document.getElementById('add-funds-btn').addEventListener('click', showFundsPopup);

  // Function to toggle dropdown menu
  function toggleDropdownMenu(event) {
    event.stopPropagation(); // Prevents the click from bubbling up to the window
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }

  // Event listener for the dropdown icon
  document.getElementById('logo-dropdown').addEventListener('click', toggleDropdownMenu);

  // Hide dropdown when clicking outside
  window.addEventListener('click', () => {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.style.display = 'none';
  });

  // Marquee messages
  const marquees = [
    "sal***03| Deposited <span class='bonus'>$210</span>, got <span class='bonus'>25% Bonus</span>",
    "ste***00| Deposited <span class='bonus'>$210</span>, got <span class='bonus'>25% Bonus</span>",
    "far***4k| Deposited <span class='bonus'>$210</span>, got <span class='bonus'>25% Bonus</span>",
    "mrd***rk| Deposited <span class='bonus'>$210</span>, got <span class='bonus'>25% Bonus</span>",
    "jok***er| Deposited <span class='bonus'>$210</span>, got <span class='bonus'>25% Bonus</span>",
  ];

  // Randomly select a marquee message
  const randomMarquee = marquees[Math.floor(Math.random() * marquees.length)];
  document.getElementById('marquee-container').innerHTML = `<marquee class="moving-text" direction="left" scrollamount="5">${randomMarquee}</marquee>`;

  // Function to toggle popup menu
  function toggleMenu() {
    const menu = document.getElementById('popup-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    menu.style.position = 'absolute'; 
    menu.style.top = '50%'; 
    menu.style.left = '50%'; 
    menu.style.transform = 'translate(-50%, -50%)'; 
  }

  // Event listeners
  document.getElementById('more-btn').addEventListener('click', toggleMenu);

  window.addEventListener('click', (event) => {
    const menu = document.getElementById('popup-menu');
    if (!event.target.matches('#more-btn') && !menu.contains(event.target)) {
      menu.style.display = 'none';
    }
  });

  // Button click handlers for navigation
  document.getElementById('cards-btn').onclick = function() {
    window.location.href = 'cards.html'; // Replace with your actual link
  };

  document.getElementById('fullz-btn').onclick = function() {
    window.location.href = 'fullz.html'; // Replace with your actual link
  };
  
  document.getElementById("logout-btn").addEventListener("click", function() {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out!");
    window.location.href = "form.html"; // Redirect to login page
});
});