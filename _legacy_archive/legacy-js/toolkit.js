// Toolkit Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Resource search functionality
  const searchInput = document.getElementById('resourceSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      filterResources(searchTerm);
    });
  }

  // Filter pills functionality
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', function() {
      // Remove active class from all pills
      filterPills.forEach(p => p.classList.remove('active'));
      // Add active class to clicked pill
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');
      filterByCategory(filter);
    });
  });

  // Format dropdown functionality
  const formatDropdown = document.querySelector('.filter-dropdown[aria-label="Filter by format"]');
  if (formatDropdown) {
    formatDropdown.addEventListener('change', function() {
      const format = this.value;
      filterByFormat(format);
    });
  }

  // Sort dropdown functionality
  const sortDropdown = document.querySelector('.filter-dropdown[aria-label="Sort resources"]');
  if (sortDropdown) {
    sortDropdown.addEventListener('change', function() {
      const sortBy = this.value;
      sortResources(sortBy);
    });
  }
});

// Filter resources by search term
function filterResources(searchTerm) {
  const resourceCards = document.querySelectorAll('.resource-card');
  resourceCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Filter by category
function filterByCategory(category) {
  const resourceCards = document.querySelectorAll('.resource-card');
  resourceCards.forEach(card => {
    if (category === 'all') {
      card.style.display = '';
    } else {
      const cardCategory = card.querySelector('.resource-category')?.textContent.toLowerCase();
      if (cardCategory && cardCategory.includes(category.replace('-', ' '))) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    }
  });
}

// Filter by format
function filterByFormat(format) {
  const resourceCards = document.querySelectorAll('.resource-card');
  resourceCards.forEach(card => {
    if (format === 'all') {
      card.style.display = '';
    } else {
      const cardFormat = card.querySelector('.resource-format')?.textContent.toLowerCase();
      if (cardFormat && cardFormat.includes(format)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    }
  });
}

// Sort resources
function sortResources(sortBy) {
  const resourceGrid = document.getElementById('resourceGrid');
  const resourceCards = Array.from(resourceGrid.querySelectorAll('.resource-card'));
  
  resourceCards.sort((a, b) => {
    if (sortBy === 'alphabetical') {
      const titleA = a.querySelector('.resource-title')?.textContent || '';
      const titleB = b.querySelector('.resource-title')?.textContent || '';
      return titleA.localeCompare(titleB);
    } else if (sortBy === 'recent') {
      // Sort by date (most recent first)
      const dateA = a.querySelector('.resource-date')?.textContent || '';
      const dateB = b.querySelector('.resource-date')?.textContent || '';
      return dateB.localeCompare(dateA);
    } else {
      // Sort by popularity (most used first)
      const popA = a.querySelector('.resource-popularity') ? 1 : 0;
      const popB = b.querySelector('.resource-popularity') ? 1 : 0;
      return popB - popA;
    }
  });
  
  // Re-append sorted cards
  resourceCards.forEach(card => resourceGrid.appendChild(card));
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
  // Tab navigation for filter pills
  if (e.key === 'Enter' && e.target.classList.contains('filter-pill')) {
    e.target.click();
  }
});

