export const enhanceAccordion = (root) => {
  if (!root) return undefined;
  const items = Array.from(root.querySelectorAll(".accordion-item"));
  const listeners = [];

  const toggleAccordion = (targetItem) => {
    const isActive = targetItem.classList.contains("active");
    items.forEach((item) => {
      item.classList.remove("active");
      const header = item.querySelector(".accordion-header");
      if (header) header.setAttribute("aria-expanded", "false");
    });
    if (!isActive) {
      targetItem.classList.add("active");
      const header = targetItem.querySelector(".accordion-header");
      if (header) header.setAttribute("aria-expanded", "true");
    }
  };

  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    if (!header) return;
    const onClick = () => toggleAccordion(item);
    const onKeyDown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleAccordion(item);
      }
    };
    header.addEventListener("click", onClick);
    header.addEventListener("keydown", onKeyDown);
    listeners.push({ header, onClick, onKeyDown });
  });

  return () => {
    listeners.forEach(({ header, onClick, onKeyDown }) => {
      header.removeEventListener("click", onClick);
      header.removeEventListener("keydown", onKeyDown);
    });
  };
};

export const enhanceToolkit = (root) => {
  if (!root) return undefined;
  const listeners = [];
  const searchInput = root.querySelector("#resourceSearch");
  const filterPills = Array.from(root.querySelectorAll(".filter-pill"));
  const formatDropdown = root.querySelector('.filter-dropdown[aria-label="Filter by format"]');
  const sortDropdown = root.querySelector('.filter-dropdown[aria-label="Sort resources"]');
  const resourceGrid = root.querySelector("#resourceGrid");

  const filterResources = (searchTerm) => {
    const cards = Array.from(root.querySelectorAll(".resource-card"));
    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(searchTerm) ? "" : "none";
    });
  };

  const filterByCategory = (category) => {
    const cards = Array.from(root.querySelectorAll(".resource-card"));
    cards.forEach((card) => {
      if (category === "all") {
        card.style.display = "";
        return;
      }
      const cardCategory = card
        .querySelector(".resource-category")
        ?.textContent.toLowerCase();
      if (cardCategory && cardCategory.includes(category.replace("-", " "))) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  };

  const filterByFormat = (format) => {
    const cards = Array.from(root.querySelectorAll(".resource-card"));
    cards.forEach((card) => {
      if (format === "all") {
        card.style.display = "";
        return;
      }
      const cardFormat = card.querySelector(".resource-format")?.textContent.toLowerCase();
      if (cardFormat && cardFormat.includes(format)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  };

  const sortResources = (sortBy) => {
    if (!resourceGrid) return;
    const cards = Array.from(resourceGrid.querySelectorAll(".resource-card"));
    cards.sort((a, b) => {
      if (sortBy === "alphabetical") {
        const titleA = a.querySelector(".resource-title")?.textContent || "";
        const titleB = b.querySelector(".resource-title")?.textContent || "";
        return titleA.localeCompare(titleB);
      }
      if (sortBy === "recent") {
        const dateA = a.querySelector(".resource-date")?.textContent || "";
        const dateB = b.querySelector(".resource-date")?.textContent || "";
        return dateB.localeCompare(dateA);
      }
      const popA = a.querySelector(".resource-popularity") ? 1 : 0;
      const popB = b.querySelector(".resource-popularity") ? 1 : 0;
      return popB - popA;
    });
    cards.forEach((card) => resourceGrid.appendChild(card));
  };

  if (searchInput) {
    const onInput = (event) => filterResources(event.target.value.toLowerCase());
    searchInput.addEventListener("input", onInput);
    listeners.push({ node: searchInput, type: "input", handler: onInput });
  }

  filterPills.forEach((pill) => {
    const onClick = () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      filterByCategory(pill.getAttribute("data-filter"));
    };
    pill.addEventListener("click", onClick);
    listeners.push({ node: pill, type: "click", handler: onClick });
  });

  if (formatDropdown) {
    const onChange = (event) => filterByFormat(event.target.value);
    formatDropdown.addEventListener("change", onChange);
    listeners.push({ node: formatDropdown, type: "change", handler: onChange });
  }

  if (sortDropdown) {
    const onChange = (event) => sortResources(event.target.value);
    sortDropdown.addEventListener("change", onChange);
    listeners.push({ node: sortDropdown, type: "change", handler: onChange });
  }

  return () => {
    listeners.forEach(({ node, type, handler }) => node.removeEventListener(type, handler));
  };
};
