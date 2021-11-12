import { Layout as LayoutWrapper } from 'antd';
import React from 'react';
import { NavigationMenu } from './Menu';
import './style.css';


const { Header, Content, Footer } = LayoutWrapper;

interface IProps {
    children: React.ReactNode;
}


export const Layout = ({ children }: IProps) => {
    return (
        <LayoutWrapper
            style={{ minHeight: '100vh' }}
        >
            <NavigationMenu />
            <LayoutWrapper
                className="site-layout"
            >
                <Header
                    className="site-layout-background"
                    style={{ padding: 0 }}
                />
                <Content
                    style={{ margin: '0 16px' }}
                >
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, minHeight: 360 }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{ textAlign: 'center' }}
                >Qualite of service {new Date().getFullYear()}©</Footer>
            </LayoutWrapper>
        </LayoutWrapper>
    );
}