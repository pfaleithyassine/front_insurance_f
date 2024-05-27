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
  
  const Assuritems = [
    {
      navlabel: true,
      subheader: 'Ecommerce',
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
      title: 'Client',
      icon: IconPackage,
      chip: '2',
      chipColor: 'secondary',
      href: '/client-ins',
    },
  
    {
      id: uniqueId(),
      title: 'Claims',
      icon: IconChartDonut3,
      href: '/claims-ins',
    },
    {
      navlabel: true,
      subheader: 'Me',
    },
    {
      id: uniqueId(),
      title: 'Our Contract',
      icon: IconMessage2,
      href: '/contrat-type',
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
  
  export default Assuritems;
  