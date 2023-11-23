//Librerias y funcionalidades
import { Layout } from 'antd';
import { HashRouter, Switch, Route } from 'react-router-dom';

//Paginas
import Home from './pages/home';
import Error404 from './pages/error404';
import Movie from './pages/movie/';
import NewMovies from './pages/new-movies';
import Search from './pages/search/';
import Popular from './pages/popular';

//Componentes
import MenuTop from './components/MenuTop';

const App = () => {
  const {Header, Content} = Layout;
  return (
    <Layout>
      <HashRouter basename="/">
        <Header style={{zIndex: 1}}>
          <MenuTop />
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/new-movies" exact={true} component={NewMovies} />
            <Route path="/popular" exact={true} component={Popular} />
            <Route path="/search" exact={true} component={Search} />
            <Route path="/movie/:id" exact={true} component={Movie} />
            <Route path="*" component={Error404} />
          </Switch>
        </Content>    
      </HashRouter>
    </Layout>    
  );
}

export default App;
