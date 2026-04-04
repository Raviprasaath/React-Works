import React from 'react'

const Setup = () => {
    return (
        <>
            <div>
                First In Offical site install the below command
            </div>
            <div>
                npm install @mui/material @emotion/react @emotion/styled
            </div>
            <br />
            <br />
            <div>
                Material UI always follow the Roboto Font so install this
                <p>
                    Take the Roboto font and place it in the index.html file below meta tag
                </p>
                <p>
                    Then install icons - npm install @mui/icons-material
                </p>
                <p>
                    then in index.css file add the below command
                </p>
                <div>
                    <p>inside * block</p>
                    font-family: 'Roboto';
                    margin: 0;
                </div>
                Setup over
                <p>
                    Always import from direct path don't import inside block
                </p>
            </div>
            <br />
            <br />
            <br />
            <div>In Material UI page we have Default theme - we can check the what are colors and its code they have</div>

        </>
    )
}

export default Setup