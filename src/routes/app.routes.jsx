import { Routes, Route } from 'react-router-dom'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { MyFavorites } from '../pages/MyFavorites'
import { MyRequest } from '../pages/MyRequest'
import { Requests } from '../pages/Requests'

export function AppRoutes() {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/details/:id" element={<Details/>}/>
    <Route path="/myfavorites" element={<MyFavorites/>}/>
    <Route path="/myrequest" element={<MyRequest/>}/>
    <Route path="/requests" element={<Requests/>}/>
  </Routes>
  )
}