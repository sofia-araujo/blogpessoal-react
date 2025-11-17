import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {

  const data = new Date().getFullYear();


  return (
    <div className='flex justify-center bg-1 text-slate-900 py-4 '>
      <div className='container flex flex-col items-center py-4'>
        <p className='text-lg font-bold'>
          Blog pessoal Generation | Copyright: {data}</p>
        <p className='text-lg'>Acesse nossas redes sociais</p>
        <div className='flex gap-2'>
          <a href="https://www.linkedin.com/in/sofia-araujo-gomes/" target='_blank'>
          <LinkedinLogoIcon size={48} weight='bold' className='hover:text-blue-800 cursor-pointer'/>
          </a>
          <a href="https://www.instagram.com/sofiaaraujodev/" target='_blank'>
          <InstagramLogoIcon size={48} weight='bold' className='hover:text-blue-800 cursor-pointer'/>
          </a>
          <a href="https://github.com/sofia-araujo" target='_blank'>
          <GithubLogoIcon size={48} weight='bold' className='hover:text-blue-800 cursor-pointer'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer