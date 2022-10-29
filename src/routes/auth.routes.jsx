import { Routes, Route } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/register" element={<SignIn />} />
    </Routes>
  )
}