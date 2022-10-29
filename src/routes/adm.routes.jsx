import { Routes, Route } from 'react-router-dom'
import { EditDesserts } from '../pages/EditDesserts'
import { EditDish } from '../pages/EditDish'
import { EditDrinks } from '../pages/EditDrinks'
import { RequestsAdm } from '../pages/RequestsAdm'
import { HomeAdm } from '../pages/HomeAdm'
import { Details } from '../pages/Details'

export function AdmRoutes() {
  return (
    <Routes>
      <Route path="/editdesserts" element={<EditDesserts />} />
      <Route path="/editdish" element={<EditDish />} />
      <Route path="/editdrinks" element={<EditDrinks />} />
      <Route path="/requestsadm" element={<RequestsAdm />} />
      <Route path="/" element={<HomeAdm />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}