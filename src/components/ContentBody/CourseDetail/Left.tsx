import React from 'react'
import {
  LeftBlock,
  NavTab,
  NavTabItem,
  NavTabLink,
  TabContentBox
} from "./styles"
import { TabContent, TabPane, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Left:React.FC = (props) => {
  const [activeTab, setActiveTab] = React.useState('1');

    return (
    
       <LeftBlock >
        <NavTab tabs>
        <NavTabItem  >
          <NavTabLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => activeTab !== '1' ? setActiveTab('1') : null}
            activeClassName="linkActive"
          >
            รายละเอียด
          </NavTabLink>
        </NavTabItem>
        <NavTabItem>
          <NavTabLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => activeTab !== '2' ? setActiveTab('2') : null}
            activeClassName="linkActive"
          >
            วิธีการชำระเงิน
          </NavTabLink>
        </NavTabItem>
        <NavTabItem>
          <NavTabLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => activeTab !== '3' ? setActiveTab('3') : null}
            activeClassName="linkActive"
          >
          ห้องสนทนา
          </NavTabLink>
        </NavTabItem>
        <NavTabItem>
          <NavTabLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => activeTab !== '4' ? setActiveTab('4') : null}
            activeClassName="linkActive"
          >
          รีวิว
          </NavTabLink>
        </NavTabItem>
      </NavTab>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <TabContentBox>Tab 1 Contents</TabContentBox>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            <Col sm="12">
              <TabContentBox>Tab 2 Contents</TabContentBox>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <TabContentBox>Tab 3 Contents</TabContentBox>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <TabContentBox>Tab 4 Contents</TabContentBox>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
       </LeftBlock>
    )
}

export default Left;
