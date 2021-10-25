import React from 'react';
import Layouts from '../components/Layouts';
import Samdock from '../components/Samdock';

const TempForm = () => {
    return (
        <Layouts path={"/temp-form"} title={"Temp Form"} description={""}>
            <Samdock />
        </Layouts>
    )
}

export default TempForm
