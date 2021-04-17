import { useState } from 'react';

import { Content } from './components/Content';

import { SideBar } from './components/SideBar';

import './styles/global.scss';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      <Content />
    </div>
  )
}