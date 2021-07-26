import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
      <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink to="about" onClick={toggle}>
                About
              </SidebarLink>
              <SidebarLink to="discover" onClick={toggle}>
                Application
              </SidebarLink>
              <SidebarLink to="services" onClick={toggle}>
                Your Benefits
              </SidebarLink>
              <SidebarLink to="signup" onClick={toggle}>
                Contact
              </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
              <SidebarRoute to="/signin" onClick={toggle}>
                Sign In
              </SidebarRoute>
            </SideBtnWrap>
          </SidebarWrapper>
        </SidebarContainer>
      </>
    );
}

export default Sidebar
