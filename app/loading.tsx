import loader from '@/public/image/loader.gif'
import Image from 'next/image';

const Loading = () => {
    return ( 
        <div style={{
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw'
        }}>
            <Image
                src={'/public/image/loader.gif'}
                alt='Loading Animation'
                height={68}
                width={68}
                unoptimized={true}            
            />
        </div>
     );
}
 
export default Loading;