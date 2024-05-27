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
  
  const Repitems = [
   
    {
      navlabel: true,
      subheader: 'Insurance',
    },
    {
      id: uniqueId(),
      title: 'Claims',
      icon: IconPackage,
      chip: '2',
      chipColor: 'secondary',
      href: '/claims-rep',
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
  
  export default Repitems;
  