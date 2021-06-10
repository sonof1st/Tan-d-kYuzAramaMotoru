import React from 'react';
import styled from 'styled-components'


const SearchResult = props => {
    // * ---------- STYLES ---------- *
    const OneResult = styled.div`
        padding: 15px;
        margin: 15px 0;
        min-width: 100%;
        background-image: linear-gradient(to top left, #39b385, #9be15d);
        color: black;
        -moz-box-shadow:    3px 3px 8px 3px #ccc;
        -webkit-box-shadow: 3px 3px 8px 3px #ccc;
        box-shadow:         3px 3px 8px 3px #ccc;
`
    const ListItem = styled.li`
        list-style: none;
        margin-bottom: 5px;
        margin-right: 2rem;
`
    const UlList = styled.ul`
      min-width: 100%;
`

// background-color: #2c2929;   margin: 15px 0;
    return (
            <OneResult>
                <UlList>
                    <ListItem><b>Ad:</b> <i>{ props.result[0] } </i></ListItem>
                    <ListItem><b>Saat:</b> <i>{ props.result[1] } </i></ListItem>
                    <ListItem><b>Tarih:</b> <i>{ props.result[2] } </i></ListItem>
                </UlList>
            </OneResult>
    );
};

export default SearchResult;