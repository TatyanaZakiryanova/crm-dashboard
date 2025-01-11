import { Bolt, LogOut, User } from 'lucide-react';
import { useState } from 'react';

import { Button } from '../UI/Button';
import categoriesStyles from './Categories.module.scss';
import footerStyles from './Footer.module.scss';
import styles from './Sidebar.module.scss';

interface SidebarItem {
  title: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  categories: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ categories }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<number>(2);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className={`${styles.sidebarContainer} ${isSidebarOpen ? styles.open : ''}`}>
      <div className={styles.sidebar}>
        <div className={styles.title}>
          <div className={styles.appIcon} onClick={toggleSidebar}>
            <Bolt size={40} strokeWidth={1.5} />
          </div>
          <div className={styles.appTitle}>Dashboard</div>
        </div>
        <div className={styles.content}>
          <div className={categoriesStyles.sidebarCategories}>
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => setActiveCategoryId(index)}
                className={`${categoriesStyles.item}  ${index === activeCategoryId ? categoriesStyles.active : ''}`}
              >
                <div className={categoriesStyles.icon}>{category.icon}</div>
                <div className={!isSidebarOpen ? categoriesStyles.showTitle : ''}>
                  {category.title}
                </div>
              </div>
            ))}
          </div>
          <div className={`${footerStyles.footer}  ${isSidebarOpen ? footerStyles.open : ''}`}>
            <div className={footerStyles.user}>
              <User size={40} />
              <div className={footerStyles.userInform}>
                <span className={footerStyles.username}>Username</span>
                <span className={footerStyles.userDescription}>Project Manager</span>
              </div>
            </div>
            <Button className={footerStyles.button}>
              <LogOut strokeWidth={1.5} />
              Sign out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
