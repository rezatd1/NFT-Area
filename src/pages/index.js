


import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import HelpCenter from "./HelpCenter";
import Home01 from "./Home01";
import Nfts from "./Nfts";
import Team from "./Team";

const routes = [
  { path: '/', component: <Home01 /> },

  { path: '/nfts', component: <Nfts /> },
  { path: '/blog', component: <Blog /> },
  { path: '/help-center', component: <HelpCenter /> },
  { path: '/about', component: <About /> },
  { path: '/team', component: <Team /> },
  { path: '/contact', component: <Contact /> },
]

export default routes;