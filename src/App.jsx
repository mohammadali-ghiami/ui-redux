import MainLayout from './layout/MainLayout'
import { useTheme } from '@mui/material'
import IconBrand from './components/Content/Home/IconBrand'
import HeaderContent from './components/Content/Home/HeaderContent'
import FooterContent from './components/Content/Home/FooterContent'


const App = () => {
  const theme = useTheme();
  return (
    <MainLayout>
      <HeaderContent />

      <IconBrand />

      <FooterContent />
    </MainLayout>
  )
}

export default App
