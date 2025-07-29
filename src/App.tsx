import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/layout/header';
import Solutions from './components/Solutions';
import Start from './components/Start';
import Steps from './components/Steps';
import Advantages from './components/Advantages';
import Request from './components/Request';

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
    <div className="relative w-full min-w-[1400px]">
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
      <div className="relative z-10 overflow-x-hidden w-full">
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
          data-aos="fade-right"
          className='w-screen my-20'
          src='/assets/divider.svg'
          alt=''
        />
        <Advantages />
        <div className="w-screen relative">
          <img
            alt=''
            className='absolute top-0 left-40'
            src='/assets/request/arrows.svg'
          />
          <Request />
          <img
            alt=''
            className='absolute top-20 right-0'
            src='/assets/request/Line3.svg'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
