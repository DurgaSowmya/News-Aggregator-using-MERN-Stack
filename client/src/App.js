import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"

import { Regsiter } from "./pages/login/Regsiter"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"

import Tech from "./pages/News/Tech"
import Stocks from "./pages/News/Stocks"
import Cyber from "./pages/News/Cyber"
import Sports from "./pages/News/Sports"
import Politics from "./pages/News/Politics"

import Login from "./pages/login/Login"
import SignUp from "./pages/login/SignUp"

import EmailRestAPI from "./pages/contact/EmailRestAPI"
import { About } from "./pages/about/About"
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/sign-up' component={SignUp}/>
          <Route exact path='/sign-in' component={Login}/>
          <Route exact path='/register' component={Regsiter} />
          <Route exact path='/details/:id' component={DetailsPages} />
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={EmailRestAPI}/>
          <Route exact path='/account' component={Account} />
          <Route exact path='/create' component={Create} />
          <Route exact path='/Stock' component={Stocks} />
          <Route exact path='/Tech' component={Tech} />
          <Route exact path='/Cyber' component={Cyber} />
          <Route exact path='/Sports' component={Sports} />
          <Route exact path='/Politics' component={Politics} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default App
