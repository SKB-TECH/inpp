
import React from 'react'
import { DetailOeuvreSection1 } from '../../components/pages/detail'
import { useRouter } from 'next/router' 

function Detail() {
    const router = useRouter();

    const id = router.query.id; 
  return (
    <React.Fragment>
        <DetailOeuvreSection1 params={id}/>
    </React.Fragment>
  )
}

export default Detail