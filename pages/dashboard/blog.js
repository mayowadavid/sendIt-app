import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
import AdminLayout from "../../components/admin/adminLayout";
import { MainContext } from "../../components/context/mainContext";
import Loading from "../../components/general/loading";

const AdminBlogEdit = lazy(() =>
  import("../../components/admin/admin-blog-edit")
);
const AdminBlog = lazy(() => import("../../components/admin/admin-blog"));

const BlogsLayout = () => {
  const [displaySwitch, setSwitch] = useState({});
  const { router } = useContext(MainContext);

  useEffect(() => {
    const { view, update } = router.query;
    view && setSwitch({ create: true, display: false });
    !view && setSwitch({ create: false, display: true });
  }, [router.isReady]);

  const handleSwitch = () => {
    let { display, create } = displaySwitch;
    setSwitch({
      display: !display,
      create: !create,
    });

    create &&
      router.push({
        pathname: "blog",
        query: {},
      });

    display &&
      router.push({
        pathname: "blog",
        query: { view: "create" },
      });
  };
  return (
    <AdminLayout>
      <Suspense fallback={<Loading />}>
        {displaySwitch?.display && (
          <AdminBlog
            setSwitch={setSwitch}
            displaySwitch={displaySwitch}
            handleSwitch={handleSwitch}
          />
        )}
        {displaySwitch?.create && (
          <AdminBlogEdit handleSwitch={handleSwitch} />
        )}
      </Suspense>
    </AdminLayout>
  );
};

export default BlogsLayout;
