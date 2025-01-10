import { LayoutDashboard, LogOut, User } from 'lucide-react';
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

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
        <div className={styles.title}>
          <LayoutDashboard strokeWidth={1.5} size={35} />
          <div>Dashboard</div>
        </div>
        <div className={styles.content}>
          <div className={categoriesStyles.sidebarCategories}>
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => setActiveCategoryId(index)}
                className={`${categoriesStyles.item}  ${index === activeCategoryId ? categoriesStyles.active : ''}`}
              >
                {category.icon}
                {category.title}
              </div>
            ))}
          </div>
          <div className={footerStyles.footer}>
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
