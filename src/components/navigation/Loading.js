import React  from 'react'
import styled from 'styled-components'

import spinner from '../../assets/spinner.svg'

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10rem 0;
`
const Spinner = styled.img`
    height: 50px;
    width: 50px;

    animation-name: spin;
    animation-duration: 1.25s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
        0%   {
            transform: rotate(0deg);
        }
        100%   {
            transform: rotate(360deg);
        }
    }
`

const Loading = () => (
    <SpinnerContainer>
        <Spinner src={spinner}></Spinner>
    </SpinnerContainer>
)
export default Loading