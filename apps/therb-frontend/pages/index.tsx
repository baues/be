import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const IndexView = dynamic(() => import('../views/IndexView'), { ssr: false });

export default function Index() {

  const router = useRouter();

  useEffect(()=>{
    router.replace('/result');
    // router.replace('/projects');
  },[]);
  return (
    <>
      <div>redirecting</div>
      {/* <Layout>
        <IndexView />
      </Layout> */}
    </>
    );
}
