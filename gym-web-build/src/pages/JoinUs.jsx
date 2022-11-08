import React ,{useRef} from 'react'
import emailjs from '@emailjs/browser'
const JoinUs = () => {
    const form =useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_h7s3vt9', 'template_nvd0hvo', form.current, 'XFYIz8R5qmvadbYAz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='flex px-0 py-8 gap-[10rem]'>
        <div className='text-white text-[3rem] font-bold uppercase relative left-32'>
            <div className='flex gap-4'>
                <span  className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div className='flex gap-4'>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className='flex justify-center items-end relative left-64'>
            <form ref={form} className='flex gap-[3rem] bg-gray-700 px-4 py-8' onSubmit={sendEmail}>
                <input type='email' name='user_email' placeholder='Enter your Email address here' className='bg-transparent border-none outline-none bg-[#D9D9D9] text-black'/>
                <input type='submit' className='bg-[#ffa739] p-2 rounded-[5px] cursor-pointer' value='Send'/>
            </form>
        </div>
    </div>
  )
}

export default JoinUs