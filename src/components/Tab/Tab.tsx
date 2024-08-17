import React from 'react'
import {TabContainer, TabListContainer} from './Tab.styled'
function Tab() {
  return (
    <TabContainer>
        <div id='tab-title'>OFIZZ</div>
        <TabListContainer>
            <div id='tab-list'>홈</div>
            <div id='tab-list'>큐레이션</div>
            <div id='tab-list'>회고</div>
            <div id='tab-list'>마이</div>
        </TabListContainer>
    </TabContainer>
  )
}

export default Tab
