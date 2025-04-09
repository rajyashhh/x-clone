import {getProviders} from "next-auth/react";


export default function LoginPage({providers}){
    return(
        <div className="flex items-center justify-center h-screen">
            {providers && Object.values(providers).map(provider => (
                <div>
                    <button>Sign in with {provider.name}</button>
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