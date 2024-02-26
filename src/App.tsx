import { Homepage } from './pages/Homepage';
import { PageOne } from './pages/PageOne';

function App() {
  if (location.pathname === '/')
    return <Homepage returnHome={() => (location.href = '/1')} />;

  if (location.pathname === '/1')
    return <PageOne returnHome={() => (location.href = '/')} />;

  return '404';
}

export default App;
