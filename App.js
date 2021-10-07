// import {} from "react-router-native";
import { Button, Provider, Menu } from 'react-native-paper';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import View1 from './components/View1'
import View2 from './components/View2'
import View3 from './components/View3'
import View4 from './components/View4'
import View5 from './components/View5'

export default function App() {
  const [visible, setVisible] = useState(false);
  const [indexView, setIndexView] = useState(2)
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View
          style={{ top: 60,zIndex: 1 }}
        >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Menu</Button>}>
          <Menu.Item onPress={() => { setIndexView(1) }} title="Ir a la vista 1" />
          <Menu.Item onPress={() => { setIndexView(2) }} title="Ir a la vista 2" />
          <Menu.Item onPress={() => { setIndexView(3) }} title="Ir a la vista 3" />
          <Menu.Item onPress={() => { setIndexView(4) }} title="Ir a la vista 4" />
          <Menu.Item onPress={() => { setIndexView(5) }} title="Ir a la vista 5" />
        </Menu>
        </View>
      {indexView === 1 && <View1 />}
      {indexView === 2 && <View2 />}
      {indexView === 3 && <View3 />}
      {indexView === 4 && <View4 />}
      {indexView === 5 && <View5 />}
      </View>

    </Provider>
  );
}