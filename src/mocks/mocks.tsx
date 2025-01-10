import {
  BadgePercent,
  Box,
  HandCoins,
  KeyRound,
  MessageCircleQuestion,
  Monitor,
  SquareUser,
  UserCheck,
  Users,
} from 'lucide-react';

export const SIDEBAR_CATEGORIES = [
  {
    title: 'Dashboard',
    icon: <KeyRound size={20} />,
  },
  {
    title: 'Product',
    icon: <Box size={20} />,
  },
  {
    title: 'Customers',
    icon: <SquareUser size={20} />,
  },
  {
    title: 'Income',
    icon: <HandCoins size={20} />,
  },
  {
    title: 'Promote',
    icon: <BadgePercent size={20} />,
  },
  {
    title: 'Help',
    icon: <MessageCircleQuestion size={20} />,
  },
];

export const SECTION_ITEMS = [
  { title: 'Customers', icon: <Users size={40} />, value: '5,423' },
  { title: 'Members', icon: <UserCheck size={40} />, value: '1,893' },
  { title: 'Active Now', icon: <Monitor size={40} />, value: '189' },
];

export const DROPDOWN_OPTIONS = [
  { name: 'Newest', value: 'newest' },
  { name: 'Oldest', value: 'oldest' },
];
