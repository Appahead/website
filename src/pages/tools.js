import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Main = styled.p`
  color: ${({ theme }) => theme.dark};
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 4.0rem;
  margin: 40px 0 48px 0;
`

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Main>Bald.</Main>
    </Wrapper>
  </Layout>
)

export default IndexPage
