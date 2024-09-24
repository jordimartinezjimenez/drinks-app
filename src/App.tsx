import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import Spinner from "./components/Spinner/Spinner"
const IndexPage = lazy(() => import("./pages/IndexPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"))
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={
            <Suspense fallback={<Spinner />}>
              <IndexPage />
            </Suspense>
          } index />
          <Route path="*" element={
            <Suspense fallback={<Spinner />}>
              <NotFoundPage />
            </Suspense>
          } />
          <Route path="/favorites" element={
            <Suspense fallback={<Spinner />}>
              <FavoritesPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
