import {getProviders,signIn,singIn} from 'next-auth/react'
import Image from 'next/image';

const login = ({providers}) => {
  return (
    <div className='flex flex-col items-center justify-center bg-black w-full min-h-screen '>
        <Image className='w-52 mb-5' src='/images/spotify.png' width={200} height={200} alt='spotify  '/>
        {Object.values(providers).map((provider)=>(
            <div key={provider.name}>
                <button className='bg-[#18D869] text-white p-5 rounded-lg'
                onClick={()=>signIn(provider.id,{callbackUrl : "/"})}
                >Login with {provider.name}</button>
            </div>
        ))}
    </div>
  )
}

export async function getServerSideProps(){
    const providers = await getProviders();
    
    return {
        props : {
            providers
        },
    };
}


export default login