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
                src='/image/Loading.gif'
                alt='Loading Animation'
                height={300}
                width={300}
                unoptimized={true}
                priority           
            />
        </div>
     );
}
 
export default Loading;