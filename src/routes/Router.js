import React, { createContext, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import App from 'src/App';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from 'src/store/auth';
import Spinner from "react-bootstrap/Spinner";
import ClaimsIns from '../views/Insurapp/Claimsins/ClaimsIns';
import ClientIns from 'src/views/Insurapp/Clientins/ClientIns';
import OrderList from 'src/views/Sellapp/Orders/OrderList';
import Products from 'src/views/Sellapp/products/Products';
import ClientSell from 'src/views/Sellapp/Client/SellClientList';
import Contract_Type from 'src/views/Insurapp/Contrattype/ContartTyp';
import Claimsrep from 'src/views/Repairapp/Claimsrep';
import ContratAll from 'src/views/Clientapp/Contrat/ContratAll';
import CameraComponent from 'src/views/camera/CameraComponent';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages and Components***** */
const ModernDash = Loadable(lazy(() => import('../views/dashboard/Modern')));
const EcommerceDash = Loadable(lazy(() => import('../views/dashboard/Ecommerce')));
const Chats = Loadable(lazy(() => import('../views/apps/chat/Chat')));
const Claims = Loadable(lazy(() => import('../views/Clientapp/Claims/Claims')));
const Calendar = Loadable(lazy(() => import('../views/apps/calendar/BigCalendar')));
const Email = Loadable(lazy(() => import('../views/apps/email/Email')));
const Blog = Loadable(lazy(() => import('../views/apps/blog/Blog')));
const BlogDetail = Loadable(lazy(() => import('../views/apps/blog/BlogPost')));
const Tickets = Loadable(lazy(() => import('../views/Insurapp/Claimsins/ClaimsIns')));
const Contrat = Loadable(lazy(() => import('../views/Clientapp/Contrat/Contrats')));
const Ecommerce = Loadable(lazy(() => import('../views/apps/eCommerce/Ecommerce')));
const EcommerceDetail = Loadable(lazy(() => import('../views/apps/eCommerce/EcommerceDetail')));
const EcomProductList = Loadable(lazy(() => import('../views/apps/eCommerce/EcomProductList')));
const EcomProductCheckout = Loadable(lazy(() => import('../views/apps/eCommerce/EcommerceCheckout')));
const UserProfile = Loadable(lazy(() => import('../views/apps/user-profile/UserProfile')));
const Followers = Loadable(lazy(() => import('../views/apps/user-profile/Followers')));
const Friends = Loadable(lazy(() => import('../views/apps/user-profile/Friends')));
const Gallery = Loadable(lazy(() => import('../views/apps/user-profile/Gallery')));
const RollbaseCASL = Loadable(lazy(() => import('../views/pages/rollbaseCASL/RollbaseCASL')));
const Treeview = Loadable(lazy(() => import('../views/pages/treeview/Treeview')));
const Pricing = Loadable(lazy(() => import('../views/pages/pricing/Pricing')));
const AccountSetting = Loadable(lazy(() => import('../views/pages/account-setting/AccountSetting')));
const Faq = Loadable(lazy(() => import('../views/pages/faq/Faq')));

const MuiAutoComplete = Loadable(lazy(() => import('../views/forms/form-elements/MuiAutoComplete')));
const MuiButton = Loadable(lazy(() => import('../views/forms/form-elements/MuiButton')));
const MuiCheckbox = Loadable(lazy(() => import('../views/forms/form-elements/MuiCheckbox')));
const MuiRadio = Loadable(lazy(() => import('../views/forms/form-elements/MuiRadio')));
const MuiSlider = Loadable(lazy(() => import('../views/forms/form-elements/MuiSlider')));
const MuiDateTime = Loadable(lazy(() => import('../views/forms/form-elements/MuiDateTime')));
const MuiSwitch = Loadable(lazy(() => import('../views/forms/form-elements/MuiSwitch')));
const FormLayouts = Loadable(lazy(() => import('../views/forms/FormLayouts')));
const FormCustom = Loadable(lazy(() => import('../views/forms/FormCustom')));
const FormWizard = Loadable(lazy(() => import('../views/forms/FormWizard')));
const FormValidation = Loadable(lazy(() => import('../views/forms/FormValidation')));
const QuillEditor = Loadable(lazy(() => import('../views/forms/quill-editor/QuillEditor')));
const FormHorizontal = Loadable(lazy(() => import('../views/forms/FormHorizontal')));
const FormVertical = Loadable(lazy(() => import('../views/forms/FormVertical')));
const BasicTable = Loadable(lazy(() => import('../views/tables/BasicTable')));
const CollapsibleTable = Loadable(lazy(() => import('../views/tables/CollapsibleTable')));
const EnhancedTable = Loadable(lazy(() => import('../views/tables/EnhancedTable')));
const FixedHeaderTable = Loadable(lazy(() => import('../views/tables/FixedHeaderTable')));
const PaginationTable = Loadable(lazy(() => import('../views/tables/PaginationTable')));
const SearchTable = Loadable(lazy(() => import('../views/tables/SearchTable')));
const LineChart = Loadable(lazy(() => import('../views/charts/LineChart')));
const GredientChart = Loadable(lazy(() => import('../views/charts/GredientChart')));
const DoughnutChart = Loadable(lazy(() => import('../views/charts/DoughnutChart')));
const AreaChart = Loadable(lazy(() => import('../views/charts/AreaChart')));
const ColumnChart = Loadable(lazy(() => import('../views/charts/ColumnChart')));
const CandlestickChart = Loadable(lazy(() => import('../views/charts/CandlestickChart')));
const RadialbarChart = Loadable(lazy(() => import('../views/charts/RadialbarChart')));
const MuiAlert = Loadable(lazy(() => import('../views/ui-components/MuiAlert')));
const MuiAccordion = Loadable(lazy(() => import('../views/ui-components/MuiAccordion')));
const MuiAvatar = Loadable(lazy(() => import('../views/ui-components/MuiAvatar')));
const MuiChip = Loadable(lazy(() => import('../views/ui-components/MuiChip')));
const MuiDialog = Loadable(lazy(() => import('../views/ui-components/MuiDialog')));
const MuiList = Loadable(lazy(() => import('../views/ui-components/MuiList')));
const MuiPopover = Loadable(lazy(() => import('../views/ui-components/MuiPopover')));
const MuiRating = Loadable(lazy(() => import('../views/ui-components/MuiRating')));
const MuiTabs = Loadable(lazy(() => import('../views/ui-components/MuiTabs')));
const MuiTooltip = Loadable(lazy(() => import('../views/ui-components/MuiTooltip')));
const MuiTransferList = Loadable(lazy(() => import('../views/ui-components/MuiTransferList')));
const MuiTypography = Loadable(lazy(() => import('../views/ui-components/MuiTypography')));
const Login = Loadable(lazy(() => import('../views/authentication/auth1/Login')));
const Login2 = Loadable(lazy(() => import('../views/authentication/auth2/Login2')));
const Register = Loadable(lazy(() => import('../views/authentication/auth1/Register')));
const Register2 = Loadable(lazy(() => import('../views/authentication/auth2/Register2')));
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/auth1/ForgotPassword')));
const ForgotPassword2 = Loadable(lazy(() => import('../views/authentication/auth2/ForgotPassword2')));
const TwoSteps = Loadable(lazy(() => import('../views/authentication/auth1/TwoSteps')));
const TwoSteps2 = Loadable(lazy(() => import('../views/authentication/auth2/TwoSteps2')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Maintenance = Loadable(lazy(() => import('../views/authentication/Maintenance')));

export const UserContext = createContext();



export default function Router() {
  const user = useSelector((store) => store.auth.me);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token)
      dispatch(getMe()).then((res) => {
        setIsLoading(false);
      });
    else {
      setIsLoading(false);
    }
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <div
          className="position-fixed h-100 w-100 bg-white justify-content-center d-flex align-items-center"
          style={{ zIndex: 6 }}
        >
          <Spinner animation="border" />
        </div>
      )}
  <BrowserRouter>
        <Routes>
          {user ? (
    
      <Route path="*" element={<App />}>
        <Route index element={<ModernDash />} />
        <Route path="shop" element={<Ecommerce />} />
{/* Client */}
        <Route path="face-reco" element={<ContratAll />}>

        <Route index element={<CameraComponent />} />
        <Route
                    path="contracts"
                    element={<Contrat/>}
                  />     
        </Route>
        
        <Route path="claims" element={<Claims />} />
        <Route path="apps/chats" element={<Chats />} />
        <Route path="dashboards/ecommerce" element={<EcommerceDash />} />
       
       
        <Route path="apps/calendar" element={<Calendar />} />
        <Route path="apps/email" element={<Email />} />
        {/* Insurance */}
        <Route path="claims-ins" element={<ClaimsIns />} />
        <Route path="client-ins" element={<ClientIns />} />
        <Route path="contrat-type" element={<Contract_Type />} />
        {/* Seller */}
        <Route path="product-list" element={<Products />} />
        <Route path="client-list" element={<ClientSell />} />
        <Route path="order-list" element={<OrderList />} />
        {/* repair */}
        <Route path="claims-rep" element={<Claimsrep />} />

        <Route path="apps/blog" element={<Blog />} />
        <Route path="apps/blog/detail/:id" element={<BlogDetail />} />
        <Route path="apps/ecommerce/eco-product-list" element={<EcomProductList />} />
        <Route path="apps/ecommerce/eco-checkout" element={<EcomProductCheckout />} />
        <Route path="apps/ecommerce/detail/:id" element={<EcommerceDetail />} />
        <Route path="apps/followers" element={<Followers />} />
        <Route path="apps/friends" element={<Friends />} />
        <Route path="apps/gallery" element={<Gallery />} />
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="pages/casl" element={<RollbaseCASL />} />
        <Route path="pages/treeview" element={<Treeview />} />
        <Route path="pages/pricing" element={<Pricing />} />
        <Route path="pages/account-settings" element={<AccountSetting />} />
        <Route path="pages/faq" element={<Faq />} />
        <Route path="forms/form-elements/autocomplete" element={<MuiAutoComplete />} />
        <Route path="forms/form-elements/button" element={<MuiButton />} />
        <Route path="forms/form-elements/checkbox" element={<MuiCheckbox />} />
        <Route path="forms/form-elements/radio" element={<MuiRadio />} />
        <Route path="forms/form-elements/slider" element={<MuiSlider />} />
        <Route path="forms/form-elements/date-time" element={<MuiDateTime />} />
        <Route path="forms/form-elements/switch" element={<MuiSwitch />} />
        <Route path="forms/quill-editor" element={<QuillEditor />} />
        <Route path="forms/form-layouts" element={<FormLayouts />} />
        <Route path="forms/form-horizontal" element={<FormHorizontal />} />
        <Route path="forms/form-vertical" element={<FormVertical />} />
        <Route path="forms/form-custom" element={<FormCustom />} />
        <Route path="forms/form-wizard" element={<FormWizard />} />
        <Route path="forms/form-validation" element={<FormValidation />} />
        <Route path="tables/basic" element={<BasicTable />} />
        <Route path="tables/collapsible" element={<CollapsibleTable />} />
        <Route path="tables/enhanced" element={<EnhancedTable />} />
        <Route path="tables/fixed-header" element={<FixedHeaderTable />} />
        <Route path="tables/pagination" element={<PaginationTable />} />
        <Route path="tables/search" element={<SearchTable />} />
        <Route path="charts/line-chart" element={<LineChart />} />
        <Route path="charts/gredient-chart" element={<GredientChart />} />
        <Route path="charts/doughnut-pie-chart" element={<DoughnutChart />} />
        <Route path="charts/area-chart" element={<AreaChart />} />
        <Route path="charts/column-chart" element={<ColumnChart />} />
        <Route path="charts/candlestick-chart" element={<CandlestickChart />} />
        <Route path="charts/radialbar-chart" element={<RadialbarChart />} />
        <Route path="ui-components/alert" element={<MuiAlert />} />
        <Route path="ui-components/accordion" element={<MuiAccordion />} />
        <Route path="ui-components/avatar" element={<MuiAvatar />} />
        <Route path="ui-components/chip" element={<MuiChip />} />
        <Route path="ui-components/dialog" element={<MuiDialog />} />
        <Route path="ui-components/list" element={<MuiList />} />
        <Route path="ui-components/popover" element={<MuiPopover />} />
        <Route path="ui-components/rating" element={<MuiRating />} />
        <Route path="ui-components/tabs" element={<MuiTabs />} />
        <Route path="ui-components/tooltip" element={<MuiTooltip />} />
        <Route path="ui-components/transfer-list" element={<MuiTransferList />} />
        <Route path="ui-components/typography" element={<MuiTypography />} />
      
      </Route>
          ):(
      <Route path="/" element={<BlankLayout />}>
        <Route index element={<Login />} />

        <Route path="auth/404" element={<Error />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="auth/forgot-password" element={<ForgotPassword />} />
        <Route path="auth/two-steps" element={<TwoSteps />} />
        <Route path="auth/two-steps2" element={<TwoSteps2 />} />
        <Route path="auth/maintenance" element={<Maintenance />} />
      </Route>
          )}

    </Routes>
  </BrowserRouter>
  </>
)};


