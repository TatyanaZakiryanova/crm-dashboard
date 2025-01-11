import './styles/main.scss';

import { ChangeEvent, useEffect, useState } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import { Block } from './components/UI/Block';
import { Dropdown } from './components/UI/Dropdown';
import { Input } from './components/UI/Input';
import { Section } from './components/UI/Section';
import { Table } from './components/UI/Table';
import { TableRow, User } from './components/UI/Table/types';
import {
  filterUsers,
  formatDataForTable,
  sortTableData,
  sortUsers,
} from './components/UI/Table/utils';
import { DROPDOWN_OPTIONS, SECTION_ITEMS, SIDEBAR_CATEGORIES, TABLE_HEADERS } from './mocks/mocks';
import headerStyles from './styles/components/Header.module.scss';
import mainStyles from './styles/components/Main.module.scss';

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchTableValue, setSearchTableValue] = useState<string>('');
  const [currentOption, setCurrentOption] = useState(DROPDOWN_OPTIONS[0]);
  const [users, setUsers] = useState<TableRow[]>([]);
  const [originalUsers, setOriginalUsers] = useState<TableRow[]>([]);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/data.json');
      const data: User[] = await res.json();
      const formattedData = formatDataForTable(data);
      setOriginalUsers(formattedData);
      setUsers(formattedData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //эффект для поиска и сортировки
  useEffect(() => {
    let filteredUsers = [...originalUsers];
    if (searchTableValue.trim()) {
      filteredUsers = filterUsers(filteredUsers, searchTableValue);
    }
    if (currentOption.value) {
      filteredUsers = sortUsers(filteredUsers, currentOption.value);
    }
    if (sortColumn) {
      filteredUsers = sortTableData(filteredUsers, sortColumn, sortDirection);
    }
    setUsers(filteredUsers);
  }, [searchTableValue, originalUsers, currentOption, sortColumn, sortDirection]);

  const handleSort = (column: string) => {
    if (column === 'id') {
      return;
    }
    setCurrentOption(DROPDOWN_OPTIONS[0]);
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleDropdownChange = (option: { name: string; value: string }) => {
    setCurrentOption(option);
    setSortColumn(null);
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
          {isLoading ? (
            <div className={mainStyles.status}>Loading...</div>
          ) : (
            <Table
              headers={TABLE_HEADERS}
              rows={users}
              onSort={handleSort}
              sortColumn={sortColumn}
              sortDirection={sortDirection}
            />
          )}
        </Block>
      </div>
    </div>
  );
};

export default App;
