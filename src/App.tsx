import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle, { Device } from "globalStyle";
import People from "sections/People";
import Articles from "sections/Articles";

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #1a1a1a;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 80rem;
    border-radius: 4px;
    overflow: hidden;
    background: #000;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 1);
    display: grid;
    grid-template-columns: 1fr;

    @media ${Device.laptop} {
        grid-template-columns: 20rem 1fr;
    }
`;

function App() {
    const [current, setCurrent] = useState<Data>({
        created: "",
        edited: "",
        url: "",
    });

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Main>
                <Content>
                    <People setCurrent={setCurrent} />
                    <Articles current={current} setCurrent={setCurrent} />
                </Content>
            </Main>
        </BrowserRouter>
    );
}

export default App;
