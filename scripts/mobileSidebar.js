const mobileSidebarElements = {
  layout: document.querySelector('.dashboard-layout'),
  menuButton: document.getElementById('mobileMenuBtn'),
  sidebar: document.getElementById('dashboardSidebar'),
  overlay: document.getElementById('sidebarOverlay')
};

function setMobileSidebarOpen(isOpen) {
  const { layout, menuButton } = mobileSidebarElements;

  if (!layout || !menuButton) {
    return;
  }

  layout.classList.toggle('sidebar-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
}

function closeMobileSidebar() {
  setMobileSidebarOpen(false);
}

function toggleMobileSidebar() {
  const { layout } = mobileSidebarElements;

  if (!layout) {
    return;
  }

  setMobileSidebarOpen(!layout.classList.contains('sidebar-open'));
}

function handleMobileSidebarResize() {
  if (window.innerWidth > 768) {
    closeMobileSidebar();
  }
}

if (mobileSidebarElements.menuButton) {
  mobileSidebarElements.menuButton.addEventListener('click', toggleMobileSidebar);
}

if (mobileSidebarElements.overlay) {
  mobileSidebarElements.overlay.addEventListener('click', closeMobileSidebar);
}

if (mobileSidebarElements.sidebar) {
  mobileSidebarElements.sidebar.querySelectorAll('.nav-item').forEach((navItem) => {
    navItem.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeMobileSidebar();
      }
    });
  });
}

window.addEventListener('resize', handleMobileSidebarResize);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMobileSidebar();
  }
});