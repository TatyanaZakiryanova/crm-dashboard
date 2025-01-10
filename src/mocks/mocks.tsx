import {
  BadgePercent,
  Box,
  HandCoins,
  KeyRound,
  MessageCircleQuestion,
  SquareUser,
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
