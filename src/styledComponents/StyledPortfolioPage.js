import styled from 'styled-components';

const PortfolioPage = ({className, children}) => (
    <div className={`${className} d-flex flex-column`}>
        {children}
    </div>
)

const StyledPortfolioPage = styled(PortfolioPage)`
    height: 100%;
    background: rgb(74,74,74);
    background: radial-gradient(circle, rgb(71, 71, 71) 20%, rgba(38,38,38,1) 60%, rgb(15, 15, 15) 100%);
`

export default StyledPortfolioPage;