import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes, FaPlus, FaCar } from 'react-icons/fa';
import { BsFillCarFrontFill, BsSpeedometer2 } from 'react-icons/bs';
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { BiSolidContact } from 'react-icons/bi';
import { MdInventory, MdSell } from 'react-icons/md';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/admin',
      icon: <BsSpeedometer2 className="text-xl" />,
    },
    {
      title: 'Inventory',
      path: '/admin/inventory',
      icon: <MdInventory className="text-xl" />,
      submenu: [
        {
          title: 'All Cars',
          path: '/admin/inventory/all',
          icon: <FaCar className="text-xl" />
        },
        {
          title: 'Add New Car',
          path: '/admin/inventory/add',
          icon: <FaPlus className="text-xl" />
        },
      ],
    },
  ];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = (item, index) => {
    if (item.submenu) {
      toggleSubmenu(index);
    } else {
      navigate(item.path);
      handleSubMenuCloseBar();
    }
  };
  // functions to handle close side bar for under 500 px size
  const handleSubMenuCloseBar = () => {
    if (windowWidth < 500) {
      setSidebarOpen(!isSidebarOpen);
    }
  }
  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);

  };

  return (
    <div className="relative flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Overlay for smaller screens */}
      {isSidebarOpen && windowWidth < 700 && (
        <div
          className="fixed inset-0 bg-black opacity-20 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`${isSidebarOpen && windowWidth < 700 ? 'fixed h-full z-50' : ''
          } ${isSidebarOpen ? 'w-64' : 'w-0'
          } transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg overflow-hidden`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b dark:border-gray-700">
          <Link
            to="/admin"
            className={`${!isSidebarOpen && 'hidden'
              } text-xl font-bold text-blue-600 dark:text-blue-400`}
          >
            Admin Panel
          </Link>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg mr-3 sm:hidden"
          >
            <FaBars className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-4 px-2">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-2">
              <button
                onClick={() => handleMenuClick(item, index)}
                className={`${location.pathname === item.path
                  ? 'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  } w-full flex items-center px-4 py-2 rounded-lg transition-colors`}
              >
                <span className="text-xl">{item.icon}</span>

                {isSidebarOpen && (
                  <>
                    <span className="ml-3">{item.title}</span>
                    {item.submenu && (
                      <span className="ml-auto">
                        <svg
                          className={`w-4 h-4 transition-transform ${activeSubmenu === index ? 'rotate-180' : ''
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    )}
                  </>
                )}
              </button>

              {/* Submenu */}
              {isSidebarOpen && item.submenu && activeSubmenu === index && (
                <div className="ml-8 mt-2 space-y-2">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      onClick={() => handleSubMenuCloseBar()}
                      key={subIndex}
                      to={subItem.path}
                      className={`${location.pathname === subItem.path
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400'
                        } block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">{subItem.icon}</span>
                        <span>{subItem.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col overflow-hidden ${!isSidebarOpen && 'ml-0'}`}>
        {/* Header */}
        <header className="h-16 bg-white dark:bg-gray-800 shadow-md">
          <div className="flex items-center justify-between h-full px-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg mr-3"
            >
              <FaBars className="text-gray-600 dark:text-gray-300" />
            </button>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? (
                  <FaSun className="text-yellow-400 text-xl" />
                ) : (
                  <FaMoon className="text-gray-700 text-xl" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main
          className={`flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
