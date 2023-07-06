"use client"
import styled from 'styled-components';

export const PrincipalHome = () => {
    return (
        <div>
            <h1>Consulta tu VEKN ID</h1>
        </div>
    )
}

const StyledTitle = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`;