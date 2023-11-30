import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <footer className='bg-primary text-white'>
      <div className='flex flex-col items-center m-5 fa-2xl scale-125 '>
        <div className='space-x-8'>
          <a
            href='https://discord.com/users/479335016879620096'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-discord'></i>
          </a>
          <a
            href='https://linkedin.com/in/mishkatmustafid'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a
            href='https://github.com/mishkatmustafid'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github'></i>
          </a>
          <a href='mailto:mishkatmustafid@gmail.com'>
            <i className='far fa-envelope fa-solid'></i>
          </a>
          <a
            href='https://twitter.com/MishkatMustafid'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter'></i>
          </a>
          <a
            href='https://t.me/MishkatMustafid'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-telegram'></i>
          </a>
          <a
            href='https://wa.me/01763804011' // Replace 1234567890 with the actual phone number
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-whatsapp'></i>
          </a>
        </div>
      </div>
      <div class='bg-neutral-950 p-1 text-center text-[15px]'>
        <span>© 2023 Copyright: </span>
        <a
          class='font-semibold text-neutral-600 text-neutral-400'
          href='https://tw-elements.com/'
        >
          Mishkat Mustafid
        </a>
      </div>
    </footer>
  );
};

export default Footer;
