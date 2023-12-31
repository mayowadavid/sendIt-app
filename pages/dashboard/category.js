import React, { useContext, useEffect, useState, lazy, Suspense } from 'react'
import AdminLayout from '../../components/admin/adminLayout'
import { MainContext } from '../../components/context/mainContext';
import Loading from '../../components/general/loading';

const CategoryEdit = lazy(() => import('../../components/admin/category-edit'));
const CategoryButton = lazy(() => import('../../components/admin/category-button'));
const AdminCategory = () => {

    const [displaySwitch, setSwitch] = useState({});

    const {router} = useContext(MainContext);

    useEffect(()=>{
        const {view} = router.query;
        
        view && setSwitch({create: true, display: false});
        !view && setSwitch({create: false, display: true});
    }, [router.isReady]);

    const handleSwitch = () => {
        let {display, create} = displaySwitch;
        setSwitch({
            display: !display,
            create: !create
        });

        create && router.push({
            pathname: 'category',
            query: {}
        });

        display && router.push({
            pathname: 'category',
            query: {view: 'create'}
        })
    }

  return (
    <AdminLayout>
        <Suspense fallback={<Loading />}>
            { displaySwitch.display && <CategoryButton
            displaySwitch={displaySwitch}
            setSwitch={setSwitch}
             handleSwitch={handleSwitch} /> }
            { displaySwitch.create && <CategoryEdit handleSwitch={handleSwitch} /> }
        </Suspense>
    </AdminLayout>
  )
}

export default AdminCategory