import {getProviders} from "next-auth/react";


export default function LoginPage({providers}){
    return(
        <div className="flex items-center justify-center h-screen">
            {providers && Object.values(providers).map(provider => (
                <div>
                    
                    <button className="bg-white pl-3 pr-5 py-2 text-black gap-2 rounded-full flex items-center">
                    <img src="/google.png" className="h-8 pr-3"/>Sign in with {provider.name}</button>
                    
                </div>
                
            ))}
           
        </div>
    )
}


export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props: {providers},
    }
}