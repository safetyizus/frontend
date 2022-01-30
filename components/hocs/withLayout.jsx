import Layout from "components/wrappers/Layout";
import React from "react";

const withLayout = (Component) => {
    const WrappedComponent = (props) => {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };

    return WrappedComponent;
};

export default withLayout;
