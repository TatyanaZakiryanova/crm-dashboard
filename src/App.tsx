import './styles/main.scss';

import { ChangeEvent, useState } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import { Block } from './components/UI/Block';
import { Input } from './components/UI/Input';
import { Section } from './components/UI/Section';
import { SECTION_ITEMS, SIDEBAR_CATEGORIES } from './mocks/mocks';
import headerStyles from './styles/components/Header.module.scss';

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div className="layout">
      <Sidebar categories={SIDEBAR_CATEGORIES} />
      <div className="mainBlock">
        <div className={headerStyles.titleBlock}>
          <div className={headerStyles.title}>Hello, Username!</div>
          <Input
            id="search"
            name="search"
            value={searchValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
            size="large"
            className={headerStyles.headerInput}
          />
        </div>
        <Section items={SECTION_ITEMS} />
        <Block>Content-block</Block>
      </div>
    </div>
  );
};

export default App;
