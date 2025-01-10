import './styles/main.scss';

import { ChangeEvent, useState } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import { Block } from './components/UI/Block';
import { Input } from './components/UI/Input';
import { Section } from './components/UI/Section';
import { DROPDOWN_OPTIONS, SECTION_ITEMS, SIDEBAR_CATEGORIES } from './mocks/mocks';
import headerStyles from './styles/components/Header.module.scss';
import mainStyles from './styles/components/Main.module.scss';
import { Dropdown } from './components/UI/Dropdown';

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchTableValue, setSearchTableValue] = useState<string>('');
  const [currentOption, setCurrentOption] = useState(DROPDOWN_OPTIONS[0]);

  const handleDropdownChange = (option: { name: string; value: string }) => {
    setCurrentOption(option);
  };

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
        <Block className={mainStyles.mainBlock}>
          <div className={mainStyles.top}>
            <div className={mainStyles.topTitle}>All customers</div>
            <div className={mainStyles.topElements}>
              <Input
                id="search"
                name="search"
                value={searchTableValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTableValue(e.target.value)}
                size="large"
                className={mainStyles.searchInput}
              />
              <Dropdown
                options={DROPDOWN_OPTIONS}
                currentOption={currentOption}
                handleOption={handleDropdownChange}
                label="Sort by"
                className={mainStyles.dropdown}
              />
            </div>
          </div>
        </Block>
      </div>
    </div>
  );
};

export default App;
