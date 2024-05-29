import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconAlertCircle,
  IconNotes,
  IconCalendar,
  IconMail,
  IconTicket,
  IconEdit,
  IconGitMerge,
  IconCurrencyDollar,
  IconApps,
  IconFileDescription,
  IconFileDots,
  IconFiles,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconBorderAll,
  IconBorderHorizontal,
  IconBorderInner,
  IconBorderVertical,
  IconBorderTop,
  IconUserCircle,
  IconPackage,
  IconMessage2,
  IconBasket,
  IconChartLine,
  IconChartArcs,
  IconChartCandle,
  IconChartArea,
  IconChartDots,
  IconChartDonut3,
  IconChartRadar,
  IconLogin,
  IconUserPlus,
  IconRotate,
  IconBox,
  IconHelp,
  IconBoxAlignBottom,
  IconBoxAlignLeft,
  IconLayout,
  IconZoomCode,
  IconSettings,
  IconBorderStyle2,
  IconAppWindow,
  IconLockAccess,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Ecommerce',
  },


  {
    id: uniqueId(),
    title: 'Shop',
    icon: IconBasket,
    href: 'shop',
  },
  {
    id: uniqueId(),
    title: 'Shop Profile',
    icon: IconBox,
    href: '/user-profile',
  },
  {
    navlabel: true,
    subheader: 'Insurance',
  },
  {
    id: uniqueId(),
    title: 'Contracts',
    icon: IconPackage,
    
    chipColor: 'secondary',
    href: 'face-reco',
  },

  {
    id: uniqueId(),
    title: 'Claims',
    icon: IconChartDonut3,
    href: '/claims',
  },
  {
    navlabel: true,
    subheader: 'Me',
  },
  
  {
    id: uniqueId(),
    title: 'Chats',
    icon: IconMessage2,
    href: '/apps/chats',
  },
  {
    id: uniqueId(),
    title: 'Account Setting',
    icon: IconUserCircle,
    href: '/pages/account-settings',
  },
 
];

export default Menuitems;
