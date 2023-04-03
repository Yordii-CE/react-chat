import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginView from './Views/LoginView'
import MessengerView from './Views/MessengerView'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginView />}></Route>
        <Route path="/login" element={<LoginView />}></Route>
        <Route path="/messenger" element={<MessengerView />}></Route>
        {/*  <Route path="/main" element={<MainView />}>
            <Route index element={<DashboardView />}></Route>
            <Route path="dash" element={<DashboardView />}></Route>
            <Route path="store" element={<StoreView />}>
              <Route index element={<StoreSales />}></Route>
              <Route path="sales" element={<StoreSales />}></Route>
              <Route path="quotes" element={<StoreQuotes />}></Route>
              <Route path="repayments" element={<StoreRepayments />}></Route>
            </Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
