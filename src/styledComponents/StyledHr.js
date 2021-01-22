import styled from 'styled-components';

const Hr = ({...props}) => (<hr {...props} />)

const StyledHr = styled(Hr)`
    height: 2px;
    background-color:white;
    width: 100%;
`

export default StyledHr;