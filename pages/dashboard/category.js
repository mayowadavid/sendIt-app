import React, { useState } from 'react'
import AdminLayout from '../../components/admin/adminLayout'
import CategoryButton from '../../components/admin/category-button';
import CategoryEdit from '../../components/admin/category-edit';

const AdminCategory = () => {

    const [displaySwitch, setSwitch] = useState({
        display: true,
        create: false
    });

    const handleSwitch = () => {
        let {display, create} = displaySwitch;
        setSwitch({
            display: !display,
            create: !create
        });
    }

  return (
    <AdminLayout>
        { displaySwitch.display && <CategoryButton handleSwitch={handleSwitch} /> }
        { displaySwitch.create && <CategoryEdit handleSwitch={handleSwitch} /> }
    </AdminLayout>
  )
}

export default AdminCategory