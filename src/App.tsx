import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/layout/header';
import Solutions from './components/Solutions';
import Start from './components/Start';
import Steps from './components/Steps';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
  }, []);

  return (
    <div className="relative w-full">
      {/* Green blur background */}
      <div
        className="absolute inset-0 z-0 h-screen"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/green-blur.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <section id="start">
          <Start />
        </section>
        <section id="solutions">
          <Solutions />
        </section>
        <section id="steps">
          <Steps />
        </section>
        <img
          data-aos="fade-up"
          className='w-screen my-20'
          src='/assets/divider.svg'
        />
      </div>
    </div>
  );
}

export default App;
