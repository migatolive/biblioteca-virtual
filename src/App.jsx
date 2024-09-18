import Header from './components/Header';
import Footer from './components/Footer';
import BookDataForm from './components/BookDataForm';

function App() {
  return (
      <>
        <div>
          <Header/>
          <main id="content">
            <BookDataForm/>
          </main>
          <Footer/>
        </div>
      </>
  )
}

export default App;
