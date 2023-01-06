// Import only the Bootstrap components you need
import { Dropdown } from 'bootstrap';

// Create a dropdown
document.querySelectorAll('.dropdown-toggle').forEach((dropdown) => {
  new Dropdown(dropdown);
});
