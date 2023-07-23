import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";
import Account from "./pages/account/Account";
import Settings from "./pages/settings/Settings";
import Chat from "./pages/chat/Chat";
import Faq from "./pages/faq/Faq";


import StockData from "./components/stockData/StockData";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/stock-dashboard-application">
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/account" element={<Account />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/chats" element={<Chat />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/stockData" element={<StockData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
