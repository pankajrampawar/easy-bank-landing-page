import React from 'react';
import logo from './images/logo.svg';
import menuIcon from './images/icon-hamburger.svg';
import closeMenu from './images/icon-close.svg';
import intro from './images/bg-intro-mobile.svg';
import introDesk from './images/bg-intro-desktop.svg';
import mobiles from './images/image-mockups.png';
import onlineBanking from './images/icon-online.svg';
import simple from './images/icon-budgeting.svg';
import fast from './images/icon-onboarding.svg';
import open from './images/icon-api.svg';
import money from './images/image-currency.jpg';
import restro from './images/image-restaurant.jpg';
import plane from './images/image-plane.jpg';
import confetti from './images/image-confetti.jpg';
import facebook from './images/icon-facebook.svg';
import youtube from './images/icon-youtube.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
import instagram from './images/icon-instagram.svg';

function App() {

  // darwer state
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // Drawer Toggle function
  const handleDrawerToggle = ()=>{
    setIsDrawerOpen(prev => !prev);

    document.body.style.overflow = isDrawerOpen ? 'visible' : 'hidden';
  }

  //Drawer component
  const Drawer = ()=>{
    return (
      <div className='flex justify-center'>
         <div className='absolute h-screen w-screen bg-slate-600 opacity-40'>
      </div>
      <div className='w-4/5 bg-white absolute mt-7 flex flex-col items-center text-2xl sansM text-DB gap-3 p-6 shadow-2xl rounded-lg'>
      <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>Blog</span>
        <span>Careers</span>
        </div>
      </div>
    )
  }

  return (
    <div>

      {/* NAVIGATION BAR */}

      <nav className='flex justify-between p-6 items-center sm:px-3 md:px-12 lg:px-20 sm:z-10'>
        {/* logo */}
        <div ><img src={logo} alt='easybank logo'/></div>
        {/* menu icon */}
        <div className='sm:hidden'>
         {!isDrawerOpen && <img src={menuIcon} alt='menu icon' onClick={handleDrawerToggle}/>}
         {isDrawerOpen && <img src={closeMenu} alt='close' onClick={handleDrawerToggle}/>}
        </div>
        {/* nav desktop content*/}
        <div className='hidden sm:flex gap-4 sansM text-GB'>
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <span>Blog</span>
          <span>Careers</span>
        </div>
        <div className='hidden sm:block'>
        <button className='bg-gradient-to-r from-LG to-BC p-3 px-6 sansM tracking-wider rounded-3xl text-white'>Request Invite</button>
        </div>
      </nav>

      {/* Drawer */}
      {isDrawerOpen && <div className='relative z-10'>
          <Drawer></Drawer>
      </div>}

      {/* Intro */}  

      <div className='sm:flex sm:z-0 items-center bg-VLG overflow-hidden sm:gap-24 sm:justify-center lg:px-24'>
        {/*background image*/}
        <div className='relative overflow-hidden sm:order-2 sm:-mr-64 sm:mb-auto'> 
          <img src={intro} alt='mobile illustration' className='w-full height-auto sm:hidden'/> 
          <img src={introDesk} alt='background' className='w-full height-auto hidden sm:block' />
          <img src={mobiles} alt='mobiles' className='absolute -top-32 ' />
        </div>
        {/* Intro text */}
        <div className='flex flex-col items-center gap-6 sm:order-1 sm:border-box '>
          <h1 className='text-[44px] leading-tight text-center sansS px-4 text-DB'>Next generation digital banking</h1>
          <p className='text-lg text-center text-GB px-4'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
          <button className='bg-gradient-to-r from-LG to-BC p-3 px-6 sansM tracking-wider rounded-3xl text-white'>Request Invite</button>
        </div>
      </div>

      {/* DETAILS */}

      <div className='flex flex-col gap-12 bg-LGB mt-24 p-6 py-16 sm:mt-0 sm:items-start sm:p-12 sm:gap-20 lg:p-36'>
        {/*heading*/}
        <div className='flex flex-col gap-4'> 
          <h1 className='text-4xl text-DB sansS text-center sm:text-left'>Why choose Easybank?</h1>
          <p className='text-center sansM text-md text-GB sm:text-left'>We leverage Open Banking to turn your banking account to financial hub. <br className='hidden sm:block' /> Control your finances like never before.</p>
        </div>
        {/* Cards */}
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='flex flex-col items-center gap-4 sm:items-start'>
            <div><img src={onlineBanking} alt='Credit cards'/></div>
            <span className='text-2xl sansS text-DB'>Online banking</span>
            <p className='text-lg text-center text-GB sm:text-left'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
          </div>

          <div className='flex flex-col items-center gap-4 mt-10 sm:mt-0 sm:items-start'>
            <div><img src={simple} alt='budgeting' /></div>
            <span className='text-2xl sansS text-DB'>Simple Budgeting</span>
            <p className='text-lg text-center text-GB sm:text-left'>See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.</p>
          </div>

          <div className='flex flex-col items-center gap-4 mt-10 sm:mt-0 sm:items-start'>
            <div><img src={fast} alt='illustration'/></div>
            <span className='text-2xl sansS text-DB'>Fast Onboarding</span>
            <p className='text-lg text-center text-GB sm:text-left'>We don't do Branches. Open your account in minutes online and start taking control of your finances right away.</p>
          </div>

          <div className='flex flex-col items-center gap-4 mt-10 sm:mt-0 sm:items-start'>
            <div><img src={open} alt='chip' /></div>
            <span className='text-2xl sansS text-DB'>Open API</span>
            <p className='text-lg text-center text-GB sm:text-left'>Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier.</p>
          </div>
        </div>
      </div>

        {/*LATEST ARTICLES */}

        <div className='py-24 flex flex-col gap-6 items-center p-5 bg-VLG sm:items-start sm:gap-12 sm:px-24'>
          {/* Heading */}
          <h1 className='text-4xl text-DB sansS'>Latest Articles</h1>
          {/* Articles */}
          <div className='flex flex-col gap-10 md:flex-row'>

            <div className='bg-white'>
              <div className='h-1/2 sm:h-auto'><img src={money} alt='money' /></div>
              <div className='h-1/2 p-5 flex flex-col gap-1'>
                <span className='text-sm text-GB'>By Claire Ronbinson</span>
                <h2 className='text-xl text-DB sansS leading-tight'>Receive money in any currency with no fees</h2>
                <p className='text-md sansS text-GB'>The world is getting smaller and we are getting more mobile. So why would you be forced to only receive money in a single...</p>
              </div>
            </div>

            <div className='bg-white' >
              <div className='h-1/2 sm:h-auto '><img src={restro} alt='restaurant'/></div>
              <div className='h-1/2 p-5 flex flex-col gap-1'>
                <span className='text-sm text-GB'>By Wilson Hutton</span>
                <h2 className='text-xl text-DB sansS leading-tight'>Treat yourself without worrying about money</h2>
                <p className='text-md sansS text-GB'>our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...</p>
              </div>
            </div>

            <div className='bg-white'>
              <div className='h-1/2 sm:h-auto'><img src={plane} alt='aeroplane'/></div>
              <div className='h-1/2 p-5 flex flex-col gap-1'>
                <span className='text-sm text-GB sansM'>By Wilson Hutton</span>
                <h2 className='text-xl text-DB snasS leading-tight'>Take your easybank card wherever you go</h2>
                <p className='text-md sansS text-GB'>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you are abroad. We'll even show you...</p>
              </div>
            </div>
          
            <div className='bg-white'>
              <div className='h-1/2 sm:h-auto'><img src={confetti} alt='confetti' /></div>
              <div className='h-1/2 p-5 flex flex-col gap-1'>
                <span className='text-sm text-GB sansM'>by Clarie Ronbinson</span>
                <h2 className='text-xl text-DB snasS leading-tight'>Our invite-only Beta accounts are now live</h2>
                <p className='text-md sansS text-GB'>After a lot of hard work by whole team, we're excited to launch our closed beta. It's  easy to request an inviting through the site...</p>
              </div>
            </div>
          </div>
        </div>

        {/* FOTTER */}
        
        <div className='bg-DB py-12 md:flex justify-between md:px-24 md:items-center'>
          <div className='md:flex md:gap-12 lg:gap-32 items-center'>
            {/* logo */}
            <div className='flex flex-col items-center gap-7 md:items-start'>
              <div><img src={logo} alt='easyband logo' className='invert h-7 grayscale brightness-100'/></div>
              <div className='flex gap-4'>
                <img src={facebook} alt='facebook icon' />
                <img src={youtube} alt='youtube icon'/>
                <img src={twitter} alt="twitter icon"/>
                <img src={pinterest} alt="pinterest icon"/>
                <img src={instagram} alt="instagram icon"/>
              </div>
            </div>
            {/* about us */}
            <div className='flex flex-col items-center text-LGB sansM gap-2 mt-7 md:mt-0 md:items-start'>
              <span>About Us</span>
              <span>Contact</span>
              <span>Blog</span>
            </div>
            {/* Careers */}
            <div className='flex flex-col items-center text-LGB sansM gap-2 mt-3 md:mt-0 md:items-start'>
              <span>Careers</span>
              <span>Support</span>
              <span>Privacy Policy</span>
            </div>
          </div>

          <div className='flex flex-col items-center mt-8 gap-4 md:items-end md:mt-0'>
            <button className='bg-gradient-to-r from-LG to-BC p-3 px-6 sansM tracking-wider rounded-3xl text-white'>Request Invite</button>
            <span className='sansM text-GB'>© Easybank. All Rights Reserved</span>
          </div>
        </div>
      
    </div>
  );
}

export default App;
