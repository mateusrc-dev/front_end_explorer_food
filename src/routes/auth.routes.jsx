import { Routes, Route } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

import { SignUpAdm } from '../pages/SignUpAdm'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/register" element={<SignIn />} />
      <Route path="/adm" element={<SignUpAdm />} />
    </Routes>
  )
}